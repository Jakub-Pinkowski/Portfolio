import { defineStore } from 'pinia';

export const useViewStore = defineStore({
    id: 'viewStore',
    state: () => ({
        views: [
            {
                name: 'Home',
                link: '#home',
            },
            {
                name: 'About',
                link: '#about',
            },
            {
                name: 'Portfolio',
                link: '#portfolio',
            },
            {
                name: 'Contact',
                link: '#contact',
            },
        ],
    }),
});
