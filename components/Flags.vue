<template>
    <div class="mt-5">
        <h1 class="font-bold text-xl p-5">Suppliers by region</h1>
        <div class="flex flex-wrap justify-center items-center gap-6 mt-5">
            <div class="w-1/6 flex justify-between items-center" v-for="(el, ind) in flag" :key="ind"> 
                <div class="w-[20%] h-[">
                    <img :src="el.photo" alt="flag">
                </div>
                <div class="w-[80%] ml-2">
                    <h1 class="font-bold">{{ el.title }}</h1>
                    <p class="text-sm text-gray-500">{{ el.text }}</p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
    import { flag } from '../constants/flags';
</script>

<style lang="scss" scoped>

</style>