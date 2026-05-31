<script setup>
import { RouterLink } from 'vue-router'
import profile from '../data/profile.js'
import ThemeToggle from './ThemeToggle.vue'

const links = [
  { to: '/', label: 'Home' },
  { to: '/publications', label: 'Publications' },
  { to: '/cv', label: 'CV' },
  { to: '/life', label: 'My Life' },
]
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-base-300/60 bg-base-100/80 backdrop-blur-md">
    <div class="navbar mx-auto max-w-5xl px-4">
      <!-- Brand -->
      <div class="navbar-start">
        <RouterLink
          to="/"
          class="btn btn-ghost px-2 text-lg font-extrabold tracking-tight text-base-content"
        >
          {{ profile.name }}
        </RouterLink>
      </div>

      <!-- Right side: links (desktop) + theme toggle (always) + menu (mobile) -->
      <div class="navbar-end gap-1">
        <!-- Desktop links -->
        <nav class="hidden md:flex">
          <ul class="menu menu-horizontal gap-1 px-1 font-medium">
            <li v-for="link in links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="rounded-lg"
                :active-class="link.to === '/' ? '' : 'text-primary'"
                exact-active-class="text-primary"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <!-- Theme toggle (top-right, all breakpoints) -->
        <ThemeToggle />

        <!-- Mobile dropdown -->
        <div class="dropdown dropdown-end md:hidden">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle" aria-label="Menu">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-2 font-medium shadow-lg"
          >
            <li v-for="link in links" :key="link.to">
              <RouterLink
                :to="link.to"
                :active-class="link.to === '/' ? '' : 'text-primary'"
                exact-active-class="text-primary"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
