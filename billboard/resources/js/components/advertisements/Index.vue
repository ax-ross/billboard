<template>
    <div class="container">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Название</th>
                <th scope="col">Цена</th>
                <th scope="col">Описание</th>
                <th scope="col">Действия</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="advertisement in advertisements">
                <td>{{ advertisement.title }}</td>
                <td>{{ advertisement.price }}</td>
                <td>{{ advertisement.description }}</td>
                <td><router-link :to="{ name: 'advertisements.edit', params: { id: advertisement.id } }" class="text-decoration-none btn btn-primary">Изменить</router-link></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            advertisements: null
        };
    },
    mounted() {
        this.getAdvertisements();
    },
    methods: {
        getAdvertisements() {
            axios.get('api/advertisements')
                .then(res => {
                    this.advertisements = res.data;
                });
        }
    }
}
</script>

<style scoped>

</style>
