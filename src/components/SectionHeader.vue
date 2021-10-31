<template>
    <div class="section-header" :class="this.side">
      <h1>{{text}}</h1>
    </div>
</template>

<script>

export default {
  name: 'ProjectsContainer',
  props: ['side', 'text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.right {
  display: flex;
  flex-direction: row-reverse;
  margin-right: 10vh;
}

.left {
  display: flex;
  margin-left: 10vh;
}

h1 {
  font-size: 8vw;
  font-weight: bold;
  color: #ffffff;
  margin-top: -3.7%

}

</style>
