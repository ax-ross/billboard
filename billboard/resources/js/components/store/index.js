import Vue from "vue";
import Vuex from 'vuex';
import Advertisements from './modules/advertisements'

Vue.use(Vuex)

export default new Vuex.Store({
   modules: {
       Advertisements
   }
});
