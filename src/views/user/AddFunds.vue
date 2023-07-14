<template>
    <h1 class="mb-4 font-bold text-xl">
        ADD FUNDS
    </h1>

    <div>
        <div class="border-indigo-500 border inline-flex rounded-full overflow-hidden">
            <button 
                :class="{ 'bg-indigo-500 text-white': activeTab == 'AddFund' }" 
                class="py-2 px-5"
                @click="activeTab='AddFund'"
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

    <div class="mt-5 flex w-full">
        <component :is="components[activeTab]" />
    </div>
    
</template>

<script setup>
import { ref } from 'vue';


import AddFund from '@/components/funds/AddFund.vue'
import BalanceHistory from '@/components/funds/BalanceHistory.vue'

const activeTab = ref('AddFund')

const components = {
    AddFund,
    BalanceHistory
}




</script>