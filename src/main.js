import { createApp } from 'vue';
import App from "./App.vue";
import router from './routers.js';
// Import Bootstrap an BootstrapVue CSS files
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createI18n } from 'vue-i18n'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import FlagIcon from 'vue-flag-icon'
import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js'


function loadLocaleMessages() {
  const locales = require.context(
    './locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}
let lang = 'en';
if (localStorage.getItem('lang')) {
  lang = localStorage.getItem('lang');
}

const i18n = createI18n({
  locale: lang, // set locale
  fallbackLocale: lang, // set fallback locale
  messages: loadLocaleMessages(), // set locale messages
});
const app = createApp(App);
// axios baseurl
axios.defaults.baseURL = 'https://ess.crazyideaco.com/public/api';
app.config.globalProperties.axios=axios
app.use(router);
app.use(VueSweetalert2);
app.use(i18n);
app.use(FlagIcon);
app.use(AOS.init());
app.use(VueEasyLightbox) // global variable
app.mount('#app');
