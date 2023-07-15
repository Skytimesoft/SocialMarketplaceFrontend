<template>
    <div class="w-full overflow-x-auto">
        <div class="text-xl font-medium mb-2">YOUR ORDERS</div>
        <p class="mb-4 text-sm">Last 10 orders you made</p>

        <div class="overflow-x-auto max-w-full">
            <Table />
        </div>

        <div class="text-xl font-medium mb-2">REQUESTS TO THE SELLER</div>
        <p class="mb-4 text-sm">Last 10 tickets you created</p>

        <div class="overflow-x-auto max-w-full">
            <Table />
        </div>
    </div>
</template>

<script setup>
import SocialTable from "@/components/element/SocialTable.vue";
import Table from "@/components/element/Table.vue";
import { getDetails } from "@/data/social.js";
</script>
