<script setup>
import profile from '../data/profile.js'
import news from '../data/news.js'
import education from '../data/education.js'
import awards from '../data/awards.js'
import ProfileSidebar from '../components/ProfileSidebar.vue'
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-10 lg:py-14">
    <div class="grid gap-10 lg:grid-cols-[19rem_1fr]">
      <!-- Left: profile + social links -->
      <div class="lg:sticky lg:top-24 lg:self-start">
        <ProfileSidebar />
      </div>

      <!-- Right: bio + news + education + honors -->
      <div class="space-y-12">
        <!-- About -->
        <section>
          <h2 class="section-title">
            <span>👋</span> Welcome
          </h2>
          <div class="bio-text mt-4 space-y-4 text-base leading-relaxed text-base-content/85">
            <p v-for="(para, i) in profile.bio" :key="i" v-html="para"></p>
          </div>
        </section>

        <!-- News -->
        <section>
          <h2 class="section-title"><span>📰</span> News</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="(item, i) in news" :key="i" class="flex gap-3">
              <span class="badge badge-primary badge-outline shrink-0 font-mono">{{ item.date }}</span>
              <span class="text-base-content/85">{{ item.text }}</span>
            </li>
          </ul>
        </section>

        <!-- Education -->
        <section>
          <h2 class="section-title"><span>🎓</span> Education</h2>
          <div class="mt-4 space-y-3">
            <div
              v-for="(ed, i) in education"
              :key="i"
              class="card border border-base-300/60 bg-base-100 shadow-sm"
            >
              <div class="card-body flex-row items-center justify-between gap-4 p-4">
                <div>
                  <p class="font-bold">{{ ed.degree }}</p>
                  <p class="text-sm text-base-content/70">{{ ed.school }}</p>
                </div>
                <span class="badge badge-ghost shrink-0 whitespace-nowrap font-mono text-xs">
                  {{ ed.period }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Honors -->
        <section>
          <h2 class="section-title"><span>🏆</span> Honors &amp; Awards</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="(award, i) in awards" :key="i" class="flex gap-3">
              <span class="badge badge-secondary badge-outline shrink-0 font-mono">{{ award.year }}</span>
              <span class="text-base-content/85">{{ award.text }}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  @apply flex items-center gap-2 border-b border-base-300/60 pb-2 text-xl font-extrabold tracking-tight;
}
</style>
