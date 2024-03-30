<template>
  <footer
    class="section-container section-container-spacing flex flex-col lg:mt-[12.5rem] lg:flex-row lg:justify-between"
  >
    <div class="flex flex-col items-center lg:items-start">
      <img
        src="~/assets/img/brand-full-logo.svg"
        alt="Vue School brand logo"
        class="min-h-[5.5rem] min-w-[16.75rem]"
      />
      <p class="mt-8 text-white md:mt-10 lg:mt-[5.31rem] lg:max-w-[29.37rem]">
        Thanks to fine people like you, Vue School can proudly sponsor Evan and
        the future of Vue.js by being a Platinum Patreon
      </p>
      <span
        class="mt-8 inline-block text-[1.375rem] font-medium text-darkerBlue md:mt-10 lg:mt-[3.8rem]"
        >FOLLOW US IN SOCIAL MEDIA</span
      >
      <div
        class="mt-6 flex flex-row items-center gap-[0.719rem] md:mt-8 md:gap-[2.625rem] lg:mt-[2.31rem]"
      >
        <div class="footer-logo-wrapper">
          <Icon name="mdi:facebook" class="size-8" />
        </div>
        <div class="footer-logo-wrapper">
          <Icon name="mdi:twitter" class="size-8" />
        </div>
        <div class="footer-logo-wrapper">
          <Icon name="mdi:github" class="size-8" />
        </div>
        <div class="footer-logo-wrapper">
          <Icon name="ri:linkedin-fill" class="size-8" />
        </div>
        <div class="footer-logo-wrapper">
          <Icon name="mdi:youtube" class="size-8" />
        </div>
      </div>
    </div>
    <div
      class="mt-12 grid grid-cols-1 gap-8 text-center md:mt-16 md:grid-cols-3 md:gap-x-[1.375rem] md:gap-y-8 md:text-start lg:hidden"
    >
      <section>
        <h4 class="mb-5 text-[1.375rem] font-medium text-darkerBlue">
          PRODUCTS
        </h4>
        <ul class="flex flex-col gap-[0.875rem] text-white">
          <li>Courses</li>
          <li>Workshops</li>
          <li>Vue Masterclass</li>
          <li>Mastering Nuxt</li>
        </ul>
      </section>
      <section>
        <h4 class="mb-5 text-[1.375rem] font-medium text-darkerBlue">
          CORPORATE
        </h4>
        <ul class="flex flex-col gap-[0.875rem] text-white">
          <li>Corporate Training</li>
          <li>Developer Recruitment</li>
          <li>Course Development</li>
          <li>On-site Workshops</li>
          <li>Consulting</li>
          <li>Affiliate Programs</li>
        </ul>
      </section>
      <section>
        <h4 class="mb-5 text-[1.375rem] font-medium text-darkerBlue">
          CONNECT WITH US
        </h4>
        <ul class="flex flex-col gap-[0.875rem] text-white">
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </section>
      <section>
        <h4 class="mb-5 text-[1.375rem] font-medium text-darkerBlue">
          EVENTS
        </h4>
        <ul class="flex flex-col gap-[0.875rem] text-white">
          <li>Vue.js Nation</li>
          <li>Nuxt Nation</li>
          <li>Vue.js Forge</li>
        </ul>
      </section>
      <section>
        <h4 class="mb-5 text-[1.375rem] font-medium text-darkerBlue">
          RESOURCES
        </h4>
        <ul class="flex flex-col gap-[0.875rem] text-white">
          <li>Articles</li>
        </ul>
      </section>
      <section>
        <h4 class="mb-5 text-[1.375rem] font-medium text-darkerBlue">
          PRICING
        </h4>
        <ul class="flex flex-col gap-[0.875rem] text-white">
          <li>Plans</li>
        </ul>
      </section>
    </div>
    <div class="hidden flex-row gap-[1.875rem] lg:flex">
      <div class="flex min-w-[16.875rem] flex-col gap-[3.125rem]">
        <section>
          <h4 class="mb-5 text-[1.375rem] font-medium text-darkerBlue">
            PRODUCTS
          </h4>
          <ul class="flex flex-col gap-[0.875rem] text-white">
            <li>Courses</li>
            <li>Workshops</li>
            <li>Vue Masterclass</li>
            <li>Mastering Nuxt</li>
          </ul>
        </section>
        <section>
          <h4 class="mb-5 text-[1.375rem] font-medium text-darkerBlue">
            PRICING
          </h4>
          <ul class="flex flex-col gap-[0.875rem] text-white">
            <li>Plans</li>
          </ul>
        </section>
        <section>
          <h4 class="mb-5 text-[1.375rem] font-medium text-darkerBlue">
            CONNECT WITH US
          </h4>
          <ul class="flex flex-col gap-[0.875rem] text-white">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </section>
      </div>
      <div class="flex min-w-[16.875rem] flex-col gap-[3.125rem]">
        <section>
          <h4 class="mb-5 text-[1.375rem] font-medium text-darkerBlue">
            EVENTS
          </h4>
          <ul class="flex flex-col gap-[0.875rem] text-white">
            <li>Vue.js Nation</li>
            <li>Nuxt Nation</li>
            <li>Vue.js Forge</li>
          </ul>
        </section>
        <section>
          <h4 class="mb-5 text-[1.375rem] font-medium text-darkerBlue">
            CORPORATE
          </h4>
          <ul class="flex flex-col gap-[0.875rem] text-white">
            <li>Corporate Training</li>
            <li>Developer Recruitment</li>
            <li>Course Development</li>
            <li>On-site Workshops</li>
            <li>Consulting</li>
            <li>Affiliate Programs</li>
          </ul>
        </section>
        <section>
          <h4 class="mb-5 text-[1.375rem] font-medium text-darkerBlue">
            RESOURCES
          </h4>
          <ul class="flex flex-col gap-[0.875rem] text-white">
            <li>Articles</li>
          </ul>
        </section>
      </div>
    </div>
  </footer>
</template>
