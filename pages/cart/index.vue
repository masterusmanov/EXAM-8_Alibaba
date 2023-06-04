<template>
   <HeaderTop2/>
        <div class="container mx-auto">
            <h1 class="mt-10 text-[24px] font-bold">My cart (3)</h1>
            <section class="mt-10">
                <Cards/>
            </section>
            <section>
                <Price2/>
            </section>
            <section>
                <div id="banner" class="w-[100%] py-10 my-5 rounded-xl flex justify-between items-center">
                    <div class="w-1/2 mx-10">
                        <h1 class="text-white font-bold text-[24px]">Super discount on more than 100 USD</h1>
                        <p class="text-white">Have you ever finally just write dummy info</p>
                    </div>
                    <div class="w-1/2 flex justify-end mx-20 ">
                        <button class="bg-yellow-500 text-white p-3 px-5 rounded-xl hover:bg-yellow-700">Shop now</button>
                    </div>
                </div>
            </section>
        </div>
</template>

<script setup>
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
    #banner{
        background-image: url('../../public/Banner.png');
    }
</style>