<template>
    <div class="container">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Цена</th>
                <th scope="col">Описание</th>
                <th scope="col">Дата создание</th>
                <th scope="col">Дата обновления</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="advertisement in advertisements">
                <th scope="row">{{ advertisement.id }}</th>
                <td>{{ advertisement.title }}</td>
                <td>{{ advertisement.price }} Р</td>
                <td>{{ advertisement.description.slice(0, 15) }}...</td>
                <td>{{ advertisement.created_at }}</td>
                <td>{{ advertisement.updated_at }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "IndexComponent",
    data() {
        return {
            advertisements: null
        }
    },
    mounted() {
        this.getAdvertisement();
    },
    methods: {
        getAdvertisement() {
            axios.get('api/advertisements')
                .then( res => {
                        this.advertisements = res.data;
                    }
                )
        }
    }
}
</script>

<style scoped>

</style>
