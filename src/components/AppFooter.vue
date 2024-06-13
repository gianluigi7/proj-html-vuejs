
<script>
export default{
    name: 'AppFooter',
}

</script>

<template>
<footer class="bg-black">
  <!--- 3 COL + 1 NEWSLETTER-->
  <section class="f-up ">

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 mt-5">

          <div class="logo-footer">
            <img src="../img/mobile-light-pet-logo@2x.webp" alt="">
          </div>

          <div class="mt-4">
            1234 Avada Avenue Avadaville
            info@your-company.com
            Call us: (1) 234 5678
          </div>

        </div>
        <div class="col-3 mt-5">

          <h3>
            Shop by brand
          </h3>
          
          <ul>
            <li class="mb-4">Bed</li>
            <li class="mb-4">Food</li>
            <li class="mb-4">Toys</li>
            <li class="mb-4">Trasport</li>
          </ul>
        </div>
        
        <div class="col-3 mt-5  ">
          <h3 >
            Useful Links
          </h3>
          
          <ul class="">
            <li class="mb-4">My Account</li>
            <li class="mb-4">Orders</li>
            <li class="mb-4">Checkout</li>
            <li class="mb-5" >Cart</li>
          </ul>
        </div>
        
        <div class="col-3 mt-5  rounded newsletter img-bg">
          <div class="container ">
            <div class="container">
              <h3 class="mt-4 mb-4">
                Subscribe to our newsletter
              </h3>
              <div class="mb-2">
                <input type="text" name="" id="" placeholder="Insert your email..." class="rounded-pill px-2 mb-3 py-3 w-100" >
              </div>
              
              <div>
                <button type="button" class="btn  rounded-pill mb-4 button-color text-white px-5 py-3 w-100">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-5">
    </div>
    
    <div class="col-12 mt-5 ">
      <ul class="d-flex flex-row justify-content-center  ">
        <router-link to="/" class=" nav-link custom-link me-4 f-mid ">Home</router-link>
        <router-link to="/about" class=" nav-link custom-link me-4 f-mid ">
          About
        </router-link>
        <li class="me-4 custom-link f-mid " >
          <a href="#">
            Blog
          </a>  
        </li>
        <router-link to="/contact" class=" nav-link custom-link me-4 f-mid ">
          Contact
        </router-link>
        <li class="me-4 custom-link f-mid ">
          <a href="#">
            Shop
          </a>
        </li>
      </ul>
    </div>
    
    <div class="col-12 text-center mt-5 ">
      <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-4 mb-4"  />
      <font-awesome-icon icon="fa-brands fa-x-twitter" class="me-4 mb-4" />
      <font-awesome-icon icon="fa-brands fa-square-instagram" class="me-4 mb-4"  />
      <font-awesome-icon icon="fa-brands fa-youtube" class="mb-4" /> 
    </div>
  </section>
  
  <section class=" f-down bg-black text-center p-4 ">
    <font-awesome-icon icon="fa-regular fa-copyright" /> Copyright 2012 - 2024 | Avada Website Builder by ThemeFusion | All Rights Reserved | Powered by Boolean <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" />

  </section>
</footer>
  

  
  
    <!-- IMPORTO ROUTER SU SINGOLO A-HREF -->

  </template>

<style scoped lang="scss">

@import '../assets/scss/partials/_variables.scss';

.newsletter{
  background-color: $newsletter;
}
.img-bg{
  background-image: url(/src/img/bg-transparent-3.png);
}
.f-up {
  background-color: $main-color;
  color: white;
}

.f-down{
  color: white;
}

.logo-footer img{
  width: 100%;
}

.button-color{
  background-color: $button-h4-icon-color;
}

.button-color:hover{
  background-color: $button-bg-hover;
}

.custom-link { 
  letter-spacing: .15em;
  transform: scale(1);
  transition: all .3s ease-in-out;
}

.f-mid{
  color: lightgray;
}

.f-mid:hover{
    color: white;
    transform: scale(1.1);
  
  }

  .f-mid a{
    text-decoration: none;
    color: lightgray;
  }
  
</style>