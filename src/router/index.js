import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/projects',
            component: () => import('../views/ProjectsView.vue'),
        },
        {
            path: '/contact',
            component: () => import('../views/ContactView.vue'),
        },
    ],
});

export default router;
