<template>
    <HeaderTop/>
    <div class="container mx-auto">
        <div class="w-[100%] flex border">
            <input type="text" placeholder="Search" class="w-[100%] pl-10 rounded-lg relative">
            <Icon name="ep:search" color="black" class="absolute text-xl m-3" />
        </div>
        <div class="flex justify-center items-center my-2 gap-5">
            <button class="text-sm font-bold p-1 px-2 bg-teal-300 rounded-lg text-white hover:bg-teal-600">All category</button>
            <button class="text-sm font-bold p-1 px-2 bg-teal-300 rounded-lg text-white hover:bg-teal-600">Gadgets</button>
            <button class="text-sm font-bold p-1 px-2 bg-teal-300 rounded-lg text-white hover:bg-teal-600">Clocthes</button>
            <button class="text-sm font-bold p-1 px-2 bg-teal-300 rounded-lg text-white hover:bg-teal-600">Accessory</button>
        </div>
        <div class="flex justify-beetwen my-2 gap-5">
            <img src="../../public/background.png" alt="" class="relative">
            <div class="absolute m-10">
                <h3>Latest trending</h3>
                <h3 class="font-bold">Electronic items</h3>
                <button class="mt-5 text-sm font-bold p-1 px-2 text-teal-600 rounded-lg bg-white">Learn more</button>
            </div>
        </div>
        <div class="flex justify-between items-center p-5">
            <div class="w-1/2">
                <h1 class="font-bold text-xl">Deals and offers</h1>
                <p class="text-lg">Electronic equipments</p>
            </div>
            <div class="w-1/2 flex justify-center items-center gap-6">
                <div class="w-1/3 bg-gray-300 rounded-lg">
                    <h1 class="text-center">13</h1>
                    <p class="text-center">hour</p>
                </div>
                <div class="w-1/3 bg-gray-300 rounded-lg">
                    <h1 class="text-center">34</h1>
                    <p class="text-center">min</p>
                </div>
                <div class="w-1/3 bg-gray-300 rounded-lg">
                    <h1 class="text-center">56</h1>
                    <p class="text-center">sec</p>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center p-5">
            <div class="flex justify-center items-center gap-10">
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/price3.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1>Smart watches</h1>
                        <p class="bg-red-300 text-red-700 text-center rounded-full">-25</p>
                    </div>
                </div>
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/naushnik.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1>Smart watches</h1>
                        <p class="bg-red-300 text-red-700 text-center rounded-full">-25</p>
                    </div>
                </div>
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/comp.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1>Smart watches</h1>
                        <p class="bg-red-300 text-red-700 text-center rounded-full">-25</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- =============================================================== -->
        <h1 class="font-bold text-xl">Deals and offers</h1>
        <div class="flex justify-between items-center p-5">
            <div class="flex justify-center items-center gap-10">
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/price9.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1>Smart watches</h1>
                        <p class="text-gray-500 text-center rounded-full">From USD 19</p>
                    </div>
                </div>
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/price10.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1>Smart watches</h1>
                        <p class="text-gray-500 text-center rounded-full">From USD 19</p>
                    </div>
                </div>
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/card3.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1>Smart watches</h1>
                        <p class="text-gray-500 text-center rounded-full">From USD 19</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="ml-5 p-2 px-4 bg-blue-600 text-white rounded-lg">Source now →</button>
        <!-- ============================================================================= -->
        <h1 class="font-bold text-xl mt-3">Consumer electronics</h1>
        <div class="flex justify-between items-center p-5">
            <div class="flex justify-center items-center gap-10 ">
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/iphone2.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1>Smart watches</h1>
                        <p class="text-gray-500 text-center rounded-full">From USD 19</p>
                    </div>
                </div>
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/phone.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1>Smart watches</h1>
                        <p class="text-gray-500 text-center rounded-full">From USD 19</p>
                    </div>
                </div>
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/iphone3.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1>Smart watches</h1>
                        <p class="text-gray-500 text-center rounded-full">From USD 19</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="ml-5 p-2 px-4 bg-blue-600 text-white rounded-lg">Source now →</button>        
        <!-- ================================================================================ -->
        <div class="flex justify-beetwen my-4 gap-5">
            <img src="../../public/bg2.png" alt="" class="relative">
            <div class="absolute m-10">
                <h1 class="font-bold w-[70%]">An easy way to send requests to all suppliers</h1>
                <button class="mt-5 text-sm font-bold p-1 px-2 bg-blue-600 rounded-lg text-white ">Send inquiry</button>
            </div>
        </div>
        <!-- ===================================================== -->
        <h1 class="font-bold text-xl mt-3">Recommended items</h1>
        <div class="flex justify-between items-center p-5">
            <div class="flex justify-center items-center gap-10 ">
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/price2.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1 class="font-bold">$10.30</h1>
                        <p class="text-gray-500 text-sm text-center rounded-full">T-shirts with multiple colors, for men</p>
                    </div>
                </div>
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/phone.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1 class="font-bold">$10.30</h1>
                        <p class="text-gray-500 text-sm text-center rounded-full">T-shirts with multiple colors, for men</p>
                    </div>
                </div>
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/iphone3.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1 class="font-bold">$10.30</h1>
                        <p class="text-gray-500 text-sm text-center rounded-full">T-shirts with multiple colors, for men</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="my-5 flex justify-end items-center mx-10">
        <a href="/" class="text-sm font-bold p-1 px-2 bg-red-400 rounded-lg text-white hover:bg-teal-600">Back</a>
      </div>
    <!-- ======================================================== -->
    <footer class="h-[68px] bg-gray-200">
        <div class="container mx-auto ">
            <div class="flex justify-beetwen items-center">
                <div class="w-1/2 text-gray-500">
                    <h1 class="text-xl"> © {{ new Date().getFullYear() }} Ecommerce</h1>
                </div>
                <div class="w-1/2 text-gray-500 m-5 border flex justify-end items-center">
                    <img src="../../public/usa.png" alt="USA" class="w-10 h-7 mr-3">
                    <Navlink title="English"/>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import {corusels} from '../../constants/corusel'
    
</script>

<style lang="scss" scoped>
</style>