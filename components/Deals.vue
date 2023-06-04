<template>
    <div class="grid grid-cols-6 pl-3">
        <div class="col-span-1 flex justify-center items-center">
            <img src="../public/date.png" alt="home" class="w-full h-full object-contain mb-1">
        </div>
        <div v-for="(el, ind) in deals" :key="ind" class="col-span-1 grid justify-center items-center">
            <img :src="el.photo" alt="rasm" class="w-[150px] h-[150px] object-contain">
            <div id="text" class="text-center">
                <h1 class="text-xl font-bold my-3">{{ el.title }}</h1>
                <p class="text-red-600 inline-block my-2 p-1 px-2 rounded-full bg-red-200">{{ el.percentage }}</p>
            </div>
        </div>
      </div>
</template>

<script setup>
    import { deals } from '../constants/deal';
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