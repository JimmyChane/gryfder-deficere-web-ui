<script setup lang="ts">
import SINGAPORE_FLAG from '@/assets/icon/flag/singapore.svg';
import MALAYSIA_FLAG from '@/assets/icon/flag/malaysia.svg';
import TAIWAN_FLAG from '@/assets/icon/flag/taiwan.svg';
import UNITED_KINGDOM_FLAG from '@/assets/icon/flag/united-kingdom.svg';
import { FULL_NAME } from '@/model/Fursona';
import { useElementBounding } from '@vueuse/core';
import { computed, ref } from 'vue';

const selfRef = ref();
const { width } = useElementBounding(selfRef);

const isThin = computed(() => width.value < 500);
</script>

<template>
  <div ref="selfRef" class="home-header" :data-thin="isThin">
    <img src="@/assets/img/pfp.webp" />

    <div class="home-header-body">
      <div class="home-header-title">
        <b>{{ FULL_NAME }}</b>
        <span>Raven</span>
      </div>

      <div class="home-header-labels">
        <div>
          <span>
            <img class="home-header-flag" :src="SINGAPORE_FLAG" />
            Singapore
          </span>

          <span>
            <img class="home-header-flag" :src="MALAYSIA_FLAG" />
            Malaysia
          </span>
        </div>
        <div>
          <span>
            中文
            <img class="home-header-flag" :src="TAIWAN_FLAG" />
            +(潮/粵) / EN
            <img class="home-header-flag" :src="UNITED_KINGDOM_FLAG" />
          </span>
        </div>
        <div>
          <span>Disciple † ★</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-header {
  padding-inline: 1rem;
  gap: 1rem;

  display: flex;

  & > img {
    width: 10em;
    max-width: 100%;
    aspect-ratio: 1/1;

    border-radius: 1.5em;

    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.25);
  }
  .home-header-body {
    gap: 1rem;
    display: flex;
    flex-direction: column;

    .home-header-title {
      min-height: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      & > b {
        font-weight: bold;
        font-size: 2.2rem;
      }
    }
    .home-header-labels {
      gap: 0.5rem;
      display: flex;
      flex-direction: column;

      & > div {
        gap: 0.2em 2em;

        display: flex;
        align-items: center;
        justify-content: inherit;
        flex-wrap: wrap;
      }

      .home-header-flag {
        height: 0.8em;
      }
    }
  }

  &[data-thin='true'] {
    flex-direction: column;
    align-items: center;
    text-align: center;

    .home-header-body {
      .home-header-labels {
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
