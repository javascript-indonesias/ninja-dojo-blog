import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Import style global CSS
import './assets/styles.css';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
