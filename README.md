# On Road Driver

Marketing website for **On Road Driver (ORD)** — an on-demand professional
driver service across Kerala, operated by Naveen Service Private Limited.

The site is a single scrolling page that covers the services, the company
story, customer reviews, FAQs and contact options. Every call to action opens
a pre-filled WhatsApp chat so a booking can start in one tap.

## Stack

- [React 19](https://react.dev)
- [Vite](https://vite.dev)
- [Oxlint](https://oxc.rs)

No CSS framework — each section ships its own plain CSS file.

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (usually <http://localhost:5173>).

## Scripts

| Command           | What it does                       |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server with HMR      |
| `npm run build`   | Production build into `dist/`      |
| `npm run preview` | Serve the built output locally     |
| `npm run lint`    | Run Oxlint over the project        |

## Project structure

```
public/            Static assets (logo, illustrations, icons, manifest)
src/
  components/      One component + CSS file per page section
  site.js          Company details and the WhatsApp link helper
  App.jsx          Section order for the page
  index.css        Design tokens and global styles
  main.jsx         React entry point
```

## Configuration

Company contact details and the WhatsApp number live in `src/site.js`. Update
them there and every button, footer link, and contact tile follows.

> The phone number, email and address currently shipped are placeholders.
> Replace them before going live.

## Deployment

`npm run build` emits a static site to `dist/`. The build uses a relative base
(`./`), so it can be served from a domain root or from a subpath — for example
a GitHub Pages project site at `https://<user>.github.io/<repo>/` — without
further configuration.

## License

[MIT](LICENSE)
