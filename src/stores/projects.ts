import { defineStore } from 'pinia'

import image_jules_art from '@/assets/images/jules-art.jpg'
import image_habit_tracker from '@/assets/images/habit-tracker.png'
import image_coach from '@/assets/images/coach.webp'
import weather_app from '@/assets/images/weather-app.png'
import travel_blog from '@/assets/images/travel-blog.jpg'

export const useProjectsStore = defineStore({
    id: 'projectsStore',
    state: () => ({
        projects: [
            {
                id: 1,
                name: 'Jules-Art',
                src: 'https://jules-art.com',
                img: image_jules_art,
                description:
                    "Artist's portfolio website showcasing her work and allowing to contact her.",
                technologiesDescription:
                    'Built with Vue.js, TS, HTML, CSS and Firebase.',
                technologies: ['vue', 'ts', 'html', 'css', 'firebase'],
                github: 'https://github.com/Jakub-Pinkowski/Jules-Art',
            },
            {
                id: 2,
                name: 'Travel Blog',
                src: 'https://travel-blog-9cc00.web.app',
                img: travel_blog,
                description:
                    'Travel blog website. The admin can add posts and images.',
                technologiesDescription:
                    'Built with Vue.js, TS, HTML, CSS and Firebase.',
                technologies: ['vue', 'ts', 'html', 'css', 'firebase'],
                github: 'https://github.com/Jakub-Pinkowski/Travel-Blog',
            },
            {
                id: 3,
                name: 'Find a Coach',
                src: 'https://vue-udemy-section16.web.app',
                img: image_coach,
                description:
                    'Find a coach website that allows you to find and register as a coach. Build for udemy Vue.js course.',
                technologiesDescription:
                    'Built with Vue.js, JS, HTML, CSS and Firebase.',
                technologies: ['vue', 'js', 'html', 'css', 'firebase'],
                github: 'https://github.com/Jakub-Pinkowski/vue-udemy',
            },
            {
                id: 4,
                name: 'Weather App',
                src: 'https://weather-app-11d00.web.app',
                img: weather_app,
                description:
                    'Weather app that allows you to check the weather in your city and add it to your favourites.',
                technologiesDescription:
                    'Built with Vue.js, TS, HTML, CSS (Tailwind) and Firebase.',
                technologies: [
                    'vue',
                    'ts',
                    'html',
                    'css',
                    'tailwind',
                    'firebase',
                ],
                github: 'https://github.com/Jakub-Pinkowski/Weather-App',
            },
            {
                id: 5,
                name: 'Habit Tracker',
                src: 'http://pinkowskijakub.eu.pythonanywhere.com',
                img: image_habit_tracker,
                description:
                    'Habit Tracker website that allows you to track your habits. You can add, edit and delete your entries.',
                technologiesDescription:
                    'Built with Python, SQlite, JS, HTML and CSS.',
                technologies: ['python', 'sqlite', 'js', 'html', 'css'],
                github: 'https://github.com/Jakub-Pinkowski/cs50_final_project',
            },
        ],
    }),
})
