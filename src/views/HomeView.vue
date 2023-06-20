<template>
	<div class="container mx-auto px-4 mt-7">
		<h3 class="font-bold text-2xl mb-5">Home</h3>
 
		<div v-for="(item, index) in categories" :key="index" class="mb-5">
			<div class="w-full text-sm text-left text-gray-700 bg-white">
				<div class="text-xs flex items-center text-gray-100 uppercase bg-indigo-500">
					<div class="px-6 py-3 flex-1">
						{{ item }}
					</div>
					<div scope="col" class="px-6 py-3 w-[140px]">
						In stock
					</div>
					<div scope="col" class="px-6 py-3 w-[140px]">
						In stock
					</div>
					<div scope="col" class="px-6 py-3 w-[140px]">
						In stock
					</div>
					<div scope="col" class="px-6 py-3 w-[140px]">
						Price
					</div>
				</div>
				<div v-for="item in 2" :key="item*Math.random()" class="border-b flex items-center hover:bg-slate-100">
					<div class="flex-1 flex gap-4 px-6 py-4 font-medium text-gray-900 dark:text-white">
						<div class="">
							<i class="text-2xl fa-brands fa-facebook"></i>
						</div>
						<div class="flex-1">
							{{ getDetails() }}
						</div>
					</div>
					<div class="px-6 py-4 w-[140px] hidden lg:block">
						Silver
					</div>
					<div class="px-6 py-4 w-[140px] hidden lg:block">
						Laptop
					</div>
					<div class="px-6 py-4 w-[140px] hidden lg:block">
						$2999
					</div>
					<div class="px-6 py-4 w-[140px] hidden lg:block">
						$2999
					</div>
					<div class="px-6 py-4 w-[140px] lg:hidden block">
						$2999
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue'
import { categories, getDetails } from '@/data/social.js'
// const data = ref(['Facebook Softregs', 'Facebook Aged', 'Facebook With friends', 'Facebook With friends and age', 'Facebook For advertising', 'Instagram Softreg', 'Instagram With real subscribers', 'Instagram Boost likes'])
</script>