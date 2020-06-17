<template>
    <div id="banner">
      <div id="innerBanner">
        <h1>Logan & Glass Reunion Site</h1>
      </div>
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
          text: 'Welcome',
          page: '/'
        },
        {
          id: 1,
          text: 'New News',
          page: '/News'
        },
        {
          id: 2,
          text: 'Reunion Committee Members',
          page: '/Members'
        },
        {
          id: 3,
          text: 'Photos',
          page: '/Photos'
        },
        {
          id: 4,
          text: 'Contact Us',
          page: '/Contact'
        },
        {
          id: 5,
          text: 'Registration',
          page: '/Registration'
        }
      ]
    }
  }
}
</script>

<style>
.spacing {
  list-style-type: none;
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
  text-decoration: none;
  float: right;
  }
#banner {
  height: 242px;
  width: 1000px;
  margin-top: 0px;
}
</style>
