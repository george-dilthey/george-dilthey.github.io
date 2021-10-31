<template>
  <transition appear name="slide-up">
    <div class="developer">
      <ProjectsContainer/>
    </div>
  </transition>
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

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 1s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(25%);
}

</style>
