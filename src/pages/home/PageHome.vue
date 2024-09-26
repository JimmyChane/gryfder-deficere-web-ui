<script setup lang="ts">
import { FULL_NAME } from '@/model/Fursona';
import CardSocial from './components/CardSocial.vue';
import { computed } from 'vue';
import { BLUESKY, DISCORD, INSTAGRAM, TELEGRAM, TWITTER, YOUTUBE } from '@/model/Social';

const socials = computed(() => {
  return [YOUTUBE, TELEGRAM, INSTAGRAM, BLUESKY, TWITTER, DISCORD];
});
</script>

<template>
  <div class="home-page">
    <div class="page-home-header">
      <img src="@/assets/img/pfp.webp" />
      <div>
        <span>{{ FULL_NAME }}</span>
        <div>
          <span>Raven</span>
          <span>🇸🇬Singapore</span>
          <span>🇲🇾Malaysia</span>
        </div>
        <div>
          <span>中文🇹🇼+(潮/粵) / EN🇬🇧</span>
          <span>Disciple † ★</span>
        </div>
      </div>
    </div>

    <div>
      <span style="padding-inline: 1rem; font-size: 1.4rem; font-weight: bold">Find Me</span>
      <div class="home-page-socials">
        <CardSocial v-for="social of socials" :key="social.title" :item="social" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  padding-block: 1rem;

  width: 100%;
  gap: 2rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  .page-home-header {
    padding-inline: 1rem;
    gap: 0.5rem;

    display: flex;

    & > img {
      --size: 10em;
      width: var(--size);
      height: var(--size);

      border-radius: calc(var(--size) * 0.3);
    }
    & > div {
      display: flex;
      flex-direction: column;

      & > span {
        font-weight: bold;
        font-size: 1.8rem;
      }
      & > div {
      }
    }
  }
  .home-page-socials {
    padding: 1rem;
    gap: 0.5rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  }
}
</style>
