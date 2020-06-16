<template>
  <footer>
    <div class="footer">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        Home Page
      </router-link>
      <span class="attribution">
        If you would like to contribute to this site please reach out to
        <a rel="noopener noreferrer" target="blank" href="/Contact"
          >Contact Us</a
        >. This site was coded &amp; design created by Jacqueline Gwynn.
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
