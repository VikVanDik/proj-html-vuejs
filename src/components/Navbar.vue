<script>

export default {
name : 'Navbar',

data() {
  return {
    isActive : false
  }
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
        <li @mouseenter="this.isActive=false"><a href="#" class="link mx-2">Home</a></li>
        <li class="drop-active" @mouseenter="this.isActive=true" @mouseleave="this.isActive=false"><a href="#" class="link mx-2">Games <i class="fa-solid fa-chevron-down"></i></a></li>
        <div
        class="dropdown" 
        :class="(isActive === true) ? 'block' : ''"
        @mouseleave="this.isActive=false">
          <ul >
            <li><a href="#" class="drop-item">Games</a></li>
            <li><a href="#" class="drop-item">Games Details</a></li>
            <li><a href="#" class="drop-item">Match Details</a></li>
          </ul>
        </div>
        <li><a href="#" class="link mx-2">Shop <i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#" class="link mx-2">Pages <i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#" class="link mx-2">Blog <i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#" class="link mx-2">Contact</a></li>
      </ul>
    </nav>

    <div class="right d-flex align-items-center">
      <i class="fa-solid fa-cart-shopping cart mx-3"><div class="cart-num">03</div></i>
        <a href="#" class="button">LIVE STREAMING</a>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../scss/partials/variables' as *;

.dropdown {
  display: none;
  position: absolute;
  top: 70px;
  right: 690px;
  ul {
    list-style: none;
    li{
      background-color: $Blue;
      padding: 10px 15px;
      a{
        text-decoration: none;
        color: $White;
        &:hover {
          color: $TextGreen;
        }
      }
    }
  }
}


.right {
  margin-left: 150px;
}

.logo {
  width: 130px;
}
.head {
  align-items: center;
  height: 100px;
  position: relative;
  z-index: 99999;
}

.nav {
  list-style: none;
  color: $White;
  margin-left: 150px;
  min-width: 420px;
  font-family: $PrimaryFont;
}

.link {
  color: $Grey;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
}

.block {
  display: block;
}

.link:hover {
  color: $TextGreen;
}

.drop-active:hover + .dropdown {
  display: block;
}

.cart {
  color: $White;
  position: relative;
  font-size: 19px;
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
  font-weight: 600;
  outline: 1px solid $ButtonsGreen;
  outline-offset: 5px;
  margin-left: 5px;
  &:hover {
    background-color: $HoverGreen;
    outline: 1px solid $HoverGreen;
  }
}

</style>