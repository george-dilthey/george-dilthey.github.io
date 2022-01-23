<template>
  <div>
      <NavBar />
      <Hero/>
      <transition appear name="slide-up" mode="out-in">
        <router-view :key='$route.path'></router-view>
      </transition>
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

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all .8s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(25%);
  opacity: 0;
}

@media only screen and (max-width: 766px) {
      .show-mobile {
        display: block;
      }
      .hide-mobile {
        display: none;
      }
    }

 @media only screen and (min-width: 767px) {
      .show-mobile {
        display: none;
      }
      .hide-mobile {
        display: block;
      }
    }

</style>
