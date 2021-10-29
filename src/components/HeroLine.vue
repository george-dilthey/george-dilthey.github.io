<template>
    <div class="line"></div>
</template>

<script>
export default {
  name: 'HeroLine'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.line {
    position: absolute;
    width: 50%;
    height: 75%;
    border-right: 1px solid #AEC6CF;
    animation: line-anim 2s
}

@keyframes line-anim {
  0% { height: 75% }
  25% { height: 0% }
  100% { height: 75% }
}

</style>
