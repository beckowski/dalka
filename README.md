# Dalka — company website

Static, multilingual marketing site for an electrical-installations company
registered in Slovenia. Built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com), deployable to GitHub Pages out of
the box.

## Languages

The site is available in four languages, served from prefixed URLs:

| Code | Language                              | Default URL  |
| ---- | ------------------------------------- | ------------ |
| `sl` | Slovenščina (default)                 | `/sl/`       |
| `en` | English                               | `/en/`       |
| `de` | Deutsch                               | `/de/`       |
| `hr` | Hrvatski / Bosanski / Srpski (Latin)  | `/hr/`       |

All copy lives in **`src/i18n/ui.ts`** as a single dictionary per language.
Edit that file and every page picks up the change. Job listings live in
**`src/i18n/positions.ts`** — set the array to `[]` to show the "no openings"
message, or add entries with translations for each language.

## Pages

- `/` — redirect to default locale
- `/<lang>/` — Home
- `/<lang>/services` — Services
- `/<lang>/careers` — Careers + job application form
- `/<lang>/contact` — Contact details + contact form
- `/<lang>/quote` — Request a quote form

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # build to ./dist
npm run preview    # preview the built site
```

## Configuration

Open **`src/config.ts`** and update:

- `company.name`, `shortName`, `email`, `phone`, `addressLines`
- `company.formspree.*` — your Formspree endpoints (see below)

Also edit **`astro.config.mjs`**:

- `site` — your public URL (e.g. `https://dalka.si` or
  `https://<your-user>.github.io/<your-repo>`)
- `base` — uncomment and set to `/<repo-name>` **only if** deploying to
  `https://<user>.github.io/<repo>` (a project page). Leave commented for
  a custom domain or a user/organization page.

## Forms

Forms post to [Formspree](https://formspree.io) — they have a free tier
(50 submissions/month, sufficient for most small business sites). To set
them up:

1. Sign up at https://formspree.io.
2. Create two forms: **contact** and **careers**. The careers form needs
   **file uploads** enabled (paid plan) if you want CV attachments,
   otherwise the file input will be ignored.
3. Copy each form's endpoint (looks like `https://formspree.io/f/abc123`).
4. The endpoints are read from environment variables
   (`FORMSPREE_CONTACT`, `FORMSPREE_CAREERS`) rather than hardcoded in
   `src/config.ts`, since this repo is public and the form IDs shouldn't
   sit in source control:
   - **Local dev**: copy `.env.example` to `.env` and fill in your
     endpoints. `.env` is gitignored.
   - **GitHub Pages deploy**: in repo **Settings → Secrets and
     variables → Actions → Variables**, add `FORMSPREE_CONTACT` and
     `FORMSPREE_CAREERS`. The workflow in `.github/workflows/deploy.yml`
     passes them into the build.

Until these are set, forms fall back to a placeholder URL and submission
fails. The client-side handler intentionally detects the placeholder and
lets the browser show the failure so you don't think it's working.

Note: because this is a static site, the form endpoint still ends up in
the public HTML the browser submits to — env vars just keep it out of
`git log`/source, not out of the deployed page.

### Alternatives

- **Web3Forms** (https://web3forms.com) — similar, free, uses an
  `access_key` field. Drop their endpoint into the same `formspree.*`
  config slot — the HTML works identically.
- **Self-hosted** — if you switch to a non-static host, you can replace
  the form action with your own POST endpoint.
- **`mailto:`** — simplest possible: open the user's mail client. Just
  change the form `action` to `mailto:info@example.si`.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In repo **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `master` (or `main`) — the workflow in
   `.github/workflows/deploy.yml` builds and publishes the site.

### Project page vs custom domain

- **Project page** (`https://<user>.github.io/dalka`): uncomment the
  `base` line in `astro.config.mjs` and set it to `/dalka` (or your repo
  name). The site URL has the repo name as a path prefix.
- **Custom domain** (`https://dalka.si`): in Pages settings, configure
  your custom domain. Set `site` in `astro.config.mjs` to it and leave
  `base` commented out. You'll typically also want a `public/CNAME` file
  containing your domain.

## Project structure

```
src/
├── components/         # Reusable UI: Header, Footer, forms, etc.
├── i18n/
│   ├── ui.ts           # All UI strings, per language
│   ├── positions.ts    # Open job listings (multilingual)
│   └── utils.ts        # i18n helpers
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro     # Redirect to default locale
│   └── [lang]/         # Localized pages — written once, served per locale
│       ├── index.astro
│       ├── services.astro
│       ├── careers.astro
│       ├── contact.astro
│       └── quote.astro
├── styles/global.css
└── config.ts           # Company info + form endpoints
```

## Tips

- To add a fifth language: add a key to `languages` and a translation
  block to `ui` in `src/i18n/ui.ts`, then add the code to `locales` in
  `astro.config.mjs`. The pages, components, and language switcher pick
  it up automatically.
- To add a new page: drop a file into `src/pages/[lang]/`, use the same
  `getStaticPaths` pattern, and add a nav entry in
  `src/components/Header.astro`.
- To preview a non-default language during dev, visit `/en/`, `/de/`, or
  `/hr/` directly.
