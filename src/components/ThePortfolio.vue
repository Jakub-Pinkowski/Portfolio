<template>
    <div id="portfolio">
        <h2>
            Portfolio
        </h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
                <div class="card shadow-sm">
                    <img src="../assets/images/jules-art.jpg" alt="Jules Art website">
                    <div class="card-body">
                        <h5 class="card-text">Jules Art</h5>
                        <p>
                            Artist's portfolio website showcasing her work and allowing to contact her.
                        </p>
                        <p>
                            Build with HTML, CSS, JS.
                        </p>
                        <p>
                            <img class="icon" src="../assets/icons/html.png" alt="HTML">
                            <img class="icon" src="../assets/icons/css.png" alt="CSS">
                            <img class="icon" src="../assets/icons/javascript.png" alt="Javascript">
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="https://jules-art.com" class="btn btn-sm btn-outline-secondary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <img src="../assets/images/habit-tracker-2.png" alt="Habit Tracker website">
                    <div class="card-body">
                        <h5 class="card-text">Habit Tracker</h5>
                        <p>
                            Habit Tracker website that allows you to track your habits. You can add, edit and delete
                            your entries.
                        </p>
                        <p>
                            Build with Python, SQlite, HTML, CSS, JS.
                        </p>
                        <p>
                            <img class="icon" src="../assets/icons/python.png" alt="Python">
                            <img class="icon" src="../assets/icons/sql.png" alt="Sqlite">
                            <img class="icon" src="../assets/icons/html.png" alt="HTML">
                            <img class="icon" src="../assets/icons/css.png" alt="CSS">
                            <img class="icon" src="../assets/icons/javascript.png" alt="Javascript">
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="http://pinkowskijakub.eu.pythonanywhere.com"
                                    class="btn btn-sm btn-outline-secondary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <img src="../assets/images/coach-placeholder-2.jpeg" alt="Find a Coach website">
                    <div class="card-body">
                        <h5 class="card-text">Find a Coach</h5>
                        <p>
                            Find a coach website that allows you to find and register as a coach. Build for udemy Vue.js
                            course.
                        </p>
                        <p>
                            Buiild with Vue.js, HTML, CSS, JS and Firebase.
                        </p>
                        <p>
                            <img class="icon" src="../assets/icons/vue.png" alt="Vue.js">
                            <img class="icon" src="../assets/icons/html.png" alt="HTML">
                            <img class="icon" src="../assets/icons/css.png" alt="CSS">
                            <img class="icon" src="../assets/icons/javascript.png" alt="Javascript">
                            <img class="icon" src="../assets/icons/firebase.png" alt="Firebase">
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="https://vue-udemy-section16.web.app"
                                    class="btn btn-sm btn-outline-secondary">View</a>
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

     img {
         width: 100%;
         height: 250px;
         object-fit: cover;
     }

     h5 {
         color: var(--highlight-color);
         font-weight: 700;
     }

     a {
         padding: 0.5em 1.5em;
         border: 1px solid var(--dark-accent);
         color: var(--main-bg-color);
     }

     button:hover {
         background-color: var(--light-accent);
     }

     .col {
         margin: 0.5em;
         width: 30%;
     }

     .icon {
         width: 40px;
         height: 40px;
         padding: 0.2em;
     }

     @media (max-width: 768px) {
         .col {
             width: 90%;
         }
     }
 }
</style>