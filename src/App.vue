<script setup lang="ts">
import { AppNavigation, AppFooter } from '@/components/layout'
import {
  HeroSection,
  AboutSection,
  KintalSection,
  GallerySection,
  OrganizationsSection,
  LeadershipSection,
  TourismSection,
  EventsSection,
  OdsSection,
  CtaSection,
} from '@/components/sections'
</script>

<template>
  <div class="min-h-screen">
    <AppNavigation />

    <main>
      <HeroSection />
      <AboutSection />
      <KintalSection />
      <LeadershipSection />
      <GallerySection />
      <OrganizationsSection />
      <TourismSection />
      <EventsSection />
      <OdsSection />
      <CtaSection />
    </main>

    <AppFooter />
  </div>
</template>
