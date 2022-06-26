<template>
    <div class="container">
        <router-link :to="{ name: 'advertisements.index' }" class="text-decoration-none">Advertisements</router-link>
        <router-link :to="{ name: 'advertisements.create' }" class="text-decoration-none">Add</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
