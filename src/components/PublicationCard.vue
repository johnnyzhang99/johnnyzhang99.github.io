<script setup>
defineProps({
  pub: { type: Object, required: true },
})
</script>

<template>
  <article
    class="card overflow-hidden border border-base-300/60 bg-base-100 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:card-side"
  >
    <!-- Teaser -->
    <a
      :href="pub.paperurl"
      target="_blank"
      rel="noopener"
      class="block shrink-0 overflow-hidden bg-base-200 sm:w-56"
    >
      <img
        :src="pub.teaser"
        :alt="pub.title"
        loading="lazy"
        class="h-44 w-full object-cover transition duration-300 hover:scale-105 sm:h-full"
      />
    </a>

    <!-- Info -->
    <div class="card-body gap-2 p-5">
      <h3 class="text-base font-bold leading-snug">
        <a
          :href="pub.paperurl"
          target="_blank"
          rel="noopener"
          class="transition hover:text-primary"
        >
          {{ pub.title }}
        </a>
      </h3>

      <p class="text-sm text-base-content/80">{{ pub.authors }}</p>

      <p class="text-sm italic text-base-content/60">
        {{ pub.venue }}<span v-if="pub.year">, {{ pub.year }}</span>
      </p>

      <p v-if="pub.excerpt" class="text-sm text-base-content/70">{{ pub.excerpt }}</p>

      <div class="card-actions mt-1">
        <a :href="pub.paperurl" target="_blank" rel="noopener" class="btn btn-primary btn-xs">
          Paper
        </a>
        <a
          v-if="pub.slidesurl"
          :href="pub.slidesurl"
          target="_blank"
          rel="noopener"
          class="btn btn-outline btn-xs"
        >
          Slides
        </a>
      </div>
    </div>
  </article>
</template>
