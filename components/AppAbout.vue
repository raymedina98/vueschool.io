<template>
  <div>
    <section class="section-container">
      <AboutCard />
    </section>
    <section
      class="section-container mt-14 hidden flex-row items-center justify-around lg:flex"
    >
      <Icon v-for="i in 6" :key="i" name="GoogleIcon" class="h-10 w-[119px]" />
    </section>
  </div>
</template>
