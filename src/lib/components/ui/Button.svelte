<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary';
  export let href: string | undefined = undefined;
  export let type: 'button' | 'submit' = 'button';
</script>

{#if href}
  <a
    {href}
    class={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
  >
    <slot />
  </a>
{:else}
  <button
    {type}
    class={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
  >
    <slot />
  </button>
{/if}