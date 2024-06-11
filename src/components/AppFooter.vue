
<script>
export default{
    name: 'AppFooter',
}

</script>

<template>
  <footer class="bg-black">
    <section class="f-up ">
      <div class="container">
    <div class="row justify-content-center">
      <div class="col-3 mt-5">
        <div>
          <img src="../img/LOGO.jpg.jpg" alt="">
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
              <input type="text" name="" id="" placeholder="Insert your email..." class="rounded-pill px-4 mb-3 py-3 w-100" >
            </div>
            
            <div>
              <button type="button" class="btn  rounded-pill mb-2 button-color px-5 py-3 w-100">Subscribe</button>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </div>
    <hr>
  </div>
  <div class="col-12 ">
    <ul class="d-flex flex-row justify-content-center ">
      <router-link to="/" class=" nav-link custom-link me-4">Home</router-link>
      <router-link to="/about" class=" nav-link custom-link me-4">About</router-link>
      <li class="me-4">Blog</li>
      <router-link to="/contact" class=" nav-link custom-link me-4">Contact</router-link>
      <li class="me-4">Shop</li>
    </ul>

  </div>
  <div class="col-12 text-center">
    <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-4 mb-4"  />
    <font-awesome-icon icon="fa-brands fa-x-twitter" class="me-4 mb-4" />
    <font-awesome-icon icon="fa-brands fa-square-instagram" class="me-4 mb-4"  />
    <font-awesome-icon icon="fa-brands fa-youtube" class="mb-4" />
    
  </div>


    </section>
    <section class=" f-down bg-black ">
      <font-awesome-icon icon="fa-regular fa-copyright" /> Copyright 2012 - 2024 | Avada Website Builder by ThemeFusion | All Rights Reserved | Powered by Boolean

    </section>
  </footer>
  

  
  
    <!-- IMPORTO ROUTER SU SINGOLO A-HREF -->

  </template>

<style scoped>

.newsletter{
  background-color: #273F29;
}
.img-bg{
  background-image: url(/src/img/bg-transparent-3.png);
}
.f-up {
  background-color: #1E3120;
  color: white;
}

.f-down{
  color: white;
}

.button-color{
  background-color: #3D6F42;
}

.custom-link:hover{
    color: #000;
  
  }

</style>