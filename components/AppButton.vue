<script setup lang="ts">
const TW_CLASSES = {
  primary: 'btn--primary'
} as const

withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
    text: String
  }>(),
  {
    variant: 'primary'
  }
)
</script>

<template>
  <button
    v-if="variant === 'secondary'"
    class="rounded-[10px] bg-gradient-to-r from-[#0BD88F] to-[#00C2FF] p-[2px] font-medium text-primary hover:opacity-75"
  >
    <span
      class="flex w-full items-center rounded-[10px] bg-dark px-[38px] py-[18px]"
      >{{ text }}</span
    >
  </button>
  <button v-else :class="['btn text-dark', TW_CLASSES[variant]]">
    <span class="leading-5">{{ text }}</span>
  </button>
</template>
