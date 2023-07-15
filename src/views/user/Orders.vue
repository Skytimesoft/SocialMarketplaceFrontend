<template>
    <div class="overflow-x-auto">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Currency
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3 text-right">
                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y">
                    <tr v-if="orders.length" v-for="(order, index) in orders" :key="index">
                        <td class="px-6 py-3 text-left">
                            {{ order.unique_id }}
                        </td>
                        <td class="px-6 py-3 text-center">
                            {{ order.status }}
                        </td>
                        <td class="px-6 py-3 text-center">
                            {{ order.amount_currency }}
                        </td>
                        <td class="px-6 py-3 text-center">
                            {{ order.quantity }}
                        </td>
                        <td class="px-6 py-3 text-right">
                            {{ order.total_amount }}
                        </td>
                    </tr>
                    <tr v-else class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th colspan="6" scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                            There's nothing here yet
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import useOrder from '@/composables/useOrder';
import { onMounted } from 'vue';


const { orders, getOrder } = useOrder()

onMounted(() => {
    getOrder()
})

</script>