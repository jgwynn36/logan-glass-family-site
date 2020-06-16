<template>
    <div>
      <header>
        <h2>Logan & Glass Reunion Site</h2>
      </header>
        <nav>
            <router-link class="spacing" v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`">{{routes.text}}</router-link>
        </nav>
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
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 16px 100px;
  text-decoration: none;
  }
  h2 {
  background-color: #666;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
  }
</style>
