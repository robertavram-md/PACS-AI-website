<script lang="ts">
  import { TECH_STACK } from '$lib/utils/constants';
  import SectionHeading from '../ui/SectionHeading.svelte';
</script>

<section class="py-16 bg-background">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      subtitle="Technology"
      title="Built for Scale and Security"
      description="Our containerized architecture ensures rapid deployment, consistent performance, and seamless scalability."
    />
    
    <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
      {#each TECH_STACK as tech}
        <div class="bg-background-light p-6 rounded-lg border border-gray-700">
          <div class="h-12 w-12 rounded-md bg-primary flex items-center justify-center mb-4">
            <!-- Icon placeholder -->
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">{tech.title}</h3>
          <p class="text-gray-300">{tech.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>