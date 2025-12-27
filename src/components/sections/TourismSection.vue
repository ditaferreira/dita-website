<script setup lang="ts">
import { Globe, ExternalLink, MapPin } from 'lucide-vue-next'
import { SectionBackground } from '@/components/ui'
</script>

<template>
  <section class="section">
    <SectionBackground image-path="/dita (83).webp" :opacity="0.35" :blur="3" gradient="subtle" />

    <div class="max-w-3xl mx-auto relative z-10">
      <div class="text-center mb-8">
        <div class="inline-flex items-center gap-2 glass-light rounded-full px-4 py-2 mb-4">
          <MapPin class="w-4 h-4 text-emerald-400" />
          <span class="text-white/80 text-sm font-medium">Experiências</span>
        </div>
        <h2 class="text-fluid-3xl font-bold text-gradient mb-2">Turismo</h2>
        <p class="text-white/60 text-sm">Conectando visitantes com a riqueza cultural e natural da região.</p>
      </div>

      <div class="card text-center">
        <div class="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 flex items-center justify-center mb-4">
          <Globe class="w-6 h-6 text-emerald-400" />
        </div>
        <h3 class="text-white font-semibold text-lg mb-1">Prata Expedições</h3>
        <p class="text-emerald-400 text-sm mb-3">Guia Local</p>
        <p class="text-white/60 text-sm mb-4">Guia turística com conhecimento histórico, social e ambiental da região.</p>
        <a href="https://prataexpedicoes.com.br/" target="_blank" class="btn-outline text-sm">
          Conhecer roteiros <ExternalLink class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>
