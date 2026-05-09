# Brand Check

A blog on trademark, copyright, advertising, and brand-deal law — with a tilt toward sports and entertainment.

## How to publish

This site is plain HTML + CSS. No build step. No frameworks. GitHub Pages serves it directly.

### Adding a new post

1. **Copy the template** at `posts/_template.html` to a new file with a URL-friendly slug, e.g. `posts/morality-clauses-2026.html`.
2. **Edit the post**: title, dek, eyebrow category, byline read-time, and body. The styles in `assets/styles.css` give you headings, blockquotes, pullquotes, and a drop-cap on the lede.
3. **Add it to the manifest** in `index.html`. Find the `<script type="application/json" id="posts-manifest">` block near the top and add a new entry **at the very top of the array** so it becomes the new "Latest post":

   ```json
   {
     "slug": "morality-clauses-2026",
     "category": "Brand Deals",
     "title": "Morality clauses after the streamer scandal: rewriting the off-ramp.",
     "deck": "A practical redline of the seven sentences agencies should add...",
     "author": "Alec R. Whitfield",
     "readTime": "8 min read"
   }
   ```

4. **Commit.** GitHub Pages redeploys automatically in about thirty seconds.

The home page renders the newest post as the hero and the next three as archive cards.

### Editing in GitHub

You can do all of this without leaving the browser:

- Click any file in your repo → pencil icon → edit → "Commit changes"
- Or use the `.` keyboard shortcut on any GitHub repo to open the github.dev editor, which is a full VS Code in your browser

## File layout

```
.
├── index.html               # Home page — edit the manifest here
├── assets/
│   └── styles.css           # All styling lives here
├── posts/
│   ├── _template.html       # Copy this to start a new post
│   ├── the-20m-handshake.html
│   ├── two-stripes-three-stripes.html
│   ├── clinically-proven.html
│   └── sampling-drake-twice-removed.html
└── README.md
```

## Deploying to GitHub Pages

1. Create a new repo (e.g. `brand-check`) and push these files to the `main` branch.
2. In repo settings → **Pages**, set the source to **Deploy from a branch**, branch `main`, folder `/`.
3. Your site goes live at `https://<your-username>.github.io/brand-check/` within a minute.
4. To use a custom domain (e.g. `brandcheck.law`), add a `CNAME` file at the repo root containing the domain, and point the domain's DNS at GitHub's IPs. Instructions: <https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site>

## A note on the newsletter form

The form on the home page currently shows a "✓ Subscribed" confirmation but does not capture emails. To wire it up to a real provider:

- **Buttondown**: replace the `<form>`'s `onsubmit` with `action="https://buttondown.email/api/emails/embed-subscribe/your-username"` and `method="post"`.
- **ConvertKit**, **Beehiiv**, **Mailchimp**: same pattern — they all give you a form `action` URL.

## Not legal advice

Brand Check is editorial commentary. Nothing here creates an attorney-client relationship.
