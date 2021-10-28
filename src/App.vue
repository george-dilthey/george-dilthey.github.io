<template>
  <div id="nav">
      <NavBar />
  </div>
      <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
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
