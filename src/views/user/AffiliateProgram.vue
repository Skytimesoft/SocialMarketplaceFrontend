<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
            <h3 class="text-xl font-bold">AFFILIATE PROGRAM</h3>
            <div class="bg-indigo-500 text-white px-4 py-5 mt-5 rounded-t-md flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <i class="text-3xl fa-duotone fa-memo-pad"></i>
                    Total paid so far
                </div>
                <div class="text-3xl font-bold">
                    $0
                </div>
            </div>
            <div class="bg-white px-4 py-5 rounded-b-md flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <i class="text-3xl fa-solid fa-list-check"></i>
                    Total paid so far
                </div>
                <div class="text-3xl font-bold">
                    $0
                </div>
            </div>
        </div>
        <div>
            <h3 class="text-xl font-bold">WITHDRAWAL OF EARNED FUNDS</h3>
            
            <label class="grid gap-2">
                <div>Payment system</div>
                <select name="" id="" class="w-full py-1 rounded-md">
                    <option value="">Opt 1</option>
                    <option value="">Opt 2</option>
                    <option value="">Opt 3</option>
                </select>
            </label>
            <div class="mb-3 mt-5 grid gap-3">
                <button class="py-1 px-4 w-full bg-indigo-500 text-white rounded-md">Withdraw found</button>
                <button class="py-1 px-4 w-full border border-indigo-500 text-indigo-500 rounded-md">Withdraw found</button>
            </div>
        </div>
    </div>
    <div>
        <div>
            <h2 class="font-bold my-5">REFERRAL LINKS AND COUPON:</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="mb-3 grid gap-1">
                    <p>Your referral link 1:</p>
                    <input type="text" value="http://127.0.0.1:5174/ref=44231123" class="py-1 w-full rounded-md">
                </div>
                <div class="mb-3 grid gap-1">
                    <p>Your referral link 2:</p>
                    <input type="text" value="http://127.0.0.1:5174/ref=44231123" class="py-1 w-full rounded-md">
                </div>
            </div>

            <div class="mt-5">
                <h3 class="font-semibold mb-3">INFORMATION ABOUT THE REFERRAL SYSTEM:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div class="flex gap-2 items-center">
                        <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                        <p class="flex-1">You get 5% reward for each brought client order. The payments are made within 3 days since they were requested.</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                        <p class="flex-1">If the customer has already made purchases on our service or belongs to another referral, then it will not be assigned to you.</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                        <p class="flex-1">At the moment, it is your assigned referral for 24 months. You will no longer receive the payments for it after this period.</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                        <p class="flex-1">For violation of the rules of operation, the service administration has the right to block partner links and accounts without payment of remuneration.</p>
                    </div>
                </div> 
            </div>
            <div class="bg-white grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mb-10 divide-x divide-slate-400">
                <div class="px-10 py-9 grid gap-3">
                    <h1 class="text-center pb-5 text-xl font-bold">ALLOWED TRAFFIC TYPES</h1>
                    <div class="flex gap-2 items-center">
                        <i class="text-green-500 mr-2 fa-solid fa-check"></i>
                        <p class="flex-1">You get 5% reward for each brought client order. The payments are made within 3 days since they were requested.</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="text-green-500 mr-2 fa-solid fa-check"></i>
                        <p class="flex-1">If the customer has already made purchases on our service or belongs to another referral, then it will not be assigned to you.</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="text-green-500 mr-2 fa-solid fa-check"></i>
                        <p class="flex-1">At the moment, it is your assigned referral for 24 months. You will no longer receive the payments for it after this period.</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="text-green-500 mr-2 fa-solid fa-check"></i>
                        <p class="flex-1">For violation of the rules of operation, the service administration has the right to block partner links and accounts without payment of remuneration.</p>
                    </div>
                </div> 
                <div class="px-10 py-9 grid gap-3">
                    <h1 class="text-center pb-5 text-xl font-bold">PROHIBITED TRAFFIC TYPES</h1>
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-x text-red-600 mr-3"></i>
                        <p class="flex-1">contextual advertising Yandex Direct and Google Adwords;</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-x text-red-600 mr-3"></i>
                        <p class="flex-1">posting topics on forums;</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-x text-red-600 mr-3"></i>
                        <p class="flex-1">any impressions based on brand queries;</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-x text-red-600 mr-3"></i>
                        <p class="flex-1">mail and any other type of spam;</p>
                    </div>
                </div> 
            </div>


        </div>
    </div>
</template>