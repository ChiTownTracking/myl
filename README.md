# MYL Canada website

A static, multi-page Astro website for Muslim Youth League Canada. The site uses locally stored,
optimized event photography and the supplied MYL Canada logo.

## Main routes

- `/` — home
- `/about/` — organization and mission
- `/programs/` — MYL-led programming and related initiatives
- `/events/` — event overview
- `/events/mercy-for-humanity/` — sourced 2021–2023 conference archive
- `/events/al-hidayah/` — MQI Canada retreat and MYL volunteer relationship
- `/programs/hoops-for-humanity/` — basketball program
- `/renaissance/` — related Al-Nahda journal resource
- `/gallery/`, `/get-involved/`, `/contact/`, `/privacy/`

## Development

Install dependencies with `npm install`, then use Astro's background development server:

```sh
npm run astro -- dev --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Create a production build with:

```sh
npm run build
```

Before launch, set Astro's `site` value in `astro.config.mjs` to the final production domain. That
enables absolute canonical and social-image URLs without guessing a domain during development.

## Content and media

Shared organization details, navigation, social links and conference source URLs live in
`src/data/site.js`. Local media lives in `src/assets/images/` and is rendered with Astro's image
pipeline. Historical claims on the Al-Rahma (Mercy for Humanity) page link back to the official MMCC Canada
or Minhaj reports used to verify them.

Al-Hidayah is identified as an MQI Canada initiative supported by MYL Canada volunteers.
Renaissance / Al-Nahda is identified as a related intellectual resource, not an MYL-owned
publication.
