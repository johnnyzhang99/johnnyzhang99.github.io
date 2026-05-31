<script setup>
import { computed } from 'vue'
import publications from '../data/publications.js'
import PublicationCard from '../components/PublicationCard.vue'

// Group by year (newest first); within a year sort by date (newest first).
const grouped = computed(() => {
  const map = new Map()
  for (const p of publications) {
    if (!map.has(p.year)) map.set(p.year, [])
    map.get(p.year).push(p)
  }
  return [...map.keys()]
    .sort((a, b) => b - a)
    .map((year) => ({
      year,
      items: map.get(year).sort((a, b) => new Date(b.date) - new Date(a.date)),
    }))
})
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-10 lg:py-14">
    <header class="mb-10">
      <h1 class="text-3xl font-extrabold tracking-tight text-base-content">Publications</h1>
      <p class="mt-2 text-base-content/60">
        <!-- Selected papers in visual analytics and urban visualization. -->
      </p>
    </header>

    <div class="space-y-12">
      <section v-for="group in grouped" :key="group.year">
        <div class="mb-4 flex items-center gap-3">
          <h2 class="text-2xl font-bold">{{ group.year }}</h2>
          <div class="h-px flex-1 bg-base-300"></div>
        </div>

        <div class="space-y-5">
          <PublicationCard v-for="(pub, i) in group.items" :key="i" :pub="pub" />
        </div>
      </section>
    </div>
  </div>
</template>
