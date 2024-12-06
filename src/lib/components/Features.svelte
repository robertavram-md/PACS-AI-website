<script lang="ts">
  const features = [
    {
      title: 'Clinical Validation',
      description: 'Peer-reviewed studies demonstrating improved diagnostic accuracy and workflow efficiency.',
      icon: 'chart'
    },
    {
      title: 'HIPAA Compliance',
      description: 'Enterprise-grade security with full HIPAA compliance and data protection.',
      icon: 'shield'
    },
    {
      title: 'Seamless Integration',
      description: 'Easy integration with existing PACS systems and clinical workflows.',
      icon: 'integration'
    },
    {
      title: 'AI-Powered Analysis',
      description: 'State-of-the-art deep learning models for accurate medical image analysis.',
      icon: 'brain'
    }
  ];
</script>

<div class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Advanced Medical Imaging AI
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Enhance your diagnostic capabilities with our comprehensive AI-powered platform.
      </p>
    </div>

    <div class="mt-10">
      <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {#each features as feature}
          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <!-- Icon would go here -->
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {feature.description}
            </dd>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>