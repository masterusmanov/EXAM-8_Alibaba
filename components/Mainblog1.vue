<template>
    <div :style="`backgroundColor: ${bgColor}`" class="py-3 grid justify-center gap-6 w-full items-center text-white rounded-xl">
        <p class="text-2xl font-semibold mx-8">{{ titels }}</p>
    </div>
</template>

<script setup>
    defineProps(['titels', 'bgColor'])
</script>

<style lang="scss" scoped>

</style>