<template>
    <div class="d-flex align-items-center min-vh-100 hero">
        <div class="container-fluid">
            <div class="row hero-row d-flex">
                <div class="col hero-greeting-col d-flex align-items-center">
                    <div class="nav-text">
                        <HeroNav/>
                    </div>
                </div>
                <div class="col hero-nav d-flex align-items-center">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeroNav from '@/components/HeroNav.vue'

export default {
  name: 'Hero',
  components: { HeroNav }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hero {
    background: #24292E;
    height: 100%;
}

.hero-row {
    border-right-style: solid;
    border-right-color: #AEC6CF;
    border-right-width: thin;
    height: 30em;
}

.hero-greeting-col {
    border-right: 1px solid #AEC6CF;
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

h2 a {
    color: #414952;
    font-size: 4rem;
    padding: 0px;
    margin: 0px;
    line-height: 1;
    text-decoration: none;
}

h2 a:hover {
    color: #aec6cf !important;

}

h2 .router-link-active {
    color: #ffffff;

}

</style>
