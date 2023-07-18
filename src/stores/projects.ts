import { defineStore } from 'pinia';

import image_jules_art from '@/assets/images/jules-art.jpg';
import image_habit_tracker from '@/assets/images/habit-tracker.png';
import image_coach from '@/assets/images/coach.webp';

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
                    'Built with Vue.js, HTML, CSS, TS and Firebase.',
                technologies: ['vue', 'html', 'css', 'ts', 'firebase'],
                github: 'https://github.com/Jakub-Pinkowski/Jules-Art',
            },
            {
                id: 2,
                name: 'Habit Tracker',
                src: 'http://pinkowskijakub.eu.pythonanywhere.com',
                img: image_habit_tracker,
                description:
                    'Habit Tracker website that allows you to track your habits. You can add, edit and delete your entries.',
                technologiesDescription:
                    'Built with Python, SQlite, HTML, CSS, JS.',
                technologies: ['python', 'sqlite', 'html', 'css', 'js'],
                github: 'https://github.com/Jakub-Pinkowski/cs50_final_project',
            },
            {
                id: 3,
                name: 'Find a Coach',
                src: 'https://vue-udemy-section16.web.app',
                img: image_coach,
                description:
                    'Find a coach website that allows you to find and register as a coach. Build for udemy Vue.js course.',
                technologiesDescription:
                    'Built with Vue.js, HTML, CSS, JS and Firebase.',
                technologies: ['vue', 'html', 'css', 'js', 'firebase'],
                github: 'https://github.com/Jakub-Pinkowski/vue-udemy',
            },
        ],
    }),
});
