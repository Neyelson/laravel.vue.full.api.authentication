// Adds picocss.
import '@picocss/pico/css/pico.min.css';
// Adds font-awesome.
import '@fortawesome/fontawesome-free/css/all.min.css';
// Adds my custom sitewide css.
import './assets/css/main.css';

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')