import type { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

export interface NavigationModel {
  id: string;
  path: string;
  component: () => Component;
}

export const HOME: NavigationModel = {
  id: 'home',
  path: '/',
  component: () => import('@/pages/home/PageHome.vue'),
};

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: HOME.path, name: HOME.id, component: HOME.component },
    { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
  ],
});
