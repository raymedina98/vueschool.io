<script setup lang="ts">
withDefaults(
  defineProps<{
    bordered?: boolean
  }>(),
  {
    bordered: true
  }
)
</script>

<template>
  <div :class="{ 'card-gradient-border': bordered }">
    <div class="rounded-[30px] bg-[#2B2F44]/90">
      <slot />
    </div>
  </div>
</template>
