import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import Helper from './Helper'
import 'vue3-toastify/dist/index.css'
// import './assets/font-awesome/css/all.css'

const app = createApp(App)
axios.defaults.baseURL = Helper.apiUrl;
let token = Helper.TOKEN;
axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }

axios.interceptors.response.use(
    function (response) {
        // Return the response if it's successful
        return response;
    },
    function (error) {
        // Handle error
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);

            // Define your default action based on the error response here
            // For example:
            if (error.response.status === 401) {
                if (location.pathname !== '/user-login') {
                    localStorage.setItem('d-user-token', null)
                    location.href = `/user-login`;
                }
            }
            if (error.response.status === 404) {
                // Handle a "Not Found" error
                // console.log("Resource not found");
            } else {
                // Handle other error statuses
                // console.log("An error occurred");
            }
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser
            // console.log(error.request);
            // console.log("No response received");
        } else {
            // Something happened in setting up the request that triggered an Error
            // console.log('Error', error.message);
        }
        // console.log(error.config);

        // Return a rejected Promise to propagate the error to the caller
        return Promise.reject(error);
    }
);


app.use(router)

app.mount('#app')
