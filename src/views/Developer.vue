<template>
  <div class="developer">
    <ProjectsContainer/>
  </div>
</template>

<script>
import ProjectsContainer from '@/components/ProjectsContainer.vue'

export default {
  name: 'Developer',
  components: {
    ProjectsContainer
  }
}
</script>
<style scoped>

.developer {
  margin-top: -7vh
}

</style>
