<template>
    <div class="relative overflow-x-auto w-full">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left">
                        SL
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                        User
                    </th> 
                    <th scope="col" class="px-6 py-3 text-center">
                        Date
                    </th>
                    <th scope="col" class="px-6 py-3 text-right">
                        Amount
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-if="funds.length">
                    <tr v-for="(item, index) in funds" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 text-left">
                            {{ index + 1 }}
                        </th>
                        <th scope="row" class="px-6 py-4 text-center">
                            {{ get(item, 'user.name') }}
                        </th>
                        <td class="px-6 py-4 text-center">
                            {{ Helper.dateFormate(item.created_at) }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            {{ item.amount }}
                        </td>
                    </tr>
                </template>
                <template v-else>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"> 
                        <td v-if="!loadingFunds" colspan="4" class="px-6 py-4 text-center">
                            No data found
                        </td>
                        <td v-else colspan="4" class="px-6 py-4 text-center">
                            Loading...
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { get } from 'lodash'
import useFunds from '@/composables/useFunds'
import Helper from '@/Helper'

const { funds, getFunds, loadingFunds } = useFunds()

onMounted(() => {
    getFunds()
})

</script>