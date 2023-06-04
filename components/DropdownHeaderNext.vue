<template>
  <div class="flex flex-wrap items-center">
    <el-dropdown>
      <el-button>
        All category<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Automobiles</el-dropdown-item>
          <el-dropdown-item>Clothes and wear</el-dropdown-item>
          <el-dropdown-item>Home interiors</el-dropdown-item>
          <el-dropdown-item>Computer and tech</el-dropdown-item>
          <el-dropdown-item>Tools, equipments</el-dropdown-item>
          <el-dropdown-item>Sports and outdoor</el-dropdown-item>
          <el-dropdown-item>Animal and pets</el-dropdown-item>
          <el-dropdown-item>Machinery tools</el-dropdown-item>
          <el-dropdown-item>More category</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'

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
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
