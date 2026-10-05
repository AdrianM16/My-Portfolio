# Adrian Anunciacion portfolio

Plain HTML, CSS and JavaScript. No build step, works on GitHub Pages as is.

## Where to edit what

| I want to change...                         | Open                | Look for                                   |
|---------------------------------------------|---------------------|--------------------------------------------|
| Intro speed, or play it on every visit      | `js/main.js`        | `INTRO_SECONDS`, `INTRO_EVERY_VISIT`       |
| OJT dates                                   | `js/main.js`        | `OJT_PERIOD`                               |
| Certificates (add, rename, add image)       | `js/main.js`        | `CERTS`                                    |
| Text in the "Project details" pop-ups       | `js/main.js`        | `PROJECTS`                                 |
| The roles that type in the hero             | `js/main.js`        | `roles = [`                                |
| Any text on the page                        | `index.html`        | the `<!-- ===== SECTION ===== -->` markers |
| Add a project                               | `index.html`        | copy one `<article class="proj">` block    |
| Add a skill or a background row             | `index.html`        | copy one `<li>` in that section            |
| Colors (light and dark)                     | `css/style.css`     | the `:root` blocks at the top              |
| Fonts                                       | `css/style.css`     | `--display` and `--body`, plus the Google Fonts link in `index.html` |
| Resume file                                 | `assets/`           | replace `Adrian_Anunciacion_Resume.pdf` and `img/resume-preview.png` |

## Photos that appear by themselves

Drop files with these exact names and they show up in About. Missing files leave no gap.

- `assets/tkd/tkd-1.jpg`, `assets/tkd/tkd-2.jpg`
- `assets/ojt/ojt-1.jpg`

## Adding a certificate

Put the image in `assets/certificates/`, then add a line to `CERTS` in `js/main.js`:

    { name: "Certificate name", by: "Who issued it", when: "Month Year", cat: "dev", full: "file.png" },

`cat` is one of `dev`, `design`, `marketing`, `cloud`. Without `full` it shows a plain name card.

## Accessibility already built in

Keyboard focus is visible everywhere, the intro has a Skip button (Esc also works),
images have alt text (write one for every image you add), and all animations switch
off for people who set "reduce motion" on their device.
