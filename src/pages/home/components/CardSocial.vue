<script setup lang="ts">
import type { SocialModel } from '@/model/Social';

defineProps<{ item: SocialModel }>();
</script>

<template>
  <a class="card-social" :href="item.href" target="_blank">
    <img :src="item.thumbnail" />
    <div>
      <div>
        <img :src="item.icon" />
        <div>
          <span>{{ item.title }}</span>
          <span>{{ item.handler }}</span>
        </div>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.card-social {
  font-size: 0.8rem;

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
    position: absolute;
    bottom: 0;
    z-index: 1;

    width: 100%;

    min-height: 60%;

    display: flex;
    align-items: flex-end;

    background-image: linear-gradient(to top, black, transparent);

    & > div {
      width: 100%;
      padding: 1rem;
      gap: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: flex-start;

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
}
</style>
