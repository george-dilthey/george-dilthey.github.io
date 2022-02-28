<template>
  <Carousel>
    <Slide v-for="project in projects" :key="project">
      <div class="carousel__item">{{ project.name }}</div>
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

export default ({
  name: 'ProjectCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data: () => ({
    projects: [
      {
        name: 'Congress Checker',
        link: 'https://congresschecker.herokuapp.com/'
      },
      {
        name: 'Insights for YNAB',
        link: ''
      }
    ]
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
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
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
