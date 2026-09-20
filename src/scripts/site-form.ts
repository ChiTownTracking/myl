// Shared behaviour for the site's static forms (contact, volunteer sign-up).
//
// A form opts in with [data-site-form]. Validation is driven by the fields'
// own HTML attributes, so each page only describes its fields in markup:
//
//   required            -> must not be empty
//   type="email"        -> must look like an address
//   minlength="10"      -> must reach that length
//   data-error-message  -> the wording shown when that field fails
//
// Submission posts JSON to data-endpoint. While that is empty the form falls
// back to opening the visitor's mail client with the answers filled in, so the
// page still works on a static host with no form provider configured.

type FormField = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checkField(field: FormField): string | null {
  const value = field.value.trim();
  const custom = field.dataset.errorMessage;

  if (field.required && !value) {
    return custom ?? "Please fill in this field.";
  }

  if (!value) return null;

  if (field instanceof HTMLInputElement && field.type === "email" && !EMAIL.test(value)) {
    return custom ?? "Please enter a valid email address.";
  }

  const min = Number(field.getAttribute("minlength") ?? 0);
  if (min > 0 && value.length < min) {
    return custom ?? `Please use at least ${min} characters.`;
  }

  return null;
}

function setUp(form: HTMLFormElement) {
  const status = form.querySelector<HTMLElement>("[data-form-status]");
  const submit = form.querySelector<HTMLButtonElement>("button[type='submit']");
  const endpoint = form.dataset.endpoint?.trim() ?? "";
  const fallbackEmail = form.dataset.fallbackEmail ?? "";
  const subject = form.dataset.subject ?? "Website enquiry";

  // Every field that has somewhere to show an error is validated.
  const slots = [...form.querySelectorAll<HTMLElement>("[data-error-for]")];
  const validated = slots
    .map((slot) => {
      const name = slot.dataset.errorFor ?? "";
      const field = form.querySelector<FormField>(`[name="${name}"]`);
      return field ? { name, field, slot } : null;
    })
    .filter((entry): entry is { name: string; field: FormField; slot: HTMLElement } => entry !== null);

  const setError = (field: FormField, slot: HTMLElement, message: string | null) => {
    slot.textContent = message ?? "";
    slot.hidden = !message;
    field.setAttribute("aria-invalid", message ? "true" : "false");

    // Preserve a field's own hint id, if it has one, alongside the error id.
    if (field.dataset.describedby === undefined) {
      field.dataset.describedby = field.getAttribute("aria-describedby") ?? "";
    }
    const described = [field.dataset.describedby, message ? slot.id : ""].filter(Boolean).join(" ");

    if (described) {
      field.setAttribute("aria-describedby", described);
    } else {
      field.removeAttribute("aria-describedby");
    }
  };

  const setStatus = (message: string, state: "" | "error" | "success" = "") => {
    if (!status) return;
    status.textContent = message;
    status.dataset.state = state;
  };

  // Clear a field's error as soon as the visitor fixes it.
  for (const { field, slot } of validated) {
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true" && !checkField(field)) {
        setError(field, slot, null);
      }
    });
  }

  const labelFor = (field: FormField) =>
    form.querySelector<HTMLLabelElement>(`label[for="${field.id}"]`)?.textContent?.trim() ?? field.name;

  const sendByMail = () => {
    const lines = [...form.elements]
      .filter((element): element is FormField => {
        if (!(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement)) {
          return false;
        }
        return Boolean(element.name) && element.name !== "company";
      })
      .map((field) => `${labelFor(field)}: ${field.value.trim()}`);

    window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    setStatus("Opening your email app with the message ready to send.", "success");
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Honeypot: bots fill this, people never see it.
    const trap = form.querySelector<HTMLInputElement>("[name='company']");
    if (trap?.value) return;

    let firstInvalid: FormField | null = null;
    for (const { field, slot } of validated) {
      const message = checkField(field);
      setError(field, slot, message);
      if (message && !firstInvalid) firstInvalid = field;
    }

    if (firstInvalid) {
      setStatus("Please check the highlighted fields.", "error");
      firstInvalid.focus();
      return;
    }

    if (!endpoint) {
      sendByMail();
      return;
    }

    const data = Object.fromEntries(
      [...new FormData(form).entries()]
        .filter(([key]) => key !== "company")
        .map(([key, value]) => [key, String(value)]),
    );

    const submitLabel = submit?.textContent ?? "Send";
    form.dataset.busy = "true";
    if (submit) submit.textContent = "Sending…";
    setStatus("Sending your message…");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, subject }),
      });

      if (!response.ok) throw new Error(`Request failed with ${response.status}`);

      form.reset();
      for (const { field, slot } of validated) setError(field, slot, null);
      setStatus("Thank you — your message is on its way. The team will reply by email.", "success");
    } catch {
      setStatus(`Something went wrong sending that. Please email ${fallbackEmail} instead.`, "error");
    } finally {
      delete form.dataset.busy;
      if (submit) submit.textContent = submitLabel;
    }
  });
}

for (const form of document.querySelectorAll<HTMLFormElement>("[data-site-form]")) {
  setUp(form);
}
