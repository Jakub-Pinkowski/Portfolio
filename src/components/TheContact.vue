<template>
    <div class="contact">
        <h2>{{ heading_contact }}</h2>
        <div class="contact-form">
            <div class="text">
                <h5>{{ heading_contact_form }}</h5>
                <p>{{ paragraph_contact }}</p>
                <ul class="nav col-md-4 list-unstyled d-flex">
                    <li class="">
                        <a class="text-body-secondary" :href="github">
                            <svg class="bi" width="50" height="50">
                                <use xlink:href="#github" />
                            </svg>
                        </a>
                    </li>
                    <li class="ms-3">
                        <a class="text-body-secondary" :href="linkedin">
                            <svg class="bi" width="50" height="50">
                                <use xlink:href="#linkedin" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="form-container">
                <form @submit.prevent="submitForm">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                        v-model="name"
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        required
                        v-model="email"
                    />
                    <textarea
                        name="message"
                        id="message"
                        cols="20"
                        rows="5"
                        placeholder="Message"
                        required
                        v-model="message"
                    ></textarea>
                    <button
                        class="btn btn-sm btn-outline-secondary"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

// Text
const heading_contact = 'Contact'
const heading_contact_form = 'Send me a message!'
const paragraph_contact =
    'Feel free to reach out to me via email or LinkedIn. I am always open to new opportunities!'
const github = 'https://github.com/Jakub-Pinkowski'
const linkedin = 'https://www.linkedin.com/in/jakub-pinkowski-b44405134/'

// Form
const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = async () => {
    const formData = new FormData()

    formData.append('name', name.value)
    formData.append('email', email.value)
    formData.append('message', message.value)

    const url = 'https://formspree.io/f/xpzgwgre'

    try {
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        if (response.status === 200) {
            alert('Your message has been sent!')
            resetForm()
        } else {
            alert('Something went wrong. Please try again later.')
        }
    } catch (error) {
        alert('Something went wrong. Please try again later.')
    }
}

const resetForm = () => {
    name.value = ''
    email.value = ''
    message.value = ''
}
</script>

<style lang="scss" scoped>
.contact {
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

    .contact-form {
        display: flex;

        .text {
            width: 50%;
            margin: 1em 0;

            h5 {
                color: var(--main-bg-color);
                font-weight: 700;
                font-size: 1.6em;
            }

            p {
                padding-block: 10px;
                padding-right: 10px;
                font-weight: 400;
                color: var(--gray);
                font-size: 1.3em;
            }
        }

        .form-container {
            width: 50%;
            margin: 1em 0;

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
        }
    }
}

/* Mobile */

@media (max-width: 768px) {
    #contact {
        .contact-form {
            flex-direction: column;
        }

        .text {
            width: 80% !important;
            margin: 0;
            text-align: justify;

            h5 {
                font-size: 1.5em !important;
            }
        }
        .form-container {
            width: 100% !important;
            margin: 0;

            form {
                input,
                textarea,
                button {
                    margin: 1em 0 !important;
                }
            }
        }
    }
}
</style>
