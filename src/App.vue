<template>
  <div id="top">
      <NavBar />
      <Hero/>
      <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Hero
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  background: #24292E;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
