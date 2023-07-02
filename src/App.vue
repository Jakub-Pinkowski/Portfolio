<template>
    <body>
        <TheNagivation id="nav"></TheNagivation>
        <main>
            <TheBanner></TheBanner>
            <TheAbout></TheAbout>
            <ThePortfolio></ThePortfolio>
        </main>
        <TheFooter></TheFooter>
    </body>
</template>

<script setup>
import TheNagivation from './components/TheNavigation.vue'
import TheBanner from './components/TheBanner.vue'
import TheAbout from './components/TheAbout.vue'
import ThePortfolio from './components/ThePortfolio.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<style scoped >
#nav {
    position: fixed;
    z-index: 4;
}
</style>