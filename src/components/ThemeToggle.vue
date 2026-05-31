<script setup>
import { ref, onMounted } from 'vue'

const LIGHT = 'academic'
const DARK = 'academicdark'
const isDark = ref(false)

function apply(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
  isDark.value = theme === DARK
}

function toggle() {
  apply(isDark.value ? LIGHT : DARK)
}

onMounted(() => {
  isDark.value = document.documentElement.getAttribute('data-theme') === DARK
})
</script>

<template>
  <button
    class="btn btn-circle btn-ghost"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDark ? 'Light mode' : 'Dark mode'"
    @click="toggle"
  >
    <!-- Sun (shown in dark mode → click for light) -->
    <svg v-if="isDark" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
      <circle cx="12" cy="12" r="4" />
      <path stroke-linecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
    </svg>
    <!-- Moon (shown in light mode → click for dark) -->
    <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  </button>
</template>
