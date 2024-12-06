<script lang="ts">
  import Button from '../ui/Button.svelte';
</script>

<div class="relative bg-background overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="heading-1">
            <span class="block xl:inline">Advanced AI for</span>
            <span class="block text-secondary xl:inline">Medical Imaging</span>
          </h1>
          <p class="mt-3 text-lg text-gray-300 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
            Enhance physician workflow with state-of-the-art AI assistance. HIPAA-compliant, clinically validated, and seamlessly integrated with your existing PACS.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <Button href="/demo">Get Started</Button>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <Button href="/research" variant="secondary">View Research</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</div>