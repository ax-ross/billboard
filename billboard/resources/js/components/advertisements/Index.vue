<template>
    <div class="container">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Название</th>
                <th scope="col">Цена</th>
                <th scope="col">Описание</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="advertisement in advertisements">
                <td>{{ advertisement.title }}</td>
                <td>{{ advertisement.price }}</td>
                <td>{{ advertisement.description }}</td>
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
