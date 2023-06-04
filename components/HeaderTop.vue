<template>
    <header class="bg-white sticky top-0 z-50">
        <div class="container mx-auto">
            <div  class="flex justify-beetwen items-center gap-6 w-full h-[86px] ">
                <div id="logo" class="w-1/4 flex justify-beetwen items-cnter">
                   <div id="menu" class="flex justify-center items-center">
                       <a href="#"><Icon name="humbleicons:bars"  class="text-4xl" /></a>
                   </div>
                    <img src="../public/logo.png" alt="Logo" id="pic" class="w-[170px]  h-[50px]">
                </div>
                <div id="ser" class="w-[75%] h-[40px] flex justify-end border-2 border-blue-400 items-center rounded-xl">
                    <input type="text" placeholder="Search" class="w-full h-full rounded-l-lg border-r-2 border-blue-400 outline-none">
                    <div id="drop" class="h-full flex justify-center items-center ">
                        <DropdownHeader/>
                    </div>
                    <button class="w-[100px] h-full  p-1 bg-blue-400 text-white rounded-r-lg ">Search</button>
                </div>
                <div id="ico" class="w-1/3 ml-5 text-gray-500 text-center flex justify-end mx-3 items-center gap-6">
                    <div v-for="el in icons" :key="el.id" >
                        <a :href="el.link"><Icon :name="el.icon" class="text-2xl"/>
                        <p>{{el.title}}</p></a>
                    </div>
                </div>
                <div id="ico1" class="w-1/2 ml-14 text-gray-500 text-center flex justify-end items-center gap-8">
                    <div class="">
                        <a href="/mobile_cart"><Icon name="clarity:shopping-cart-solid" class="text-2xl"/></a>
                    </div>
                    <div>
                        <a href="/mobile_itemlist"><Icon name="fluent-mdl2:work-item-alert" class="text-2xl"/></a>
                    </div>
                </div>
            </div>
        </div>
        <HeaderTopNext/>
    </header>
</template>

<script setup>
    import {icons} from '../constants/headerIcon'
</script>

<style lang="scss" scoped>
    flex-wrap {
        flex-wrap: nowrap;
    }
    #ico1{
        display: none;
    }
    #menu{
        display: none;
    }
    @media (max-width: 1900px) {
        #menu{
            display: none;
        }
        #ico1{
            display: none;
         }
    }
    @media (max-width: 1282px) {
        #logo{
            width: 20%;
            img{width: 150px; height: 40px;}
        }
        #ser{width: 45%;
            input{width: 100%;}
            button{width: 35%;}
        }
        #ico{
            margin-left: 40px;
        }
        #ico1{
            display: none;
         }
    }
    @media (max-width: 1024px) {
        #logo{
            width: 20%;
            img{width: 150px; height: 40px;}
        }
        #ser{width: 45%;
            input{width: 100%;}
            button{width: 35%;}
            #drop{
                display: none;
            }
        }
        #ico{
            margin-left: 40px;
        }
        #ico1{
            display: none;
         }
    }
    @media (max-width: 767px) {
        #logo{
            width: 30%;
            margin-left: 15px;
            img{width: 150px; height: 40px;}
            #menu{
                display: block;
            }
        }
        #ser{width: 45%;
           display: none;
        }
        #ico{
           display: none;
        }
        #ico1{
            display: inline-flex;
            text-align: end;
         }
    }
    
</style>