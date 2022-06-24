<template>
    <tr :class="this.$parent.isEdit(advertisement.id) ? '' : 'd-none'">
        <th scope="row">{{ advertisement.id }}</th>
        <td><input type="text" v-model="title" class="form-control"></td>
        <td><input type="number" v-model="price" class="form-control"></td>
        <td><textarea v-model="description" class="form-control" rows="3"></textarea></td>
        <td>{{ advertisement.created_at }}</td>
        <td>{{ advertisement.updated_at }}</td>
        <td>
            <button @click.prevent="updateAdvertisement(advertisement.id)" class="btn btn-success">
                Обновить
            </button>
        </td>
    </tr>
</template>


<script>
export default {
    name: "EditComponent",

    props: [
      'advertisement'
    ],

    data() {
        return {
            title: '',
            price: null,
            description: ''
        }
    },
    methods: {
        updateAdvertisement(id) {
            this.$parent.editAdvertisemenId = null;
            axios.patch(`/api/advertisements/${id}`, {
                title: this.title,
                price: this.price,
                description: this.description
            })
                .then(res => {
                    this.$parent.getAdvertisements();
                })
        }
    }
}
</script>

<style scoped>

</style>
