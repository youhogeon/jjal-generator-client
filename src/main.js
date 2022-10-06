import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

import fortawesome from './fortawesome'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', fortawesome)

app.mount('#app')
