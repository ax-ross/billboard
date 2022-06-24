<template>
    <div class="container">
        <create-component></create-component>
        <index-component ref="index"></index-component>
    </div>
</template>

<script>
import IndexComponent from "./advertisements/IndexComponent";
import CreateComponent from "./advertisements/CreateComponent";

export default {
    name: "AdvertisementComponent",
    components: {
        IndexComponent,
        CreateComponent
    }
}
</script>

<style scoped>

</style>
