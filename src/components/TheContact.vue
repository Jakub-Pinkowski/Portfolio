<template>
    <div id="contact">
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
import { ref } from 'vue';

// Text
const heading_contact = 'Contact';
const heading_contact_form = 'Send me a message!';
const paragraph_contact =
    'Feel free to reach out to me via email or LinkedIn. I am always open to new opportunities!';
const github = 'https://github.com/Jakub-Pinkowski';
const linkedin = 'https://www.linkedin.com/in/jakub-pinkowski-b44405134/';

// Form
const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
    const formData = {
        name: name.value,
        email: email.value,
        message: message.value,
    };

    fetch('https://api.sendinblue.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key':
                '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',
        },
        body: JSON.stringify({
            sender: {
                name: formData.name,
                email: formData.email,
            },
            to: [{ email: 'pinkowski.jakub@googlemail.com' }],
            subject: 'Portfolio Contact Form',
            htmlContent: `
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Message:</strong> ${formData.message}</p>
            `,
        }),
    })
        .then((response) => {
            if (response.ok) {
                alert('Your message has been sent!');
                resetForm();
            } else {
                alert('Something went wrong. Please try again later.');
            }
        })
        .catch((error) => {
            console.error('Error sending form data:', error);
            alert('Error sending form data');
        });
};

const resetForm = () => {
    name.value = '';
    email.value = '';
    message.value = '';
};
</script>

<style lang="scss" scoped>
#contact {
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
        font-size: 1.6em;
    }

    p {
        padding-block: 10px;
        padding-right: 10px;
        font-weight: 400;
        color: var(--gray);
        font-size: 1.3em;
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
