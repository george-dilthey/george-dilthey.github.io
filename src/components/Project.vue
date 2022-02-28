<template>
  <div class="project">
    <div class=project-image>
      <img :src="image">
    </div>
    <div class="project-text">
      <h1>{{name}}</h1>
      <p>{{description}}</p>
      <div class="buttons">
        <a target="_blank" :href="github" class="button">Github</a>
        <a v-if="demo" target="_blank" :href="demo" class="button">Demo</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Project',
  components: {
  },
  props: ['name', 'image', 'description', 'github', 'demo']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.project{
  background: #24292E;
  height: 100%;
}

div.project-image {
  height: 50%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

div.project-text {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  color: white;
}

p {
  color:white;
}

.button {
  background-color: white;
  border: none;
  color: black;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin: 4px 5px;
  cursor: pointer;
}

</style>
