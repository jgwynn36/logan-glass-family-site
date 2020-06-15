<template>
<div id="app">
    <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/family-tree">Family Tree</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
    </ul>
    <img src="./assets/familyReunionLogo.jpeg">
    <h1>Logan Glass Family Reunion</h1>


    <router-view class="view"></router-view>

</div>
</template>

<script>
export default {
   
}; 
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  .router-link-active{
    color: red ;
  }
</style>