<template>
  <div class="home">
    <HomeHero message="hello"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from '@/components/HomeHero.vue'

export default {
  name: 'Home',
  components: {
    HomeHero
  }
}
</script>
