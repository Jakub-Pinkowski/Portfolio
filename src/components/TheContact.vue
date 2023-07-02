<template>
    <div id="contact">
        <h2>
            Contact
        </h2>
        <div class="contact-form">
            <div class="text">
                <h5>Send me a message!</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum consectetur dolorum ullam laborum,
                    adipisci sunt fugiat minima mollitia quisquam vero tempore itaque reiciendis voluptas hic, assumenda
                    ducimus error laudantium!
                </p>
            </div>
            <div class="form-container">
                <form>
                    <input type="text" name="name" id="name" placeholder="Name" required>
                    <input type="email" name="email" id="email" placeholder="E-mail" required>
                    <textarea name="message" id="message" cols="20" rows="5" placeholder="Message" required></textarea>
                    <button class="btn btn-sm btn-outline-secondary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped > #contact {
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
         color: var(--main-bg-color);
         font-weight: 700;
         font-size: 1.5em;
     }

     p {
         padding-block: 10px;
         padding-right: 10px;
         font-weight: 400;
         color: var(--gray);
         font-size: 1.1em;
     }

     .text {
         width: 50%;
         margin: 1em 0;
     }

     .form-container {
         width: 50%;
         margin: 1em 0;
     }

     form {
         display: flex;
         flex-direction: column;

         input,
         textarea {
             width: 80%;
             margin: 1em;
             padding: 0.5em;
             border: 1px solid var(--dark-accent);
             border-radius: 5px;
                
         }

         button {
             margin: 1em;
             width: 90px;
             border: 1px solid var(--dark-accent);
             color: var(--main-bg-color);
         }

         button:hover {
             background-color: var(--light-accent);
         }
     }

     .contact-form {
         display: flex;

     }
 }
</style>