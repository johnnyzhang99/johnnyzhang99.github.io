<script setup>
import profile from '../data/profile.js'
import SocialLinks from './SocialLinks.vue'
</script>

<template>
  <aside class="flex flex-col items-center text-center lg:items-start lg:text-left">
    <!-- Avatar -->
    <img
      :src="profile.avatar"
      :alt="profile.name"
      class="h-44 w-44 rounded-full object-cover shadow-md ring-1 ring-base-300"
    />

    <!-- Identity -->
    <h1 class="mt-5 text-2xl font-extrabold tracking-tight">
      {{ profile.name }}
      <span class="ml-1 text-base font-medium text-base-content/50">{{ profile.nameZh }}</span>
    </h1>
    <p class="mt-1 font-semibold">{{ profile.role }}</p>
    <p class="text-sm text-base-content/70">{{ profile.affiliation }}</p>

    <p class="mt-1 flex items-center gap-1 text-sm text-base-content/60">
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      {{ profile.location }}
    </p>

    <!-- Social links -->
    <div class="mt-4">
      <SocialLinks />
    </div>
  </aside>
</template>
