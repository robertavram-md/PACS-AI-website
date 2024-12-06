import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "primary" } = $$props;
  let { href = void 0 } = $$props;
  let { type = "button" } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  return `${href ? `<a${add_attribute("href", href, 0)}${add_attribute("class", variant === "primary" ? "btn-primary" : "btn-secondary", 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<button${add_attribute("type", type, 0)}${add_attribute("class", variant === "primary" ? "btn-primary" : "btn-secondary", 0)}>${slots.default ? slots.default({}) : ``}</button>`}`;
});
export {
  Button as B
};
