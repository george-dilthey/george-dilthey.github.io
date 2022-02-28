<template>
  <Carousel>
    <Slide v-for="project in projects" :key="project">
      <div class="carousel__item">
        <Project v-bind='project' />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import Project from '@/components/Project.vue'
import projectData from '@/assets/data/project-data.json'

export default ({
  name: 'ProjectCarousel',
  components: {
    Project,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data: () => ({
    projects: projectData
  })
})
</script>

<style>

section.carousel {
  margin: auto;
  width: 90%;
  height: 75vh;
}

.carousel__viewport {
  height: 100%;
}

.carousel__track {
  height: 100%;
}

.carousel__item {
  height: 100%;
  width: 100%;
}

.carousel__slide {
  padding: 10px;
  height: 100%;
}

ol {
  padding-left: 0px !important;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
