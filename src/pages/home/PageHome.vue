<script setup lang="ts">
import CardSocial from './components/CardSocial.vue';
import { computed } from 'vue';
import { BLUESKY, DISCORD, INSTAGRAM, TELEGRAM, TWITTER, YOUTUBE } from '@/model/Social';
import HomeHeader from './components/HomeHeader.vue';
import GALLERY_1 from '@/assets/gallery/gallery-1.jpg';
import GALLERY_2 from '@/assets/gallery/gallery-2.png';
import GALLERY_3 from '@/assets/gallery/gallery-3.png';
import GALLERY_5 from '@/assets/gallery/gallery-5.png';
import GALLERY_6 from '@/assets/gallery/gallery-6.png';
import GALLERY_7 from '@/assets/gallery/gallery-7.png';
import GALLERY_8 from '@/assets/gallery/gallery-8.png';
import GALLERY_9 from '@/assets/gallery/gallery-9.png';
import GALLERY_10 from '@/assets/gallery/gallery-10.png';
import GALLERY_11 from '@/assets/gallery/gallery-11.png';
import GALLERY_12 from '@/assets/gallery/gallery-12.png';
import GALLERY_13 from '@/assets/gallery/gallery-13.png';
import GALLERY_14 from '@/assets/gallery/gallery-14.png';
import GALLERY_15 from '@/assets/gallery/gallery-15.gif';
import type { Gallery } from '@/model/Gallery';

const socials = computed(() => {
  return [YOUTUBE, TELEGRAM, TWITTER, BLUESKY, DISCORD, INSTAGRAM];
});
const galleries = computed<Gallery[]>(() => {
  return [
    { src: GALLERY_1 },
    { src: GALLERY_2 },
    { src: GALLERY_3 },
    { src: GALLERY_5 },
    { src: GALLERY_6 },
    { src: GALLERY_7 },
    { src: GALLERY_8 },
    { src: GALLERY_9 },
    { src: GALLERY_10 },
    { src: GALLERY_11 },
    { src: GALLERY_12 },
    { src: GALLERY_13 },
    { src: GALLERY_14 },
    { src: GALLERY_15 },
  ];
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

      <div class="page-home-section-gallery">
        <span style="padding-inline: 1rem; font-size: 2rem; font-weight: bold">Gallery</span>
        <div class="page-home-galleries">
          <img v-for="gallery of galleries" :key="gallery.src" :src="gallery.src" />
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
      .page-home-socials {
        padding: 1rem;
        gap: 0.5rem;

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
      }

      container: social / inline-size;
      @container social (max-width: 20rem) {
        .page-home-socials {
          display: flex;
          flex-direction: column;
        }
      }
    }
    .page-home-section-gallery {
      .page-home-galleries {
        width: 100%;
        min-height: 10rem;
        padding: 1rem;
        gap: 0.5rem;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        & > img {
          width: max-content;
          max-width: 100%;
          height: 10rem;
          border-radius: 0.5rem;
          flex: 1;

          object-fit: cover;
          background: rgba(0, 0, 0, 0.5);
        }
      }

      container: gallery / inline-size;
      @container gallery (max-width: 20rem) {
        .page-home-galleries {
          min-height: 8rem;

          & > img {
            height: 8rem;
          }
        }
      }
    }
  }
}
</style>
