<template>
  <div id='nav'>
    <nav class="navbar navbar-expand" id="navbar">
        <ul class="navbar-nav">
            <li class="nav-item active"><router-link class = "nav-link" to="/">HOME</router-link></li>
            <li class="nav-item"><router-link class = "nav-link" to="/about">ABOUT</router-link></li>
            <li class="nav-item"><a class="nav-link" href="#contact">CONTACT</a></li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#navbar {
  background-color: #202020;
  margin-bottom: 0;
  height: 30px;
  width: 100%;
  position: absolute;
}

ul{
  margin-left: 3em;
}

.nav-link{
  color: #ffffff;
  margin: 1em;
  font-family:'Roboto', sans-serif;
}

.nav-link:hover {
  color: #aec6cf;

}

.nav-link.active {
  color: #aec6cf;
}

</style>
