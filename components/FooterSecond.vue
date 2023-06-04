<template>
    <footer class="bg-gray-400">
        <div class="container mx-auto p-14">
            <div class="grid justify-center items-center w-full ">
                <h1 class="text-center font-bold text-2xl">Subscribe on our newsletter</h1>
                <p class="text-center text-xl text-gray-700">Get daily news on upcoming offers from many suppliers all over the world</p>
                <div class="flex justify-center items-center mt-5">
                    <Icon name="mdi-light:email" color="black" class=" bg-white w-[] text-3xl h-10 pl-1 rounded-l-lg "/>
                    <input type="email" placeholder="Email" class="rounded-r-lg border-none  pl-5 outline-none focus:outline-none">
                    <button class="bg-blue-500 p-2 px-4 rounded-lg text-white hover:bg-blue-900">Subscribe</button>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
    .container{
        display: none;
    }
  }
</style>