<template>
  <div class="">


    <!-- Breadcrumb -->
    
    <Breadcrumb />
 
    <div class="lg:hidden mt-5 flex justify-end relative w-full">
      <button ref="asideToggleButton" @click="mobileAsideActive=!mobileAsideActive" class="px-6 py-2 bg-indigo-200 rounded-md">
        <i class="fa-regular fa-bars"></i>
      </button>
      <Aside v-if="mobileAsideActive" class="block lg:hidden absolute top-[calc(100%+10px)] z-[90]" />
    </div>
  <div class="my-10 flex gap-7">
    <Aside class="hidden lg:block" />
    <div class="flex-1 overflow-x-auto">
      <RouterView></RouterView>
    </div>
  </div>

</div></template>

<script setup>
import Aside from './user/Aside.vue';
import { RouterView } from 'vue-router'
import Breadcrumb from './user/Breadcrumb.vue';
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue';

const mobileAsideActive = ref(false)
const asideToggleButton = ref()

onClickOutside(asideToggleButton, (event) => {
  mobileAsideActive.value = false
})

</script>