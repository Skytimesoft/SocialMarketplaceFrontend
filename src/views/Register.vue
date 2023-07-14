<template>
    <div class="w-full min-h-[70vh] flex items-center justify-center">
        <div class="bg-white text-black w-full max-w-[500px] rounded shadow-2xl">
            <div class="border-b pt-4 pb-4 px-4 text-xl flex justify-between">
                SIGN UP TO YOUR ACCOUNT 
            </div>
            <form class="p-4 grid gap-4" @submit.prevent="handleRegister">
                <label class="flex items-center gap-2">
                    <span class="w-[150px]">Name:</span>
                    <input type="text" name="name" v-model="form.name" class="py-1 flex-1" required />
                </label>
                <label class="flex items-center gap-2">
                    <span class="w-[150px]">Email:</span>
                    <input type="email" name="email" v-model="form.email" class="py-1 flex-1" required />
                </label>
                <label class="flex items-center gap-2">
                    <span class="w-[150px]">Your password:</span>
                    <input type="password" name="password" v-model="form.password" class="py-1 flex-1" required />
                </label>
                <label class="flex items-center gap-2">
                    <span class="w-[150px]">Confirm password:</span>
                    <input type="password" name="password_confirmation" v-model="form.password_confirmation"
                        class="py-1 flex-1" required />
                </label>
                <label class="flex items-center gap-2">
                    <span class="w-[150px]">User Type:</span>
                    <div class="flex gap-2 items-center">
                        <div class="flex items-center gap-2">
                            <input id="default-radio-1" type="radio" v-model="form.user_type" value="Buyer"
                                name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                            <label for="default-radio-1"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Buyer</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <input checked id="default-radio-2" type="radio" v-model="form.user_type" value="Seller"
                                name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                            <label for="default-radio-2"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seller</label>
                        </div>
                    </div>
                </label>
                <label class="flex items-center gap-2">
                    <input type="checkbox" v-model="form.agree" required>
                    I agree to the
                    <a href="/en/public-offer" class="text-indigo-500" target="_blank">public offer</a> and
                    <a href="/en/conditions" class="text-indigo-500" target="_blank">terms of use</a>
                </label>
                <button type="submit"
                    class="max-w-[300px] w-full bg-indigo-500 text-white rounded py-1 px-4 text-center mx-auto">
                    Sign up
                </button>
                <div class="text-center">
                    Already have an account?
                    <router-link href="/user-login" class="text-indigo-500">Login</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const form = ref({
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
    user_type: null,
    agree: false,
})


const handleRegister = () => {
    axios.post(`/register`, form.value).then(res => res.data)
        .then(result => {
            if (result?.data?.access_token) {
                localStorage.setItem('d-user-token', result?.data?.access_token)
                localStorage.setItem('d-user-info', JSON.stringify(result?.data?.user))
                location.href = `user`
            }
        }).catch(err => {
            console.log(err);
        })
}

</script>