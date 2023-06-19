<template>
    <div class="sticky top-0 border-b w-full z-[990]">
        <div class="bg-slate-600 text-slate-100">
            <div class="container mx-auto">
                <TopSmallNav />
            </div>
        </div>
        <div class="bg-slate-50 shadow">
            <div class="container mx-auto">
                <TopBottomNav />
            </div>
        </div>
    </div>
</template>

<script setup>
import TopBottomNav from './TopBottomNav.vue';
import TopSmallNav from './TopSmallNav.vue';
</script>