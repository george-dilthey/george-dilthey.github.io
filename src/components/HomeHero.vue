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
                    <div class="nav-text">
                        <h2><router-link to="/developer">DEVELOPER</router-link></h2>
                        <h2><a href="#">MARKETER</a></h2>
                        <h2><a href="#">CELLIST</a></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHero'
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

h2 a {
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    font-size: 4rem;
    padding: 0px;
    margin: 0px;
    line-height: 1;
    text-decoration: none;
}

h2 a:hover {
    color: #aec6cf !important;

}

</style>
