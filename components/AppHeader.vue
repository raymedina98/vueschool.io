<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenuVisibility() {
  document.body.classList.toggle('overflow-hidden')
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div>
    <header
      class="mb-6 flex w-full flex-row items-center justify-between px-6 py-5 md:px-12"
    >
      <div class="flex flex-row items-center gap-6">
        <Icon
          name="charm:menu-hamburger"
          class="size-10 min-h-10 min-w-10 cursor-pointer text-white lg:!hidden"
          @click="toggleMenuVisibility"
        />
        <a href="#" title="Go to vueschool.io home page">
          <img
            src="~/assets/img/brand-full-logo.svg"
            alt="Vue School brand logo"
            class="min-h-14 min-w-[10.62rem]"
          />
        </a>
      </div>
      <nav class="hidden lg:block">
        <ul class="flex flex-row items-center gap-5 text-light">
          <li>
            <a href="#courses">
              Courses
              <Icon name="ChevronDownIcon" class="ml-1 h-[5px] w-[8px]" />
            </a>
          </li>
          <li>
            <a href="#plans">Plans</a>
          </li>
          <li>
            <a href="#business_service">
              Business Service
              <Icon name="ChevronDownIcon" class="ml-1 h-[5px] w-[8px]" />
            </a>
          </li>
          <li>
            <a href="#learning_paths">Learning Paths</a>
          </li>
          <li>
            <a href="#hiring">Hiring</a>
          </li>
          <li>
            <a href="#articles">Articles</a>
          </li>
          <li>
            <a href="#events">
              Events
              <Icon name="ChevronDownIcon" class="ml-1 h-[5px] w-[8px]" />
            </a>
          </li>
          <li>
            <a href="#certification">Get Certified</a>
          </li>
        </ul>
      </nav>
      <div
        class="hidden flex-row items-center justify-between gap-[30px] md:flex"
      >
        <a href="#login" class="text-light">Log in</a>
        <AppButton text="Sign up" variant="secondary" />
      </div>
    </header>
    <div
      :class="[
        'fixed inset-0 z-50 w-screen flex-col bg-dark px-6 py-6 md:px-12 lg:hidden',
        { flex: isMenuOpen, hidden: !isMenuOpen }
      ]"
    >
      <div class="flex flex-row items-center gap-6">
        <Icon
          name="ic:round-clear"
          class="size-10 min-h-10 min-w-10 cursor-pointer text-white"
          @click="toggleMenuVisibility"
        />
        <a href="#" title="Go to vueschool.io home page">
          <img
            src="~/assets/img/brand-full-logo.svg"
            alt="Vue School brand logo"
            class="min-h-14 min-w-[10.62rem]"
          />
        </a>
      </div>
      <nav class="mt-8 pl-2">
        <ul class="flex flex-col gap-5 text-light">
          <li>
            <a href="#courses">
              Courses
              <Icon name="ChevronDownIcon" class="ml-1 h-[5px] w-[8px]" />
            </a>
          </li>
          <li>
            <a href="#plans">Plans</a>
          </li>
          <li>
            <a href="#business_service">
              Business Service
              <Icon name="ChevronDownIcon" class="ml-1 h-[5px] w-[8px]" />
            </a>
          </li>
          <li>
            <a href="#learning_paths">Learning Paths</a>
          </li>
          <li>
            <a href="#hiring">Hiring</a>
          </li>
          <li>
            <a href="#articles">Articles</a>
          </li>
          <li>
            <a href="#events">
              Events
              <Icon name="ChevronDownIcon" class="ml-1 h-[5px] w-[8px]" />
            </a>
          </li>
          <li>
            <a href="#certification">Get Certified</a>
          </li>
          <li>
            <a href="#login">Log in</a>
          </li>
        </ul>
        <AppButton class="mt-5" text="Sign up" variant="secondary" />
      </nav>
    </div>
  </div>
</template>
