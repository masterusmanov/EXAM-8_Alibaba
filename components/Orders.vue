<template>
    <div class="container flex justify-center items-center mx-auto ml-5 my-10">
        <el-row :gutter="15">
            <el-col :span="7" v-for="(el, ind) in orders" :key="ind" class="mt-5">
              <el-card shadow="always" class="w-[100%] h-[100%]">
                <div class="w-[100%] h-[200px]">
                    <img :src="el.photo" alt="price" class="w-[100%] object-contain h-[100%]">
                </div>
                    <div class="mt-2">
                        <h1 class="text-xl font-bold">{{ el.price }} <span class="font-normal ml-2 text-lg text-gray-500 ">{{ el.noprice }}</span></h1> 
                        <div class="mt-2 flex">
                            <img :src="el.svg" alt="like">
                            <div class="w-1/2 flex justify-end items-center">
                                <Icon name="pajamas:heart" color="blue" class="text-xl shadow "/>
                            </div>
                        </div>
                        <div class="text-lg font-bold mt-2">
                            <p class="text-gray-500">{{ el.title }}</p>
                        </div>
                    </div>
              </el-card>
            </el-col>
          </el-row>
    </div>
  </template>
  
<script setup>
    import { orders } from '../constants/order';

</script>
  
  <style lang="scss" scoped></style>
  