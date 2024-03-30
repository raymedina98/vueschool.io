<script setup lang="ts">
useHead({
  meta: [
    {
      name: 'keywords',
      content: `Vue.js, Training, Experts instructors, Tooling, Testing, ES6, Architechture, Best practices, Modern JavaScript`
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
      sizes: '16x16'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32'
    },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: 'Vue School corporate training | The #1 training resource for Vue.js',
  ogTitle:
    'Vue School corporate training | The #1 training resource for Vue.js',
  description:
    'Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework',
  ogDescription:
    'Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
