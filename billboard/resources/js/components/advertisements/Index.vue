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
                <td>
                    <router-link :to="{ name: 'advertisements.show', params: { id: advertisement.id } }"
                                 class="text-decoration-none">{{ advertisement.title }}
                    </router-link>
                </td>
                <td>{{ advertisement.price }}</td>
                <td>{{ advertisement.description }}</td>
                <td>
                    <router-link :to="{ name: 'advertisements.edit', params: { id: advertisement.id } }"
                                 class="text-decoration-none btn btn-primary">Изменить
                    </router-link>
                </td>
                <td><a @click.prevent="$store.dispatch('deleteAdvertisement', advertisement.id)" href="#"
                       class="btn btn-danger">Удалить</a></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Index",
    mounted() {
        this.$store.dispatch('getAdvertisements');
    },
    computed: {
        advertisements() {
            return this.$store.getters.advertisements
        }
    }
}
</script>

<style scoped>

</style>
