<template>
	<div class="container mx-auto px-4 mt-7">
		<h3>Home</h3>

		<div v-for="(item, index) in data" :key="index">
			<div class="relative overflow-x-auto mt-5">
				<table class="w-full text-sm text-left text-gray-700 bg-white">
					<thead class="text-xs text-gray-100 uppercase bg-slate-500">
						<tr>
							<th scope="col" class="px-6 py-3">
								{{ item }}
							</th>
							<th scope="col" class="px-6 py-3 w-[140px]">
								In stock
							</th>
							<th scope="col" class="px-6 py-3 w-[100px]"></th>
							<th scope="col" class="px-6 py-3 w-[100px]">
								Price
							</th>
							<th scope="col" class="px-6 py-3 w-[100px]"></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in 5" :key="item*Math.random()" class="border-b hover:bg-slate-100">
							<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								Apple MacBook Pro 17"
							</th>
							<td class="px-6 py-4 w-[140px]">
								Silver
							</td>
							<td class="px-6 py-4 w-[100px]">
								Laptop
							</td>
							<td class="px-6 py-4 w-[100px]">
								$2999
							</td>
							<td class="px-6 py-4 w-[100px]">
								$2999
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue'

const data = ref(['Facebook Softregs', 'Facebook Aged', 'Facebook With friends', 'Facebook With friends and age', 'Facebook For advertising', 'Instagram Softreg', 'Instagram With real subscribers', 'Instagram Boost likes'])
</script>