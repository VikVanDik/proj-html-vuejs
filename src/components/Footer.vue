<script>
export default {
  name : 'Footer'
}
</script>

<template>
  <footer>
    <div class="footer-top">
      <div class="container-custom">
        <div class="row pad">
          <div class="col-4">
            <img src="/img/logo.png" alt="Logo">
            <div class="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quam hic nam vero pariatur.</div>
            <div>
              <i class="fa-brands fa-youtube bord"></i>
              <i class="fa-brands fa-twitch bord"></i>
              <i class="fa-brands fa-facebook bord"></i>
              <i class="fa-brands fa-instagram bord"></i>
            </div>
          </div>
          <div class="col-2">
            <h3 class="title">Quick Links</h3>
            <ul>
              <li><a href="#">Games</a></li>
              <li><a href="#">Latest Tournament</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col-2">
            <h3 class="title">Help</h3>
            <ul>
              <li><a href="#">Faqs</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div class="col-2">
            <h3 class="title">Follow Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Youtube</a></li>
              <li><a href="#">Github</a></li>
            </ul>
          </div>
          <div class="col-2">
            <h3 class="title">Contact</h3>
            <ul>
              <li><a href="#">Games</a></li>
              <li><a href="#">Latest Tournament</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom d-flex justify-content-center align-items-center">
      <p class="copyright">Copyright © 2022 <span class="futio">FUTIO</span>. All rights reserved.</p>
    </div>
  </footer>
  
</template>

<style lang="scss" scoped>
@use '../scss/partials/variables' as *;
@use '../scss/main.scss';

.footer-top {
  height: 550px;
  background-color: $Blue;
  color: $White;
  .pad { 
    padding-top: 200px;
    .bord {
      border: 1px solid $LightBlue;
      padding: 10px;
      border-radius: 50%;
      margin-right: 10px;
      margin-top: 20px;
      color: $Grey;
    }
  }
}

.title {
  font-family: $PrimaryFont;
  font-size: 25px;
}

ul {
  list-style: none;
  color: $White;
  padding: 0;
  li {
    padding: 8px 0;
    a {
      text-decoration: none;
      color: $White;
    }
  }
}

.footer-bottom {
  height: 100px;
  background-color: $DarkBlue;
}

.copyright{
  color: $White;
  margin: 0;
}

.futio {
  color: $TextGreen;
}

</style>