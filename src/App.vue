<template>
    <TheNagivation id="nav"></TheNagivation>
    <TheBanner></TheBanner>
</template>

<script setup>
import TheNagivation from './components/TheNavigation.vue'
import TheBanner from './components/TheBanner.vue'
</script>

<style scoped >
#nav {
    position: fixed;
    z-index: 4;
}
</style>