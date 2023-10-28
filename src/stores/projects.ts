import { defineStore } from 'pinia'

import image_jules_art from '@/assets/images/jules-art.jpg'
import image_habit_tracker from '@/assets/images/habit-tracker.png'
import image_coach from '@/assets/images/coach.jpg'
import weather_app from '@/assets/images/weather-app.png'
import travel_blog from '@/assets/images/travel-blog.jpg'
import todo from '@/assets/images/todo.jpg'
import blogging_platform from '@/assets/images/blogging-platform.jpg'
import meals from '@/assets/images/meals.jpg'
import social_media from '@/assets/images/social-media.jpg'

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
                    "Artist's portfolio website designed to showcase her creative work and provide a means for visitors to get in touch with her.",
                technologiesDescription: 'Built with Vue.js, TS, HTML, CSS and Firebase.',
                technologies: ['vue', 'ts', 'html', 'css', 'firebase'],
                github: 'https://github.com/Jakub-Pinkowski/Jules-Art',
            },
            {
                id: 2,
                name: 'Blogging Platform',
                src: 'https://blogging-platform-steel.vercel.app',
                img: blogging_platform,
                description:
                    "A blogging platform where you can view and like all users' posts, create your own account, and manage your own posts",
                technologiesDescription: 'Built with React, Next, JS, HTML, CSS and Vercel.',
                technologies: ['react', 'next', 'js', 'html', 'css', 'vercel'],
                github: 'https://github.com/Jakub-Pinkowski/Blogging-Platform',
            },
            {
                id: 3,
                name: 'Social Media App',
                src: 'https://social-media-sigma-topaz.vercel.app/api/auth/signin',
                img: social_media,
                description:
                    'Social media app that allows you to create an account, view other users and blog posts',
                technologiesDescription:
                    'Built with React, Next, TS, Prisma, PostgreSQL HTML, CSS and Vercel.',
                technologies: [
                    'react',
                    'next',
                    'ts',
                    'prisma',
                    'postgresql',
                    'html',
                    'css',
                    'vercel',
                ],
                github: 'https://github.com/Jakub-Pinkowski/Social-Media',
            },
            {
                id: 4,
                name: 'Habit Tracker',
                src: 'http://pinkowskijakub.eu.pythonanywhere.com',
                img: image_habit_tracker,
                description:
                    'Habit Tracker website that allows you to track your habits. You can add, edit and delete your entries.',
                technologiesDescription: 'Built with Python, SQlite, JS, HTML and CSS.',
                technologies: ['python', 'sqlite', 'js', 'html', 'css'],
                github: 'https://github.com/Jakub-Pinkowski/cs50_final_project',
            },

            {
                id: 5,
                name: 'Meals App',
                src: 'https://react-counter-64e25.web.app',
                img: meals,
                description: 'Meals app that allows you to add meals to your cart and order them.',
                technologiesDescription: 'Built with React, JS, HTML, CSS and Firebase.',
                technologies: ['react', 'js', 'html', 'css', 'firebase'],
                github: 'https://github.com/Jakub-Pinkowski/react-meals',
            },
            {
                id: 6,
                name: 'Weather App',
                src: 'https://weather-app-11d00.web.app',
                img: weather_app,
                description:
                    'Weather app that allows you to check the weather in your city and add it to your favourites.',
                technologiesDescription:
                    'Built with Vue.js, TS, HTML, CSS (Tailwind) and Firebase.',
                technologies: ['vue', 'ts', 'html', 'css', 'tailwind', 'firebase'],
                github: 'https://github.com/Jakub-Pinkowski/Weather-App',
            },
            {
                id: 7,
                name: 'Travel Blog',
                src: 'https://travel-blog-9cc00.web.app',
                img: travel_blog,
                description: 'Travel blog website. The admin can add posts and images.',
                technologiesDescription: 'Built with Vue.js, TS, HTML, CSS and Firebase.',
                technologies: ['vue', 'ts', 'html', 'css', 'firebase'],
                github: 'https://github.com/Jakub-Pinkowski/Travel-Blog',
            },
            {
                id: 8,
                name: 'TODO App',
                src: 'https://todo-app-5ce36.web.app',
                img: todo,
                description: 'Simple TODO app that allows you to add, edit and delete your tasks.',
                technologiesDescription: 'Built with Vue.js, TS, HTML, CSS and Firebase.',
                technologies: ['vue', 'ts', 'html', 'css', 'firebase'],
                github: 'https://github.com/Jakub-Pinkowski/Todo-App',
            },
            {
                id: 9,
                name: 'Find a Coach',
                src: 'https://vue-udemy-section16.web.app',
                img: image_coach,
                description:
                    'Find a coach website that allows you to and register as a coach or find a coach and contact them.',
                technologiesDescription: 'Built with Vue.js, JS, HTML, CSS and Firebase.',
                technologies: ['vue', 'js', 'html', 'css', 'firebase'],
                github: 'https://github.com/Jakub-Pinkowski/vue-udemy',
            },
        ],
    }),
})
