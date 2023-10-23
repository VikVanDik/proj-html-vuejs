<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { store } from '../../data/store';
import "swiper/css";
export default {
  name : 'Slider',

  data () {
    return {
      store
    }
  },

  components :{
    Swiper,
    SwiperSlide
  }
}
</script>

<template>
  <Swiper
  :slides-per-view="3"
  :space-between="5">
    <SwiperSlide 
    v-for="feedback in store.feedbacks" 
    :key="feedback.ID">
      <div class="card-feedback">
        <div class="feedback">
        <i 
        v-for="i in 5" 
        :key="i" 
        class="fa-star stars"
        :class="(i <= feedback.vote) ? 'fa-solid' : 'fa-regular'"></i>
        <div class="text">"{{ feedback.text }}"</div>
        </div>
        <div class="profile d-flex">
          <img :src="`img/${feedback.pic}`" alt="ProPic">
          <div class="person">
            <span class="name">{{ feedback.name }}</span>
            <span class="surname">{{ feedback.surname }}</span>
            <div class="country">{{ feedback.country }}</div>
          </div>
        </div>
        
      </div>
    </SwiperSlide>
  </Swiper>
  
</template>

<style lang="scss" scoped>
@use '../../scss/partials/variables' as *;

.card-feedback {
  background-color: $Blue;
  height: 280px;
  width: 400px;
  border-radius: 20px;
  .feedback {
    padding: 30px;
    .stars {
      padding-bottom: 20px;
    }
    i {
      color: $Yellow;
    }
    .text {
      color: $White;
      font-size: 19px;
      font-weight: 600;
    }
  }
  .person {
    margin-left: 20px;
    .name,
    .surname {
      color: $White;
      margin-right: 10px;
      font-family: $PrimaryFont;
      font-weight: 600;
    }
    .country {
      color: $TextGreen;
      padding-top: 5px;
    }
  }
}

img {
  height: 35px;
  width: 35px;
  margin-left: 20px;
  margin-top: 10px;
}



</style>