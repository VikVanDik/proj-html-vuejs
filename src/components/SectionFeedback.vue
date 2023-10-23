<script>
import { store } from '../data/store';
import Slider from './partials/Slider.vue';
export default {
  name : 'SectionFeedback',

  data () {
    return {
      store
    }
  },
  
  components : {
    Slider
  }
}
</script>

<template>
  <section>
    <div class="container-custom-mini">
      <h4>Futio Feedback</h4>
      <h1>What Our Gamers Say</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error maiores dolor sapiente suscipit non debitis animi, corrupti perferendis quidem facere in nulla voluptas cum</p>
    </div>

    <div class="container-custom">
      <Slider />
    </div>

    <div class="advertise">
      <img class="phone" src="/img/banner-item-obj1.png" alt="Phone">
      <div class="container-custom-mini">
        <h3>Make Offer</h3>
        <h1>Get 70% Offer Discount</h1>
        <button>Get Offers</button>
      </div>
      <img class="earphones" src="/img/banner-item-obj2.png" alt="Earphones">
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../scss/partials/variables.scss' as *;

section {
  background-color: $Black;
  height: 1250px;
}

section{
  .container-custom-mini {
    padding-top: 130px;
    text-align: center;
    h4 {
      color: $TextGreen;
      font-family: $PrimaryFont;
    }
    h3 {
      color: $White;
      font-family: $PrimaryFont;
    }
    h1 {
      color: $White;
      font-family: $PrimaryFont;
      font-size: 53px;
      font-weight: 600;
    }
    p{
      color: $White;
      padding-bottom: 20px;
    }
  }
}

.advertise {
  background-color: $AdGreen;
  height: 450px;
  width: 1600px;
  margin : 0 auto;
  border-radius: 20px;
  margin-top: 100px;
  background-image: url('/img/banner-item-bg.png');
  position: relative;
  overflow: hidden;
  .phone {
    position: absolute;
    top: 100px;
  }
  .earphones {
    position: absolute;
    right: 20px;
    bottom: 100px;
  }
  h4 {
    color: $White;
  }
  button {
    padding: 20px 80px;
    background-color: $OfferGreen;
    border: none;
    border-radius: 50px;
    margin-top: 20px;
    color: $White;
  }
}
</style>