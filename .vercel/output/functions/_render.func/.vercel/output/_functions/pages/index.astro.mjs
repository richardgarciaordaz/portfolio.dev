/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro, b as addAttribute, e as renderHead, f as renderComponent, g as renderSlot, s as spreadAttributes, F as Fragment } from '../chunks/astro/server_B-KxyyDg.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="opacity-80 m-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"> <div class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">© ${currentYear} <a href="https://www.linkedin.com/in/richard-garcia-ordaz/" class="hover:underline">Richard García</a>. 
      All rights reserved
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> <li> <a href="/#about-me" class="hover:underline me-4 md:me-6">About me</a> </li> <li> <a id="contact" href="mailto:rchrdgrcordaz@gmail.com" class="hover:underline">Contact</a> </li> </ul> </div> </footer>`;
}, "/workspaces/portfolio.dev/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center py-5 w-full xl:w-[1120px] mx-auto"> <div class="ml-3"> <!-- <img class="rounded-full size-12" src="\\projects\\me.jpg" alt="richard" /> --> </div> <nav class="flex flex-row gap-x-10 opacity-80"> <a href="#top">Home</a> <a href="#experiencia">Experience </a> <a href="#projects">Projects</a> <a href="#about-me">About me</a> <a href="#contact">Contact</a> </nav> </header>`;
}, "/workspaces/portfolio.dev/src/components/Header.astro", void 0);

const $$Astro$e = createAstro("https://richardgarciaordaz.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/workspaces/portfolio.dev/src/layouts/Layout.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">${renderSlot($$result, $$slots["default"])} </span>`;
}, "/workspaces/portfolio.dev/src/components/Badge.astro", void 0);

const $$Astro$d = createAstro("https://richardgarciaordaz.github.io");
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(` ${className} w-full lg:w-[740px] pb-24`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/workspaces/portfolio.dev/src/components/SectionContainer.astro", void 0);

const $$Astro$c = createAstro("https://richardgarciaordaz.github.io");
const $$GithubIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$GithubIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f0f0f0" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path> </svg>`;
}, "/workspaces/portfolio.dev/src/components/icons/GithubIcon.astro", void 0);

const $$Astro$b = createAstro("https://richardgarciaordaz.github.io");
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a class="
rounded-full border-2 border-white 
bg-gradient-to-r from-gray-900 to-black 
py-1 px-2 md:py-2 lg:px-4
hover:bg-gradient-to-r from-cyan-500  hover:scale-110 hover:shadow-2xl
transition duration-300 ease-in-out shadow-md 
flex justify-center items-center gap-x-2"${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/workspaces/portfolio.dev/src/components/SocialPill.astro", void 0);

const $$Astro$a = createAstro("https://richardgarciaordaz.github.io");
const $$LinkedinIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$LinkedinIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f0f0f0" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path> <path d="M8 11l0 5"></path> <path d="M8 8l0 .01"></path> <path d="M12 16l0 -5"></path> <path d="M16 16v-3a2 2 0 0 0 -4 0"></path> </svg>`;
}, "/workspaces/portfolio.dev/src/components/icons/LinkedinIcon.astro", void 0);

const $$Astro$9 = createAstro("https://richardgarciaordaz.github.io");
const $$MailIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MailIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f0f0f0" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path> <path d="M3 6l9 6l9 -6"></path> <path d="M15 18h6"></path> <path d="M18 15l3 3l-3 3"></path> </svg>`;
}, "/workspaces/portfolio.dev/src/components/icons/MailIcon.astro", void 0);

const $$Astro$8 = createAstro("https://richardgarciaordaz.github.io");
const $$LinkInline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" target="_blank" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/workspaces/portfolio.dev/src/components/LinkInline.astro", void 0);

const $$Astro$7 = createAstro("https://richardgarciaordaz.github.io");
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white-50/90 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-400 mt-2">${title}</h3> <h4 class="font-semibold text-xl text-gray-300 dark:text-white">${company}</h4> <time class="p-0 m-0 text-sm text-gray-400/80 text-sky-200/90">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-200 dark:text-gray-300 md:col-span-3 text-pretty"> ${description} ${link && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInline, { "href": link, "target": "_blank" }, { "default": ($$result2) => renderTemplate`
Know more${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> ` })} </svg> ` })}`} </div> </div>`;
}, "/workspaces/portfolio.dev/src/components/ExperienceItem.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const EXPERIENCIE = [
    {
      date: "At the moment...",
      title: "SEO Advisor & User Experience Designer",
      company: "Remote",
      description: "Expert in optimizing the online presence of businesses through SEO strategies and effective UX design. I am passionate about helping companies achieve their business goals through a combination of data analysis, high-quality content creation, and designing intuitive and engaging interfaces.."
    },
    {
      date: "June 2022 - June 2023 ",
      title: "User Experience Designer",
      company: "Dey",
      description: "I optimize the user experience through research, iterative design and collaboration. I focus on understanding user needs, designing intuitive interfaces and conducting testing to ensure an effective final product.",
      link: "https://www.dey.mx/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPERIENCIE.map((experiencie) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experiencie })} </li>`)} </ol>`;
}, "/workspaces/portfolio.dev/src/components/Experience.astro", void 0);

const $$Astro$6 = createAstro("https://richardgarciaordaz.github.io");
const $$NextJs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NextJs;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_408_139" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"> <circle cx="90" cy="90" r="90" fill="black"></circle> </mask> <g mask="url(#mask0_408_139)"> <circle cx="90" cy="90" r="87" fill="black" stroke="white" stroke-width="6"></circle> <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"></path> <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"></rect> </g> <defs> <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg>`;
}, "/workspaces/portfolio.dev/src/components/icons/NextJs.astro", void 0);

const $$Astro$5 = createAstro("https://richardgarciaordaz.github.io");
const $$Html = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-html5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path> <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path> </svg>`;
}, "/workspaces/portfolio.dev/src/components/icons/Html.astro", void 0);

const $$Astro$4 = createAstro("https://richardgarciaordaz.github.io");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "/workspaces/portfolio.dev/src/components/icons/Link.astro", void 0);

const $$Astro$3 = createAstro("https://richardgarciaordaz.github.io");
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/workspaces/portfolio.dev/src/components/icons/LinkButton.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    HTML: {
      name: "HTML-5",
      class: "bg-[#E5532D] text-white",
      icon: $$Html
    },
    JS: {
      name: "JS",
      class: "bg-[#F7E025] text-white"
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: $$NextJs
    }
  };
  const PROJECTS = [
    {
      title: 'Online Store:  "La Pesebrera"',
      description: "I wanted to create an easy-to-use online store while maintaining the recognizable brand aesthetic. The shot shows a product page. I kept the black and white color scheme of the current site, but added some purple touches to make it less contrasting and aggressive. Now the home page looks more like a catalog of branded products.",
      link: "https://lapesebrera.com/",
      image: "/portfolio.dev/projects/caribbean.png",
      tags: [TAGS.HTML, TAGS.TAILWIND, TAGS.JS]
    },
    {
      title: "Redesign of the application \u{1F4B0} Salary on Demand ",
      description: "During my five-month tenure as a UX/UI Designer at Payer in 2023, I played a key role in the redesign of the \u201CPayer Salary on Demand\u201D app. The goal was to provide users with improved financial control and create a more enjoyable digital banking experience. ",
      link: "https://www.figma.com/proto/20oDrylRKMlrhLsqZatwaE/UX-CASE-STUDY-DEY--2.0?page-id=2%3A5&type=design&node-id=1528-1272&viewport=3072%2C-1777%2C0.19&scaling=contain&starting-point-node-id=1528%3A1272&show-proto-sidebar=1",
      image: "/portfolio.dev/projects/payerMockup.png",
      tags: [TAGS.HTML, TAGS.TAILWIND]
    },
    {
      title: 'Online Store:  "La Pesebrera"',
      description: "I wanted to create an easy-to-use online store while maintaining the recognizable brand aesthetic. The shot shows a product page. I kept the black and white color scheme of the current site, but added some purple touches to make it less contrasting and aggressive. Now the home page looks more like a catalog of branded products.",
      link: "https://caribbeansuntours.com/",
      image: "/portfolio.dev/projects/pesebrera.jpg",
      tags: [TAGS.HTML, TAGS.TAILWIND, TAGS.JS]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${PROJECTS.map(
    ({ image, title, description, tags, link }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="mas sobre mis proyectos" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-yellow-400"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}>  ${tag.name} </span> </li>`)} </ul> </div> <div class="mt-4"> <p class="text-gray-200 dark:text-gray-300 md:col-span-3 text-pretty"> ${description} </p> </div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link, "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4" })}
Preview
` })}`} </footer> </div></article>`
  )} </div>`;
}, "/workspaces/portfolio.dev/src/components/Projects.astro", void 0);

const $$Astro$2 = createAstro("https://richardgarciaordaz.github.io");
const $$WorkIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WorkIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f0f0f0" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 12l2 2l4 -4"></path> <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path> </svg>`;
}, "/workspaces/portfolio.dev/src/components/icons/WorkIcon.astro", void 0);

const $$Astro$1 = createAstro("https://richardgarciaordaz.github.io");
const $$CodeIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CodeIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#f0f0f0" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 8l-4 4l4 4"></path> <path d="M17 8l4 4l-4 4"></path> <path d="M14 4l-4 16"></path> </svg>`;
}, "/workspaces/portfolio.dev/src/components/icons/CodeIcon.astro", void 0);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Richard Garc\xEDa";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1 text-gray-200 dark:text-gray-300 md:col-span-3 text-pretty"> <p>
My name is  Richard García Software Developer with a UX Design Focus, building user-centric products that solve real problems. I bridge the gap between design and development, leveraging my skills in both disciplines to <strong>
create intuitive and visually appealing software solutions.</strong>.
</p> <p>
Highly motivated and a team player, I'm passionate about tackling complex challenges through code and design <strong>, ultimately creating a positive impact on users' lives. A lifelong learner, I'm constantly seeking opportunities to expand my skill set.</strong> </p> <p>
If you're looking for a skilled and motivated software developer with a UX design focus <strong> <em class="italic"> I'd love to connect with you.</em> </strong></p><strong></strong></div><strong> <img width="500" height="500" src="/portfolio.dev/projects/me.jpg"${addAttribute(personalImageAlt, "alt")} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style="object-position: 50% 50%"> </strong></article>`;
}, "/workspaces/portfolio.dev/src/components/AboutMe.astro", void 0);

const $$Astro = createAstro("https://richardgarciaordaz.github.io");
const $$ProfileCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "/workspaces/portfolio.dev/src/components/icons/ProfileCheck.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio Richard Garc\xEDa - Web developer and programmer with 5 years of experience", "description": "Hire Richard Garc\xEDa to create your web or mobile app. Web developer . Specialized in creating unique applications" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4 m-auto "> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 " }, { "default": ($$result3) => renderTemplate` <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10 ">
Hello, I'm Richard! <a href="https://www.linkedin.com/in/richard-garcia-ordaz/" target="_blank" rel="noopener"></a><div class="flex justify-center items-center"><a href="https://www.linkedin.com/in/richard-garcia-ordaz/" target="_blank" rel="noopener"> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Available to work` })} </a> </div> </h1> <h2 class="text-xl opacity-80 text-wrap max-w-[700px]"><span>+5 years of experience</span>. <span class=" text-yellow-200/90 opacity-80">Web Developer and Marketing Specialist</span>. <br><span class="opacity-80">From Merida, Venezuela. </span>Specialized in creating unique applications</h2> <nav class="flex gap-4 mt-8 flex-wrap"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/richard-garcia-ordaz/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedinIcon", $$LinkedinIcon, { "class": "text-white size-4 md:size-6" })}
LinkedIn
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://github.com/richardgarciaordaz" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GithubIcon", $$GithubIcon, { "class": "text-white size-4 md:size-6" })}
Github
` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "mailto:rchrdgrcordaz@gmail.com" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$MailIcon, { "class": "text-white size-4 md:size-6" })}
rchrdgrcordaz@gmail.com
` })} </nav> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "WorkIcon", $$WorkIcon, { "class": "size-7" })}
Work experience</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "projects" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "CodeIcon", $$CodeIcon, { "class": "size-7" })}
Projects</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "about-me" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "ProfileCheck", $$ProfileCheck, { "class": "size-7" })}
About me</h2> ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </main> ` })}`;
}, "/workspaces/portfolio.dev/src/pages/index.astro", void 0);

const $$file = "/workspaces/portfolio.dev/src/pages/index.astro";
const $$url = "/portfolio.dev";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
