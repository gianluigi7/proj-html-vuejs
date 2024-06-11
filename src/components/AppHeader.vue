
<script>
export default{
    name: 'AppHeader',
}

</script>

<template>
  <div class="container">
       <div class="row">
     
        <!-- LOGO -->
        <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
        <a class="navbar-brand col-3" href="#">
          <img src="../img/LOGO.jpg.jpg" 
          alt="logo" 
          style="height: 35px;">
        </a>
        <!-- INPUT SEARCH + ICONA LENTE -->
      <div class="input-group my-2 my-lg-0 position-relative p-3 w-25">
        <input type="text" 
        class="form-control rounded-pill border-0" 
        placeholder="Search..." 
        aria-label="Search" 
        style="padding-left: 50px; 
        padding-top: 5px; 
        padding-bottom: 5px; 
        background-color: #f3f4f3;">
      <button 
      class="btn position-absolute border-0 bg-transparent" 
      style="left: 15px; top: 50%; transform: translateY(-50%);">
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
    </div>
    <!-- QUESTION CALL-US -->
    <div class="d-flex justify-content-end align-items-center gap-3 col-3">
          <font-awesome-icon icon="phone-alt"></font-awesome-icon>
          <div class="d-flex align-items-center gap-2">
            <strong>Questions? </strong>
            Call us : 1.800.123.4567
          </div>
        </div>
        <!-- aggiungo icone alla fine della navbar -->
        <div class="d-flex justify-content-end align-items-center gap-3 col-3 ">
          <font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon>
          <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>

        </div>
  </nav>
    </div>
    </div>
    <!-- NAVBAR CON LINK DELLA PAGINA E ROUTER LINK -->
    <div class="container-fluid">
      
      <div class="row">
       
        <div class="navbar-nav d-flex justify-content-center align-items-center border-top fw-light p-2">
          
          <div class="d-flex gap-4">
          <!-- HOME -->
            <router-link to="/" class="nav-link custom-link text-muted">Home</router-link>
          <!-- ABOUT -->
          <router-link to="/about" class="nav-link custom-link text-muted">About</router-link>
          <!-- CONTACT -->
          <router-link to="/contact" class="nav-link custom-link text-muted">Contact</router-link>
 
        </div>
         
      </div>

    </div>

  </div>
  <!-- BANNER CON SFONDO PERSONALIZZATO VERDE E 3 COL DI TESTO -->
  <div id="banner-header" class="container-fluid py-4">
    <div class="row">
      <div class="container">
        <div class="row">
          <!-- ICONA MAPPA INTERNATIONAL SHIPPING -->
          <div class="col-4 d-flex justify-content-end align-items-center gap-2">
            <font-awesome-icon icon="globe" class="text-white"></font-awesome-icon>
            <span class="text-center small">
              <strong class="text-white">International</strong> Shipping Service</span>
          </div>
        

          <div class="col-4 d-flex justify-content-center align-items-center">
            <span class="text-center text-white small">Free shipping on orders over $100</span>
          </div>

          <div class="col-4 d-flex justify-content-start align-items-center">
            <span class="text-center text-white small">Sign up for our newsletter</span>
          </div>
        </div>


      </div>
   
    
    
    </div>
  </div>
 </template>
 <style scoped lang="scss">
 
 
 
 
 /* IMPORTO MAIN COLOR FILE COMMON.SCSS */
  @import '../assets/scss/partials/_variables.scss';
 
 
 /* ROUTER LINK STYLE */
 .custom-link {
  transition: all 0.3s;
 
 }
 .custom-link:hover{
  
  }
  /* BANNER-HEADER STYLE */
  #banner-header {
    /* uso bacground color in common.scss bg-main */
    background-color: $main-color;
    background-image: url('../img/bg-transparent-3.png'); 
  }
 </style>