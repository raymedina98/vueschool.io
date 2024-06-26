<script setup lang="ts">
import { computed } from 'vue'

type Hero = {
  heading?: string
  paragraph?: string
  callToAction?: string
}
const query = groq`*[_type == "hero"]{
  heading,
  paragraph,
  callToAction
} | order(_createdAt desc)[0]`
const { data: hero } = await useSanityQuery<Hero>(query)

const highlightedHeading = computed(() => {
  if (hero.value?.heading) {
    return hero.value.heading
      .replace(/(<([^>]+)>)/gi, '')
      .replace(
        /(vue.js|training)/gi,
        (match) => `<span class="text-primary">${match}</span>`
      )
  }
  return ''
})
</script>

<template>
  <main
    class="section-container mb-[6.25rem] flex flex-col items-center gap-12 lg:mb-[3.32rem] lg:flex-row lg:gap-4"
  >
    <div
      class="max-w-[21.56rem] space-y-6 px-2 text-center md:max-w-[35.625rem] md:space-y-8 lg:px-0 lg:text-start"
    >
      <h1
        v-if="highlightedHeading"
        class="text-heading-1"
        v-html="highlightedHeading"
      />
      <h1 v-else class="text-heading-1">
        Complete <span class="text-primary">Vue.js</span><br />
        <span class="text-primary">training</span><br class="block md:hidden" />
        solutions<br class="hidden md:block" />
        for companies
      </h1>
      <p class="leading-6 text-light md:text-[1.375rem] md:leading-8">
        {{
          hero?.paragraph ||
          `Training solutions designed for companies, agencies and organisations
        with developers using or who are considering using the Vue.js framework`
        }}
      </p>
      <div class="flex flex-row items-center justify-center lg:justify-start">
        <AppButton :text="hero?.callToAction || 'Talk to sales'" />
      </div>
    </div>
    <img
      src="~/assets/img/hero-illustration.svg"
      alt="Hero illustration"
      class="h-[21.5rem] min-h-[21.5rem] w-[21rem] min-w-[21rem] md:h-[38.5rem] md:min-h-[38.5rem] md:w-[37.6rem] md:min-w-[37.6rem] lg:-mr-9"
    />
  </main>
</template>
