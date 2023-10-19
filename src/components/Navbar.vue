<script>

export default {
name : 'Navbar',

components : {
}

}
</script>


<template>

  <div class="container-custom d-flex head">
    <div class="py-3 left me-auto">
      <img src="/img/logo.png" alt="Logo" class="logo">
    </div>

    <nav>
      <ul class="nav">
        <li><a href="#" class="link mx-2">Home</a></li>
        <li><a href="#" class="link mx-2">Games <i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#" class="link mx-2">Shop <i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#" class="link mx-2">Pages <i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#" class="link mx-2">Blog <i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#" class="link mx-2">Contact</a></li>
      </ul>
    </nav>

    <div class="right d-flex align-items-center">
      <i class="fa-solid fa-cart-shopping cart mx-3"><div class="cart-num">03</div></i>
      <div class="border-button">
        <a href="#" class="button">LIVE STREAMING</a>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

.right {
  margin-left: 150px;
}

.logo {
  width: 100px;
}
.head {
  align-items: center;
  height: 100px;
}

.nav {
  list-style: none;
  color: $White;
  margin-left: 150px;
  min-width: 420px;
}

.link {
  color: $Grey;
  text-decoration: none;
  font-size: 15px;
}

.cart {
  color: $White;
  position: relative;
}

.cart-num {
  position: absolute;
  right: -10px;
  top: -10px;
  background-color: $ButtonsGreen;
  border-radius: 50%;
  font-size: 10px;
  color: $Black;
  padding: 3px;
}

.button {
  padding: 15px;
  background-color: $ButtonsGreen;
  border-radius: 30px;
  color: $Black;
  text-decoration: none;

}

.border-button {
  border-radius: 40px;
  padding: 18px 6px;
  border: 1px solid $ButtonsGreen;
  min-width: 165px;
}
</style>