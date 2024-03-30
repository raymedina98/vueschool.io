<script setup lang="ts"></script>

<template>
  <div>
    <section
      class="section-container section-container-spacing mb-14 md:mb-[4.5rem] lg:mb-[7.5rem] lg:mt-[12.5rem]"
    >
      <h1 class="text-heading-1 text-center">
        Discounted
        <span class="gradient-text gradient-text--secondary">Corporate</span
        ><br />
        <span class="gradient-text gradient-text--secondary">Training</span>
        Bundles
      </h1>
    </section>
    <section
      class="section-container flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[1.875rem]"
    >
      <PricingCard class="flex-1" name="Basic" icon="LeafIcon" />
      <PricingCard
        class="flex-1"
        name="Professional"
        icon="RocketLaunchIcon"
        course="The Vue 3 Masterclass"
      />
      <PricingCard class="flex-1" name="Basic" icon="BoltIcon" />
    </section>
  </div>
</template>
