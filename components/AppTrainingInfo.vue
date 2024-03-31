<script setup lang="ts">
type Training = {
  videoLessons?: number
  courses?: number
  hours?: number
}
const query = groq`*[_type == "training"]{
  videoLessons,
  courses,
  hours
} | order(_createdAt desc)[0]`
const { data: training } = await useSanityQuery<Training>(query)
</script>

<template>
  <section
    class="section-container section-container-spacing flex flex-col items-center justify-center lg:mt-[11.25rem] lg:flex-row lg:items-start lg:justify-between"
  >
    <div class="text-center md:text-2xl lg:text-start">
      <h4 class="gradient-text gradient-text--primary font-medium">
        YOUR #1 SOURCE OF VUE.JS COURSES
      </h4>
      <h1 class="text-heading-1">
        Full Stack
        <span class="gradient-text gradient-text--secondary">Vue</span> <br />
        <span class="gradient-text gradient-text--secondary">Training</span>
        Solutions
      </h1>
    </div>
    <div class="flex flex-row items-start space-x-5 text-white md:space-x-14">
      <div class="flex flex-col">
        <span
          class="gradient-text gradient-text--primary text-[4rem] font-medium md:text-[5.3rem]"
          >{{ training?.videoLessons || '763' }}</span
        >
        <div class="flex flex-row items-center justify-center space-x-2">
          <Icon name="icon-park-solid:play" class="size-5" />
          <span class="text-sm">Video lessons</span>
        </div>
      </div>
      <div class="flex flex-col">
        <span
          class="gradient-text gradient-text--primary text-[4rem] font-medium md:text-[5.3rem]"
          >{{ training?.courses || '40' }}</span
        >
        <div class="flex flex-row items-center justify-center space-x-2">
          <Icon name="ri:book-3-fill" class="size-5" />
          <span class="text-sm">Courses</span>
        </div>
      </div>
      <div class="flex flex-col">
        <span
          class="gradient-text gradient-text--primary text-[4rem] font-medium md:text-[5.3rem]"
          >{{ training?.hours || '64' }}</span
        >
        <div class="flex flex-row items-center justify-center space-x-2">
          <Icon name="mdi:clock-time-three" class="size-5" />
          <span class="text-sm">{{ `${training?.hours || 64} Hours` }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
