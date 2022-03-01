<template>
  <div class="nav-text">
    <ul :class="{intro: CheckRouteName($route.name, '[Developer, Marketer, Cellist]')}">
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
.nav-text {
    position: absolute;
}

h2 a {
    font-family: 'Roboto', sans-serif;
    font-size: 3.5rem;
    color: #ffffff;
    text-decoration: none;
    line-height: 1;
    border-top: solid 1px rgba(174, 198, 207, 0);
    border-bottom: solid 1px rgba(174, 198, 207, 0);
    font-weight: 700;
    transition: none;

}

a:hover {
  color: #AEC6CF;
  border-top: solid 1px rgba(174, 198, 207, 1);
  border-bottom: solid 1px rgba(174, 198, 207, 1);
  transition: border-top .5s ease, border-bottom .5s ease, color .5s ease;

}

h2 a.router-link-active {
    color: #CFAEB5;
}

ul {
  padding-left: 0;
}

/* mobile */
@media only screen and (max-width: 766px) {
  ul {
    transition: all 1s ease;
    text-align: center;
    transform: translateY(20vh);

  }
  ul.intro {
      transform: translateY(-10vh);
  }
}

/* desktop */
@media only screen and (min-width: 767px) {
  ul {
    top: 43vh;
    transition: all 1s ease;
    transform: translate(47vw);
  }
  ul.intro {
    transform: translate(5vw);
  }
}

</style>
