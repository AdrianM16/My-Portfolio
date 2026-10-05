# Adrian Anunciacion | Portfolio

Personal portfolio of **Adrian M. Anunciacion**, web developer and IT support from Pampanga, Philippines.

**Live site:** https://adrianm16.github.io/My-Portfolio/

Built with plain HTML, CSS and JavaScript. No framework, no build step, no dependencies to install.

---

## What's on the site

| Section        | What it shows                                                                  |
|----------------|--------------------------------------------------------------------------------|
| Intro          | A short screen with my name and a 0 to 100 counter before the site opens       |
| Hero           | Name, typed roles, short intro, resume download, quick stats, photo            |
| About          | Who I am, what I work with, quick facts, photos                                |
| Projects       | Four live websites with screenshots, tech used and a details pop-up            |
| Background     | Internship, education, certifications, taekwondo                               |
| Skills         | Web, design and tools, IT support, how I work, what I'm learning               |
| Certificates   | Filterable grid, click a certificate to view it full size                      |
| Resume         | Preview of my one-page resume with a download button                           |
| Break the board| A small taekwondo-themed interaction before the contact section                |
| Contact        | Email, phone, LinkedIn, GitHub and a working message form                      |

## Features

- **Light and dark mode.** Follows the device setting, and the toggle remembers the visitor's choice.
- **Responsive.** Laid out for phones, tablets, laptops and desktops.
- **Interactive intro.** The name fills in as the counter climbs, the glow follows the pointer, and a tap, click, Enter or Esc skips it. It plays once per browser tab.
- **Scroll animations.** Headings rise letter by letter, images wipe in, the About line lights up word by word, photos move with a light parallax.
- **Sideways projects.** On laptops and desktops the page pins and the four projects scroll horizontally. On phones and tablets they are a normal list.
- **Project details.** Each project opens a pop-up with what it is, what I did and more screenshots.
- **Certificates.** Filter by category and click to zoom.
- **Break the board.** Three hits break the board and reveal a link to the contact form.
- **Contact form.** Sends through Formspree, with inline validation and clear error messages.
- **Accessible.** Visible keyboard focus, a skip link, alt text on images, and every animation switches off for visitors who set "reduce motion" on their device.

## Projects featured

| Project                    | Built with                    | Link                                         |
|----------------------------|-------------------------------|----------------------------------------------|
| HAU Taekwondo Team website | HTML, CSS, JavaScript         | https://adrianm16.github.io/HAUTKDwebsite/   |
| Brew Haven coffee shop     | HTML, CSS, JavaScript, Node.js| https://adrianm16.github.io/BrewHavenCoffee/ |
| KOMA clothing brand        | HTML, CSS, UI design          | https://koma-ph.netlify.app/                 |
| Pilipinas Ngayon news site | WordPress, Elementor, CSS     | https://voiceofthenation1.wordpress.com/     |

## Tech

- HTML5, CSS3 (custom properties, grid, flexbox, `clip-path`, View Transitions for the theme switch)
- Vanilla JavaScript (IntersectionObserver, `requestAnimationFrame`, `<dialog>`)
- Google Fonts: Big Shoulders Display (headings) and Onest (body)
- Formspree for the contact form
- Hosted on GitHub Pages

## Folder structure

```
My-Portfolio/
├── index.html                 all the content, one page
├── css/
│   └── style.css              design, light and dark colors at the top
├── js/
│   └── main.js                interactions, plus the lists you edit most (top of the file)
├── assets/
│   ├── Adrian_Anunciacion_Resume.pdf
│   ├── img/                   logo, portrait, about photos, resume preview
│   ├── projects/              project screenshots
│   ├── certificates/          certificate images
│   ├── tkd/                   optional taekwondo photos
│   └── ojt/                   optional internship photo
└── README.md
```

## Run it locally

Open `index.html` in a browser. That's it.

If you prefer a local server (recommended while editing):

```bash
# from inside the My-Portfolio folder
python -m http.server 8000
# then open http://localhost:8000
```

or use the Live Server extension in VS Code.

## Contact

- Email: adriananunciacion80@gmail.com
- LinkedIn: https://www.linkedin.com/in/adrian-anunciacion-b51913316/
- GitHub: https://github.com/AdrianM16

Designed and coded by Adrian M. Anunciacion.
