<template>
    <h1 class="mb-4 font-bold text-xl">
        ADD FUNDS
    </h1>

    <div>
        <div class="border-indigo-500 border inline-flex rounded-full overflow-hidden">
            <button 
                :class="{ 'bg-indigo-500 text-white': activeTab == 'PaymentMethod' }" 
                class="py-2 px-5"
                @click="activeTab='PaymentMethod'"
            >
                Payment methods
            </button>
            <button 
                :class="{ 'bg-indigo-500 text-white': activeTab == 'BalanceHistory' }" 
                class="py-2 px-5"
                @click="activeTab='BalanceHistory'"
            >
                Balance history
            </button>
        </div>
    </div>

    <div class="mt-5 flex">
        <div class="bg-white w-full max-w-[500px] p-5 rounded-xl shadow relative">
            <h2 class="font-semibold text-xl">Amount to add, $:</h2>
            <div class="flex flex-col mt-5">
                <label class="grid gap-1 mb-3">
                    <span>Amount</span>
                    <input type="number" class="rounded-full flex-1" />
                </label>
                <label class="flex items-center pr-5 gap-2 mb-4">
                    <input type="checkbox" />
                    <span>I agree to The Public Offer and The Terms of Use</span>
                </label>
                <div class="flex justify-end">
                    <button class="py-2 px-10 rounded-full text-white bg-indigo-500">Add</button>
                </div>
            </div>
            <GradientShadow />
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import GradientShadow from '../../components/element/GradientShadow.vue';

const activeTab = ref('PaymentMethod')

</script>