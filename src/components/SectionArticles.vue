<script>
import { store } from '../data/store';

export default {
  name : 'SectionArticles',

  data () {
    return {
      store,
    }
  },

  computed : {
    getArray (){
      return store.articles.filter( article => article.ID != '1' )
    }
  }
}

</script>

<template>
  <section class="section">
    <div class="container-custom-mini">
      <h4>Latest News</h4>
      <h1>Stay Updated With Our Latest News Articles</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error maiores dolor sapiente suscipit non debitis animi, corrupti perferendis quidem facere in nulla voluptas cum, temporibus adipisci.</p>
    </div>
    <div class="container-custom d-flex">
      <div class="half-container">
        <div class="card-main-art">
          
          <img :src="`/img/${store.articles[0].img}.png`" alt="Item">
          
          <div class="pos-i">
            <span class="info"><i class="fa-regular fa-clock"></i> {{ store.articles[0].time }} Min</span>
            <span class="info"><i class="fa-regular fa-eye"></i> {{ store.articles[0].visual }}</span>
            <span class="info"><i class="fa-regular fa-calendar"></i> {{ store.articles[0].date }}</span>
          </div>
          <h1 class="pos-t">
            {{ store.articles[0].text }}
          </h1>
        </div>
      </div>
      <div class="half-container">
        <div class="d-flex flex-column">
          <div class="card-side-art d-flex"
          v-for="article in getArray" :key="article.ID">
            <img :src="`/img/${article.img}.png`" alt="Item" class="img">
            <div class="info-side"> 
            <span class="info-s"><i class="fa-regular fa-clock"></i> {{ article.time }} Min</span>
            <span class="info-s"><i class="fa-regular fa-eye"></i> {{ article.visual }}</span>
            <span class="info-s"><i class="fa-regular fa-calendar"></i> {{ article.date }}</span>
            </div>
            <div class="title-s">
              {{ article.text }}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

@use '../scss/partials/variables' as *;

.container-custom-mini {
  text-align: center;
  h4 {
    color: $TextGreen;
    font-family: $PrimaryFont;
  }
  h1 {
    color: $White;
    font-family: $PrimaryFont;
    font-size: 54px;
    font-weight: 600;
  }
  p{
    color: $White;
  }
}

.section {
  background-color: $Black;
  height: 1050px
}
.half-container {
  width: 50%;
  height: 550px;
  margin: 20px;
}

.card-main-art {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: $DarkBlue;
  position: relative;
  .pos-i {
    position: absolute;
    top: 405px;
    left: 30px;
  }
  .info {
    color: $TextGreen;
    font-size: 20px;
    font-weight: 100;
    margin-right: 30px;
  }
  .pos-t {
    position: absolute;
    top: 445px;
    left: 30px;
  }
  img {
    height: 385px;
  }
  h1 {
    color: $White;
    font-family: $PrimaryFont;
    font-size: 32px;
  }
}

.card-side-art {
background-color: $DarkBlue;
border-radius: 20px;
height: 160px;
position: relative;
.info-side {
  color: $TextGreen;
  font-size: 20px;
  font-weight: 100;
  margin-right: 30px;
  position: absolute;
  left: 220px;
  top: 20px;
  .info-s {
    color: $TextGreen;
    font-size: 17px;
    font-weight: 100;
    margin-right: 30px;
  }
  }
  .img {
  height: 158px;
  position: absolute;
  left: 0;
  border-radius: 20px;
}
.title-s {
  color: $White;
  font-family: $PrimaryFont;
  font-size: 25px;
  position: absolute;
  left: 220px;
  top: 60px;
}
}

.card-side-art:nth-child(2) {
  margin: 30px 0;
}


</style>