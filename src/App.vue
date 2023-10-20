<script>
import SectionExplore from './components/SectionExplore.vue';
import SectionPlan from './components/SectionPlan.vue';
import SectionMatches from './components/SectionMatches.vue';
import Slider from './components/partials/Slider.vue'
import Facts from './components/Facts.vue';

export default {
  name : 'App',

  components : {
    SectionExplore,
    SectionPlan,
    SectionMatches,
    Slider,
    Facts
  }
}
</script>

<template>

  <div>
    <SectionExplore />
    <SectionPlan />
    <SectionMatches />
    <Facts />
  </div>
  
</template>

<style lang="scss">

@use './scss/main.scss';


</style>
