<template>
    <div id="portfolio">
        <h2>Portfolio</h2>
        <div class="row row-cols-1 row-cols-sm-2">
            <div class="col" v-for="project in projects">
                <div class="card shadow-sm">
                    <img :src="project.img" :alt="project.name" />
                    <div class="card-body">
                        <h5 class="card-text">{{ project.name }}</h5>
                        <p>{{ project.description }}</p>
                        <p>{{ project.technologiesDescription }}</p>
                        <p>
                            <img
                                class="icon"
                                v-for="tech in project.technologies"
                                :key="tech"
                                :src="getIconSrc(tech)"
                                :alt="tech"
                            />
                        </p>
                        <div
                            class="d-flex justify-content-between align-items-center"
                        >
                            <div class="btn-group">
                                <a
                                    :href="project.src"
                                    class="btn btn-sm btn-outline-secondary"
                                >
                                    <img
                                        class="icon"
                                        :src="getIconSrc('globe')"
                                        alt="globe icon"
                                    />
                                    Visit Website
                                </a>

                                <a
                                    :href="project.github"
                                    class="btn btn-sm btn-outline-secondary"
                                >
                                    <img
                                        class="icon"
                                        :src="getIconSrc('github')"
                                        alt="github icon"
                                    />
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from '@/stores/projects'
import { useIconsStore } from '@/stores/icons'

// Projects
const projectsStore = useProjectsStore()
const projects = projectsStore.projects

// Icons
const iconsStore = useIconsStore()
const icons = iconsStore.icons

const getIconSrc = (tech: string) => {
    const icon = icons.find((icon) => icon.name === tech)
    return icon ? icon.src : ''
}
</script>

<style lang="scss" scoped>
#portfolio {
    padding-left: 10%;
    margin-top: 3em;

    h2 {
        text-transform: uppercase;
        font-weight: 700;
        color: var(--accent-color);
        padding-top: 15px;
        font-family: Montserrat, sans-serif;
        font-size: 2em;
        display: block;
        margin-bottom: 1em;
    }

    .row {
        margin: 0;
        display: flex;
        flex-wrap: wrap;

        .col {
            margin-top: 2rem;
            width: 45%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .card {
                flex-grow: 1;
                display: flex;
                flex-direction: column;

                .card-body {
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;

                    .card-text {
                        flex-grow: 1;
                    }
                }
            }

            img {
                width: 100%;
                height: 250px;
                object-fit: cover;
            }

            h5 {
                color: var(--highlight-color);
                font-weight: 700;
            }

            a {
                padding: 0.5em 1.5em;
                border: 1px solid var(--dark-accent);
                color: var(--main-bg-color);
            }

            a:hover {
                background-color: var(--light-accent);
            }

            .icon {
                width: 40px;
                height: 40px;
                padding: 0.2em;
            }

            .btn-group {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }
    }

    /* Mobile */

    @media (max-width: 768px) {
        .col {
            width: 90% !important;
        }
    }
}
</style>
