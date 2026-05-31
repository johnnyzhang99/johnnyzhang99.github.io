<script setup>
const cvUrl = '/files/CV.pdf'
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-10 lg:py-14">
    <header class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-extrabold tracking-tight text-base-content">Curriculum Vitae</h1>
        <p class="mt-2 text-base-content/60">Browse below or download the full PDF.</p>
      </div>
      <a :href="cvUrl" target="_blank" rel="noopener" class="btn btn-primary gap-2">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-6L12 15m0 0 4.5-4.5M12 15V3" />
        </svg>
        Download PDF
      </a>
    </header>

    <div class="overflow-hidden rounded-2xl border border-base-300/60 bg-base-100 shadow-sm">
      <iframe
        :src="cvUrl"
        title="CV"
        class="h-[80vh] w-full"
        frameborder="0"
      ></iframe>
    </div>

    <p class="mt-4 text-center text-sm text-base-content/50">
      Can't see the PDF?
      <a :href="cvUrl" target="_blank" rel="noopener" class="link link-primary">Open it in a new tab.</a>
    </p>
  </div>
</template>
