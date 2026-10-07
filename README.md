<div align="center">

<img src="assets/img/logo.png" alt="Adrian Anunciacion logo" width="72">

# Adrian M. Anunciacion

Web developer and IT support from Pampanga, Philippines

[View the live site](https://adrianm16.github.io/My-Portfolio/) ·
[Download my resume](assets/Adrian_Anunciacion_Resume.pdf) ·
[LinkedIn](https://www.linkedin.com/in/adrian-anunciacion-b51913316/) ·
[Email me](mailto:adriananunciacion80@gmail.com)

</div>

## About this repo

This is the code for my personal portfolio. It is one page, written by hand in
HTML, CSS and JavaScript. There is no framework and nothing to install or build.

The site is where I keep my projects, internship experience, certificates and
resume in one place for anyone looking to hire a web developer or IT support.

## A quick tour

1. **Hero** – my name, what I do, a resume download and a few quick numbers
2. **About** – who I am, what I work with, and some photos
3. **Projects** – four live websites, each with screenshots and a details pop-up
4. **Background** – internship, education, certifications and taekwondo
5. **Skills** – web, design and tools, IT support, and what I'm learning now
6. **Certificates** – filter by category, click one to see it full size
7. **Resume** – a preview of my one-page resume with a download button
8. **Break the board** – a small taekwondo moment before the contact section
9. **Contact** – email, phone, links and a working message form

## Things I'm proud of

**It adapts to the visitor.**
Light and dark mode follow the device setting and remember the visitor's choice.
The layout is built for phones, tablets, laptops and desktops.

**It moves, with a reason.**
The letters of my name settle into their weight on load and react to the pointer.
Headings rise letter by letter, photos wipe in, and on bigger screens the
projects scroll sideways while the page stays pinned.

**It has a bit of me in it.**
The red and blue come from taekwondo sparring gear. Near the end, three hits
break a board and open the way to the contact form.

**Everyone can use it.**
There is visible keyboard focus, a skip link and alt text on images. Every
animation switches off for visitors who turn on "reduce motion".

## Projects on the site

**[HAU Taekwondo Team website](https://adrianm16.github.io/HAUTKDwebsite/)**
HTML, CSS, JavaScript

**[Brew Haven coffee shop](https://adrianm16.github.io/BrewHavenCoffee/)**
HTML, CSS, JavaScript, Node.js

**[KOMA clothing brand](https://koma-ph.netlify.app/)**
HTML, CSS, UI design

**[Pilipinas Ngayon news site](https://voiceofthenation1.wordpress.com/)**
WordPress, Elementor, custom CSS

## Built with

`HTML5` `CSS3` `JavaScript` `Google Fonts` `Formspree` `GitHub Pages`

Fonts are Bricolage Grotesque for headings and Onest for body text. The contact
form sends through Formspree, and the site is hosted on GitHub Pages.

## Run it on your computer

Open `index.html` in a browser.

While editing, a local server is nicer because the page reloads cleanly:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

The Live Server extension in VS Code works too.

<details>
<summary><b>Where to edit what</b></summary>

<br>

| To change                              | Open            | Look for                                      |
|----------------------------------------|-----------------|-----------------------------------------------|
| Any text on the page                   | `index.html`    | the `<!-- ===== SECTION ===== -->` markers    |
| Add a project                          | `index.html`    | copy one `<article class="proj">` block       |
| Add a skill or a background row        | `index.html`    | copy one `<li>` in that section               |
| Certificates                           | `js/main.js`    | `CERTS`                                       |
| Text in the project details pop-ups    | `js/main.js`    | `PROJECTS`                                    |
| The roles that type in the hero        | `js/main.js`    | `roles = [`                                   |
| Internship dates                       | `js/main.js`    | `OJT_PERIOD`                                  |
| Colors, light and dark                 | `css/style.css` | the `:root` blocks at the top                 |
| Fonts                                  | `css/style.css` | `--display` and `--body`, plus the Google Fonts link in `index.html` |
| Resume file                            | `assets/`       | replace `Adrian_Anunciacion_Resume.pdf` and `img/resume-preview.png` |

</details>

<details>
<summary><b>Folder structure</b></summary>

```
My-Portfolio/
├── index.html      all the content, one page
├── css/style.css   design, with light and dark colors at the top
├── js/main.js      interactions, plus the lists edited most often
└── assets/
    ├── Adrian_Anunciacion_Resume.pdf
    ├── img/            logo, portrait, about photos, resume preview
    ├── projects/       project screenshots
    ├── certificates/   certificate images
    ├── tkd/            optional taekwondo photos
    └── ojt/            optional internship photo
```

</details>

## Get in touch

I'm open to work in web development, IT support and other IT roles.

- Email: adriananunciacion80@gmail.com
- LinkedIn: [Adrian Anunciacion](https://www.linkedin.com/in/adrian-anunciacion-b51913316/)
- GitHub: [AdrianM16](https://github.com/AdrianM16)

<div align="center">
<sub>Designed and coded by Adrian M. Anunciacion</sub>
</div>
