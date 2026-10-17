# Ananyaa’s Little Universe

A frontend-only, storybook-inspired portfolio for Ananyaa Singhal. The Hatchable-hosted version is a static client-side app using React + htm, CSS, and local JavaScript data. No API endpoints, database usage, authentication, or external application services are used by the portfolio.

## Local development

For a conventional React + Vite local workspace, scaffold a Vite React JavaScript app (`npm create vite@latest ananyaas-little-universe -- --template react`), copy the site assets from `public/`, and run:

```bash
npm install
npm run dev
```

The hosted Hatchable version serves static files directly and vendors its React runtime from the same origin; it does not run Vite on the host. This README is included as project documentation. The standalone site uses `public/index.html`, `public/styles.css`, `public/app.js`, `public/vendor/`, and `public/images/`.

## Personalise the site

- **Cartoon:** replace `public/images/ananyaa-cartoon.png` with your own illustration (PNG with a transparent background works well). The site has a graceful illustrated placeholder until the file exists.
- **Profile links:** edit the `profile` object near the top of `public/app.js`: email, GitHub, LinkedIn, and résumé URL. Email opens with `mailto:`.
- **Projects:** edit the local `projects` array in `public/app.js`. Replace descriptions, statuses, technologies, contributions, and `#` link placeholders only after verifying them against the actual repository. CineSync explicitly distinguishes the current frontend from planned backend features.
- **Bookshelf:** edit the local `books` array with real book titles and your own notes. Current entries are placeholders, not claims about reading history.
- **Skills / societies / team:** update the `skills` array and the relevant section copy in `public/app.js` with confirmed levels, titles, teammate names, and portfolio URLs. The DSA count is marked self-reported.

## Interactive details

Project filters and case files use local React state. Tic-Tac-Toe has win/draw detection and reset. Password generation runs in the browser and does not save or transmit output. Bookshelf selection is local UI state. Motion respects `prefers-reduced-motion`.

## Deployment

The current Hatchable version is a static-site deployment. To deploy the same static files elsewhere, upload the contents of `public/` to any static host (for example, GitHub Pages, Netlify, or Cloudflare Pages). No backend or environment variables are required. For a standard Vite distribution, copy the public assets into a Vite React JavaScript project and configure the entry point to render `app.js` or port the components into `src/` JSX; then run `npm run build` and publish `dist/`.

## Important before sharing

Replace every profile/contact URL placeholder and verify the Amazon Clone and CineSync feature claims. Add your cartoon file. Update teammate identities and bookshelf titles. The current Hatchable project may be private by default; public visibility must be enabled in the project’s settings if you want visitors without a Hatchable sign-in to see the portfolio.