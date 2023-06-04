<template>
    <HeaderTop/>
    <Menubar/>
    <main class="flex">
        <Sidebar/>
        <div class="container mx-auto mb-14">
            <Menubar2/>
            <Menubar3 class="mt-5"/>
            <Orders class="mt-5"/>
            <Pagination/>
        </div>
    </main>
    <FooterSecond/>
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

</style>