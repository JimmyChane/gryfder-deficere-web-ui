<script setup lang="ts">
import CardSocial from './components/CardSocial.vue';
import { computed } from 'vue';
import { BLUESKY, DISCORD, INSTAGRAM, TELEGRAM, TWITTER, YOUTUBE } from '@/model/Social';
import HomeHeader from './components/HomeHeader.vue';

const socials = computed(() => {
  return [YOUTUBE, TELEGRAM, TWITTER, BLUESKY, DISCORD, INSTAGRAM];
});
</script>

<template>
  <div class="page-home">
    <div class="page-home-body" style="z-index: 1">
      <HomeHeader />

      <div class="page-home-section-social">
        <span style="padding-inline: 1rem; font-size: 2rem; font-weight: bold">Find Me</span>
        <div class="page-home-socials">
          <CardSocial v-for="social of socials" :key="social.title" :item="social" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-home {
  --padding-block: 1rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: radial-gradient(circle at 50% 6rem, #5568e4, transparent 30%);

  .page-home-body {
    width: 100%;
    max-width: 50rem;
    padding-block: var(--padding-block);
    gap: 2rem;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    .page-home-section-social {
      container: social / inline-size;
      @container social (max-width: 20rem) {
        .page-home-socials {
          display: flex;
          flex-direction: column;
        }
      }
    }

    .page-home-socials {
      padding: 1rem;
      gap: 0.5rem;

      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    }
  }
}
</style>
