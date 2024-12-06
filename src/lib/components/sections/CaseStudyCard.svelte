<script lang="ts">
  export let study: {
    title: string;
    institution: string;
    description: string;
    image: string;
    stats?: Array<{ value: string; label: string; }>;
    link?: string;
    citation?: string;
  };
</script>

<div class="bg-background rounded-lg shadow-lg overflow-hidden border border-gray-700">
  <div class="p-6">
    <h3 class="text-xl font-semibold text-white">{study.title}</h3>
    <p class="text-primary mt-1">{study.institution}</p>
    <p class="mt-3 text-gray-300">{study.description}</p>
    
    {#if study.stats}
      <div class="mt-6 grid grid-cols-2 gap-4">
        {#each study.stats as stat}
          <div>
            <p class="text-2xl font-bold text-primary">{stat.value}</p>
            <p class="text-sm text-gray-300">{stat.label}</p>
          </div>
        {/each}
      </div>
    {/if}

    {#if study.citation}
      <p class="mt-4 text-sm text-gray-400">{study.citation}</p>
    {/if}
    
    <a 
      href={study.link || "/case-studies"} 
      target={study.link ? "_blank" : "_self"}
      rel={study.link ? "noopener noreferrer" : ""}
      class="mt-4 inline-flex items-center text-primary hover:text-primary-hover"
    >
      {study.link ? 'Read the paper' : 'Read full case study'}
      <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
      </svg>
    </a>
  </div>
</div>