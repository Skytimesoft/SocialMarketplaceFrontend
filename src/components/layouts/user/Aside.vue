<template>
    <div>
        <div class="sticky top-[120px] overflow-y-auto transition-transform bg-white rounded-md w-64 dark:bg-gray-800" tabindex="-1"
            aria-labelledby="drawer-navigation-label">
            <div class="text-base py-4 px-4 font-semibold bg-indigo-500 text-white flex justify-between items-center">
                <h3>Balance</h3>
                <span>$400</span>
            </div>

            <div class="py-4 px-4 overflow-y-auto">
                <ul class="font-medium space-y-1">
                    <li>
                        <router-link to="/user"
                            exact-active-class="bg-indigo-500 text-white"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                            <i class="fa-solid fa-house"></i>
                            <span class="ml-3">Home</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            to="/user/ticket"
                            exact-active-class="bg-indigo-500 text-white"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                            <i class="fa-solid fa-ticket"></i>
                            <span class="flex-1 ml-3 whitespace-nowrap">Ticket</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/user/orders"
                            exact-active-class="bg-indigo-500 text-white"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                            <i class="fa-duotone fa-cart-shopping"></i>
                            <span class="flex-1 ml-3 whitespace-nowrap">My orders</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/user/profile"
                            exact-active-class="bg-indigo-500 text-white"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                            <i class="fa-solid fa-user"></i>
                            <span class="flex-1 ml-3 whitespace-nowrap">Profiles</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/user/affiliate-program"
                            exact-active-class="bg-indigo-500 text-white"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                            <i class="fa-duotone fa-share-nodes"></i>
                            <span class="flex-1 ml-3 whitespace-nowrap">Affiliate program</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/user/add-funds"
                            exact-active-class="bg-indigo-500 text-white"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                            <i class="fa-duotone fa-wallet"></i>
                            <span class="flex-1 ml-3 whitespace-nowrap">Add funds</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/user/security"
                            exact-active-class="bg-indigo-500 text-white"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                            <i class="fa-duotone fa-shield-halved"></i>
                            <span class="flex-1 ml-3 whitespace-nowrap">Security</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/user/notifications"
                            exact-active-class="bg-indigo-500 text-white"
                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                            <i class="fa-solid fa-bell-on"></i>
                            <span class="flex-1 ml-3 whitespace-nowrap">Notifications</span>
                        </router-link>
                    </li> 
                    <li>
                        <button type="button" @click="handleLogout" class="w-full text-base p-3 rounded-md font-semibold bg-red-100 text-red-700 hover:bg-red-500 hover:text-white flex justify-left text-left items-center">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <span class="flex-1 ml-3 whitespace-nowrap">Sign out</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router/router';
import axios from 'axios';

const handleLogout = () => {
    axios.get('/user/sign-out').then(res => res.data)
    .then(r => {
        localStorage.setItem('d-user-token', null);
        router.push('/user-login')
    }).catch(err => console.log(err))
}

</script>