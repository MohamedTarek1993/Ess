import { createApp } from 'vue';
import App from "./App.vue";
import router from './router.js';
// Import Bootstrap an BootstrapVue CSS files
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);
  app.use(router);
  app.mount('#app');