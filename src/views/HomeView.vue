<template>
	<div class="mt-7 2xl:px-0">
		<h3 class="font-bold text-2xl mb-5">Home</h3>
 
		<div v-for="(item, index) in categories" :key="index" class="mb-5">
			<SocialTable :title="item" />
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue'
import { categories, getDetails } from '@/data/social.js'
import SocialTable from '@/components/element/SocialTable.vue';
// const data = ref(['Facebook Softregs', 'Facebook Aged', 'Facebook With friends', 'Facebook With friends and age', 'Facebook For advertising', 'Instagram Softreg', 'Instagram With real subscribers', 'Instagram Boost likes'])
</script>