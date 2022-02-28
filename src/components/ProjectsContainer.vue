<template>
  <section id="projects">
    <SectionHeader side='right' text='PROJECTS'/>
    <ProjectsCarousel />
  </section>
</template>

<script>

import SectionHeader from '@/components/SectionHeader.vue'
import ProjectsCarousel from '@/components/ProjectsCarousel.vue'

export default {
  name: 'ProjectsContainer',
  components: {
    SectionHeader,
    ProjectsCarousel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

section#projects {
  background-color: #CFAEB5;
  height: 100vh;
}

</style>
