<template>
    <header>
        <TheNagivation class="nav" />
    </header>
    <body>
        <main>
            <TheBanner />
            <TheAbout />
            <ThePortfolio />
            <TheContact />
        </main>
        <TheFooter />
    </body>
</template>

<script setup lang="ts">
import TheNagivation from './components/TheNavigation.vue'
import TheBanner from './components/TheBanner.vue'
import TheAbout from './components/TheAbout.vue'
import ThePortfolio from './components/ThePortfolio.vue'
import TheContact from './components/TheContact.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<style scoped lang="scss">
.nav {
    position: fixed;
    z-index: 4;
}
</style>
