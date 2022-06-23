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
                <tr>
                    <th scope="row">{{ advertisement.id }}</th>
                    <td>{{ advertisement.title }}</td>
                    <td>{{ advertisement.price }} Р</td>
                    <td>{{ advertisement.description.slice(0, 15) }}...</td>
                    <td>{{ advertisement.created_at }}</td>
                    <td>{{ advertisement.updated_at }}</td>
                    <td><button @click.prevent="changeEditPersonId(advertisement.id)" class="btn btn-primary">Изменить</button> </td>
                </tr>
                <tr :class="isEdit(advertisement.id) ? '' : 'd-none'">
                    <th scope="row">{{ advertisement.id }}</th>
                    <td><input type="text" class="form-control"></td>
                    <td><input type="number" class="form-control"></td>
                    <td><textarea class="form-control" rows="3"></textarea></td>
                    <td>{{ advertisement.created_at }}</td>
                    <td>{{ advertisement.updated_at }}</td>
                    <td><button class="btn btn-success">Обновить</button> </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "IndexComponent",
    data() {
        return {
            advertisements: null,
            editPersonId: null
        }
    },
    mounted() {
        this.getAdvertisement();
    },
    methods: {
        getAdvertisement() {
            axios.get('api/advertisements')
                .then(res => {
                        this.advertisements = res.data;
                    }
                )
        },
        changeEditPersonId(id) {
            this.editPersonId = id;
        },
        isEdit(id) {
            return id === this.editPersonId;
        }

    }
}
</script>

<style scoped>

</style>
