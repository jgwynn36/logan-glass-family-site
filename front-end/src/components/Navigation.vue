<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Nav Bar</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>Navigation-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    links: [
      {
        id: 0,
        text: 'Hello World',
        page: '/HelloWorld'
      },
      {
        id: 1,
        text: 'Home',
        page: '/Home'
      },
      {
        id: 2,
        text: 'About',
        page: '/About'
      },
      {
        id: 3,
        text: 'Contact',
        page: '/Contact'
      }
    ]
  })
}
</script>

<style>
.spacing {
    Margin-right: 10px;
}
</style>
