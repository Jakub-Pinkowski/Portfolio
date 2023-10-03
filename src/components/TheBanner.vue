<template>
    <div class="banner">
        <div class="intro">
            <h1 class="heading ma-0 pa-0">{{ heading1 }}</h1>
            <h2 class="secondary-text">{{ heading2 }}</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
const heading1 = 'Jakub Pinkowski'
const heading2 = 'Self-taught Web Developer'
</script>

<style lang="scss" scoped>
.banner {
    text-align: left;
    height: 100vh;
    background-color: var(--main-bg-color);
    padding-left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .intro {
        .heading {
            margin: 0px;
            padding: 0px;
            font-size: 4em;
            color: var(--highlight-color);
        }

        .secondary-text {
            margin-top: 1em;
            padding: 0px;
            font-size: 2em;
            color: var(--gray);
        }
    }
}
</style>
