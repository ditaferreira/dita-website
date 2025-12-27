<script setup lang="ts">
import { Leaf, ChevronRight, Heart, TreePine, Crown } from 'lucide-vue-next'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#lideranca', label: 'Liderança' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#organizacoes', label: 'Organizações' },
  { href: '#ods', label: 'ODS' },
]

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="relative glass border-t border-emerald-500/10 py-10 px-4 mb-16 md:mb-0 overflow-hidden">
    <div class="absolute top-0 right-0 opacity-5">
      <TreePine class="w-40 h-40 text-emerald-500" />
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
              <Leaf class="w-4 h-4 text-white" />
            </div>
            <h3 class="text-lg font-bold">
              <span class="text-white">Nanci</span>
              <span class="text-emerald-400"> Ferreira</span>
            </h3>
          </div>
          <p class="text-white/50 text-sm leading-relaxed mb-3 max-w-sm">
            Uma vida dedicada à arte, sustentabilidade e preservação dos saberes ancestrais da Mata Atlântica.
          </p>
          <div class="flex items-center gap-3 text-white/30 text-xs">
            <span class="flex items-center gap-1">
              <Heart class="w-3 h-3 text-rose-400" />
              Cascata, Águas da Prata - SP
            </span>
            <span class="flex items-center gap-1">
              <Crown class="w-3 h-3 text-amber-400" />
              Liderança Negra Anciã
            </span>
          </div>
        </div>

        <!-- Links -->
        <div class="grid grid-cols-2 gap-6">
          <div>
            <h4 class="text-emerald-400 font-semibold mb-3 text-sm">Navegação</h4>
            <ul class="space-y-1.5">
              <li v-for="link in navLinks" :key="link.href">
                <a
                  :href="link.href"
                  class="text-white/50 hover:text-white text-sm flex items-center gap-1 transition-colors"
                  @click.prevent="scrollTo(link.href)"
                >
                  <ChevronRight class="w-3 h-3 text-emerald-500" />
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-emerald-400 font-semibold mb-3 text-sm">Contato</h4>
            <ul class="space-y-1.5 text-white/50 text-sm">
              <li>Cascata, Águas da Prata</li>
              <li>São Paulo, Brasil</li>
              <li>
                <a href="mailto:dita.13.ferreira@gmail.com" class="hover:text-emerald-400 transition-colors">
                  dita.13.ferreira@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-emerald-500/10 mt-8 pt-5 text-center">
        <p class="text-white/30 text-xs">
          © {{ new Date().getFullYear() }} Nanci Ferreira. Feito com 💚 para a natureza.
        </p>
      </div>
    </div>
  </footer>
</template>
