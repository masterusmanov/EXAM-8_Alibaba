<template>
    <nav class="border border-t-gray-300 border-b-gray-300 bg-white sticky top-0 z-50">
        <div class="container mx-auto">
            <div  class="flex justify-beetwen items-center gap-6 w-full h-[56px]">
                <div id="logo" class="w-[70%] flex justify-beetwen items-cnter font-semibold gap-6">
                    <button class="w-[70px]">
                        <Icon name="humbleicons:bars"  class="text-xl" />
                    </button>
                    <button  v-for="el in navbar" :key="el.id" class="w-[90px]">
                        <a :href="el.link"><p>{{ el.title }}</p></a>
                    </button>
                    <Navlink title="Help" id="navlink"/>
                </div>
                <div id="logo" class="w-[30%] flex justify-end items-center font-semibold gap-6">
                    <Navlink title="English, USD" id="navlink"/>
                    <Navlink title="Ship to" id="navlink" />
                    <span><img src="../public/german_flag.svg" alt="flag" class="w-6" ></span>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import {navbar} from '../constants/headernext'
</script>

<style lang="scss" scoped>
    @media (max-width: 1282px) {
        #logo{
            width: 70%;
            font-size: 13px;
            gap: 2px;
            img{
                width: 75%;
            }
        }
    }
    @media (max-width: 1024px) {
        #logo{
            width: 70%;
            font-size: 12px;
            justify-content: baseline;
            img{
                width: 75%;
            }
        }
    }
    @media (max-width: 767px) {
        .container{
            display: none;
        }
    }
    
</style>