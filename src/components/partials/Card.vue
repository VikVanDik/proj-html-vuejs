<script>
import { store } from '../../data/store';
export default {
  name : 'Card',

  props : {
    matchObj : Object
  },

  data () {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="col-5 custom-card">
    <div class="d-flex align-items-center custom-card-top justify-content-around ">
      <img :src="`/img/${matchObj.teamHome}`" :alt="matchObj.teamHome" class="team">
      <img src="/img/verus-icon.png" alt="VS" class="versus">
      <img :src="`/img/${matchObj.teamAway}`" :alt="matchObj.teamAway" class="team">
    </div>
    <div class="custom-card-center">
      <h3 class="game font">{{ matchObj.game }}</h3>
      <div class="date">{{ matchObj.date }}</div>
    </div>
    <div class="custom-card-bottom d-flex justify-content-center">
      <div class="social d-flex">
        <img :src="`/img/icon/${matchObj.youtube.img}`" alt="Youtube">
        <div>{{matchObj.youtube.text}}</div>
      </div>
      <div class="social d-flex">
        <img src="/img/icon/twitch-icon.png" alt="Twitch">
        <div>{{matchObj.twitch.text}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../../scss/partials/variables' as *;
@use '../../scss/main.scss';

.social {
  color: $White;
  align-items: center;
  margin: 0 15px;
  padding: 20px 0;
}

.custom-card-top {
padding: 40px 0;
background-color: $DarkBlue;
width: 100%;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
}

.game {
  color: $White;
  padding-top: 30px;
}

.date {
  color: $TextGreen;
  padding-top: 20px;
  padding-bottom: 35px;
}

.custom-card-center {
  text-align: center;
  background-color: $Blue;
}

.custom-card-bottom {
  padding: 25px 0;
  background-color: $DarkBlue;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.team {
  width: 150px;
}

.versus {
height: 110px;
}

.custom-card {
  border: 1px solid $LightBlue;
  border-radius: 20px;
  margin: 15px 10px;
  padding: 0;
  width: 620px;
}

.font {
  font-family: $PrimaryFont;
  font-weight: 600;
}

</style>