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

h2 a {
    font-family: 'Roboto', sans-serif;
    font-size: 4rem;
    color: #ffffff;
    padding: 0px;
    margin: 0px;
    line-height: 1;
    text-decoration: none;
    font-weight: 700;
}

h2 a:hover {
    color: #aec6cf !important;
}

h2 a.router-link-active {
    color: #CFAEB5;
}

ul{
  padding-left: 0;
}

</style>
