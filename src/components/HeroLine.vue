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

/* mobile */
@media only screen and (max-device-width: 766px) {
  .line {
    position: absolute;
    width: 75%;
    margin-left: 12.5%;
    border-bottom: 1px solid #AEC6CF;
    animation: line-anim 2s
  }

  @keyframes line-anim {
    0% { width: 75% }
    25% { width: 0% }
    100% { width: 75% }
  }

}

/* desktop */
@media only screen and (min-device-width: 767px) {
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
}

</style>
