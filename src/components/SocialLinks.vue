<script setup>
import profile from '../data/profile.js'

defineProps({
  size: { type: String, default: 'md' }, // 'sm' | 'md' | 'lg'
})

const s = profile.social
const sizeClass = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <a
      v-if="s.email"
      :href="`mailto:${s.email}`"
      class="btn btn-circle btn-ghost text-base-content/70 hover:text-primary"
      :class="sizeClass[size]"
      aria-label="Email"
      title="Email"
    >
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    </a>

    <a
      v-if="s.github"
      :href="s.github"
      target="_blank"
      rel="noopener"
      class="btn btn-circle btn-ghost text-base-content/70 hover:text-primary"
      :class="sizeClass[size]"
      aria-label="GitHub"
      title="GitHub"
    >
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </a>

    <a
      v-if="s.scholar"
      :href="s.scholar"
      target="_blank"
      rel="noopener"
      class="btn btn-circle btn-ghost text-base-content/70 hover:text-primary"
      :class="sizeClass[size]"
      aria-label="Google Scholar"
      title="Google Scholar"
    >
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
      </svg>
    </a>

    <a
      v-if="s.orcid"
      :href="s.orcid"
      target="_blank"
      rel="noopener"
      class="btn btn-circle btn-ghost text-base-content/70 hover:text-primary"
      :class="sizeClass[size]"
      aria-label="ORCID"
      title="ORCID"
    >
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.588-1.444 3.588-3.722 0-2.016-1.091-3.722-3.588-3.722h-2.297z" />
      </svg>
    </a>
  </div>
</template>
