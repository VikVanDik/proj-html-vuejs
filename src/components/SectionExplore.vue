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
        <h1>Future Of Esports</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam consequatur omnis eos atque asperiores</p>
        <div class="buttons d-flex align-items-center">          
          <a href="#" class="button">EXPLORE GAMES  <i class="fa-solid fa-angles-right"></i></a>                
          <a href="#" class="round d-flex"><i class="fa-solid fa-play"></i></a>         
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
  height: 900px;
  background-image: url('/img/index-banner-bg.png');
  background-size: cover;
  z-index: 0;
  position: relative;
}

.controller {
  position: absolute;
  z-index: 10;
  left: 20px;
  bottom: 100px;
  width: 450px;
}

.games {
  padding-top: 200px;
  max-width: 500px;
  position: relative;
  z-index: 15;
  p {
    color: $White;
    font-size: 20px;
  }
  h1 {
  font-size: 80px;
  color: $White;
  font-family: $PrimaryFont;
  font-weight: 600;
  }
  h3 {
    color: $TextGreen;
    font-family: $PrimaryFont;
    font-weight: 600;
  }
}

.buttons {
  height: 100px;
}

  .button {
    width: 180px;
    padding: 15px;
    background-color: $ButtonsGreen;
    border-radius: 30px;
    color: $Black;
    font-weight: 600;
    text-decoration: none;
    outline: 1px solid $ButtonsGreen;
    outline-offset: 5px;
  }


.button:hover {
  background-color: $HoverGreen;
  outline: 1px solid $HoverGreen;
}

  .round {
    margin-left: 20px;
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
    outline: 1px solid $ButtonsGreen;
    outline-offset: 8px;
  }


.soldier {
  width: 1000px;
  position: absolute;
  right: 100px;
  top: 0;
}

</style>