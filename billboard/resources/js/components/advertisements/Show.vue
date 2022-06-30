<template>
    <div v-if="advertisement" class="container">
        <div>
            Название: {{ advertisement.title }}
        </div>
        <div>
            Название: {{ advertisement.price }}
        </div>
        <div>
            Название: {{ advertisement.description }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Show",
    mounted() {
        this.$store.dispatch('getAdvertisement', this.$route.params.id)
    },
    computed: {
        advertisement() {
            return this.$store.getters.advertisement
        }
    }
}
</script>

<style scoped>

</style>
