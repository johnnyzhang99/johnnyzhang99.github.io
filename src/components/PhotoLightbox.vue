<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  photo: { type: Object, default: null }, // { src, caption } or null
})
const emit = defineEmits(['close'])

function onKey(e) {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.photo,
  (val) => {
    if (val) window.addEventListener('keydown', onKey)
    else window.removeEventListener('keydown', onKey)
  },
)

onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="photo"
        class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 p-4"
        @click="emit('close')"
      >
        <button
          class="btn btn-circle btn-ghost absolute right-4 top-4 text-white"
          aria-label="Close"
          @click="emit('close')"
        >
          <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <img
          :src="photo.src"
          :alt="photo.caption"
          class="max-h-[82vh] max-w-full rounded-lg object-contain shadow-2xl"
          @click.stop
        />
        <p v-if="photo.caption" class="mt-4 text-center text-sm font-medium text-white/90">
          {{ photo.caption }}
        </p>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
