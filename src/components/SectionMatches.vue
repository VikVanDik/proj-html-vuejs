<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';
export default {
  name : 'SectionMatches',

  data () {
    return {
      store
    }
  },

  components : {
    Card
  }
}
</script>

<template>
  <div class="section h-100 ">
    <div class="container-custom">
      <h3 class="text-center font title-mini">Trending Battle</h3>
      <h1 class="text-center font title">Keep Eyes & Manage Upcoming Battle</h1>
      <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque</p>
      <div class="row justify-content-center">
        <Card v-for="match in store.matches" :key="match.ID" :matchObj="match"/>
        
          <a href="#" class="button">VIEW ALL MATCHES <i class="fa-solid fa-angles-right"></i></a>
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../scss/partials/variables' as *;

.section {
  background-color: $SoDarkBlue;
  padding-bottom: 80px;
}

.font {
  font-family: $PrimaryFont;
  font-weight: 600;
}

.title-mini {
  color: $TextGreen;
  padding-top: 100px;
  font-size: 25px;
}

.title {
  color: $White;
  font-size: 55px;
  padding: 0 200px;
}

.info {
  color: $White;
  text-align: center;
  padding: 20px 300px;
}


  .button {
    width: 200px;
    padding: 15px;
    background-color: $ButtonsGreen;
    border-radius: 30px;
    color: $Black;
    font-weight: 600;
    text-decoration: none;
    outline: 1px solid $ButtonsGreen;
    outline-offset: 5px;
    margin-top: 50px;
  }

  .button:hover {
  background-color: $HoverGreen;
  outline: 1px solid $HoverGreen;
}


</style>