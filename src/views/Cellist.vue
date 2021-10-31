<template>
  <div class="cellist">
    <RecordingsContainer/>
  </div>
</template>

<script>
import RecordingsContainer from '@/components/RecordingsContainer.vue'

export default {
  name: 'Cellist',
  components: {
    RecordingsContainer
  }
}
</script>
<style scoped>

.cellist {
  margin-top: -7vh
}

</style>
