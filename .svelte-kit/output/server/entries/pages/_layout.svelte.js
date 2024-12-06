import { c as create_ssr_component, b as add_attribute, e as escape, d as subscribe, f as each, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { N as NAVIGATION_ITEMS } from "../../chunks/constants.js";
import { B as Button } from "../../chunks/Button.js";
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { active = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  return `<a${add_attribute("href", href, 0)} class="${"text-base font-medium " + escape(
    active ? "text-primary" : "text-gray-300 hover:text-primary",
    true
  )}">${slots.default ? slots.default({}) : ``}</a>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<header class="bg-background-light shadow-md"><nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top"><div class="w-full py-6 flex items-center justify-between border-b border-gray-700 lg:border-none"><div class="flex items-center"><a href="/" class="text-2xl font-bold text-white" data-svelte-h="svelte-pbezh9">PACS.ai</a> <div class="hidden ml-10 space-x-8 lg:block">${each(NAVIGATION_ITEMS, (item) => {
    return `${validate_component(NavLink, "NavLink").$$render(
      $$result,
      {
        href: item.href,
        active: $page.url.pathname === item.href
      },
      {},
      {
        default: () => {
          return `${escape(item.name)} `;
        }
      }
    )}`;
  })}</div></div> <div class="ml-10 space-x-4">${validate_component(Button, "Button").$$render($$result, { href: "/demo" }, {}, {
    default: () => {
      return `Request Demo`;
    }
  })}</div></div></nav></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
