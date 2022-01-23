<template>
    <div id="hero" class="d-flex align-items-center hero">
        <HeroLine :key="$route.name"/>
        <div class="container">
            <div class="row">
                <div class="col d-flex align-items-center intro">
                    <div class="w-100">
                        <transition appear name="fade" mode="out-in" >
                            <h1 v-if="CheckRouteName($route.name, `Home`)">Hey, I'm George.</h1>
                        </transition>
                    </div>
                </div>
                <div class=" show-mobile">
                    <HeroNav  />
                </div>
                <div class="col d-flex align-items-center">
                    <div class=" hide-mobile">
                        <HeroNav  />
                    </div>
                    <div class="short-desc">
                        <transition appear name="fade" mode="out-in">
                            <h3 v-if="CheckRouteName($route.name, `Developer`)">I graduated the Flatiron Software Engineering Bootcamp in 2021 and have been developing ever since. With a strong background in web analytics, I’ve always got the end user in mind.</h3>
                            <h3 v-else-if="CheckRouteName($route.name, `Marketer`)">With almost a decade of experience, I’ve learned the ins and outs of technical marketing. I can help with anything from pixel deployment to custom analytics solutions.</h3>
                            <h3 v-else-if="CheckRouteName($route.name, `Cellist`)">I’ve played the cello for over 20 years. Its my passion and has helped shape my whole life. I’m currently performing with the Greenwich Village Orchestra.</h3>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeroNav from '@/components/HeroNav.vue'
import HeroLine from '@/components/HeroLine.vue'

export default {
  name: 'Hero',
  components: { HeroNav, HeroLine },
  methods: {
    CheckRouteName: function (p, a) {
      console.log(this.$data.routeName)
      return (a.includes(p))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hero {
    background: #24292E;
    height: 100vh;
}

.row {
    height: 50%;
}

.short-desc {
    max-width: 100%;
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
    padding-left: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* mobile */
@media only screen and (max-width: 766px) {
    h1 {
        text-align: center;
    }

    .intro {
        margin-top: -55%;
    }

    .short-desc {
        text-align: center;
        padding-left: 10px;
        padding-right: 10px;
    }
    h3{
        padding-left: 0px;
    }
}

/* desktop */
@media only screen and (min-width: 767px) {
    .short-desc {
        position: absolute;
    }

}

</style>
