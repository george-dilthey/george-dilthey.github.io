<template>
    <div class="d-flex align-items-center min-vh-100 hero">
        <div class="container-fluid">
            <div class="row hero-row d-flex">
                <div class="col hero-greeting-col d-flex align-items-center">
                    <div class="w-100 greeting-text">
                        <h1>Hey, I'm George.</h1>
                    </div>
                </div>
                <div class="col hero-nav d-flex align-items-center">
                    <HeroNav />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeroNav from '@/components/HeroNav.vue'

export default {
  name: 'HomeHero',
  components: {
    HeroNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hero {
    background: #24292E;
    height: 100%;
}

.hero-row {
    height: 30em;
}

.hero-greeting-col {
    border-right: 1px solid #AEC6CF;
}

.nav-text{
    margin-left: 3em;
}

.greeting-text{
    margin-right: 3em;
}

h1 {
    color: #CFAEB5;
    font-family: 'Lato', sans-serif;
    font-size: 4rem !important;
    font-weight: 100 !important;
    text-align: right;
}

</style>
