<template>
  <nav id="top-nav">
      <ul class="top-nav">
          <li class="top-nav-item active"><router-link class = "top-nav-link" to="/">HOME</router-link></li>
          <li class="top-nav-item"><router-link class = "top-nav-link" to="/about">ABOUT</router-link></li>
          <li class="top-nav-item"><router-link class = "top-nav-link" to="/contact">CONTACT</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#top-nav {
  background-color: #202020;
  margin-bottom: 0;
  height: 30px;
  width: 100%;
}

ul.top-nav {
  padding-top: 5px;
}

li.top-nav-item {
  display: inline;
}

a.top-nav-link {
  color: #ffffff;
  font-family:'Roboto', sans-serif;
  padding: 0px 20px 0 20px;
  text-decoration: none;
}

.top-nav-link:hover {
  color: #aec6cf;

}

.top-nav-link.active {
  color: #aec6cf;
}

</style>
