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
    <div class="container-custom d-flex">
      <div class="games">
        <h3>Game With Live Streaming</h3>
        <h1>Future of Esports</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam consequatur omnis eos atque asperiores accusantium?</p>
        <div class="buttons d-flex align-items-center">
          <div class="border-button">
          <a href="#" class="button">EXPLORE GAMES  <i class="fa-solid fa-angles-right"></i></a>
          </div>
          <div class="border-round">
            <a href="#" class="round d-flex"><i class="fa-solid fa-play"></i></a>
          </div>
        </div>
      </div>
      <img src="/img/index-banner-illus.png" alt="Soldier" class="soldier">
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../scss/main.scss';
@use '../scss/partials/variables' as *;

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
  p {
    color: $White;
  } 
  h1 {
  font-size: 80px;
  color: $White;
  line-height: 80px;
  }
  h3 {
    color: $TextGreen;
  }
}

.buttons {
  height: 100px;
}

.border-button {
  height: 65px;
  border-radius: 40px;
  padding: 18px 10px;
  border: 1px solid $ButtonsGreen;
  width: 190px;
  position: relative;
  .button {
    width: 180px;
    padding: 15px;
    background-color: $ButtonsGreen;
    border-radius: 30px;
    color: $Black;
    text-decoration: none;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
}

.border-round {
  margin-left: 20px;
  height: 80px;
  width: 80px;
  border: 1px solid $ButtonsGreen;
  border-radius: 50%;
  position: relative;
  .round {
    text-decoration: none;
    color: $ButtonsGreen;
    background-color: $White;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
}

.soldier {
  width: 800px;
  position: absolute;
  right: 200px;
  top: 0;
}

</style>