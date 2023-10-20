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
  <Swiper>
    <SwiperSlide v-for="item in store.facts" :key="item.ID">
      <div>{{ item.text }}</div>
      <div>{{ item.data }}</div>
    </SwiperSlide>
  </Swiper>
  
</template>

<style>

</style>