<template>
  <div id="app">
    <Navigation></Navigation>
    <Footer></Footer>
    <router-view/>

  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    'Navigation': Navigation,
    'Footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url('./assets/family-tree-img.jpg');
}
</style>
