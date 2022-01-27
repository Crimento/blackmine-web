import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import Particles from 'particles.vue3';

import 'animate.css';
import './index.css';

createApp(App).use(router).use(Particles).mount('#app');
