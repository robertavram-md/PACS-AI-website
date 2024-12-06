<script lang="ts">
  export let feature: {
    title: string;
    description: string;
    icon: string;
  };
</script>

<div class="relative">
  <dt>
    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-background">
      <!-- Icon would be imported from a separate icons component -->
    </div>
    <p class="ml-16 text-lg leading-6 font-medium text-white">{feature.title}</p>
  </dt>
  <dd class="mt-2 ml-16 text-base text-gray-300">
    {feature.description}
  </dd>
</div>