<script>

import Navbar from './Navbar.vue'

export default {
  name: "SectionExplore",

  components : {
    Navbar
  },

  data () {
    return {

    }
  }
}


</script>

<template>
  <div class="explore">
    <Navbar/>
    <img src="/img/game-controler.png" alt="Controller" class="controller">
    <div class="container-custom">
      <div class="games">
        <h3>Game With Live Streaming</h3>
        <h1>Future of Esports</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam consequatur omnis eos atque asperiores accusantium?</p>
        <div class="border-button">
        <a href="#" class="button">LIVE STREAMING</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../scss/main.scss';
@use '../scss/partials/variables' as *;

h1 {
  font-size: 80px;
  color: $White;
  line-height: 80px;
}

h3 {
  color: $TextGreen;
}

.explore {
  height: 700px;
  background-image: url('/img/index-banner-bg.png');
  background-size: cover;
  z-index: 0;
  position: relative;
}

.controller {
  position: absolute;
  z-index: 10;
  left: 20px;
  bottom: 70px;
  width: 400px;
}

.games {
  padding-top: 100px;
  max-width: 500px;
  position: relative;
  z-index: 15;
}

p {
  color: $White;
}


</style>