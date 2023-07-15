<template>
    <div class="max-w-screen-xl mx-auto px-4 xl:px-0">
        <slot />
    </div>

</template>

<script setup>
import TopNav from '../global/TopNav.vue';
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const catOpen = ref(false)
const categoryDropBtn = ref(null)

onClickOutside(categoryDropBtn, (event) => {
    catOpen.value = false
})


</script>