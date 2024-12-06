<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import Features from '$lib/components/sections/Features.svelte';
  import CaseStudies from '$lib/components/sections/CaseStudies.svelte';
  import TechStack from '$lib/components/sections/TechStack.svelte';
  import Pricing from '$lib/components/sections/Pricing.svelte';
</script>

<svelte:head>
  <title>PACS.ai - Advanced Medical Imaging AI Platform</title>
  <meta name="description" content="Enterprise-grade AI-powered medical imaging platform for healthcare providers. HIPAA-compliant, clinically validated, and seamlessly integrated." />
</svelte:head>

<div class="min-h-screen bg-background">
  <Hero />
  <Features />
  <TechStack />
  <CaseStudies />
  <Pricing />
</div>