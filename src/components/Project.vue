<template>
  <div class="project">
    <img :src="image">
    {{name}}
  </div>
</template>

<script>

export default {
  name: 'Project',
  components: {
  },
  props: ['name', 'link', 'image']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.project{
  background: #24292E;
  height: 100%;
}

img {
  width: 100%;
}

</style>
