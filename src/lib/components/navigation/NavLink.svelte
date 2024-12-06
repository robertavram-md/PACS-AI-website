<script lang="ts">
  export let href: string;
  export let active: boolean = false;
</script>

<a
  {href}
  class="text-base font-medium {active ? 'text-primary' : 'text-gray-300 hover:text-primary'}"
>
  <slot />
</a>