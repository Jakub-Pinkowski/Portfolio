<template>
    <div id="home" class="banner ">

        <div class="intro">
            <h1 class="heading ma-0 pa-0 "> Jakub Pinkowski </h1>
            <h2 class="secondary-text"> Self-taught Web Developer </h2>
        </div>
    </div>
</template>


<style lang="scss" >
.banner {
    text-align: left;
    height: 100vh;
    background-color: var(--main-bg-color);
    padding-left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.intro {

    p {
        margin-left: 10px;
        padding: 0;
        font-size: 1.5em;
        font-weight: bold;
        color: var(--dark-accent);
    }

    ;

    span {
        color: var(--dark-accent);
    }

    .btn {
        color: var(--gray);
    }


    .secondary-text {
        color: var(--gray);
    }

    .heading {
        margin: 0px;
        padding: 0px;
        font-size: 4em;
        color: var(--highlight-color);
    }

    h2 {
        margin-top: 1em;
        padding: 0px;
        font-size: 2em;
        color: var(--gray);
    }

}
</style>