<template>
        <div class="flex justify-between gap-6">
            <div class="w-[70%]" >
                <div v-for="(el, ind) in card" :key="ind" class="w-full flex justify-center items-center bor bg-white border-2 border-b-gray-500 rounded-lg">
                    <div class="w-[17%] ">
                        <img :src="el.photo" alt="" class="w-[80%]">
                    </div>
                    <div class="w-[60%] grid justify-between p-5">
                        <h1 class="font-bold text-[18px]">{{ el.title }}</h1>
                        <p class="text-gray-600 text-[18px] w-[70%]">{{ el.text }}</p>
                        <div class="flex justify-start mt-5 py-2 items-center gap-14">
                            <button class="text-red-600 bg-gray-300 p-2 px-3 rounded-lg hover:bg-red-600 hover:text-white">Remove</button>
                            <button class="text-blue-600 bg-gray-300 p-2 px-3 rounded-lg hover:bg-blue-600 hover:text-white">Save for later</button>
                        </div>
                    </div>
                    <div class="w-[15%]  grid justify-end items-center gap-10">
                        <h1 class="text-center font-bold text-xl">{{ el.price }}</h1>
                        <Navlink :title="el.svg"/>
                    </div>
                </div>
                <div class="flex justify-between p-5 items-center bg-white">
                    <div class="w-1/2">
                        <button class="text-blue-600 bg-gray-300 p-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white">← Back to shop</button>
                    </div>
                    <div class="w-1/2 flex justify-end">
                        <button class="text-red-600 bg-gray-300 p-2 px-4 rounded-lg hover:bg-red-600 hover:text-white">Remove all</button>
                        
                    </div>
                </div>
                <div class="w-[100%] flex justify-center my-10 items-center">
                    <div class="w-1/3 flex justify-center">
                        <div class="w-1/4  flex justify-center items-center">
                            <Icon name="mdi-light:lock" color="black" class="bg-gray-400 rounded-full px-2 text-xl w-[50px] h-[50px]" />
                        </div>
                        <div class="w-1/2 grid justify-between items-center pl-5">
                            <h1 class="font-semibold">Secure payment</h1>
                            <h3 class="text-gray-500">Have you ever finally just </h3>
                        </div>
                    </div>
                    <div class="w-1/3 flex justify-center">
                        <div class="w-1/4 py-5 flex justify-center items-center">
                            <Icon name="mdi-light:message-text" color="black" class="bg-gray-400 rounded-full px-2 text-xl w-[50px] h-[50px]"/>
                        </div>
                        <div class="w-1/2 grid justify-between items-center pl-5">
                            <h1 class="font-semibold">Customer support</h1>
                            <h3 class="text-gray-500">Have you ever finally just </h3>
                        </div>
                    </div>
                    <div class="w-1/3 flex justify-center">
                        <div class="w-1/4 py-5 flex justify-center items-center">
                            <Icon name="mdi-light:truck" color="black" class="bg-gray-400 rounded-full px-2 text-xl w-[50px] h-[50px]"/>
                        </div>
                        <div class="w-1/2 grid justify-between items-center pl-5">
                            <h1 class="font-semibold">Free delivery</h1>
                            <h3 class="text-gray-500">Have you ever finally just </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[30%] ">
                <div class="grid justify-center items-center bg-white py-8 rounded-lg">
                    <p class="font-semibold text-gray-500 text-[18px] ml-7">Have a coupon?</p>
                    <div class="flex justify-center items-center mt-3">
                        <input type="text" placeholder="Add coupon" class="w-[50%]">
                        <button class="h-[42px] px-5 text-blue-500 border border-gray-500 hover:bg-blue-600 hover:text-white">Apply</button>
                    </div>
                </div>
                <div class="flex justify-center items-center bg-white border py-8 rounded-t-lg mt-10">
                    <div class="w-[90%] ">
                        <h1 class="text-center text-gray-600 text-[18px]">Subtotal:</h1>
                        <h1 class="text-center text-gray-600 text-[18px]">Discount:</h1>
                        <h1 class="text-center text-gray-600 text-[18px]">Tax:</h1>
                    </div>
                    <div class="w-[90%]">
                        <h1 class="text-center text-gray-600 text-[18px]">$1403.97</h1>
                        <h1 class="text-center text-red-600 text-[18px]">- $60.00</h1>
                        <h1 class="text-center text-gren-600 text-[18px]">+ $14.00</h1>
                    </div>
                </div>
                <div class="grid justify-center items-center bg-white border py-8 rounded-b-lg">
                    <div class="flex justify-beetwen items-center gap-6">
                        <div class="w-[90%] ">
                            <h1 class=" font-bold text-[18px]">Subtotal:</h1>
                        </div>
                        <div class="w-[90%] flex justify-end">
                            <h1 class="font-bold text-[20px]">$1357.97</h1>
                        </div>
                    </div>
                    <div class="flex mt-5">
                        <button class="w-[100%] h-[60px] hover:bg-green-500 hover:text-white rounded-xl border border-blue-600 text-blue-600 justify-center items-center">Checkout</button> 
                    </div> 
                    <div class="flex mt-5">
                        <img src="../public/payment1.png" alt="payment" class="w-[20%]">
                        <img src="../public/payment2.png" alt="payment" class="w-[20%]">
                        <img src="../public/payment3.png" alt="payment" class="w-[20%]">
                        <img src="../public/payment4.png" alt="payment" class="w-[20%]">
                        <img src="../public/payment5.png" alt="payment" class="w-[20%]">
                    </div>            
                </div>
            </div>
        </div>
</template>

<script setup>
    import {card} from '../constants/cards'
</script>

<style lang="scss" scoped>

</style>