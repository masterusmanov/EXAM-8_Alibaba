<template>
    <div class="demo-collapse w-[240px] min-h-screen">
      <el-collapse v-model="activeName" accordion >
        <el-collapse-item title="Category" name="1">
          <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
            <a href="#">Mobile accessory</a>
          </div>
          <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
            <a href="#">Electronics</a>
          </div>
          <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
            <a href="#">Smartphones</a>
          </div>
          <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
            <a href="#">Modern tech</a>
          </div>
          <div class="pl-3 text-blue-600 font-bold">
            <a href="#">See all</a>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Brands" name="2">
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white flex">
                <el-checkbox v-model="checked1" label="Mobile accessory" size="large" />
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white flex">
                <el-checkbox v-model="checked2" label="Apple" size="large" />
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white flex">
                <el-checkbox v-model="checked3" label="Huawei" size="large" />
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white flex">
                <el-checkbox v-model="checked4" label="Pocco" size="large" />
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white flex">
                <el-checkbox v-model="checked5" label="Lenovo" size="large" />
            </div>
            <div class="pl-3 text-blue-600 font-bold">
                <a href="#">See all</a>
            </div>
        </el-collapse-item>
        <el-collapse-item title="Features" name="3">
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white flex">
                <el-checkbox v-model="checked6" label="Metallic" size="large" />
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white flex">
                <el-checkbox v-model="checked7" label="Plastic cover" size="large" />
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white flex">
                <el-checkbox v-model="checked8" label="8GB Ram" size="large" />
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white flex">
                <el-checkbox v-model="checked9" label="Super power" size="large" />
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white flex">
                <el-checkbox v-model="checked10" label="Large Memory" size="large" />
            </div>
            <div class="pl-3 text-blue-600 font-bold">
                <a href="#">See all</a>
            </div>
        </el-collapse-item>
        <el-collapse-item title="Price range" name="4">
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Mobile accessory</a>
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Electronics</a>
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Smartphones</a>
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Modern tech</a>
            </div>
            <div class="pl-3 text-blue-600 font-bold">
              <a href="#">See all</a>
            </div>
        </el-collapse-item>
        <el-collapse-item title="Condition" name="5">
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Mobile accessory</a>
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Electronics</a>
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Smartphones</a>
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Modern tech</a>
            </div>
            <div class="pl-3 text-blue-600 font-bold">
              <a href="#">See all</a>
            </div>
        </el-collapse-item>
        <el-collapse-item title="Ratings" name="6">
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Mobile accessory</a>
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Electronics</a>
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Smartphones</a>
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Modern tech</a>
            </div>
            <div class="pl-3 text-blue-600 font-bold">
              <a href="#">See all</a>
            </div>
        </el-collapse-item>
        <el-collapse-item title="Manufacturer" name="7">
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Mobile accessory</a>
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Electronics</a>
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Smartphones</a>
            </div>
            <div class="p-1 pl-3 hover:bg-teal-400 hover:text-white">
              <a href="#">Modern tech</a>
            </div>
            <div class="pl-3 text-blue-600 font-bold">
              <a href="#">See all</a>
            </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const checked1 = ref(false)
  const checked2 = ref(false)
  const checked3 = ref(false)
  const checked4 = ref(false)
  const checked5 = ref(false)
  const checked6 = ref(false)
  const checked7 = ref(false)
  const checked8 = ref(false)
  const checked9 = ref(false)
  const checked10 = ref(false)
  </script>
  