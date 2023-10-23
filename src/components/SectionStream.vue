<script>
export default {
  name : 'SectionStream'
}
</script>

<template>
  <section>
    <div class="container-custom-mini">
      <h4>Live Streaming</h4>
      <h1>Watch The Streams</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error maiores dolor sapiente suscipit non debitis animi, corrupti perferendis quidem facere in nulla voluptas cum</p>
    </div>
    <div class="live">
      <div class="HUD">
        <button class="signal"><i class="fa-solid fa-wifi"></i> Live</button>
        <div class="play d-flex flex-column align-items-center">
          <a href="#" class="round d-flex"><i class="fa-solid fa-play"></i></a>
          <h3>League Of Legends</h3>
        </div>
        <div class="info">
          <span class="num">356,599 <span class="text">Viewers</span></span>
          <span class="num">23,599 <span class="text">Likes</span></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
 @use '../scss/partials/variables' as *;

section {
  background-image: url('/img/live-streaming-bg.png');
  background-repeat: no-repeat;
  background-color: $Black;
  height: 1000px;
}

.container-custom-mini {
  padding-top: 130px;
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

.live {
  margin: 50px auto;
  width: 1100px;
  height: 600px;
  background-image: url('/img/stream-bg-3.png');
  background-repeat: no-repeat;
  background-size: 1100px 600px;
}

.HUD {
  background-image: linear-gradient(to bottom, rgba(255,0,0,0), $Blue);
  border-radius: 20px;
  height: 100%;
  width: 100%;
  .signal {
    height: 40px;
    width: 110px;
    background-color: $Orange;
    box-shadow: none;
    border: none;
    border-radius: 40px;
    margin-left: 950px;
    margin-top: 50px;
  }
}

.play {
  margin-top: 150px;
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
    outline: 1px solid $ButtonsGreen;
    outline-offset: 8px;
  }
  h3 {
    font-family: $PrimaryFont;
    color: $White;
    margin-top: 10px;
  }
}

.info {
  margin-top: 180px;
  .num {
    color: $TextGreen;
    margin-left: 40px;
    .text {
      color: $White;
    }
  }
}
</style>