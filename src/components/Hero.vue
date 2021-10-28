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
                    <transition name="fade" mode="out-in">
                        <h3 key="dev" v-if="$route.name=='Developer'">I graduated the Flatiron Software Engineering Bootcamp in 2021 and have been developing ever since. With a strong background in web analytics, I’ve always got the end user in mind.</h3>
                        <h3 key="mar" v-else-if="$route.name=='Marketer'">With almost a decade of experience, I’ve learned the ins and outs of technical marketing. I can help with anything from pixel deployment to custom analytics solutions.</h3>
                        <h3 key="cel" v-else-if="$route.name=='Cellist'">I’ve played the cello for over 20 years. Its my passion and has helped shape my whole life. I’m currently performing with the Greenwich Village Orchestra.</h3>
                    </transition>
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

h3 {
    color: #ffffff;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
