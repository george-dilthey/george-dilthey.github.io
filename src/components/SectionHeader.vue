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
  margin-right: 8vw;
}

.left {
  display: flex;
  margin-left: 8vw;
}

h1 {
  font-size: 12vw;
  font-weight: bold;
  color: #ffffff;
  margin-top: -5.3vw

}

</style>
