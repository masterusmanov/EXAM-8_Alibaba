<template>
    <div class="flex flex-wrap items-center">
      <el-dropdown>
        <el-button>
          {{ title }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>{{title}} 1</el-dropdown-item>
            <el-dropdown-item>{{title}} 2</el-dropdown-item>
            <el-dropdown-item>{{title}} 3</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ArrowDown } from '@element-plus/icons-vue'
  defineProps(['title'])
  
  const handleClick = () => {
    // eslint-disable-next-line no-alert
    alert('button click')
  }
  </script>
  
  <style scoped>
  .example-showcase .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-button {
    border: none;
    font-size: 16px;
    color: black;
  }
  .example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
  @media (max-width: 1282px) {
    .el-button{
      font-size: 12px;
    }  
  }
  @media (max-width: 1024px) {
    .el-button{
      font-size: 12px;
    }  
  }
  </style>
  