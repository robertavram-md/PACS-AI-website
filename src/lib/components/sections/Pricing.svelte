<script lang="ts">
  import { PRICING_TIERS } from '$lib/utils/constants';
  import Button from '../ui/Button.svelte';
  import SectionHeading from '../ui/SectionHeading.svelte';
</script>

<section class="py-16 bg-background-light">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      subtitle="Pricing"
      title="Solutions for Every Scale"
      description="Flexible options for research institutions and healthcare providers."
    />
    
    <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
      {#each PRICING_TIERS as tier}
        <div class="bg-background p-8 rounded-lg border border-gray-700 flex flex-col">
          <h3 class="text-xl font-semibold text-white">{tier.name}</h3>
          <p class="mt-2 text-gray-400">{tier.description}</p>
          <div class="mt-4">
            <span class="text-2xl font-bold text-white">{tier.price}</span>
            <span class="text-gray-300">/{tier.period}</span>
          </div>
          
          {#if tier.disclaimer}
            <p class="mt-3 text-sm text-yellow-500">{tier.disclaimer}</p>
          {/if}
          
          <ul class="mt-6 space-y-4 flex-grow">
            {#each tier.features as feature}
              <li class="flex items-start">
                <svg class="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-300">{feature}</span>
              </li>
            {/each}
          </ul>
          
          <div class="mt-8">
            <Button href="/contact" variant="primary" class="w-full">Contact Sales</Button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>