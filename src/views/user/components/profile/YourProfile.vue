<template>
    <div>
        <div class="pb-3 text-xl font-semibold">YOUR PROFILE</div>
        <div class="mt-5">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" v-model="profileForm.name" id="name"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        <div class="mt-2">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" v-model="profileForm.email" id="email"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        <div class="mt-2 flex justify-end">
            <button @click="profileUpdate" :disabled="loadingSave"
                class="py-1 px-4 flex items-center rounded-md bg-indigo-500 text-white">
                <Preloader v-if="loadingSave" />
                Save
            </button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Preloader from '@/components/global/Preloader.vue'
import axios from 'axios';
import { toast } from 'vue3-toastify'
import { get } from 'lodash'


const profileForm = ref({
    name: null,
    email: null,
})

onMounted(()=> {
    axios.get('user/profile')
        .then(res => res.data)
        .then(result => {
            let { data } = result
            if (data) {
                profileForm.value.name = data.name;
                profileForm.value.email = data.email;
            }
        })
        .catch((err,xhr) => {
            console.log(err);
        })
})

const loadingSave = ref(false)

const profileUpdate = () => {
    loadingSave.value = true
    axios.put('user/profile', profileForm.value)
        .then(res => res.data)
        .then(result => {
            console.log(result);
            toast.success(result.message)
            loadingSave.value = false
        })
        .catch((err, xhr) => {
            loadingSave.value = false
            toast.error('Opps something wrong')
        })
}

</script>