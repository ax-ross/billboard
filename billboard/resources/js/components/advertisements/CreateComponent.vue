<template>
    <div class="container">
        <template>
            <button @click="showCreateAdvertisementForm" type="button" class="btn btn-primary">Добавить объявление
            </button>
        </template>
        <div v-if="isShow" class="my-3">
            <div class="mb-3">
                <label for="title" class="form-label">Название</label>
                <input v-model="title" type="text" class="form-control" id="title"
                       placeholder="Введите название объявления">
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Цена</label>
                <input v-model="price" type="number" class="form-control" id="price" placeholder="Введите цену">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Описание</label>
                <textarea v-model="description" class="form-control" id="description" rows="3"></textarea>
            </div>
            <div>
                <input @click.prevent="createAdvertisement" type="submit" class="btn btn-success"
                       value="Создать объявление">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateComponent",
    data() {
        return {
            isShow: false,
            title: null,
            price: null,
            description: null
        }
    },

    methods: {
        showCreateAdvertisementForm() {
            this.isShow = !this.isShow
        },
        createAdvertisement() {
            axios.post('/api/advertisements', {title: this.title, price: this.price, description: this.description})
                .then(res => {
                    this.title = null;
                    this.price = null;
                    this.description = null;
                    this.$parent.$refs.index.getAdvertisements()
                })
        }
    }
}
</script>

<style scoped>

</style>
