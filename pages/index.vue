<template>
    <HeaderTop/>
    <main class="my-5">
        <div class="container mx-auto">
            <section >
                <div id="card" class="flex w-[100%] justify-beetwen itetms-center mt-5 rounded-lg bg-white gap-5 p-5">
                    <div class="w-1/4 " >
                        <div v-for="el in categories" :key="el.id" class="p-3 text-[16px] hover:bg-teal-200 hover:font-bold w-[100%] rounded-xl">
                            <nuxt-link to="#">{{el.title}}</nuxt-link>
                        </div>
                    </div>
                    <div id="back" class="w-1/2 flex justify-start border">
                        <Corusel/>            
                    </div>
                    <div id="blog" class="w-1/4 gap-6 grid justify-center items-center">
                        <Mainblog/>
                        <Mainblog1 titels="Get US $10 off with a new supplier" bgColor="orange"/>
                        <Mainblog1 titels="Send quotes with supplier preferences" bgColor="lightblue"/>
                    </div>
                </div>
            </section>
            <section class="my-5 bg-white rounded-lg">
                <Deals/>
            </section>
            <section class="bg-white rounded-lg">
                <Deals1/>
            </section>
            <section class="bg-white rounded-lg mt-5">
                <Deals2/>
            </section>
            <section id="requests" class=" rounded-lg mt-5 p-5">
                <Requests/>
            </section>
            <section class=" rounded-lg ">
                <Price/>
            </section>
            <section class="rounded-lg">
                <OutExtra/>
            </section>
            <section class="rounded-lg mb-14">
                <Flags/>
            </section>
        </div>
    </main>
    <FooterSecond/>
    <div id="mobileTo" class="grid justify-center items-center mt-[200px]">
        <h1 class="text-center">Click the button below to view on your phone!</h1>
        <nuxt-link to="/mobile" class="text-center mt-10 p-2 px-4 bg-teal-500 rounded-xl text-white">Mobile version</nuxt-link>
    </div>
</template>

<script setup>
    import { categories } from '../constants/allCategory';
    const {name} = useRoute();
    useHead({
        title: `${name} page of Alibaba`,
        meta: [
        {
            name: "description", content: `${name} page of Alibaba`
        },
        {
            name: "author", content: "Alibaba"
        }
        ]
    })
</script>

<style lang="scss" scoped>
    #requests{
        background-image: url('../public/bgImage.png');
    }
    #mobileTo{
        display: none
    }
    @media (max-width: 767px) {
        .container{
            display: none;
        }
        FooterSecond{
            display: none;
        }
        #mobileTo{
            display: grid
        }
    }
    
</style>