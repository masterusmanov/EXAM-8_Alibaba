<template>
    <el-carousel indicator-position="outside" class="w-full">
      <el-carousel-item v-for="item in 4" :key="item" id="main" style="height: 500px">
        <div id="card1" class="absolute mx-10 my-14">
            <h2 class="text-[40px] font-semibold">Latest trending</h2>
            <h1 class="text-[50px] font-bold">Electronic items</h1>
            <button class="text-[16px] px-3 py-2 mt-5 rounded-lg bg-white text-black hover:text-white hover:bg-blue-500">Learn more</button>
        </div>
      </el-carousel-item>
    </el-carousel>
  </template>
  
  <style lang="scss" scoped>
  .el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(1n) {
    background-image: url('../public/background.png');
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-image: url('../public/background1.jpg');
  }
  @media (max-width: 767px) {
    el-carousel-item{
        height: 700px;
    }
    #card1{
        h2{
            font-size: 32px;
        }
        h1{
            font-size: 36px;
        }
    }
}
  </style>
  