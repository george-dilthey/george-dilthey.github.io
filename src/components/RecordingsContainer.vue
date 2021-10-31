<template>
    <section id="recordings">
      <SectionHeader side='right' text='RECORDINGS'/>
    </section>
</template>

<script>

import SectionHeader from '@/components/SectionHeader.vue'

export default {
  name: 'RecordingsContainer',
  components: {
    SectionHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

section#recordings {
  background-color: #CFAEB5;
  height: 100vh;
}

</style>
