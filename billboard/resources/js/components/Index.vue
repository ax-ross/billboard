<template>
    <div class="container">
        <router-link :to="{ name: 'advertisements.index' }" class="text-decoration-none">Advertisements</router-link>
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
