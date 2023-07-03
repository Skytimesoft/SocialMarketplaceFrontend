<template>
    <div class="text-xl font-medium mb-2">YOUR ORDERS</div>
    <p class="mb-4 text-sm">Last 10 orders you made</p>

    <Table />

    <div class="text-xl font-medium mb-2">REQUESTS TO THE SELLER</div>
    <p class="mb-4 text-sm">Last 10 tickets you created</p>

    <Table />
</template>

<script setup>
import SocialTable from "@/components/element/SocialTable.vue";
import Table from "@/components/element/Table.vue";
import { getDetails } from "@/data/social.js";
</script>
