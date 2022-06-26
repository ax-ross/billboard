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
        },
        {
            path: '/advertisements/:id/edit',
            component: () => import('./components/advertisements/Edit'),
            name: 'advertisements.edit'
        },
        {
            path: '/advertisements/:id',
            component: () => import('./components/advertisements/Show'),
            name: 'advertisements.show'
        },
    ]
});
