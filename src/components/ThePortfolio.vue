<template>
    <div id="portfolio">
        <h2>Portfolio</h2>
        <div class="row row-cols-1 row-cols-sm-2">
            <div class="col" v-for="project in projects">
                <div class="card shadow-sm">
                    <img :src="project.src" :alt="project.name" />
                    <div class="card-body">
                        <h5 class="card-text">{{ project.name }}</h5>
                        <p>{{ project.description }}</p>
                        <p>{{ project.technologiesDescription }}</p>
                        <p>
                            <img
                                class="icon"
                                v-for="tech in project.technologies"
                                :src="getIconSrc"
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
                                    >View
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolio';
import { useIconsStore } from '@/stores/icons';

// Projects
const portfolioStore = usePortfolioStore();
const projects = portfolioStore.projects;

// Icons
const iconsStore = useIconsStore();
const icons = iconsStore.icons;

const getIconSrc = (tech) => {
    return iconsStore.icons.find((icon) => icon.name === tech)?.src || '';
};
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

    .row {
        margin: 0;
    }

    .col {
        margin: 0.5em;
        width: 30%;
    }

    .icon {
        width: 40px;
        height: 40px;
        padding: 0.2em;
    }

    @media (max-width: 768px) {
        .col {
            width: 90%;
        }
    }
}
</style>
