<template>
    <div v-if="advertisement" class="container">
        <div>
            Название: {{ this.advertisement.title }}
        </div>
        <div>
            Название: {{ this.advertisement.price }}
        </div>
        <div>
            Название: {{ this.advertisement.description }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Show",
    data() {
        return {
            advertisement: null
        }
    },
    mounted() {
        this.getAdvertisement();
    },
    methods: {
        getAdvertisement() {
            axios.get(`/api/advertisements/${this.$route.params.id}`)
                .then(res => {
                    this.advertisement = res.data
                })
        }
    }
}
</script>

<style scoped>

</style>
