<script setup>
import { ref } from 'vue'
import years, { hero, intro, quote } from '../data/life.js'
import PhotoLightbox from '../components/PhotoLightbox.vue'

const active = ref(null)
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="relative flex min-h-[40vh] items-center justify-center bg-cover bg-center px-4 py-16 text-center"
      :style="{ backgroundImage: `url('${hero}')` }"
    >
      <div class="absolute inset-0 bg-black/55"></div>
      <div class="relative max-w-2xl text-white">
        <h1 class="text-4xl font-extrabold tracking-tight drop-shadow">My Life</h1>
        <p class="mt-6 whitespace-pre-line text-white/90">{{ intro }}</p>
        <!-- <p class="mt-5 text-sm italic text-white/75">{{ quote }}</p> -->
      </div>
    </section>

    
    <!-- Photos by year -->
    <div class="mx-auto max-w-5xl px-4 py-12">
      <div class="space-y-12">
        <section v-for="group in years" :key="group.year">
          <div class="mb-4 flex items-center gap-3">
            <h2 class="text-2xl font-bold ">{{ group.year }}</h2>
            <div class="h-px flex-1 bg-base-300"></div>
          </div>

          <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
            <figure
              v-for="(photo, i) in group.photos"
              :key="i"
              class="group relative cursor-pointer overflow-hidden rounded-xl border border-base-300/60 bg-base-100 shadow-sm transition hover:shadow-lg"
              :class="photo.span === 2 ? 'col-span-2' : ''"
              @click="active = photo"
            >
              <img
                :src="photo.src"
                :alt="photo.caption"
                loading="lazy"
                class="w-full object-cover transition duration-500 group-hover:scale-105"
                :style="{ aspectRatio: photo.aspect || '4 / 3' }"
              />
              <figcaption
                class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100"
              >
                {{ photo.caption }}
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>

    <PhotoLightbox :photo="active" @close="active = null" />
  </div>
</template>
