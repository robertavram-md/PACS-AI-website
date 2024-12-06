<script lang="ts">
  import { page } from '$app/stores';
  import Logo from './Logo.svelte';
  
  const navigation = [
    { name: 'Platform', href: '/platform' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Research', href: '/research' },
    { name: 'Security', href: '/security' },
    { name: 'Company', href: '/company' }
  ];
</script>

<header class="bg-white shadow-sm">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
    <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
      <div class="flex items-center">
        <a href="/">
          <Logo />
        </a>
        <div class="hidden ml-10 space-x-8 lg:block">
          {#each navigation as item}
            <a href={item.href} class="text-base font-medium text-gray-700 hover:text-indigo-600">
              {item.name}
            </a>
          {/each}
        </div>
      </div>
      <div class="ml-10 space-x-4">
        <a href="/demo" class="inline-block bg-indigo-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700">
          Request Demo
        </a>
      </div>
    </div>
  </nav>
</header>