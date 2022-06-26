<template>
    <div class="container mt-5">
        <div class="mb-3">
            <input type="text" v-model="title" placeholder="Название" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="price" placeholder="999" class="form-control">
        </div>
        <div class="mb-3">
            <textarea v-model="description" class="form-control" rows="3">Описание</textarea>
        </div>
        <div class="mb-3">
            <input @click.prevent="update" type="submit" class="btn btn-primary" value="Обновить">
        </div>

    </div>
</template>

<script>
import router from "../../router";

export default {
    name: "Edit",
    data() {
        return {
            title: null,
            price: null,
            description: null
        }
    },
    mounted() {
        this.getAdvertisement();
    },
    methods: {
        getAdvertisement() {
            axios.get(`/api/advertisements/${this.$route.params.id}`)
                .then(res => {
                    this.title = res.data.title;
                    this.price = res.data.price;
                    this.description = res.data.description;
                })
        },
        update() {
            axios.patch(`/api/advertisements/${this.$route.params.id}`, {
                title: this.title,
                price: this.price,
                description: this.description
            })
                .then(res => {
                    router.push({ name: 'advertisements.show'} )
                })
        }
    }

}
</script>

<style scoped>

</style>
