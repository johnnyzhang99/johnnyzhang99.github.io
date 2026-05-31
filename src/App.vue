<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import profile from './data/profile.js'

const year = new Date().getFullYear()
</script>

<template>
  <div class="flex min-h-screen flex-col bg-base-200/40">
    <NavBar />

    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <component :is="Component" :key="$route.path" class="fade-up" />
      </RouterView>
    </main>

    <footer class="border-t border-base-300/60 bg-base-100">
      <div
        class="mx-auto flex max-w-5xl flex-col items-center gap-1 px-4 py-6 text-center text-sm text-base-content/60"
      >
        <p>© {{ profile.name }} · Last Updated: 2026.05</p>
        <p class="text-xs">Built with Vue · Tailwind CSS · daisyUI</p>
      </div>
    </footer>
  </div>
</template>
