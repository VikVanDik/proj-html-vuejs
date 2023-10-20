<script>
import SectionExplore from './components/SectionExplore.vue';
import SectionPlan from './components/SectionPlan.vue';

export default {
  name : 'App',

  components : {
    SectionExplore,
    SectionPlan
  }
}
</script>

<template>

  <div>
    <SectionExplore />
    <SectionPlan />
  </div>
  
</template>

<style lang="scss">

@use './scss/main.scss';


</style>
