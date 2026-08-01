# Modern Restaurant Website — Maison Auré (Demo)

A fully responsive, single-page restaurant website built as a portfolio/client demo.
Fine-dining aesthetic, mobile/tablet/desktop responsive layout, animated menu tabs,
testimonial slider, reservation form, and a mobile nav menu.

## Folder Structure

```
modern-restaurant-website/
│
├── index.html          → Page markup (all sections)
├── style.css            → All custom styles (fonts, colors, layout, animations)
├── script.js             → Mobile menu, menu tabs, testimonial slider, scroll reveals
├── assets/
│   ├── images/
│   │   └── hero-tombilis.jpg   → Hero background photo (local, not hotlinked)
│   └── icons/            → Empty — reserved for a favicon or custom icon set
└── README.md
```

## Running it locally

No build step required. Just open `index.html` in a browser, or serve the folder
with any static server, e.g.:

```bash
npx serve .
```

## Hosting it for free

**Netlify (drag & drop)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `modern-restaurant-website` folder onto the page
3. You'll get a live URL instantly (can rename the site / attach a custom domain after)

**GitHub Pages**
1. Create a new GitHub repo and push this folder's contents to it
2. In the repo: Settings → Pages → Deploy from branch → `main` / root
3. Your site goes live at `https://<your-username>.github.io/<repo-name>/`

## Notes for going to production

- **Hero image**: `assets/images/hero-tombilis.jpg` is your uploaded photo — already local, no external dependency.
- **Other photos** (chef portrait, gallery grid, reservation section background) currently pull
  from a free placeholder image service (`loremflickr.com`) so the layout can be demoed without
  real client photography. Before shipping this to a real client, swap the `src` on each of these
  `<img>` tags for their own photos, ideally saved into `assets/images/` and referenced locally
  the same way the hero image is now.
- **Fonts & Tailwind**: the page loads Google Fonts and the Tailwind CSS CDN script from the
  `<head>` of `index.html`. This needs an internet connection to render styled — normal for any
  modern website, but worth knowing if you ever want a fully offline build (that would require
  compiling Tailwind locally instead of using the CDN script).
- **Reservation form**: currently a front-end-only demo (no backend). Wire it up to a real
  endpoint (Netlify Forms, a booking API, email service, etc.) before going live.
