<template>
  <div class="marketer">
    <ResumeContainer/>
  </div>
</template>

<script>
import ResumeContainer from '@/components/ResumeContainer.vue'

export default {
  name: 'Marketer',
  components: {
    ResumeContainer
  }
}
</script>
<style scoped>

.marketer {
  margin-top: -7vh
}

</style>
