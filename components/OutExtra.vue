<template>
    <div class="">
        <h1 class="font-bold text-xl p-5">Our extra services</h1>
        <div class="flex flex-wrap justify-center items-center gap-6 mt-5">
            <el-col :span="5" v-for="(el, ind) in outextra" :key="ind" >
                <el-card shadow="hover"> 
                    <img :src="el.photo" alt="price" class="w-full h-full border-none relative">
                    <div class="flex justify-end items-center mr-5">
                        <div class="flex justify-center items-center absolute w-10 h-10 bg-blue-300 rounded-full">
                            <Icon :name="el.icon" color="black" class=" w-5 h-5 "/>
                        </div>
                    </div>
                    <div class="mt-10 h-[25px]">
                        <h1 class="font-bold">{{ el.title }}</h1>
                    </div>
                </el-card>
            </el-col>
        </div>
    </div>
    
</template>

<script setup>
    import { outextra } from '../constants/outExtra';
</script>

<style lang="scss" scoped>

</style>