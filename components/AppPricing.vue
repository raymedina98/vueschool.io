<script setup lang="ts">
type Pricing = {
  _id: string
  name: string
  isActive: boolean
}
const query = groq`*[_type == "pricing"]{
  _id,
  name,
  isActive,
} | order(_createdAt asc)`
const { data: pricing } = await useSanityQuery<Pricing[]>(query)
</script>

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
      <PricingCard
        class="flex-1"
        name="Basic"
        icon="LeafIcon"
        :plan-benefits="pricing"
      />
      <PricingCard
        class="flex-1"
        name="Professional"
        icon="RocketLaunchIcon"
        course="The Vue 3 Masterclass"
        :plan-benefits="pricing"
      />
      <PricingCard
        class="flex-1"
        name="Basic"
        icon="BoltIcon"
        :plan-benefits="pricing"
      />
    </section>
  </div>
</template>
