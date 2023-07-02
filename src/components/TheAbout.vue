<template>
    <div id="about">
        <div id="text">
            <h2>About me</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci laboriosam placeat nihil ullam
                dolorum
                beatae voluptatum, eligendi cum alias.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, perspiciatis.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio pariatur eius iusto quam totam placeat.
                Assumenda
                amet aperiam quasi architecto eum? Fuga debitis beatae amet a? Dolore, libero similique. Eligendi.
            </p>
        </div>
        <div id="photo">
            <img src="../assets/images/my-photo.jpg" alt="my_photo">
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
#about {
    padding-left: 10%;
    display: flex;
    align-items: stretch;
    margin-top: 7em;
    margin-bottom: 7em;
}

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

#text {
    max-width: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
}

#photo {
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

@media (max-width: 768px) {
    #about {
        flex-direction: column;
    }

    #text,
    #photo {
        width: 100%;
    }
}
</style>
  