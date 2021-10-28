<template>
  <div class="nav-text">
    <ul>
      <li>
        <h2><router-link to="/developer">DEVELOPER</router-link></h2>
      </li>
      <li>
        <h2><router-link to="/marketer">MARKETER</router-link></h2>
      </li>
      <li>
        <h2><router-link to="/cellist">CELLIST</router-link></h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-text{
    margin-left: 3em;
}

h2 a {
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    font-size: 4rem;
    padding: 0px;
    margin: 0px;
    line-height: 1;
    text-decoration: none;
}

h2 a:hover {
    color: #aec6cf !important;

}

h2 .router-link-active {
    color: #ffffff;

}

</style>
