<template>
    <HeaderTop/>
    <div class="container mx-auto">
        <div class="w-[100%] flex border">
            <input type="text" placeholder="Search" class="w-[100%] pl-10 rounded-lg relative">
            <Icon name="ep:search" color="black" class="absolute text-xl m-3" />
        </div>
        <div class="flex justify-center items-center my-2 gap-5">
            <button class="text-sm font-bold p-1 px-2 bg-teal-300 rounded-lg text-white hover:bg-teal-600">All category</button>
            <button class="text-sm font-bold p-1 px-2 bg-teal-300 rounded-lg text-white hover:bg-teal-600">Gadgets</button>
            <button class="text-sm font-bold p-1 px-2 bg-teal-300 rounded-lg text-white hover:bg-teal-600">Clocthes</button>
            <button class="text-sm font-bold p-1 px-2 bg-teal-300 rounded-lg text-white hover:bg-teal-600">Accessory</button>
        </div>

        <div class="container mx-auto">
            <div class="flex justify-center items-center bg-white w-[100%] gap-4">
              <div class="w-1/3 h-[60px] flex justify-center items-center gap-4 border">
                  <h3><b>Sort: Newest</b></h3>
                  <Icon name="bi:filter-left" class="text-2xl" />
                </div>
                <div class="w-1/3 h-[60px] flex justify-center items-center gap-4 border">
                    <h3><b>Filter (3)</b></h3>
                    <Icon name="ic:round-filter-alt" class="text-2xl" />
                  </div>
                <div class="w-1/7 h-[60px] flex justify-end ml-5 items-center gap-4 ">
                  <Icon name="material-symbols:window-sharp" class="text-2xl" />
                  <Icon name="ph:list-fill" class="text-2xl" />
                </div>
            </div>
          </div>
          <div class="flex justify-center mt-3 items-center my-2 gap-5">
            <button class="text-sm font-bold p-1 px-2 bg-teal-300 rounded-lg text-white hover:bg-teal-600">Huawei</button>
            <button class="text-sm font-bold p-1 px-2 bg-teal-300 rounded-lg text-white hover:bg-teal-600">Apple</button>
            <button class="text-sm font-bold p-1 px-2 bg-teal-300 rounded-lg text-white hover:bg-teal-600">64 GB</button>
        </div>
        <!-- =================================================================================== -->
        <div class="flex justify-between items-center bg-white py-3 mt-5 rounded-lg">
          <div class="w-1/3 flex justify-center items-center">
            <img src="../../public/iphone3.png" alt="phone" class="w-[60%]">
          </div>
          <div class="w-[70%] grid ">
            <h1 class="text-xl">Regular Fit Resort Shirt</h1>
            <h1 class="text-xl font-bold">$57.70</h1>
            <div class="flex w-[100%] justify-between items-center">
              <img src="../../public/stars.svg" alt="" class="w-[30%]">
              <p class="text-center w-[60%]">● 154 order</p>
            </div>
            <a href="#" class="text-green-600 text-xl">Free Shipping</a>
          </div>
        </div>
        <!-- =============================================== -->
        <div class="flex justify-between items-center bg-white py-3 mt-5 rounded-lg">
          <div class="w-1/3 flex justify-center items-center">
            <img src="../../public/phone.png" alt="phone" class="w-[60%]">
          </div>
          <div class="w-[70%] grid ">
            <h1 class="text-xl">Regular Fit Resort Shirt</h1>
            <h1 class="text-xl font-bold">$57.70</h1>
            <div class="flex w-[100%] justify-between items-center">
              <img src="../../public/stars.svg" alt="" class="w-[30%]">
              <p class="text-center w-[60%]">● 154 order</p>
            </div>
            <a href="#" class="text-green-600 text-xl">Free Shipping</a>
          </div>
        </div>
        <!-- ========================================================== -->
        <div class="flex justify-between items-center bg-white py-3 mt-5 rounded-lg">
          <div class="w-1/3 flex justify-center items-center">
            <img src="../../public/iphone1.png" alt="phone" class="w-[60%]">
          </div>
          <div class="w-[70%] grid ">
            <h1 class="text-xl">Regular Fit Resort Shirt</h1>
            <h1 class="text-xl font-bold">$57.70</h1>
            <div class="flex w-[100%] justify-between items-center">
              <img src="../../public/stars.svg" alt="" class="w-[30%]">
              <p class="text-center w-[60%]">● 154 order</p>
            </div>
            <a href="#" class="text-green-600 text-xl">Free Shipping</a>
          </div>
        </div>
        <!-- ========================================================= -->
        <div class="flex justify-between items-center bg-white py-3 mt-5 rounded-lg">
          <div class="w-1/3 flex justify-center items-center">
            <img src="../../public/comp.png" alt="phone" class="w-[60%]">
          </div>
          <div class="w-[70%] grid ">
            <h1 class="text-xl">Regular Fit Resort Shirt</h1>
            <h1 class="text-xl font-bold">$57.70</h1>
            <div class="flex w-[100%] justify-between items-center">
              <img src="../../public/stars.svg" alt="" class="w-[30%]">
              <p class="text-center w-[60%]">● 154 order</p>
            </div>
            <a href="#" class="text-green-600 text-xl">Free Shipping</a>
          </div>
        </div>
        <!-- =========================================================== -->
        <div class="flex justify-between items-center bg-white py-3 mt-5 rounded-lg">
          <div class="w-1/3 flex justify-center items-center">
            <img src="../../public/smartWatch.png" alt="phone" class="w-[60%]">
          </div>
          <div class="w-[70%] grid ">
            <h1 class="text-xl">Regular Fit Resort Shirt</h1>
            <h1 class="text-xl font-bold">$57.70</h1>
            <div class="flex w-[100%] justify-between items-center">
              <img src="../../public/stars.svg" alt="" class="w-[30%]">
              <p class="text-center w-[60%]">● 154 order</p>
            </div>
            <a href="#" class="text-green-600 text-xl">Free Shipping</a>
          </div>
        </div>
        <!-- ================================================================ -->
        <h1 class="font-bold text-xl mt-3">You may also like</h1>
        <div class="flex justify-between items-center p-5">
            <div class="flex justify-center items-center gap-10 ">
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/price5.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1 class="font-bold">$10.30</h1>
                        <p class="text-gray-500 text-sm text-center rounded-full">T-shirts with multiple colors, for men</p>
                    </div>
                </div>
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/smartWatch.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1 class="font-bold">$10.30</h1>
                        <p class="text-gray-500 text-sm text-center rounded-full">T-shirts with multiple colors, for men</p>
                    </div>
                </div>
                <div class="w-1/3 grid justify-center items-center bg-white">
                    <img src="../../public/price2.png" alt="" class="h-[150px]">
                    <div class="grid justify-center items-center">
                        <h1 class="font-bold">$10.30</h1>
                        <p class="text-gray-500 text-sm text-center rounded-full">T-shirts with multiple colors, for men</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-5 flex justify-end items-center mx-10">
          <a href="/mobile" class="text-sm font-bold p-1 px-2 bg-red-400 rounded-lg text-white hover:bg-teal-600">Back</a>
        </div>
    </div>
    <!-- ======================================================== -->
    <footer class="h-[68px] bg-gray-200">
      <div class="container mx-auto ">
          <div class="flex justify-beetwen items-center">
              <div class="w-1/2 text-gray-500">
                  <h1 class="text-xl"> © {{ new Date().getFullYear() }} Ecommerce</h1>
              </div>
              <div class="w-1/2 text-gray-500 m-5 border flex justify-end items-center">
                  <img src="../../public/usa.png" alt="USA" class="w-10 h-7 mr-3">
                  <Navlink title="English"/>
              </div>
          </div>
      </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>