import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import Helper from './Helper'
import 'vue3-toastify/dist/index.css' 
// import './assets/font-awesome/css/all.css'

const app = createApp(App)
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
let token = Helper.TOKEN;
axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
app.use(router)

app.mount('#app')
