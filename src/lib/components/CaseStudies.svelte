<script lang="ts">
  const caseStudies = [
    {
      title: 'Improved Diagnostic Accuracy',
      institution: 'Major Teaching Hospital',
      description: '30% reduction in diagnostic time with 99.8% accuracy rate',
      image: '/images/case-study-1.jpg'
    },
    {
      title: 'Workflow Optimization',
      institution: 'Regional Healthcare Network',
      description: '45% increase in radiologist productivity',
      image: '/images/case-study-2.jpg'
    }
  ];
</script>

<section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center mb-12">
      <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Case Studies</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Proven Results in Clinical Settings
      </p>
    </div>
    
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      {#each caseStudies as study}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900">{study.title}</h3>
            <p class="text-indigo-600 mt-1">{study.institution}</p>
            <p class="mt-3 text-gray-600">{study.description}</p>
            <a href="/case-studies" class="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
              Read full case study
              <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>