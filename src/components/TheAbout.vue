<template>
    <div id="about">
        <div class="text">
            <h2>{{ heading_about }}</h2>
            <p>{{ hello }}</p>
            <p>{{ paragraph1 }}</p>
            <p>{{ paragaph2 }}</p>
        </div>
        <div class="photo">
            <img :src="my_photo" alt="my_photo" />
        </div>
    </div>
</template>

<script setup lang="ts">
import my_photo from '../assets/images/my-photo.jpg'

const heading_about = 'About me'
const hello = 'Hello World!'
const paragraph1 =
    " I'm Jakub, a self-taught developer with a genuine passion for programming. I have a strong background in both back-end and front-end development, enabling me to create comprehensive and dynamic web applications."

const paragaph2 =
    'Welcome to my personal portfolio, where you can explore my rojects and dedication to creating high-quality software solutions.'
</script>

<style lang="scss" scoped>
#about {
    padding-left: 10%;
    display: flex;
    align-items: stretch;
    margin-top: 7em;
    margin-bottom: 7em;

    .text {
        max-width: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;

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

        p {
            padding-block: 10px;
            padding-right: 10px;
            font-weight: 400;
            color: var(--gray);
            font-size: 1.4em;
        }
    }

    .photo {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 80%;
            height: 80%;
            object-fit: contain;
        }
    }
}

/* Mobile */

@media (max-width: 768px) {
    #about {
        flex-direction: column;
        margin-right: 10%;

        .text {
            width: 100% !important;
            text-align: justify;
        }

        .photo {
            width: 100% !important;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>
