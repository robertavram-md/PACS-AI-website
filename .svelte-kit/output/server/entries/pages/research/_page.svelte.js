import { c as create_ssr_component, v as validate_component, e as escape, f as each, b as add_attribute } from "../../../chunks/ssr.js";
import { R as RESEARCH_HIGHLIGHTS } from "../../../chunks/constants.js";
import { S as SectionHeading } from "../../../chunks/SectionHeading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-6zk122_START -->${$$result.title = `<title>Research - PACS.ai</title>`, ""}<meta name="description" content="Peer-reviewed research validating PACS.ai's AI-powered medical imaging analysis platform."><!-- HEAD_svelte-6zk122_END -->`, ""} <div class="min-h-screen bg-background py-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">${validate_component(SectionHeading, "SectionHeading").$$render(
    $$result,
    {
      subtitle: "Research",
      title: "Clinical Validation",
      description: "Our platform is backed by peer-reviewed research demonstrating clinical efficacy and improved outcomes."
    },
    {},
    {}
  )} <div class="mt-12"><div class="bg-background-light rounded-lg p-8 border border-gray-700"><h2 class="text-2xl font-bold text-white mb-4">${escape(RESEARCH_HIGHLIGHTS.cathef.title)}</h2> <p class="text-primary mb-2">${escape(RESEARCH_HIGHLIGHTS.cathef.authors)}</p> <p class="text-gray-400 mb-6">${escape(RESEARCH_HIGHLIGHTS.cathef.journal)}, ${escape(RESEARCH_HIGHLIGHTS.cathef.year)}</p> <p class="text-gray-300 mb-6">${escape(RESEARCH_HIGHLIGHTS.cathef.abstract)}</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">${each(RESEARCH_HIGHLIGHTS.cathef.highlights, (highlight) => {
    return `<div class="bg-background p-4 rounded-lg border border-gray-700"><p class="text-gray-300">${escape(highlight)}</p> </div>`;
  })}</div> <a${add_attribute("href", RESEARCH_HIGHLIGHTS.cathef.link, 0)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-primary hover:text-primary-hover" data-svelte-h="svelte-18m2zbi">Read the full paper
          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div></div></div></div>`;
});
export {
  Page as default
};
