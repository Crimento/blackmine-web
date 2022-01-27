import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/HomePage.vue';
import Status from '../components/pages/StatusPage.vue';
import News from '../components/pages/NewsPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/status',
    name: 'Status',
    component: Status,
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
];

const router = createRouter({
  linkActiveClass: 'btn-active',
  history: createWebHistory(),
  routes,
});

export default router;
