<template>
    <nav role="navigation" class="">
        <div id="menuToggle">
            <input type="checkbox" ref="checkbox" v-model="checkboxChecked" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <a v-for="view in views" :href="view.link">
                    <li @click="close()">{{ view.name }}</li>
                </a>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useViewStore } from '@/stores/views';
import { ref } from 'vue';

const viewStore = useViewStore();
const views = viewStore.views;

// Close the menu when a link is clicked
const checkboxChecked = ref(false);
const close = () => {
    checkboxChecked.value = false;
};
</script>

<style scoped>
#menuToggle {
    display: block;
    position: relative;
    top: 50px;
    left: 50px;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
}

#menuToggle a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
}

#menuToggle a:hover {
    color: tomato;
}

#menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0;
    z-index: 2;

    -webkit-touch-callout: none;
}

#menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: var(--highlight-color);
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
    transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
}

#menu {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    height: 102vh;
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
    padding: 10px 0;
    font-size: 22px;
}

#menuToggle input:checked ~ ul {
    transform: none;
}
</style>
