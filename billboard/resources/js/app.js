import Vue from 'vue'
import AdvertisementComponent from "./components/AdvertisementComponent";

require('./bootstrap');

const app = new Vue({
   el: '#app',
   components: {
       AdvertisementComponent
   }
});
