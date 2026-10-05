/* ==========================================================
   EDIT ME: things you will most likely change later
   ========================================================== */

// INTRO: the quick screen with your name and a 0 to 100 counter.
const INTRO_SECONDS = 1.6;         // how long it lasts
const INTRO_EVERY_VISIT = false;   // false: plays once per browser tab. true: plays on every load.

// Shown in the Background section instead of the word "OJT". Example: "Feb to May 2026"
const OJT_PERIOD = "Jul to Oct 2026";

// Certificates. To add one: copy a line, put the image in assets/certificates.
// A certificate without "full" shows a plain name card until you add its image.
const CERTS = [
  { name: "Front-End Development Libraries", by: "freeCodeCamp", when: "October 2026", cat: "dev" },
  { name: "Relational Databases", by: "freeCodeCamp", when: "October 2026", cat: "dev" },
  { name: "AWS Cloud Foundations", by: "AWS Academy", when: "March 2026", cat: "cloud", img: "thumbs/aws.png", full: "aws1.png" },
  { name: "JavaScript Algorithms and Data Structures", by: "freeCodeCamp", when: "September 2025", cat: "dev", img: "thumbs/javascript.png", full: "javascript1.png" },
  { name: "Back-End Development and APIs", by: "freeCodeCamp", when: "August 2025", cat: "dev", img: "thumbs/backend.png", full: "backend1.png" },
  { name: "Responsive Web Design", by: "freeCodeCamp", when: "September 2024", cat: "dev", img: "thumbs/responsive.png", full: "cc-rwd1.PNG" },
  { name: "Sleek and Swift: Tailwind CSS and Shadcn/UI Workshop", by: "Code Geeks", when: "August 2025", cat: "dev", img: "thumbs/codegeeks-sleek.png", full: "thumbs/codegeeks-sleek.png" },
  { name: "Introduction to Graphic Design: Basics of UI/UX", by: "Simplilearn", when: "August 2025", cat: "design", img: "thumbs/simplilearn-uiux.png", full: "simplilearn-uiux1.png" },
  { name: "UI/UX Designing using ChatGPT", by: "Simplilearn", when: "August 2025", cat: "design", img: "thumbs/uiux.png", full: "uiux1.png" },
  { name: "SEO II", by: "HubSpot Academy", when: "January 2026", cat: "marketing", img: "thumbs/seo2.png", full: "seo2.1.png" },
  { name: "SEO", by: "HubSpot Academy", when: "January 2026", cat: "marketing", img: "thumbs/seo.png", full: "seo1.png" },
  { name: "Digital Advertising", by: "HubSpot Academy", when: "October 2025", cat: "marketing", img: "thumbs/digiads.png", full: "digitalads.png" },
  { name: "Content Marketing", by: "HubSpot Academy", when: "August 2025", cat: "marketing", img: "thumbs/contmarkerting.png", full: "contmarketing1.png" },
  { name: "Digital Marketing", by: "HubSpot Academy", when: "July 2025", cat: "marketing", img: "thumbs/digimarketing.png", full: "digimarketing1.png" },
];

// What shows in the "Project details" pop-up.
const PROJECTS = {
  hau: {
    title: "HAU Taekwondo Team website", link: "https://adrianm16.github.io/HAUTKDwebsite/",
    about: "An informational website for Holy Angel University's taekwondo team: who they are, how they train, and what they've been up to.",
    did: ["Wrote the structure in semantic HTML", "Built the layout with modern CSS so it works on phones and desktops", "Added JavaScript interactions and clear navigation between training categories", "Set up the media gallery for photos and videos"],
    shots: ["hau-cover.jpg", "hau-1.jpg", "hau-2.jpg"],
  },
  brew: {
    title: "Brew Haven coffee shop", link: "https://adrianm16.github.io/BrewHavenCoffee/",
    about: "A coffee shop web app where you can browse the menu and add drinks to a cart.",
    did: ["Built the menu display and cart with JavaScript", "Made reusable components so every page keeps one design", "Kept the layout responsive across screen sizes", "Used basic Node.js for handling data"],
    shots: ["brew-cover.jpg", "brew-1.jpg", "brew-2.jpg"],
  },
  koma: {
    title: "KOMA clothing brand", link: "https://koma-ph.netlify.app/",
    about: "An online store concept for a Filipino streetwear label, focused on how the brand looks and feels.",
    did: ["Designed the branding and a minimal interface", "Built the product showcase grid", "Kept colors, type and spacing consistent across pages"],
    shots: ["koma-cover.jpg", "koma-1.jpg", "koma-2.jpg"],
  },
  pilipinas: {
    title: "Pilipinas Ngayon news site", link: "https://voiceofthenation1.wordpress.com/",
    about: "A Filipino news website built on WordPress, with articles organized by category.",
    did: ["Set up WordPress and built the pages with Elementor", "Organized content into categories", "Wrote custom CSS for a cleaner, more readable layout", "Designed the navigation to make articles easier to find"],
    shots: ["pilipinas-cover.jpg", "pilipinas-1.jpg", "pilipinas-2.jpg"],
  },
};

/* ========================================================== */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const CERT_DIR = "assets/certificates/";

/* ---------- theme ---------- */
const root = document.documentElement;
function currentTheme() {
  return root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}
$("#theme").addEventListener("click", (e) => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  const apply = () => {
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (err) { /* private mode: just skip saving */ }
  };
  const r = e.currentTarget.getBoundingClientRect();
  root.style.setProperty("--tx", r.left + r.width / 2 + "px");
  root.style.setProperty("--ty", r.top + r.height / 2 + "px");
  if (document.startViewTransition && !reduceMotion) document.startViewTransition(apply);
  else apply();
});

/* ---------- nav ---------- */
const nav = $("#nav"), links = $("#links"), burger = $("#burger");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 8), { passive: true });
function setMenu(open) {
  links.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
burger.addEventListener("click", () => setMenu(!links.classList.contains("open")));
links.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// highlight the section you are reading
const navMap = new Map($$("a", links).map((a) => [a.getAttribute("href").slice(1), a]));
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    navMap.forEach((a) => a.classList.remove("here"));
    const a = navMap.get(en.target.id);
    if (a) a.classList.add("here");
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("section[id]").forEach((s) => spy.observe(s));

/* ---------- intro ---------- */
const loader = $("#loader");
let introDone = false;
function endLoading(instant) {
  if (introDone) return;
  introDone = true;
  root.classList.remove("loading");
  if (!loader) return;
  loader.classList.add(instant ? "off" : "done");
  setTimeout(() => { loader.classList.add("off"); $$("video", loader).forEach((v) => v.pause()); }, 1000);
  try { sessionStorage.setItem("introSeen", "1"); } catch (err) { /* fine without it */ }
}
let introSeen = false;
try { introSeen = sessionStorage.getItem("introSeen") === "1"; } catch (err) { /* fine without it */ }

if (reduceMotion || !loader || (introSeen && !INTRO_EVERY_VISIT)) endLoading(true);
else {
  // split the name into letters: they fill in as the counter climbs and lean away from the pointer
  const nameBox = $("#loader-name");
  nameBox.innerHTML = nameBox.getAttribute("aria-label").split(" ").map((w) =>
    `<span class="word" aria-hidden="true">${[...w].map((ch) => `<span class="l">${ch}</span>`).join("")}</span>`).join("");
  const letters = $$(".l", nameBox);
  const dur = INTRO_SECONDS * 1000, t0 = performance.now();
  (function count(now) {
    if (introDone) return;
    const p = Math.min(1, (now - t0) / dur);
    $("#load-n").textContent = Math.round(p * 100);
    loader.style.setProperty("--lp", p);
    letters.forEach((l, i) => l.classList.toggle("lit", (i + 1) / letters.length <= p));
    if (p < 1) requestAnimationFrame(count); else setTimeout(() => endLoading(), 350);
  })(t0);
  // the colored glow follows the pointer, and nearby letters push away from it
  loader.addEventListener("pointermove", (e) => {
    loader.style.setProperty("--gx", (e.clientX / innerWidth * 100).toFixed(1) + "%");
    loader.style.setProperty("--gy", (e.clientY / innerHeight * 100).toFixed(1) + "%");
    letters.forEach((l) => {
      const r = l.getBoundingClientRect();
      const dx = r.left + r.width / 2 - e.clientX, dy = r.top + r.height / 2 - e.clientY;
      const d = Math.hypot(dx, dy), push = Math.max(0, 1 - d / 220);
      l.style.setProperty("--dx", (dx / (d || 1) * push * 26).toFixed(1) + "px");
      l.style.setProperty("--dy", (dy / (d || 1) * push * 26).toFixed(1) + "px");
      l.style.setProperty("--dr", (dx / (d || 1) * push * 10).toFixed(1) + "deg");
    });
  });
  loader.addEventListener("click", () => endLoading());   // tap or click anywhere to enter right away
  addEventListener("keydown", (e) => { if (e.key === "Escape" || e.key === "Enter") endLoading(); });
}

/* ---------- scroll reveals ---------- */
// split each section heading into letters so they can rise one by one
$$("h2").forEach((h) => {
  const text = h.textContent;
  h.setAttribute("aria-label", text);
  h.innerHTML = `<span class="hw" aria-hidden="true">${[...text].map((ch, i) => `<span class="ch" style="--i:${i}">${ch}</span>`).join("")}</span>`;
});
// split the About opening line into words that light up on scroll
const fill = $(".fill");
if (fill && !reduceMotion) fill.innerHTML = fill.textContent.split(" ").map((w) => `<span class="w">${w}</span>`).join(" ");
const fillWords = fill ? $$(".w", fill) : [];

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); reveal.unobserve(en.target); } });
}, { threshold: 0, rootMargin: "0px 0px -8% 0px" });

/* ---------- small interactions ---------- */
// one scroll loop drives the progress belt, word fill, parallax and the sideways projects
const belt = $("#belt"), work = $("#work"), track = $("#track"), ticker = $(".ticker");
const pinQuery = matchMedia("(min-width: 901px) and (min-height: 620px)");
let pinDist = 0, lastY = scrollY, queued = false;
function setupPin() {
  const pin = pinQuery.matches && !reduceMotion;
  work.classList.toggle("pin", pin);
  track.style.transform = "";
  work.style.height = "";
  if (pin) {
    pinDist = Math.max(0, track.scrollWidth - innerWidth);
    work.style.height = innerHeight + pinDist + "px";
  }
}
const clamp = (v) => Math.max(0, Math.min(1, v));
function onScroll() {
  queued = false;
  const vh = innerHeight, max = document.documentElement.scrollHeight - vh;
  belt.style.setProperty("--p", max > 0 ? scrollY / max : 0);
  if (fillWords.length) {
    const r = fill.getBoundingClientRect();
    const p = clamp((vh * 0.9 - r.top) / (r.height + vh * 0.45));
    fillWords.forEach((w, i) => w.classList.toggle("lit", i / fillWords.length < p));
  }
  if (!reduceMotion) {
    $$("[data-par]").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      el.style.setProperty("--py", ((r.top + r.height / 2 - vh / 2) * +el.dataset.par).toFixed(1) + "px");
    });
    ticker.style.setProperty("--skew", Math.max(-18, Math.min(18, (scrollY - lastY) * -0.6)) + "deg");
    clearTimeout(onScroll.t); onScroll.t = setTimeout(() => ticker.style.setProperty("--skew", "0deg"), 120);
  }
  if (work.classList.contains("pin")) {
    const p = clamp(-work.getBoundingClientRect().top / (work.offsetHeight - vh));
    track.style.transform = `translate3d(${-p * pinDist}px, 0, 0)`;
    work.style.setProperty("--hp", p);
  }
  lastY = scrollY;
}
addEventListener("scroll", () => { if (!queued) { queued = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener("resize", () => { setupPin(); onScroll(); });
addEventListener("load", () => { setupPin(); onScroll(); });

// repeat the ticker items so the loop has no gap
const tick = $("#tick");
tick.innerHTML += tick.innerHTML;

if (matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion) {
  // the color blocks behind my photo move with the cursor
  const hero = $("#hero"), portrait = $("#portrait");
  hero.addEventListener("pointermove", (e) => {
    portrait.style.setProperty("--mx", (e.clientX / innerWidth - 0.5) * 2);
    portrait.style.setProperty("--my", (e.clientY / innerHeight - 0.5) * 2);
  });
  // a ring follows the mouse, grows on links, and says "View" on project screenshots
  const cursor = $("#cursor"), label = $("span", cursor);
  let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
  addEventListener("pointermove", (e) => {
    tx = e.clientX; ty = e.clientY;
    const hit = e.target.closest ? e.target.closest("[data-cursor], a, button") : null;
    const text = hit && hit.closest("[data-cursor]") && !e.target.closest(".thumbs") ? hit.closest("[data-cursor]").dataset.cursor : "";
    cursor.classList.toggle("label", !!text);
    cursor.classList.toggle("link", !!hit && !text);
    label.textContent = text;
  });
  (function follow() {
    cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
    cursor.style.setProperty("--cx", cx + "px"); cursor.style.setProperty("--cy", cy + "px");
    requestAnimationFrame(follow);
  })();
  // buttons pull slightly toward the mouse
  $$(".btn").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.25}px ${(e.clientY - r.top - r.height / 2) * 0.35}px`;
    });
    b.addEventListener("pointerleave", () => { b.style.translate = ""; });
  });
}

// keep my name inside its column on every screen size
const nameEl = $(".name");
function fitName() {
  nameEl.style.fontSize = "";
  let size = parseFloat(getComputedStyle(nameEl).fontSize);
  const widest = () => Math.max(...$$("b", nameEl).map((b) => b.scrollWidth));
  while (widest() > nameEl.clientWidth && size > 28) { size -= 2; nameEl.style.fontSize = size + "px"; }
}
fitName();
addEventListener("resize", fitName);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitName);

if (OJT_PERIOD) $("#ojt-when").textContent = OJT_PERIOD;

// gallery: photos that do not exist yet stay hidden; an odd photo out goes full width
const gallery = $("#gallery");
function layoutGallery() {
  const shown = $$("figure:not(.gone)", gallery);
  shown.forEach((f) => f.classList.remove("wide"));
  if (shown.length % 2) shown[shown.length - 1].classList.add("wide");
}
$$("img", gallery).forEach((img) => {
  const miss = () => { img.parentElement.classList.add("gone"); layoutGallery(); };
  if (img.complete && img.naturalWidth === 0) miss();
  img.addEventListener("error", miss);
});
layoutGallery();

/* ---------- project screenshot switcher ---------- */
$$(".shot").forEach((shot) => {
  const main = $(".main", shot);
  $$(".thumbs button", shot).forEach((b) => b.addEventListener("click", () => {
    $$(".thumbs button", shot).forEach((x) => x.classList.toggle("on", x === b));
    main.style.opacity = 0;
    setTimeout(() => { main.src = b.dataset.src; main.style.opacity = 1; }, 180);
  }));
});

/* ---------- certificates ---------- */
const certList = $("#certs"), lightbox = $("#lightbox");
CERTS.forEach((c) => {
  const li = document.createElement("li");
  li.className = "cert";
  li.dataset.cat = c.cat;
  const text = `<div><h3>${c.name}</h3><p>${c.by}, ${c.when}</p></div>`;
  if (!c.full) {
    li.innerHTML = `<div class="ph"><b>${c.by}</b><span>${c.name}</span></div>${text}`;
  } else {
    li.innerHTML = `<button type="button" aria-label="View ${c.name} certificate"><img src="${CERT_DIR + c.full}" alt="" loading="lazy">${text}</button>`;
    $("button", li).addEventListener("click", () => {
      $("#lb-img").src = CERT_DIR + c.full;
      $("#lb-img").alt = c.name + " certificate";
      $("#lb-cap").textContent = `${c.name}, ${c.by}`;
      lightbox.showModal();
    });
  }
  li.style.setProperty("--i", certList.children.length % 8);
  certList.append(li);
});
$("#lb-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.close(); });

$$("#filters button").forEach((b) => b.addEventListener("click", () => {
  $$("#filters button").forEach((x) => x.classList.toggle("on", x === b));
  $$(".cert").forEach((c) => c.classList.toggle("hide", b.dataset.f !== "all" && c.dataset.cat !== b.dataset.f));
}));

/* ---------- contact form (Formspree) ---------- */
const form = $("#form"), note = $("#form-note");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  note.className = "form-note";
  let firstBad = null;
  $$("[required]", form).forEach((f) => {
    const bad = !f.value.trim() || (f.type === "email" && !/^\S+@\S+\.\S+$/.test(f.value));
    f.classList.toggle("bad", bad);
    if (bad && !firstBad) firstBad = f;
  });
  if (firstBad) {
    note.textContent = "Fill in your name, a valid email and a message, then send again.";
    note.classList.add("err");
    firstBad.focus();
    return;
  }
  const btn = $("button[type=submit]", form);
  btn.disabled = true; btn.textContent = "Sending…";
  try {
    const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    note.textContent = "Message sent. Thanks, I'll get back to you soon.";
    note.classList.add("ok");
  } catch (err) {
    note.textContent = "The message didn't send. Check your connection, or email me directly at adriananunciacion80@gmail.com.";
    note.classList.add("err");
  }
  btn.disabled = false; btn.textContent = "Send message";
});

/* ---------- hero: typed role and counters ---------- */
$("#cert-count").dataset.count = CERTS.length;
const typed = $("#typed"), roles = ["web developer", "UI designer", "IT support", "taekwondo player"];
if (reduceMotion) typed.textContent = roles[0];
else {
  let r = 0, n = 0, back = false;
  (function type() {
    const w = roles[r];
    typed.textContent = w.slice(0, n);
    let wait = back ? 45 : 85;
    if (!back && n === w.length) { back = true; wait = 1700; }
    else if (back && n === 0) { back = false; r = (r + 1) % roles.length; wait = 350; }
    else n += back ? -1 : 1;
    setTimeout(type, wait);
  })();
}
$$("#stats dd").forEach((dd) => {
  const end = +dd.dataset.count;
  if (reduceMotion) { dd.textContent = end; return; }
  dd.textContent = 0;
  let t0 = 0;
  (function tick(now) {
    if (!introDone) { requestAnimationFrame(tick); return; }   // wait for the intro to finish
    if (!t0) t0 = now + 900;
    const p = Math.min(1, Math.max(0, (now - t0) / 900));
    dd.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  })(performance.now());
});

/* ---------- project details pop-up ---------- */
const details = $("#details");
$$("[data-p]").forEach((b) => b.addEventListener("click", () => {
  const p = PROJECTS[b.dataset.p];
  $("#d-title").textContent = p.title;
  $("#d-about").textContent = p.about;
  $("#d-did").innerHTML = p.did.map((d) => `<li>${d}</li>`).join("");
  $("#d-shots").innerHTML = p.shots.map((f) => `<img src="assets/projects/${f}" alt="${p.title} screenshot" loading="lazy">`).join("");
  $("#d-link").href = p.link;
  details.showModal();
  details.scrollTop = 0;
}));
$("#d-close").addEventListener("click", () => details.close());
details.addEventListener("click", (e) => { if (e.target === details) details.close(); });

/* ---------- break the board ---------- */
const stage = $("#stage"), board = $("#board"), label = $("#board-label");
let hits = 0;
const words = ["Break the board", "Again", "One more"];
board.addEventListener("click", () => {
  if (hits >= 3) return;
  hits++;
  stage.dataset.hits = hits;
  board.classList.remove("shake"); void board.offsetWidth; board.classList.add("shake");
  if (hits < 3) label.textContent = words[hits];
  else { label.textContent = ""; board.setAttribute("aria-label", "Board broken"); setTimeout(() => $(".behind a", stage).focus({ preventScroll: true }), 500); }
});
$("#again").addEventListener("click", () => {
  hits = 0; stage.dataset.hits = 0; label.textContent = words[0]; board.removeAttribute("aria-label"); board.focus({ preventScroll: true });
});

// start watching for reveals once everything above has been built
$$("h2, .rv, .certs").forEach((el) => reveal.observe(el));
setupPin(); onScroll();

$("#year").textContent = new Date().getFullYear();
