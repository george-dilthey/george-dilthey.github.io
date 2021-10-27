<template>
  <div class="developer">
    <DeveloperHero/>
  </div>
</template>

<script>
// @ is an alias to /src
import DeveloperHero from '@/components/DeveloperHero.vue'

export default {
  name: 'Developer',
  components: {
    DeveloperHero
  }
}
</script>
