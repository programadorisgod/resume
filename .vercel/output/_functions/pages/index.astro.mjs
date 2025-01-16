import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as renderScript, f as addAttribute, g as createAstro, h as defineScriptVars, i as renderHead } from '../chunks/astro/server_BmLLFbbz.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B3Oz1fWf.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const date = /* @__PURE__ */ new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const day = days[date.getDay()];
  return renderTemplate`${maybeRenderHead()}<header class="layout-header"> <div> <p>Camidev</p> </div> <div class="header-center">${day}</div> <div class="header-options"> <button class="header-options-button-theme"> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/theme.svg", "width": 20, "height": 20, "alt": "button theme" })} </button> </div> </header> `;
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/Header.astro", undefined);

const $$SubHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sub-header"> <div class="sub-header-section-1"> <div class="sub-header-section-1-image-text"> ${renderComponent($$result, "Image", $$Image, { "width": 13, "height": 15, "src": "/assets/person.svg", "alt": "person image" })}
Our Workspace
</div> <div class="sub-header-section-1-buttons"> <button>New</button> <button>Import</button> </div> </div> <div class="sub-header-section-2"> <div class="request visible"> <span data-method="GET">GET</span> <span>Home</span> ${renderComponent($$result, "Image", $$Image, { "width": 7, "height": 8, "src": "/assets/point.svg", "alt": "tab point", "class": "point" })} </div> <div class="request"> <span data-method="GET">GET</span> <span>Projects</span> ${renderComponent($$result, "Image", $$Image, { "width": 7, "height": 8, "src": "/assets/point.svg", "alt": "tab point", "class": "point" })} ${renderComponent($$result, "Image", $$Image, { "width": 15, "height": 15, "alt": "close tab", "src": "/assets/close.svg", "class": "close_tab" })} </div> <div class="request"> <span data-method="GET">GET</span> <span>Experience</span> ${renderComponent($$result, "Image", $$Image, { "width": 7, "height": 8, "src": "/assets/point.svg", "alt": "tab point", "class": "point" })} ${renderComponent($$result, "Image", $$Image, { "width": 15, "height": 15, "alt": "close tab", "src": "/assets/close.svg", "class": "close_tab" })} </div> <div class="request"> <span data-method="GET">GET</span> <span>Contact me</span> ${renderComponent($$result, "Image", $$Image, { "width": 7, "height": 8, "src": "/assets/point.svg", "alt": "tab point", "class": "point" })} ${renderComponent($$result, "Image", $$Image, { "width": 15, "height": 15, "alt": "close tab", "src": "/assets/close.svg", "class": "close_tab" })} </div> </div> </div> ${renderScript($$result, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/SubHeader.astro?astro&type=script&index=0&lang.ts")} `;
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/SubHeader.astro", undefined);

const $$AsideLeft = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="aside-left"> <div class="aside-left-options"> <div> ${renderComponent($$result, "Image", $$Image, { "width": 20, "height": 20, "src": "/assets/home.svg", "alt": "Logo home" })}
Home
</div> <div> ${renderComponent($$result, "Image", $$Image, { "width": 20, "height": 20, "src": "/assets/projects.svg", "alt": "Logo projects" })}
Projects
</div> <div> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/history.svg", "width": 20, "height": 20, "alt": "Logo History" })}
Experience
</div> <div> ${renderComponent($$result, "Image", $$Image, { "width": 20, "height": 20, "src": "/assets/api.svg", "alt": "Logo apiSvg" })}
Contact me
</div> </div> </nav> ${renderScript($$result, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/AsideLeft.astro?astro&type=script&index=0&lang.ts")} `;
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/AsideLeft.astro", undefined);

const $$AsideRight = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="aside-right"> <div class="aside-right-options"> <div> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/textSvg.svg", "width": 20, "height": 20, "alt": "Logo text" })} </div> <div> ${renderComponent($$result, "Image", $$Image, { "width": 20, "height": 20, "src": "/assets/comments.svg", "alt": "Logo comments" })} </div> <div> ${renderComponent($$result, "Image", $$Image, { "width": 20, "height": 20, "src": "/assets/code.svg", "alt": "Logo code" })} </div> <div> ${renderComponent($$result, "Image", $$Image, { "width": 20, "height": 20, "src": "/assets/arrows.svg", "alt": "Logo arrows" })} </div> <div> ${renderComponent($$result, "Image", $$Image, { "width": 20, "height": 20, "src": "/assets/info.svg", "alt": "Logo info" })} </div> </div> </aside> `;
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/AsideRight.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="footer-first-part"> <span> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/tabs.svg", "alt": "Logo tabs", "width": 20, "height": 20 })} </span> <span> ${renderComponent($$result, "Image", $$Image, { "width": 54, "height": 20, "src": "/assets/isOnline.svg", "alt": "Logo online" })} </span> <span> ${renderComponent($$result, "Image", $$Image, { "width": 64, "height": 20, "src": "/assets/console.svg", "alt": "Logo console" })} </span> </div> </footer> `;
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/Footer.astro", undefined);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-home" data-astro-cid-xhaoqxbd> <div class="section-home-first-section" data-astro-cid-xhaoqxbd> <header class="section-home-first-section-header" data-astro-cid-xhaoqxbd> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/home-header.svg", "height": 25, "width": 289, "alt": "header home", "data-astro-cid-xhaoqxbd": true })} </header> <article class="section-home-first-section-article" data-astro-cid-xhaoqxbd> <header class="section-home-first-section-article-header" data-astro-cid-xhaoqxbd> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/bro-yellow.svg", "width": 245, "height": 222, "alt": "Image create what you have in mind", "data-astro-cid-xhaoqxbd": true })} </header> <main data-astro-cid-xhaoqxbd> <div class="container-info-article" data-astro-cid-xhaoqxbd> <h4 class="section-home-first-section-article-title" data-astro-cid-xhaoqxbd>
Create what you have in mind
</h4> <p class="section-home-first-section-article-paragraph" data-astro-cid-xhaoqxbd>
Your ideas can come to life, don't look for how I do it
                        but who can do it. You will save time and money.
</p> <button class="start-project" data-astro-cid-xhaoqxbd>Let's start a project</button> </div> </main> </article> </div> <div class="section-home-second-section" data-astro-cid-xhaoqxbd> <article data-astro-cid-xhaoqxbd> <header data-astro-cid-xhaoqxbd> <h1 data-astro-cid-xhaoqxbd>Jerson Tapias</h1> <h4 data-astro-cid-xhaoqxbd>
I’m a <span class="profession" data-astro-cid-xhaoqxbd>software</span> developer
</h4> </header> <main data-astro-cid-xhaoqxbd> <p data-astro-cid-xhaoqxbd>
I make your ideas come true. Regardless of the technology,
                    my approach focuses on <span data-astro-cid-xhaoqxbd>adding value to the product.</span> During my free time I like to share knowledge through my social
                    networks, as I think this is for everyone.
</p> <div class="socials" data-astro-cid-xhaoqxbd> <a class="tooltip-container" target="_blank" href="https://www.linkedin.com/in/jerson-tapias/" data-astro-cid-xhaoqxbd> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/linkedin.svg", "width": 47, "height": 47, "alt": "icon linkedin", "data-astro-cid-xhaoqxbd": true })} <span class="tooltip-text" data-astro-cid-xhaoqxbd>LinkedIn</span> </a> <a class="tooltip-container" href="https://github.com/programadorisgod" target="_blank" data-astro-cid-xhaoqxbd> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/github.svg", "width": 47, "height": 47, "alt": "icon github", "data-astro-cid-xhaoqxbd": true })} <span class="tooltip-text" data-astro-cid-xhaoqxbd>GitHub</span> </a> <a class="tooltip-container" data-astro-cid-xhaoqxbd> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/cv.svg", "width": 47, "height": 47, "alt": "icon cv", "data-astro-cid-xhaoqxbd": true })} <span class="tooltip-text" data-astro-cid-xhaoqxbd>Currículum</span> </a> </div> </main> </article> <div class="avatar" data-astro-cid-xhaoqxbd> ${renderComponent($$result, "Image", $$Image, { "src": "/assets/iam.svg", "alt": "avatar", "width": 275, "height": 500, "data-astro-cid-xhaoqxbd": true })} </div> </div> </section>  ${renderScript($$result, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/Home.astro?astro&type=script&index=0&lang.ts")}`;
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/Home.astro", undefined);

const $$Astro$3 = createAstro();
const $$HeaderSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeaderSection;
  const { key, filter, title, url, method = "GET", description = "Description" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-cdox5dkr> <div data-astro-cid-cdox5dkr> <h2 data-astro-cid-cdox5dkr>${title}</h2> </div> <div class="request_projects" data-astro-cid-cdox5dkr> <div class="request_projects_search" data-astro-cid-cdox5dkr> <div data-astro-cid-cdox5dkr> <span data-astro-cid-cdox5dkr>${method}</span> <input class="search" type="text" disabled${addAttribute(url, "value")} data-astro-cid-cdox5dkr> </div> <button class="send" data-astro-cid-cdox5dkr> Send </button> </div> </div> <div class="table-container" data-astro-cid-cdox5dkr> <span data-astro-cid-cdox5dkr>Params</span> <table id="editableTable" data-astro-cid-cdox5dkr> <thead data-astro-cid-cdox5dkr> <tr data-astro-cid-cdox5dkr> <th data-astro-cid-cdox5dkr>Key</th> <th data-astro-cid-cdox5dkr>Value</th> <th data-astro-cid-cdox5dkr>Description</th> </tr> </thead> <tbody data-astro-cid-cdox5dkr> <tr data-astro-cid-cdox5dkr> <td data-astro-cid-cdox5dkr>${key}</td> <td data-astro-cid-cdox5dkr>${filter}</td> <td data-astro-cid-cdox5dkr>${description}</td> </tr> </tbody> </table> </div> </header>  ${renderScript($$result, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/HeaderSection.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/HeaderSection.astro?astro&type=script&index=1&lang.ts")}`;
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/HeaderSection.astro", undefined);

const $$Astro$2 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main class="container"> <div class="project-list"> ${items.map((item) => renderTemplate`<article class="card-item"> <header> ${item?.duration ? renderTemplate`<span>${item?.duration}</span>` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": `/assets/${item.img}`, "alt": `Image project:${item.title}`, "width": 130, "height": 110, "class": "project-image", "loading": "lazy" })}`} </header> <div class="project-content"> <h4 class="project-title"> ${item.title ? item.title : `${item.position} \xB7 ${item.company}`} <span> ${renderComponent($$result, "Image", $$Image, { "src": `/assets/arrow-up-right.svg`, "alt": `Image arrow`, "width": 20, "height": 20, "class": "arrow-image" })} </span> </h4> <p class="project-description">${item.description}</p> <footer class="project-tags"> ${item.tecnologies.map((t) => renderTemplate`<span>${t}</span>`)} </footer> </div> </article>`)} </div> </main> `;
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/Card.astro", undefined);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const items = [
    {
      title: "Proyecto 1",
      description: "Descripci\xF3n del proyecto 1.Descripci\xF3n del proyecto 1. Descripci\xF3n del proyecto 1. Descripci\xF3n del proyecto 1.",
      tecnologies: ["Svelte", "Firebase"],
      img: "ua.jpg",
      year: undefined
    },
    {
      title: "Proyecto 2",
      description: "Descripci\xF3n del proyecto 2.",
      tecnologies: ["Node.js", "Express", "Mongo DB"],
      img: "3.jpg",
      year: undefined
    },
    {
      title: "Proyecto 3",
      description: "Descripci\xF3n del proyecto 1Descripci\xF3n del proyecto 1Descripci\xF3n del proyecto 1Descripci\xF3n del proyecto 1Descripci\xF3n del proyecto 1.",
      tecnologies: ["Node.js", "Express", "Mongo DB", "Svelte"],
      img: "ua.jpg",
      year: undefined
    },
    {
      title: "Proyecto 4",
      description: "Descripci\xF3n del proyecto 2.",
      tecnologies: ["Node.js", "Express", "Mongo DB", "Svelte"],
      img: "web scrapping.jpg",
      year: undefined
    }
  ];
  const props = {
    title: "Projects",
    url: "https://jerson-tapias/projects/all",
    key: "projects",
    filter: "all"
  };
  return renderTemplate`${maybeRenderHead()}<section class="projects" id="Projects"> ${renderComponent($$result, "HeaderSection", $$HeaderSection, { ...props })} ${renderComponent($$result, "Card", $$Card, { "items": items })} </section> `;
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/Projects.astro", undefined);

const $$Astro$1 = createAstro();
const $$History = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$History;
  const experiences = [
    {
      position: "Frontend Developer",
      company: "Tech Solutions",
      duration: "Jan 2020 - Present",
      description: "Development and maintenance of web applications using React and Astro.",
      title: "",
      tecnologies: ["Svelte", "React", "Firebase", "TypeScript", "Nodejs"],
      img: ""
    },
    {
      position: "Software Engineer",
      company: "Innovatech",
      duration: "Jun 2017 - Dec 2019",
      description: "Implementation of backend solutions with Node.js and database management.",
      title: "",
      tecnologies: [],
      img: ""
    },
    {
      position: "Development Intern",
      company: "StartUp XYZ",
      duration: "Jan 2016 - May 2017",
      description: "Assistance in mobile application development and software testing.",
      title: "",
      tecnologies: [],
      img: ""
    }
  ];
  const props = {
    title: "Experience",
    url: "https://jerson-tapias/experience",
    key: "experience",
    filter: "all"
  };
  return renderTemplate`${maybeRenderHead()}<section class="history" id="History"> ${renderComponent($$result, "HeaderSection", $$HeaderSection, { ...props })} ${renderComponent($$result, "Card", $$Card, { "items": experiences })} </section> `;
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/History.astro", undefined);

const $$ContactMe = createComponent(async ($$result, $$props, $$slots) => {
  const props = {
    title: "Contact Me",
    url: "https://jerson-tapias/contact/me",
    key: "contact",
    filter: "me",
    method: "POST",
    description: `Let's start working together`
  };
  return renderTemplate`${maybeRenderHead()}<section id="contact-me" class="contact-section" data-astro-cid-uesty5gv> ${renderComponent($$result, "HeaderSection", $$HeaderSection, { ...props, "data-astro-cid-uesty5gv": true })} <form action="#" method="POST" class="contact-form" data-astro-cid-uesty5gv> <div class="form-group" data-astro-cid-uesty5gv> <label for="name" data-astro-cid-uesty5gv>Nombre</label> <input type="text" id="name" name="name" required placeholder="Your name" data-astro-cid-uesty5gv> </div> <div class="form-group" data-astro-cid-uesty5gv> <label for="email" data-astro-cid-uesty5gv>Correo Electrónico</label> <input type="email" id="email" name="email" required placeholder="example@exmaple.com" data-astro-cid-uesty5gv> </div> <div class="form-group" data-astro-cid-uesty5gv> <label for="message" data-astro-cid-uesty5gv>Mensaje</label> <textarea id="message" name="message" rows="5" required placeholder="Your message" data-astro-cid-uesty5gv></textarea> </div> <button type="submit" class="sendEmail" data-astro-cid-uesty5gv>Enviar</button> </form> <div id="toast" class="toast hidden" data-astro-cid-uesty5gv></div>  </section> ${renderScript($$result, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/ContactMe.astro?astro&type=script&index=0&lang.ts")}`;
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/components/ContactMe.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const THEME = {
    theme: "theme",
    light: "light",
    dark: "dark"
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>Camidev</title>", '</head> <body class="hidden" data-theme="dark"> <div class="section-main"> ', " ", " ", ' <main class="main-content"> ', " ", " ", " ", " </main> ", " ", " </div> ", " <script>(function(){", "\n    const savedTheme = localStorage.getItem(THEME.theme) || THEME.light\n\n    document.body?.setAttribute('data-theme', savedTheme)\n\n    document.body.style.transition = 'none'\n\n    window.addEventListener('DOMContentLoaded', () => {\n        document.body.classList.remove('hidden')\n        document.body.style.transition = ''\n    })\n})();<\/script> </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "SubHeader", $$SubHeader, {}), renderComponent($$result, "AsideLeft", $$AsideLeft, {}), renderComponent($$result, "Home", $$Home, {}), renderComponent($$result, "Projects", $$Projects, {}), renderComponent($$result, "History", $$History, {}), renderComponent($$result, "ContactMe", $$ContactMe, {}), renderComponent($$result, "AsideRight", $$AsideRight, {}), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ THEME }));
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/layouts/BaseLayout.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {})}`;
}, "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/pages/index.astro", undefined);

const $$file = "/media/camidev/Nuevo vol/personal projects/portafolio/Resume/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
