<template>
    <section id="resume">
      <SectionHeader side='right' text='RESUME'/>
    </section>
</template>

<script>

import SectionHeader from '@/components/SectionHeader.vue'

export default {
  name: 'ResumeContainer',
  components: {
    SectionHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

section#resume {
  background-color: #CFAEB5;
  height: 100vh;
}

</style>
