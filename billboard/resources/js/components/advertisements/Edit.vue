<template>
    <div class="container mt-5" v-if="advertisement">
        <div class="mb-3">
            <input type="text" v-model="advertisement.title" placeholder="Название" class="form-control" required>
        </div>
        <div class="mb-3">
            <input type="number" v-model="advertisement.price" placeholder="999" class="form-control" required>
        </div>
        <div class="mb-3">
            <textarea v-model="advertisement.description" class="form-control" rows="3" required>Описание</textarea>
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="$store.dispatch('updateAdvertisement', advertisement)" type="submit" class="btn btn-primary" value="Обновить">
        </div>

    </div>
</template>

<script>
export default {
    name: "Edit",
    mounted() {
        this.$store.dispatch('getAdvertisement', this.$route.params.id);
    },
    computed: {
        isDisabled() {
            return this.advertisement.title && this.advertisement.price && this.advertisement.description
        },

        advertisement() {
            return this.$store.getters.advertisement
        }
    }
}
</script>

<style scoped>

</style>
