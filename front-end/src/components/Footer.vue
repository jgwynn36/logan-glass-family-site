<template>
  <footer>
    <div class="footer">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        Logan Glass Family
      </router-link>
      <span class="attribution">
        This is a family reunion website
        <a rel="noopener noreferrer" target="blank" href="lgfamilyreunion.com"
          >Logan Glass Family Reunion</a
        >. Code &amp; design created by Jacqueline Gwynn.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: gray;
  color: white;
  text-align: center;
  padding: 30px;
}
</style>
