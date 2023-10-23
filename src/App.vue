<script>
import SectionExplore from './components/SectionExplore.vue';
import SectionPlan from './components/SectionPlan.vue';
import SectionMatches from './components/SectionMatches.vue';
import SectionArticles from './components/SectionArticles.vue';
import SectionFeedback from './components/SectionFeedback.vue';
import SectionStream from './components/SectionStream.vue';
import Slider from './components/partials/Slider.vue';
import Facts from './components/Facts.vue';
import Footer from './components/Footer.vue';

export default {
  name : 'App',

  components : {
    SectionExplore,
    SectionPlan,
    SectionMatches,
    SectionArticles,
    SectionFeedback,
    SectionStream,
    Slider,
    Footer,
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
    <SectionStream /> 
    <SectionFeedback />
    <SectionArticles />
    <Footer />
  </div>
  
</template>

<style lang="scss">

@use './scss/main.scss';


</style>
