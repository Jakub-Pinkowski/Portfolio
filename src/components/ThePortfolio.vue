<template>
    <div id="portfolio">
        <h2>
            Portfolio
        </h2>
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="../assets/images/jules-art.jpg" alt="Jules-art website">
                        <div class="card-body">
                            <h5 class="card-text">Jules Art</h5>
                            <p>
                                Artist's portfolio website showcasing her work and allowing to contact her.
                            </p>
                            <p>
                                Build with HTML, CSS, JS.
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="../assets/images/habit-tracker-2.png" alt="Jules-art website">
                        <div class="card-body">
                            <h5 class="card-text">Habit Tracker</h5>
                            <p>
                                Habit Tracker website that allows you to track your habits. You can add, edit and delete your entries.
                            </p>
                            <p>
                                Build with Python, SQLlite, HTML, CSS, JS.
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                            preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                dy=".3em">Thumbnail</text>
                        </svg>
                        <div class="card-body">
                            <h5 class="card-text">To be added</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped > #portfolio {
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

     h5 {
        color: var(--highlight-color);
        font-weight: 700;
    }

     button {
         padding: 0.5em 1.5em;
         border: 1px solid var(--dark-accent);
         color: var(--main-bg-color);
     }

     button:hover {
            background-color: var(--light-accent);
     }
 }
</style>