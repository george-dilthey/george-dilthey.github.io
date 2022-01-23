<template>
  <div class="nav-text">
    <ul :class="{left: CheckRouteName($route.name, '[Developer, Marketer, Cellist]')}">
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
  name: 'HeroNav',
  methods: {
    CheckRouteName: function (p, a) {
      return (a.includes(p))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 a {
    font-family: 'Roboto', sans-serif;
    font-size: 3.5rem;
    color: #ffffff;
    line-height: 1;
    text-decoration: none;
    font-weight: 700;
    transition: color .5s ease;
}

a:hover {
    color: #aec6cf !important;
}

h2 a.router-link-active {
    color: #CFAEB5;
}

ul{
  padding-left: 0;
}

/* mobile */
@media only screen and (max-width: 766px) {
  ul {
    margin-bottom: -35%;
    margin-top: 15%;
    transition: all 1s ease;
    text-align: center;
  }
  ul.left {
    margin-top: -15%;
    margin-bottom: 5%;
    transform: translateY(-60%);
  }
}

/* desktop */
@media only screen and (min-width: 767px) {
  ul {
    transition: all 1s ease;
  }
  ul.left {
    transform: translate(-125%);
  }
}

</style>
