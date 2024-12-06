<script lang="ts">
  export let subtitle: string;
  export let title: string;
  export let description: string | undefined = undefined;
</script>

<div class="lg:text-center mb-12">
  <h2 class="text-base text-primary font-semibold tracking-wide uppercase">{subtitle}</h2>
  <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
    {title}
  </p>
  {#if description}
    <p class="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
      {description}
    </p>
  {/if}
</div>