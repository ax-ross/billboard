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
            <input @click.prevent="store" type="submit" class="btn btn-primary" value="Добавить">
        </div>

    </div>
</template>

<script>
export default {
    name: "Create",
    data() {
        return {
            title: null,
            price: null,
            description: null,
        }
    },
    methods: {
        store() {
            axios.post('/api/advertisements', {
                title: this.title,
                price: this.price,
                description: this.description
            })
                .then(res => {
                    this.$router.push({ name: 'advertisements.index' });
                });
        }
    }
}
</script>

<style scoped>

</style>
