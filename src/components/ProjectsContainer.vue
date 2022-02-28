<template>
  <section id="projects">
    <SectionHeader side='right' text='PROJECTS'/>
  </section>
</template>

<script>

import SectionHeader from '@/components/SectionHeader.vue'

export default {
  name: 'ProjectsContainer',
  components: {
    SectionHeader
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
