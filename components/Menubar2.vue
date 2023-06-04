<template>
    <div class="container mx-auto ml-5">
      <div class="flex justify-center items-center bg-white w-[92%]">
        <div class="w-1/3 h-[60px] flex justify-beetwen items-center gap-4">
            <h3>12,911 items in <b>Mobile accessory</b></h3>
          </div>
          <div class="w-1/2 h-[60px] flex justify-end items-center gap-4">
            <el-checkbox v-model="checked3" label="Verified only" size="large"/>
            <Navlink title="Featured"/>
          </div>
          <div class="w-1/7 h-[60px] flex justify-end ml-5 items-center gap-4">
            <Icon name="material-symbols:window-sharp" class="text-2xl" />
            <Icon name="ph:list-fill" class="text-2xl" />
          </div>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped></style>
  