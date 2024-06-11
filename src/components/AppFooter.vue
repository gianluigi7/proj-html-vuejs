
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
          Shop by brand
        </h3>
        <ul>
          <li class="mb-4">My Account</li>
          <li class="mb-4">Orders</li>
          <li class="mb-4">Checkout</li>
          <li >Cart</li>
        </ul>
      </div>
      <div class="col-3 mt-5  rounded newsletter">
        <div class="container img-bg">
          <h3>
            Subscribe to our newsletter
          </h3>
          <div class="mb-2">
            <input type="text" name="" id="" placeholder="Insert your email..." class="rounded-pill p-2" >
          </div>

          <div>
            <button type="button" class="btn btn-success rounded-pill p-2 px-5 mb-2">Success</button>
          </div>
          
          
        </div>
      </div>
    </div>
    <hr>
  </div>
  <div class="col-12 ">
    <ul class="d-flex flex-row justify-content-center ">
      <li class="me-4 mb-3">Home</li>
      <li class="me-4">About</li>
      <li class="me-4">Blog</li>
      <li class="me-4">Contact</li>
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
      Copyright 2012 - 2024 | Avada Website Builder by ThemeFusion | All Rights Reserved | Powered by Boolean

    </section>
  </footer>
  

  
  
    <!-- IMPORTO ROUTER SU SINGOLO A-HREF -->

  </template>

<style scoped>

.newsletter{
  background-color: #273F29;
}
.img-bg{
  background-image: url(../img/);
}
.f-up {
  background-color: #1E3120;
  color: white;
}

.f-down{
  color: white;
}

</style>