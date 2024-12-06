import { c as create_ssr_component, v as validate_component, e as escape, f as each, b as add_attribute } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Button.js";
import { F as FEATURES, C as CASE_STUDIES, T as TECH_STACK, P as PRICING_TIERS } from "../../chunks/constants.js";
import { S as SectionHeading } from "../../chunks/SectionHeading.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative bg-background overflow-hidden"><div class="max-w-7xl mx-auto"><div class="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"><main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"><div class="sm:text-center lg:text-left"><h1 class="heading-1" data-svelte-h="svelte-11j14nv"><span class="block xl:inline">Advanced AI for</span> <span class="block text-secondary xl:inline">Medical Imaging</span></h1> <p class="mt-3 text-lg text-gray-300 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0" data-svelte-h="svelte-h2oi2v">Enhance physician workflow with state-of-the-art AI assistance. HIPAA-compliant, clinically validated, and seamlessly integrated with your existing PACS.</p> <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"><div class="rounded-md shadow">${validate_component(Button, "Button").$$render($$result, { href: "/demo" }, {}, {
    default: () => {
      return `Get Started`;
    }
  })}</div> <div class="mt-3 sm:mt-0 sm:ml-3">${validate_component(Button, "Button").$$render($$result, { href: "/research", variant: "secondary" }, {}, {
    default: () => {
      return `View Research`;
    }
  })}</div></div></div></main></div></div></div>`;
});
const FeatureCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { feature } = $$props;
  if ($$props.feature === void 0 && $$bindings.feature && feature !== void 0) $$bindings.feature(feature);
  return `<div class="relative"><dt><div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-background" data-svelte-h="svelte-zxrpg6"></div> <p class="ml-16 text-lg leading-6 font-medium text-white">${escape(feature.title)}</p></dt> <dd class="mt-2 ml-16 text-base text-gray-300">${escape(feature.description)}</dd></div>`;
});
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="py-12 bg-background"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">${validate_component(SectionHeading, "SectionHeading").$$render(
    $$result,
    {
      subtitle: "Features",
      title: "Advanced Medical Imaging AI",
      description: "Enhance your diagnostic capabilities with our comprehensive AI-powered platform."
    },
    {},
    {}
  )} <div class="mt-10"><div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">${each(FEATURES, (feature) => {
    return `${validate_component(FeatureCard, "FeatureCard").$$render($$result, { feature }, {}, {})}`;
  })}</div></div></div></div>`;
});
const CaseStudyCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { study } = $$props;
  if ($$props.study === void 0 && $$bindings.study && study !== void 0) $$bindings.study(study);
  return `<div class="bg-background rounded-lg shadow-lg overflow-hidden border border-gray-700"><div class="p-6"><h3 class="text-xl font-semibold text-white">${escape(study.title)}</h3> <p class="text-primary mt-1">${escape(study.institution)}</p> <p class="mt-3 text-gray-300">${escape(study.description)}</p> ${study.stats ? `<div class="mt-6 grid grid-cols-2 gap-4">${each(study.stats, (stat) => {
    return `<div><p class="text-2xl font-bold text-primary">${escape(stat.value)}</p> <p class="text-sm text-gray-300">${escape(stat.label)}</p> </div>`;
  })}</div>` : ``} ${study.citation ? `<p class="mt-4 text-sm text-gray-400">${escape(study.citation)}</p>` : ``} <a${add_attribute("href", study.link || "/case-studies", 0)}${add_attribute("target", study.link ? "_blank" : "_self", 0)}${add_attribute("rel", study.link ? "noopener noreferrer" : "", 0)} class="mt-4 inline-flex items-center text-primary hover:text-primary-hover">${escape(study.link ? "Read the paper" : "Read full case study")} <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div></div>`;
});
const CaseStudies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-background-light py-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">${validate_component(SectionHeading, "SectionHeading").$$render(
    $$result,
    {
      subtitle: "Case Studies",
      title: "Proven Results in Clinical Settings"
    },
    {},
    {}
  )} <div class="grid grid-cols-1 gap-8 md:grid-cols-2">${each(CASE_STUDIES, (study) => {
    return `${validate_component(CaseStudyCard, "CaseStudyCard").$$render($$result, { study }, {}, {})}`;
  })}</div></div></section>`;
});
const TechStack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="py-16 bg-background"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">${validate_component(SectionHeading, "SectionHeading").$$render(
    $$result,
    {
      subtitle: "Technology",
      title: "Built for Scale and Security",
      description: "Our containerized architecture ensures rapid deployment, consistent performance, and seamless scalability."
    },
    {},
    {}
  )} <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">${each(TECH_STACK, (tech) => {
    return `<div class="bg-background-light p-6 rounded-lg border border-gray-700"><div class="h-12 w-12 rounded-md bg-primary flex items-center justify-center mb-4" data-svelte-h="svelte-1m3k7jb"></div> <h3 class="text-xl font-semibold text-white mb-2">${escape(tech.title)}</h3> <p class="text-gray-300">${escape(tech.description)}</p> </div>`;
  })}</div></div></section>`;
});
const Pricing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="py-16 bg-background-light"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">${validate_component(SectionHeading, "SectionHeading").$$render(
    $$result,
    {
      subtitle: "Pricing",
      title: "Solutions for Every Scale",
      description: "Flexible options for research institutions and healthcare providers."
    },
    {},
    {}
  )} <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">${each(PRICING_TIERS, (tier) => {
    return `<div class="bg-background p-8 rounded-lg border border-gray-700 flex flex-col"><h3 class="text-xl font-semibold text-white">${escape(tier.name)}</h3> <p class="mt-2 text-gray-400">${escape(tier.description)}</p> <div class="mt-4"><span class="text-2xl font-bold text-white">${escape(tier.price)}</span> <span class="text-gray-300">/${escape(tier.period)}</span></div> ${tier.disclaimer ? `<p class="mt-3 text-sm text-yellow-500">${escape(tier.disclaimer)}</p>` : ``} <ul class="mt-6 space-y-4 flex-grow">${each(tier.features, (feature) => {
      return `<li class="flex items-start"><svg class="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span class="text-gray-300">${escape(feature)}</span> </li>`;
    })}</ul> <div class="mt-8">${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: "/contact",
        variant: "primary",
        class: "w-full"
      },
      {},
      {
        default: () => {
          return `Contact Sales`;
        }
      }
    )}</div> </div>`;
  })}</div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-16fr1n6_START -->${$$result.title = `<title>PACS.ai - Advanced Medical Imaging AI Platform</title>`, ""}<meta name="description" content="Enterprise-grade AI-powered medical imaging platform for healthcare providers. HIPAA-compliant, clinically validated, and seamlessly integrated."><!-- HEAD_svelte-16fr1n6_END -->`, ""} <div class="min-h-screen bg-background">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Features, "Features").$$render($$result, {}, {}, {})} ${validate_component(TechStack, "TechStack").$$render($$result, {}, {}, {})} ${validate_component(CaseStudies, "CaseStudies").$$render($$result, {}, {}, {})} ${validate_component(Pricing, "Pricing").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
