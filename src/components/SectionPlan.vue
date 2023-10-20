<script>
export default {
name : 'SectionPlan',
}
</script>

<template>
  <div class="backg">
    <img src="/img/features-illus.png" alt="Features" class="features">

    <div class="plan">
      <div class="mini-title">The Ultimate Competitive Gaming Platform</div>
      <h1>Make Your Mark On The Battle Field</h1>
      <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, at. Sit, illo perspiciatis. Labore aspernatur adipisci et doloremque a modi.</div>
      <div class="d-flex align-items-center">
        <img src="/img/icon/features-icon-1.png" alt="Live" class="icon">
        <div>
          <h4>Live Streaming</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione exercitationem consequuntur magnam eligendi doloribus ipsam</p>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <img src="/img/icon/features-icon-2.png" alt="Cup" class="icon">
        <div>
          <h4>Great Tournaments</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione exercitationem consequuntur magnam eligendi doloribus ipsam</p>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <img src="/img/icon/features-icon-3.png" alt="News" class="icon">
        <div>
          <h4>Gaming News</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione exercitationem consequuntur magnam eligendi doloribus ipsam</p>
        </div>
      </div>
      <div class="border-button">
          <a href="#" class="button">PLAN NOW  <i class="fa-solid fa-angles-right"></i></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../scss/partials/variables' as *;
.backg {
background-color: $Black;
height: 1000px;
position: relative;
}

.features {
  position: absolute;
  left: -30px;
  top: 150px;
  width: 850px;
}

.plan {
  margin-left: 1000px;
  padding-top: 150px;
  width: 600px;
}

.mini-title{
  color: $TextGreen;
  font-size: 26px;
  padding-bottom: 10px;
}

h4 {
  color: $White;
  padding: 10px 0;
  font-size: 25px;
}

h1{
  color: $White;
  font-size: 60px;
}

.info {
  color: $White;
}

p {
  color: $White;
  font-weight: 700;
}

.icon {
  width: 80px;
  height: 80px;
  margin-right: 30px;
}

.border-button {
  height: 65px;
  border-radius: 40px;
  padding: 18px 10px;
  border: 1px solid $ButtonsGreen;
  width: 150px;
  position: relative;
  margin-top: 50px;
  .button {
    width: 135px;
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

</style>