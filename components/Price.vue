<template>
    <div class="p-5">
        <h1 class="font-bold text-xl">Recommended items</h1>
        <div class="flex flex-wrap justify-center items-center gap-6 mx-auto mt-10">
            <el-col :span="4" v-for="(el, ind) in prices" :key="ind" >
                <el-card shadow="hover"> 
                    <img :src="el.photo" alt="price" class="w-full h-full">
                    <div>
                        <h1 class="text-xl font-bold">{{ el.price }}</h1>
                        <div class="w-[100%] h-[35px]">
                            <p class="text-gray-500">{{ el.title }}</p>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </div>
    </div>
    
</template>

<script setup>
    import { prices } from '../constants/price';
</script>

<style lang="scss" scoped>

</style>