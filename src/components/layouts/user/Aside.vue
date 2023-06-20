<template>
    <div class="overflow-y-auto transition-transform bg-white rounded-md w-64 dark:bg-gray-800" tabindex="-1"
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
                        to="/ticket"
                        exact-active-class="bg-indigo-500 text-white"
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                        <i class="fa-solid fa-ticket"></i>
                        <span class="flex-1 ml-3 whitespace-nowrap">Ticket</span>
                    </router-link>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                        <i class="fa-duotone fa-cart-shopping"></i>
                        <span class="flex-1 ml-3 whitespace-nowrap">My orders</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                        <i class="fa-solid fa-user"></i>
                        <span class="flex-1 ml-3 whitespace-nowrap">Profiles</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                        <i class="fa-duotone fa-share-nodes"></i>
                        <span class="flex-1 ml-3 whitespace-nowrap">Affiliate program</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                        <i class="fa-duotone fa-user-group"></i>
                        <span class="flex-1 ml-3 whitespace-nowrap">Add funds</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                        <i class="fa-duotone fa-shield-halved"></i>
                        <span class="flex-1 ml-3 whitespace-nowrap">Security</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-500 hover:text-white">
                        <i class="fa-solid fa-bell-on"></i>
                        <span class="flex-1 ml-3 whitespace-nowrap">Notifications</span>
                    </a>
                </li> 
                <li>
                    <a href="#" class="text-base p-3 rounded-md font-semibold bg-red-100 text-red-700 hover:bg-red-500 hover:text-white flex justify-between items-center">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <span class="flex-1 ml-3 whitespace-nowrap">Sign out</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>