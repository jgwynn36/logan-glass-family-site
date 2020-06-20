<template>
  <div id="banner">
    <div id="innerBanner">
      <h1>Logan & Glass Family Reunion</h1>
    </div>
    <nav>
      <router-link class="spacing" v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
      <form>
        <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
      </form>
    </nav>
  </div>
</template>

<script>
import {mdbInput} from 'mdbvue'
export default {
  name: 'Navigation',
  components: {
    mdbInput
  },
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
  color: black;
  text-decoration: none;
  }
#banner {
  background-image: url('https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-class-reunion-poster-image_133308.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  color: black;
}
</style>
