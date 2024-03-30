<script setup lang="ts">
const workshops = [
  {
    title: 'Vue.js Fundamentals',
    description: `A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...`
  },
  {
    title: 'Vue 3 and Composition API',
    description: `Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...`
  },
  {
    title: 'Vue 3 and Composition API',
    description: `Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...`
  }
]
</script>

<template>
  <div>
    <section
      class="section-container section-container-spacing mb-14 flex flex-row items-center justify-center text-center md:mb-[4.5rem] lg:mt-40 lg:justify-between"
    >
      <h1 class="text-heading-1">Available Workshops</h1>
      <AppButton class="hidden lg:block" text="See all the workshops" />
    </section>
    <section
      class="hide-scrollbar ml-auto flex flex-row items-start gap-[30px] overflow-x-scroll sm:pl-[calc(50vw-10.7rem)] md:pl-[calc(50vw-21.5rem)] lg:pl-[calc(50vw-36.5rem)]"
    >
      <WorkshopCard
        v-for="(workshop, index) in workshops"
        :key="index"
        :title="workshop.title"
        :description="workshop.description"
        class="min-w-[21.6rem] md:min-w-[35.63rem]"
      />
    </section>
    <section
      class="section-container mt-10 flex items-center justify-center md:mt-[3.5rem] lg:hidden"
    >
      <AppButton text="See all the workshops" />
    </section>
  </div>
</template>
