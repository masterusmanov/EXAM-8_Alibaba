<template>
    <div class="flex justify-beetwen gap-10 items-center">
        <div class="container mx-auto my-auto">
            <div class="flex justify-beetwen gap-48 items-center">
                <div class="w-1/2 mx-10">
                    <div id="text" class="w-[75%]">
                         <h1 class="text-3xl text-white font-bold">An easy way to send requests to all suppliers</h1>
                         <p class="text-lg text-white mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                 </div>
                 <div class="w-1/4 grid justify-end items-center border ">
                    <div id="box" class="grid justify-between items-center py-5 px-5  bg-white w-[491px] h-[346px] gap-3 rounded-lg">
                         <h1 class="text-xl font-bold">Send quote to suppliers</h1>
                         <input type="text" placeholder="What item you need?" id="req" class="w-[450px] rounded-lg">
                         <textarea name="description" id="" cols="30" rows="2" placeholder="Type more details" class="rounded-lg"></textarea>
                         <div class="flex justify-start items-center">
                             <input type="number" placeholder="Quantity" class="rounded-lg">
                             <Navlink title="Pcs" class="border-2 border-gray-500 p-1 ml-5 rounded-lg"/>
                         </div>
                         <button class="bg-blue-500 hover:bg-blue-800 text-white p-3 rounded-xl w-[40%]">Send inquiry</button>
                    </div>
                     
                 </div>
            </div>
        </div>        
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    @media (max-width: 1024px) {
        #text{
            h1{
                font-size: 32px;
            }
            p{
                font-size: 16px;
            }
        }
        #box{
            width: 100%;
            #req{
                width: 100%;
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
    }
</style>