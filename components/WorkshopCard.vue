<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    description?: string
  }>(),
  {
    title: 'Vue.js Fundamentals',
    description: `A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...`
  }
)
</script>

<template>
  <AppCard :bordered="false">
    <header
      class="flex flex-row items-center rounded-tl-[30px] rounded-tr-[30px] bg-gradient-to-r from-[#4F08E6]/50 to-[#FF4975]/50 px-4 py-6 md:px-[2.19rem]"
    >
      <Icon
        name="material-symbols:calendar-today"
        class="size-5 min-h-5 min-w-5 text-white"
      />
      <span class="ml-3 font-medium text-white"
        >December 14th - 11:00 AM (GMT-3)</span
      >
    </header>
    <div class="py-[2.19rem] sm:px-4 md:p-[2.19rem]">
      <div class="text-darkerBlue flex flex-row items-center">
        <Icon name="icon-park-solid:play" class="size-5" />
        <span class="ml-2">LIVE Training</span>
        <Icon name="mdi:clock-time-three" class="ml-[2.19rem] size-5" />
        <span class="ml-2">15 Hours</span>
      </div>
      <h4 class="mb-3 mt-5 text-2xl font-medium text-white">{{ title }}</h4>
      <p class="text-darkerBlue text-sm">
        {{ description }}
      </p>
      <div class="mt-5 flex flex-row items-center gap-3">
        <img
          src="~/assets/img/workshop-teacher.png"
          alt="Workshop teacher avatar"
          class="size-6"
        />
        <span class="text-darkerBlue text-sm">Steve Popoola</span>
      </div>
    </div>
  </AppCard>
</template>
