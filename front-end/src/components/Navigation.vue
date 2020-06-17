<template>
    <div>
        <h1>Logan & Glass Reunion Site
        <nav>
            <router-link class="spacing" v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`">{{routes.text}}</router-link>
        </nav>
        </h1>
    </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/'
        },
        {
          id: 1,
          text: 'About',
          page: '/About'
        },
        {
          id: 2,
          text: 'Contact',
          page: '/Contact'
        }
      ]
    }
  }
}
</script>

<style>
.spacing {
  list-style-type: none;
  margin: 10px;
  padding: 16px;
  overflow: hidden;
  background-color: #333;
  float: left;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  }
  h1 {
  background-color: green;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color:white;
  }
</style>
