class PhotoGallery extends HTMLElement {
  private controller?: AbortController;

  connectedCallback() {
    this.controller?.abort();
    this.controller = new AbortController();
    const { signal } = this.controller;
    const filters = this.querySelector<HTMLElement>("[data-gallery-filters]");
    const grid = this.querySelector<HTMLElement>("[data-gallery-grid]");
    const count = this.querySelector<HTMLElement>("[data-gallery-count]");
    const items = [...this.querySelectorAll<HTMLElement>("[data-gallery-item]")];
    const links = [...this.querySelectorAll<HTMLAnchorElement>("[data-photo-link]")];
    const buttons = [...this.querySelectorAll<HTMLButtonElement>("[data-filter]")];
    const dialog = this.querySelector<HTMLDialogElement>("dialog");
    const frame = this.querySelector<HTMLElement>("[data-viewer-frame]");
    const image = this.querySelector<HTMLImageElement>("[data-viewer-image]");
    const title = this.querySelector<HTMLElement>("[data-viewer-title]");
    const meta = this.querySelector<HTMLElement>("[data-viewer-meta]");
    const position = this.querySelector<HTMLElement>("[data-viewer-position]");
    const eventLink = this.querySelector<HTMLAnchorElement>("[data-viewer-event]");
    const imageLink = this.querySelector<HTMLAnchorElement>("[data-viewer-original]");
    const status = this.querySelector<HTMLElement>("[data-viewer-status]");
    const close = this.querySelector<HTMLButtonElement>("[data-viewer-close]");
    const previous = this.querySelector<HTMLButtonElement>("[data-viewer-previous]");
    const next = this.querySelector<HTMLButtonElement>("[data-viewer-next]");
    if (!filters || !grid || !count || !dialog || !frame || !image || !title || !meta || !position || !eventLink || !imageLink || !status || !close || !previous || !next) return;

    let visible = links;
    let current = 0;
    let opener: HTMLAnchorElement | undefined;
    let previousOverflow = "";
    let scrollLocked = false;

    filters.hidden = false;
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        items.forEach((item) => { item.hidden = filter !== "all" && item.dataset.collection !== filter; });
        visible = links.filter((link) => !link.closest<HTMLElement>("[data-gallery-item]")?.hidden);
        buttons.forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
        grid.dataset.filtered = String(filter !== "all");
        count.textContent = `${visible.length} photographs${filter === "all" ? "" : ` · ${button.dataset.label}`}`;
      }, { signal });
    });

    const showPhoto = (index: number) => {
      current = (index + visible.length) % visible.length;
      const link = visible[current];
      const thumbnail = link.querySelector("img");
      frame.dataset.state = "loading";
      status.hidden = false;
      status.textContent = "Loading photograph…";
      image.alt = thumbnail?.alt ?? "";
      image.src = link.href;
      title.textContent = link.dataset.title ?? "";
      meta.textContent = link.dataset.meta ?? "";
      position.textContent = `${current + 1} / ${visible.length}`;
      eventLink.href = link.dataset.eventHref ?? "/events/";
      eventLink.textContent = `Explore ${link.dataset.collectionLabel}`;
      imageLink.href = link.href;
      previous.disabled = next.disabled = visible.length < 2;
    };

    image.addEventListener("load", () => {
      frame.dataset.state = "ready";
      status.hidden = true;
    }, { signal });
    image.addEventListener("error", () => {
      frame.dataset.state = "error";
      status.hidden = false;
      status.textContent = "This photograph couldn’t load. Try the next photo or use the open image link.";
    }, { signal });

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0 || typeof dialog.showModal !== "function") return;
        event.preventDefault();
        opener = link;
        showPhoto(visible.indexOf(link));
        previousOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = "hidden";
        scrollLocked = true;
        dialog.showModal();
        close.focus();
      }, { signal });
    });

    const restoreScroll = () => {
      if (scrollLocked) {
        document.documentElement.style.overflow = previousOverflow;
        scrollLocked = false;
      }
    };
    close.addEventListener("click", () => dialog.close(), { signal });
    dialog.addEventListener("close", () => {
      restoreScroll();
      opener?.focus({ preventScroll: true });
    }, { signal });
    signal.addEventListener("abort", restoreScroll, { once: true });
    previous.addEventListener("click", () => showPhoto(current - 1), { signal });
    next.addEventListener("click", () => showPhoto(current + 1), { signal });
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        const focusable = [...dialog.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]")];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        showPhoto(current + (event.key === "ArrowRight" ? 1 : -1));
      }
    }, { signal });
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    }, { signal });

    let touchStart: { x: number; y: number } | undefined;
    frame.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "touch") touchStart = { x: event.clientX, y: event.clientY };
    }, { signal });
    frame.addEventListener("pointerup", (event) => {
      if (!touchStart) return;
      const dx = event.clientX - touchStart.x;
      const dy = event.clientY - touchStart.y;
      touchStart = undefined;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) showPhoto(current + (dx < 0 ? 1 : -1));
    }, { signal });
    frame.addEventListener("pointercancel", () => { touchStart = undefined; }, { signal });
  }

  disconnectedCallback() { this.controller?.abort(); }
}

if (!customElements.get("photo-gallery")) customElements.define("photo-gallery", PhotoGallery);
