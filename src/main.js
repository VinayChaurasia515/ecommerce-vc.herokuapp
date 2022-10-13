import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(router,VueCookies).mount('#app')