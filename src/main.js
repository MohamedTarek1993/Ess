import { createApp } from 'vue';
import App from "./App.vue";
import router from './routers.js';
// Import Bootstrap an BootstrapVue CSS files
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createI18n } from 'vue-i18n'
import FlagIcon from 'vue-flag-icon'

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
app.use(router);
app.use(i18n);
app.use(FlagIcon);
app.mount('#app');