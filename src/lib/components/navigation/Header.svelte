<script lang="ts">
  import { page } from '$app/stores';
  import { NAVIGATION_ITEMS } from '$lib/utils/constants';
  import NavLink from './NavLink.svelte';
  import Button from '../ui/Button.svelte';
</script>

<header class="bg-background-light shadow-md">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
    <div class="w-full py-6 flex items-center justify-between border-b border-gray-700 lg:border-none">
      <div class="flex items-center">
        <a href="/" class="text-2xl font-bold text-white">PACS.ai</a>
        <div class="hidden ml-10 space-x-8 lg:block">
          {#each NAVIGATION_ITEMS as item}
            <NavLink 
              href={item.href} 
              active={$page.url.pathname === item.href}
            >
              {item.name}
            </NavLink>
          {/each}
        </div>
      </div>
      <div class="ml-10 space-x-4">
        <Button href="/demo">Request Demo</Button>
      </div>
    </div>
  </nav>
</header>