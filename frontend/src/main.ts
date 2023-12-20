import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Notifications from 'notiwind'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.use(Notifications)

app.mount('#app')
