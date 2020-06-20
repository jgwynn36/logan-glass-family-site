<template>
    <div>
        <h1>Contact Us</h1>
        <p>
            <ul>
                <li>Email: {{email}}</li>
                <li>Website: {{web}}</li>
            </ul>
        </p>
    </div>
</template>

<script>
export default {
  name: 'Contact Us',
  data () {
    return {
      email: /jacquelinegwynn@gmail.com/,
      web: /www.lgfamily.com/
    }
  }
}
</script>
