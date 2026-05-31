# Heart Mind Talent — Website

A static HTML/CSS website. Six pages, no build step, no framework. Edit the `.html` files in any text editor and save.

## File structure

```
index.html              ← Home
about.html              ← About / Team
case-studies.html       ← Case Studies (Convergence, Prior Labs, Fundamental)
how-we-work.html        ← Engagement process
insights.html           ← Blog landing page (placeholder posts)
contact.html            ← Contact + Book a call

assets/
  styles.css            ← Global stylesheet (edit this for all design changes)
  partials.js           ← Header + footer + nav (edit this to change nav links)
  photos/               ← Team photography
```

## Deploying to Netlify (free, ~10 min)

1. Go to https://app.netlify.com/signup and create a free account.
2. Click **"Add new site" → "Deploy manually"**.
3. Drag this entire folder onto the upload zone.
4. Netlify gives you a temporary URL like `https://random-words-12345.netlify.app` — your site is live.
5. To use **heartmindtalent.com**:
   - In Netlify: Site settings → Domain management → Add custom domain → enter `heartmindtalent.com`.
   - In Wix / your domain registrar: Point the DNS for heartmindtalent.com to Netlify's nameservers (Netlify shows you which ones). Or use Wix's DNS panel to add an `A` record and `CNAME` per Netlify's instructions.
   - Wait ~1 hour for DNS to propagate. Netlify auto-provisions SSL.
6. Cancel your Wix subscription once the domain has switched.

## Editing content

- All text is in plain HTML — you can search for any phrase and edit it in-place.
- To swap a photo, drop a new file into `assets/photos/` and update the `src=` in the relevant `.html` file.
- To change nav items, edit `NAV` at the top of `assets/partials.js`.
- To change brand colors, edit the `:root { ... }` block at the top of `assets/styles.css`.

## Updating after launch

Each time you change files, drag the folder onto Netlify again — it will deploy the new version in seconds.

(Or, hook Netlify up to a GitHub repo and updates deploy automatically on every commit — ask if you want help setting that up.)

## Forms

The contact form and newsletter signup are currently front-end only — they show a "thanks" message but don't send anywhere. To wire them up, the easiest options:

- **Netlify Forms** (free, recommended): add `data-netlify="true"` to the `<form>` tags. Netlify will collect submissions and email them to you.
- **Formspree / Getform**: same idea, paste an action URL.

Happy to wire either of these up when you're ready.
