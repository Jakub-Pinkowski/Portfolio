<template>
    <TheNagivation></TheNagivation>

    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNagivation from './components/TheNavigation.vue'
</script>

