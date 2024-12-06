<script lang="ts">
  import { RESEARCH_HIGHLIGHTS } from '$lib/utils/constants';
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
</script>

<svelte:head>
  <title>Research - PACS.ai</title>
  <meta name="description" content="Peer-reviewed research validating PACS.ai's AI-powered medical imaging analysis platform." />
</svelte:head>

<div class="min-h-screen bg-background py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      subtitle="Research"
      title="Clinical Validation"
      description="Our platform is backed by peer-reviewed research demonstrating clinical efficacy and improved outcomes."
    />

    <div class="mt-12">
      <div class="bg-background-light rounded-lg p-8 border border-gray-700">
        <h2 class="text-2xl font-bold text-white mb-4">{RESEARCH_HIGHLIGHTS.cathef.title}</h2>
        <p class="text-primary mb-2">{RESEARCH_HIGHLIGHTS.cathef.authors}</p>
        <p class="text-gray-400 mb-6">{RESEARCH_HIGHLIGHTS.cathef.journal}, {RESEARCH_HIGHLIGHTS.cathef.year}</p>
        
        <p class="text-gray-300 mb-6">{RESEARCH_HIGHLIGHTS.cathef.abstract}</p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {#each RESEARCH_HIGHLIGHTS.cathef.highlights as highlight}
            <div class="bg-background p-4 rounded-lg border border-gray-700">
              <p class="text-gray-300">{highlight}</p>
            </div>
          {/each}
        </div>

        <a 
          href={RESEARCH_HIGHLIGHTS.cathef.link}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center text-primary hover:text-primary-hover"
        >
          Read the full paper
          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>