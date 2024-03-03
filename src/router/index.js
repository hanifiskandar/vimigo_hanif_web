import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/Login.vue')
    },
    {
        path: '/register',
        name: 'Register ',
        component: () => import('../pages/Register.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass:'active'
})

export default router; 