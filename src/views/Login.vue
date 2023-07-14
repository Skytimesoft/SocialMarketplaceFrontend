<template>
    <div class="w-full min-h-[70vh] flex items-center justify-center">
        <div class="bg-white text-black w-full max-w-[500px] rounded shadow-2xl">
            <div class="border-b pt-4 pb-4 px-4 text-xl flex justify-between">
                SIGN UP TO YOUR ACCOUNT 
            </div>

            <form class="p-4 grid gap-4" @submit.prevent="handleLogin">
                <div class="flex items-centergap-2">
                    <span class="w-[150px]"></span>
                    <div v-if="errorMsg" class="flex-1 px-4 bg-red-200 text-red-700 py-2 rounded-md">
                        {{ errorMsg }}
                    </div>
                </div>
                <label class="flex items-center gap-2">
                    <span class="w-[150px]">Email:</span>
                    <input type="email" name="email" v-model="form.email" class="py-1 flex-1" required />
                </label>
                <label class="flex items-center gap-2">
                    <span class="w-[150px]">Your password:</span>
                    <input type="password" name="password" v-model="form.password" class="py-1 flex-1" required />
                </label>
                <div class="flex items-center gap-2">
                    <span class="w-[150px]"></span>
                    <button type="submit"
                        :disabled="loading"
                        class="ml-auto bg-indigo-500 text-white rounded py-1 px-4 text-center flex-1 flex items-center justify-center disabled:opacity-50">
                        <Preloader v-if="loading" />
                        Login
                    </button>
                </div>
                <div class="text-center">
                    Doesn't have an account?
                    <router-link to="/user-register" class="text-indigo-500">Register</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import Preloader from '@/components/global/Preloader.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { get } from 'lodash'
import Helper from '@/Helper';

const form = ref({
    email: null,
    password: null,
})

const loading = ref(false)
const errorMsg = ref('')

onMounted(() => {
    if (Helper.TOKEN) {
        axios.get(`http://127.0.0.1:8000/api/user/verification-token`)
            .then(res => {
                if (+res.data == 1) {
                    location.href = '/user'
                }
            })
    }
})

const handleLogin = () => {
    loading.value = true
    axios.post('/login', form.value)
        .then(res => res.data)
        .then(result => {
            loading.value = false
            if (result?.data?.access_token) {
                localStorage.setItem('d-user-token', result?.data?.access_token)
                localStorage.setItem('d-user-info', JSON.stringify(result?.data?.user))
                location.href = `/user`
            }
        })
        .catch(err => {
            if (get(err, 'response.data.message')) {
                errorMsg.value = get(err, 'response.data.message')
            }
            loading.value = false
        })
}

</script>