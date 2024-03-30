<script setup lang="ts">
withDefaults(
  defineProps<{
    name?: string
    icon?: 'LeafIcon' | 'RocketLaunchIcon' | 'BoltIcon'
    course?: string
    planBenefits?: { name: string; isActive: boolean }[]
  }>(),
  {
    name: 'Basic',
    icon: 'LeafIcon',
    course: '',
    planBenefits: () => [
      {
        name: 'All Video Courses',
        isActive: true
      },
      {
        name: 'Vue.Js Master class',
        isActive: true
      },
      {
        name: 'Developer assist Slack channel',
        isActive: true
      },
      {
        name: 'Live Weekly QnA',
        isActive: false
      },
      {
        name: '1 x ws ticket per license',
        isActive: false
      }
    ]
  }
)
</script>

<template>
  <AppCard>
    <div class="px-6 py-10">
      <header class="flex flex-row items-center space-x-3">
        <Icon :name="icon" class="size-8 min-h-8 min-w-8" />
        <h4 class="text-[1.375rem] font-bold text-white">{{ name }}</h4>
      </header>
      <span class="mb-6 mt-10 inline-block text-primary"
        >Includes 1 year access to:</span
      >
      <ul class="mb-6 space-y-3">
        <li
          v-for="benefit in planBenefits"
          :key="benefit.name"
          :class="[
            'flex flex-row items-center justify-between',
            { 'opacity-25': !benefit.isActive }
          ]"
        >
          <div class="flex flex-row items-center">
            <Icon
              :name="
                benefit.isActive
                  ? 'ic:round-check-circle'
                  : 'material-symbols:cancel-rounded'
              "
              class="size-6 min-h-6 min-w-6 text-primary"
            />
            <span class="ml-3 text-light">{{ benefit.name }}</span>
          </div>
          <Icon
            v-if="benefit.isActive"
            name="gravity-ui:circle-info-fill"
            class="size-4 min-h-4 min-w-4 text-darkerBlue"
          />
        </li>
      </ul>
      <div
        v-if="course"
        class="mb-6 flex flex-row items-center rounded-[10px] bg-primary bg-opacity-20 px-6 py-4"
      >
        <img
          src="~/assets/img/vue-course.svg"
          alt="Vue 3 Masterclass course image"
          class="h-12 w-12"
        />
        <div class="ml-4 flex flex-col font-medium">
          <span class="text-[#A0A8C3]">Enough time to watch:</span>
          <span class="text-white">{{ course }}</span>
        </div>
      </div>
      <div class="rounded-2xl bg-[#212435] p-6">
        <header class="mb-6 flex items-center space-x-2">
          <h3
            class="font-circularStd text-[2.5rem] font-bold leading-[3.3rem] text-white"
          >
            $50
          </h3>
          <span class="font-inter text-[#A0A8C3]">/ seat / month</span>
        </header>
        <h4 class="font-bold text-white">How many licenses do you need?</h4>
        <div class="my-4">
          <div class="relative mb-1 h-1 rounded-[20px] bg-darkerBlue">
            <div
              class="absolute left-0 mx-auto h-1 w-1/2 rounded-l-[20px] bg-primary"
            ></div>
            <div
              class="absolute left-0 right-0 mx-auto -mt-[5px] size-[14px] rounded-full bg-primary"
            ></div>
          </div>
          <div class="flex flex-row justify-between font-inter text-darkerBlue">
            <small>5</small>
            <small>20</small>
          </div>
        </div>
        <div
          class="flex flex-row items-center sm:justify-between md:justify-start md:gap-5 lg:justify-between"
        >
          <div
            class="flex flex-row items-center justify-around gap-[10px] rounded-lg bg-[#0E0E1033] px-[14px] py-1"
          >
            <Icon name="SeatsIcon" class="size-5 min-h-5 min-w-5" />
            <span class="text-2xl font-bold text-white">12</span>
            <span class="text-[#979FAD]">seats</span>
          </div>
          <span class="text-primary">26% discount</span>
        </div>
      </div>
      <footer class="mt-10 flex flex-col items-center gap-6">
        <AppButton text="Start Learning" class="w-full" />
        <span
          class="cursor-pointer font-medium leading-5 text-primary hover:opacity-75"
          >Refer your manager</span
        >
      </footer>
    </div>
  </AppCard>
</template>

<style scoped></style>
