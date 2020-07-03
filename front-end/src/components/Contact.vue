<template>
  <form class="contact-form" @submit.prevent="sendEmail">
    <h1>Contact Form</h1>
    <h3>Please fill out the form below and the committee will respond within 48 hours.  Thanks for you submission!!</h3>
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
</template>

<script>

import emailjs from 'emailjs-com'

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('LG_Form', 'contact_form', e.target, 'user_4BAboX5W7AjicClLYeJGA')
        .then((result) => {
          console.log('SUCCESS!', result.status, result.text)
        }, (error) => {
          console.log('FAILED...', error)
        })
    }
  }
}
</script>
<style>
.contact-form {
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px 10px 200px;
}
label {
  padding: 30px
}
body {
  background-color: #ffffe0;
}
</style>
