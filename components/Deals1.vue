<template>
    <div class="flex justify-center items-center">
        <div class=" w-[25%] flex justify-center items-center">
            <img src="../public/home.png" alt="home" class="w-[100%] object-cover relative">
            <div class="absolute mx-auto">
                <h1 class="font-bold text-center text-2xl w-[75%]">Home and outdoor</h1>
                <button class="ml-5 p-5 py-1 mt-5 text-blue-800 bg-white rounded-xl hover:text-white hover:bg-blue-500">Source now</button>
            </div>
        </div>
        <div  class="w-[80%] flex flex-wrap justify-beetwen items-center">
            <div v-for="(el, ind) in deals1" :key="ind" class="w-[25%]">
                <img :src="el.photo" alt="rasm" class="">
            </div>
            <div >
            </div>
        </div>
    </div>
    
</template>

<script setup>
    import { deals1 } from '../constants/deal1';
</script>

<style lang="scss" scoped>

@media (max-width: 1024px) {
    #mainjpg{
        img{
            width: 100%;
            height: 100%;
        }
    }
    #text{
        h1{
            font-size: 16px;
        }
    }
    #jpeg{width: 25%;
       height: 25%;
    }
}
@media (max-width: 767px) {
    #text{
        h1{
            font-size: 14px;
        }
    }
    #jpeg{width: 25%;
       height: 25%;
    }
    #mainjpg{
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>