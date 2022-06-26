import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/advertisements',
            component: () => import('./components/advertisements/Index'),
            name: 'advertisements.index'
        },
        {
            path: '/advertisements/create',
            component: () => import('./components/advertisements/Create'),
            name: 'advertisements.create'
        }
    ]
});
