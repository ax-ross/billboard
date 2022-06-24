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
                <th scope="col">Действия</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="advertisement in advertisements">
                <tr :class="isEdit(advertisement.id) ? 'd-none' : ''">
                    <th scope="row">{{ advertisement.id }}</th>
                    <td>{{ advertisement.title }}</td>
                    <td>{{ advertisement.price }} Р</td>
                    <td>{{ advertisement.description.slice(0, 15) }}...</td>
                    <td>{{ advertisement.created_at }}</td>
                    <td>{{ advertisement.updated_at }}</td>
                    <td>
                        <button
                            @click.prevent="changeEditAdvertisementId(advertisement.id, advertisement.title, advertisement.price, advertisement.description)"
                            class="btn btn-primary">Изменить
                        </button>
                    </td>
                    <td>
                        <button @click.prevent="deleteAdvertisement(advertisement.id)" class="btn btn-danger">Удалить
                        </button>
                    </td>
                </tr>
                <EditComponent :advertisement="advertisement" :ref="`edit_${advertisement.id}`"></EditComponent>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import EditComponent from "./EditComponent";
export default {
    name: "IndexComponent",
    data() {
        return {
            advertisements: null,
            editAdvertisementId: null,
            title: '',
            price: null,
            description: ''
        }
    },
    mounted() {
        this.getAdvertisements();
    },

    components: {
      EditComponent
    },

    methods: {
        getAdvertisements() {
            axios.get('api/advertisements')
                .then(res => {
                        this.advertisements = res.data;
                    }
                )
        },
        changeEditAdvertisementId(id, title, price, description) {
            this.editAdvertisementId = id;
            this.$refs[`edit_${id}`][0].title = title;
            this.$refs[`edit_${id}`][0].price = price;
            this.$refs[`edit_${id}`][0].description = description;
        },
        isEdit(id) {
            return id === this.editAdvertisementId;
        },
        deleteAdvertisement(id) {
            axios.delete(`api/advertisements/${id}`)
                .then(res => {
                    this.getAdvertisements();
                })
        }

    }
}
</script>

<style scoped>

</style>
