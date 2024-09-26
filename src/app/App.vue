<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';

const route = useRoute();

const refAppBody = ref<HTMLDivElement>();
const appBodyScrollTop = ref(0);

const routeName = computed(() => route.name);

function onScroll(e: Event): void {
  const target = e.target as HTMLDivElement;
  appBodyScrollTop.value = target.scrollTop ?? 0;
}

watch(routeName, () => {
  refAppBody.value?.scrollTo({ top: 0 });
});
</script>

<template>
  <div class="app">
    <div class="app-body" :style="{ 'z-index': '2' }" ref="refAppBody" @scroll="onScroll">
      <RouterView :style="{ 'z-index': '1' }" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  width: 100%;
  height: 100dvh;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  .app-body {
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
}
</style>
