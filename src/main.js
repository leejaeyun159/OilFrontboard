import { createApp } from 'vue'
import App from './App.vue'
import router from  './routes'
import './assets/common.css'
import axios from 'axios'

const app = createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = '//localhost:8081'
