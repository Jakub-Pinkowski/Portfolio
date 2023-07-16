import { defineStore } from 'pinia';

export const useIconsStore = defineStore({
    id: 'iconsStore',
    state: () => ({
        icons: [
            {
                name: 'vue',
                src: '../assets/icons/vue.png',
            },
            {
                name: 'html',
                src: '../assets/icons/html.png',
            },
            {
                name: 'css',
                src: '../assets/icons/css.png',
            },
            {
                name: 'js',
                src: '../assets/icons/js.png',
            },
            {
                name: 'ts',
                src: '../assets/icons/ts.png',
            },
            {
                name: 'python',
                src: '../assets/icons/python.png',
            },
            {
                name: 'firebase',
                src: '../assets/icons/firebase.png',
            },
            {
                name: 'sqlite',
                src: '../assets/icons/sqlite.png',
            },
            {
                name: 'git',
                src: '../assets/icons/git.png',
            },
        ],
    }),
});
