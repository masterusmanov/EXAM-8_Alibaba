<template>
    <footer class="my-5">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div id="card1" class="md:w-1/4 flex flex-col items-center">
                    <img src="../public/logo.png" alt="" class="w-[80%]">
                    <h1 class="w-[80%] mt-5 text-center text-lg">Best information about the company gies here but now lorem ipsum is</h1>
                    <div class="flex justify-beetwen items-center gap-4 mt-5">
                        <Icon name="bi:facebook" color="gray" class="text-xl"/>
                        <Icon name="bi:twitter" color="gray" class="text-xl"/>
                        <Icon name="bi:linkedin" color="gray" class="text-xl"/>
                        <Icon name="bi:instagram" color="gray" class="text-xl"/>
                        <Icon name="bi:youtube" color="gray" class="text-xl"/>
                    </div>
                </div>
                <div id="card2" class="md:w-1/7  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    <h1 class="font-bold text-xl">About</h1>
                    <div class=" w-1/2 grid mt-10 text-gray-500 ">
                        <nuxt-link to="#">About Us</nuxt-link>
                        <nuxt-link to="#" class="mt-3">Find store</nuxt-link>
                        <nuxt-link to="#" class="mt-3">Categories</nuxt-link>
                        <nuxt-link to="#" class="mt-3">Blogs</nuxt-link>
                    </div>
                </div>
                <div id="card3" class="1/2 grid ml-10">
                    <h1 class="font-bold text-xl">Partnership</h1>
                    <div class="grid mt-10 text-gray-500">
                        <nuxt-link to="#">About Us</nuxt-link>
                        <nuxt-link to="#" class="mt-3">Find store</nuxt-link>
                        <nuxt-link to="#" class="mt-3">Categories</nuxt-link>
                        <nuxt-link to="#" class="mt-3">Blogs</nuxt-link>
                    </div>
                </div>
                <div id="card4" class="1/2 grid ">
                    <h1 class="font-bold text-xl">Information</h1>
                    <div class="grid mt-10 text-gray-500">
                        <nuxt-link to="#">Help Center</nuxt-link>
                        <nuxt-link to="#" class="mt-3">Money Refund</nuxt-link>
                        <nuxt-link to="#" class="mt-3">Shipping</nuxt-link>
                        <nuxt-link to="#" class="mt-3">Contact us</nuxt-link>
                    </div>
                </div>
                <div id="card5" class="1/2 grid ">
                    <h1 class="font-bold text-xl">Users</h1>
                    <div class="grid mt-10 text-gray-500">
                        <nuxt-link to="#">Login</nuxt-link>
                        <nuxt-link to="#" class="mt-3">Register</nuxt-link>
                        <nuxt-link to="#" class="mt-3">Settings</nuxt-link>
                        <nuxt-link to="#" class="mt-3">My Orders</nuxt-link>
                    </div>
                </div>
                <div id="card6" class="1/2 grid ml-10">
                    <h1 class="font-bold text-xl">App</h1>
                    <div class="grid mt-10 text-gray-500 gap-6">
                        <img src="../public/app.png" alt="app" class="w-[75%]">
                        <img src="../public/ios.png" alt="ios" class="w-[75%]">
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <footer id="footercha" class="h-[68px] bg-gray-200">
        <div class="container mx-auto ">
            <div class="flex justify-beetwen items-center">
                <div class="w-1/2 text-gray-500 m-5">
                    <h1 class="text-xl"> © {{ new Date().getFullYear() }} Ecommerce</h1>
                </div>
                <div class="w-1/2 text-gray-500 m-5 border flex justify-end items-center">
                    <img src="../public/usa.png" alt="USA" class="w-10 h-7 mr-3">
                    <Navlink title="English"/>
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
    #footercha{
        display: none;
    }
  }
@media (max-width: 1024px) {
    #card1 img {
      max-width: 250px;
    }
    #card1 h1 {
      font-size: 16px;
    }
  }
</style>