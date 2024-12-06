<script lang="ts">
  import { CASE_STUDIES } from '$lib/utils/constants';
  import SectionHeading from '../ui/SectionHeading.svelte';
  import CaseStudyCard from './CaseStudyCard.svelte';
</script>

<section class="bg-background-light py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      subtitle="Case Studies"
      title="Proven Results in Clinical Settings"
    />
    
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      {#each CASE_STUDIES as study}
        <CaseStudyCard {study} />
      {/each}
    </div>
  </div>
</section>