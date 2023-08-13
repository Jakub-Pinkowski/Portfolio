import { defineStore } from 'pinia'

import vueIcon from '../assets/icons/vue.png'
import htmlIcon from '../assets/icons/html.png'
import cssIcon from '../assets/icons/css.png'
import jsIcon from '../assets/icons/js.png'
import tsIcon from '../assets/icons/ts.png'
import pythonIcon from '../assets/icons/python.png'
import firebaseIcon from '../assets/icons/firebase.png'
import sqliteIcon from '../assets/icons/sql.png'
import gitIcon from '../assets/icons/git.png'
import githubIcon from '../assets/icons/github.png'
import globe from '../assets/icons/globe.png'
import tailwind from '../assets/icons/tailwind.png'
import sass from '../assets/icons/sass.png'

export const useIconsStore = defineStore({
    id: 'iconsStore',
    state: () => ({
        icons: [
            {
                name: 'vue',
                src: vueIcon,
            },
            {
                name: 'html',
                src: htmlIcon,
            },
            {
                name: 'css',
                src: cssIcon,
            },
            {
                name: 'js',
                src: jsIcon,
            },
            {
                name: 'ts',
                src: tsIcon,
            },
            {
                name: 'python',
                src: pythonIcon,
            },
            {
                name: 'firebase',
                src: firebaseIcon,
            },
            {
                name: 'sqlite',
                src: sqliteIcon,
            },
            {
                name: 'git',
                src: gitIcon,
            },
            {
                name: 'github',
                src: githubIcon,
            },
            {
                name: 'globe',
                src: globe,
            },
            {
                name: 'tailwind',
                src: tailwind,
            },
            {
                name: 'sass',
                src: sass,
            },
        ],
    }),
})
