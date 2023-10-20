<script>

import { store } from '../data/store';

export default {
  name : 'Facts',
  data () {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="height">
    <h1 class="title">Futio Quick Facts</h1>
    <div class="container-custom d-flex justify-content-between fact-container">
      <div class="fact d-flex" v-for="fact in store.facts" :key="fact.ID">
        <div class="data"> {{ fact.data }}</div>
        <div class="text"> {{ fact.text }}</div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

@use '../scss/main.scss';
@use '../scss/partials/variables' as *;

.text {
  color: $TextGreen;
}

.data {
  color: $White;
  font-family: $PrimaryFont;
  font-size: 50px;
  font-weight: 600;
}

.title{
  text-align: center;
  color: $White;
  font-size: 50px;
  font-family: $PrimaryFont;
  font-weight: 600;
  margin-bottom: 50px
}
.height {
  height: 400px;
  background-color: $Black;
}

.fact-container {
  height: 200px;
}

.fact {
  width: 24%;
  height: 190px;
  border: 1px solid rgb(27, 27, 27);
  border-radius: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>