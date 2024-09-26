<script setup lang="ts">
import type { SocialModel } from '@/model/Social';

defineProps<{ item: SocialModel }>();
</script>

<template>
  <button class="card-social">
    <img :src="item.thumbnail" />
    <div>
      <img :src="item.icon" />
      <div>
        <span>{{ item.title }}</span>
        <span>{{ item.handler }}</span>
      </div>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.card-social {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  text-align: start;

  & > img {
    width: 100%;
    height: 100%;
    aspect-ratio: 3/2;

    object-fit: cover;
  }
  & > div {
    width: 100%;
    padding: 1rem;
    gap: 0.5rem;

    position: absolute;
    bottom: 0;

    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    background-image: linear-gradient(to top, black, transparent);

    & > img {
      width: 3em;
      height: 3em;
    }
    & > div {
      display: flex;
      flex-direction: column;

      & > span:last-child {
        font-size: 1.2em;
        font-weight: bold;
      }
    }
  }
}
</style>
