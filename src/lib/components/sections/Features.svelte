<script lang="ts">
  import { FEATURES } from '$lib/utils/constants';
  import SectionHeading from '../ui/SectionHeading.svelte';
  import FeatureCard from './FeatureCard.svelte';
</script>

<div class="py-12 bg-background">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      subtitle="Features"
      title="Advanced Medical Imaging AI"
      description="Enhance your diagnostic capabilities with our comprehensive AI-powered platform."
    />

    <div class="mt-10">
      <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {#each FEATURES as feature}
          <FeatureCard {feature} />
        {/each}
      </div>
    </div>
  </div>
</div>