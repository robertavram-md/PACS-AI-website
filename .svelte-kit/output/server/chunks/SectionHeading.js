import { c as create_ssr_component, e as escape } from "./ssr.js";
const SectionHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subtitle } = $$props;
  let { title } = $$props;
  let { description = void 0 } = $$props;
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  return `<div class="lg:text-center mb-12"><h2 class="text-base text-primary font-semibold tracking-wide uppercase">${escape(subtitle)}</h2> <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">${escape(title)}</p> ${description ? `<p class="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">${escape(description)}</p>` : ``}</div>`;
});
export {
  SectionHeading as S
};
