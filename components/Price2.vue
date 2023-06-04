<template>
    <div class="p-5">
        <h1 class="font-bold text-2xl">Saved for later</h1>
        <div class="flex flex-wrap justify-center items-center gap-6 mx-auto mt-10">
            <el-col :span="5" v-for="(el, ind) in pric" :key="ind" >
                <el-card shadow="hover"> 
                    <img :src="el.photo" alt="price" class="w-full h-[200px] object-contain">
                    <div class="mt-5">
                        <h1 class="text-xl font-bold">{{ el.price }}</h1>
                        <div class="w-[100%] h-[35px]">
                            <p class="text-gray-500">{{ el.title }}</p>
                        </div>
                        <button class="mt-5 text-blue-600 bg-gray-200 py-1 px-3 rounded-lg hover:bg-blue-600 hover:text-white"><Icon name="clarity:shopping-cart-solid" color="blue" /> Move to cart</button>
                    </div>
                </el-card>
            </el-col>
        </div>
    </div>
    
</template>

<script setup>
    import { pric } from '../constants/price2';
</script>

<style lang="scss" scoped>

</style>