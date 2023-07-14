<template>
    <div class="bg-white w-full max-w-[500px] p-5 rounded-xl shadow relative">
        <h2 class="font-semibold text-xl">Amount to add, $:</h2>
        <form @submit.prevent="handleAddFund" class="flex flex-col mt-5">
            <label class="grid gap-1 mb-3">
                <span>Amount</span>
                <input type="number" v-model="form.amount" class="rounded-full px-4 flex-1" required />
            </label>
            <label class="flex items-center pr-5 gap-2 mb-4">
                <input type="checkbox" v-model="form.agree" required />
                <span>I agree to The Public Offer and The Terms of Use</span>
            </label>
            <div class="flex justify-end">
                <button type="submit" :disabled="loading" class="py-2 px-10 rounded-full text-white bg-indigo-500 flex items-center disabled:opacity-50">
                    <Preloader v-if="loading" />
                    Add
                </button>
            </div>
        </form>
        <GradientShadow />
    </div>
</template>

<script setup>
import GradientShadow from '@/components/element/GradientShadow.vue';
import Preloader from '@/components/global/Preloader.vue';
import { toast } from 'vue3-toastify';
import Helper from '@/Helper';
import axios from 'axios';
import { ref } from 'vue';


const loading = ref(false)

const form = ref({
    amount: 0,
    agree: false
})

const handleAddFund = () => {
    if (form.value.amount <= 0) {
        toast.error('Amount must be greater than 0')
        return
    }
    loading.value = true
    axios.post('/user/add-fund-token', {
        amount: form.value.amount,
    }).then(res => res.data)
    .then(result => {
        loading.value = false
        if (result.message) {
            toast.success(result.message)
            form.value.amount = 0;
            form.value.agree = false;
        }
        // if (result.token) {
        //     location.href = `${Helper.baseUrl}/payment/?id=${result.token}`
        // }
    })
    .catch(err => {
        console.log(err)
        loading.value = false
    })
}

</script>