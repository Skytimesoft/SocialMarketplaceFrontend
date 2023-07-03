<template>
    <div class="w-full text-sm text-left text-gray-700 mt-10">
        <div
            class="px-3 py-4 rounded-md mb-3 flex items-center uppercase bg-white font-bold shadow relative overflow-hidden">
            <div class="flex-1">
                {{ title }}
            </div>
            <div class="w-[140px] hidden lg:block text-center">
                In stock
            </div>
            <div class="w-[140px] hidden lg:block text-center">
                In stock
            </div>
            <div class="w-[140px] hidden lg:block text-center">
                In stock
            </div>
            <div class="w-[140px] hidden lg:block text-center">
                Price
            </div>
            <div class="w-[140px] hidden lg:block text-right">
                Action
            </div>
            <div class="w-[150px] block lg:hidden text-right">
                Info
            </div>
            <div class="absolute rotate-180 top-full left-20 flex h-8 items-end overflow-hidden">
                <div class="flex -mb-px h-[2px] w-80 -scale-x-100">
                    <div
                        class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
                    </div>
                    <div
                        class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
                    </div>
                </div>
            </div>
            <div class="absolute -inset-px z-[-1] rounded-md bg-gradient-to-r from-indigo-400 to-red-400"
                aria-hidden="true"></div>
        </div>
        <div v-for="item in 1" :key="item * Math.random()" role="button"
            class="relative flex-col sm:flex-row flex items-center bg-white mb-2 border-2 border-transparent shadow hover:border-indigo-500 rounded-md">
            <div
                class="flex-1 flex flex-col md:flex-row items-center gap-4 px-3 py-4 font-medium text-gray-900 dark:text-white">
                <div class="flex justify-between w-full md:w-auto">
                    <div class="bg-indigo-500 text-white rounded-md shadow-md px-2 py-1">
                        <i class="text-2xl fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div class="flex-1">
                    {{ getDetails() }}
                </div>
            </div>
            <div class="px-6 py-4 w-[140px] hidden lg:block text-center">
                Silver
            </div>
            <div class="px-6 py-4 w-[140px] hidden lg:block text-center">
                Laptop
            </div>
            <div class="px-6 py-4 w-[140px] hidden lg:block text-center">
                Laptop
            </div>
            <div class="px-6 py-4 w-[140px] hidden lg:block text-center">
                $2999
            </div>
            <div class="px-3 py-4 w-[140px] hidden lg:block text-right">
                <button type="button"
                    class="text-indigo-700 border border-indigo-700 hover:bg-indigo-700 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
            <div class="px-3 py-4 w-full sm:w-auto flex items-center justify-between gap-2 lg:hidden text-right">
            $2999
            <button type="button"
                class="lg:hidden text-indigo-700 border border-indigo-700 hover:bg-indigo-700 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
</div></template>

<script setup>
import { categories, getDetails } from '@/data/social.js'
const props = defineProps({
    title: String,
})
</script>