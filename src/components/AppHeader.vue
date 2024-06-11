
<script>
export default{
    name: 'AppHeader',
    // AGGIUNGO METODO PER VISIBILITà LOGO//
    data() {
        return {
            isSticky: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            this. isSticky = window.scrollY > navbarHeight;
        },
},
};

</script>

<template>
  <div class="container" id="about-content">
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
    <div class="d-flex justify-content-end align-items-center gap-3 col-4">
     
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
   <div class="container-fluid sticky-top bg-white" id="about-content">
  <div class="row">
    <div class="navbar-nav d-flex justify-content-between align-items-center border-top fw-light p-2">
      <div class="d-flex justify-content-center gap-4 flex-grow-1">
      <img class="logo-sticky position-absolute start-0 ps-3" v-show="isSticky" src="../img/LogoNoscritta.png" alt="logo" srcset="">
        <!-- HOME -->
        <router-link to="/" class="nav-link custom-link text-secondary">Home</router-link>
        <!-- ABOUT -->
        <router-link to="/about" class="nav-link custom-link text-secondary">About</router-link>
        <!-- CONTACT -->
        <router-link to="/contact" class="nav-link custom-link text-secondary">Contact</router-link>
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
              <strong class="text-white">International <span class="text-secondary">Shipping Service</span></strong> </span>
          </div>
        
<!-- ICONA OROLOGIO SEE HOUR STORE  -->
          <div class="col-4 d-flex justify-content-center align-items-center gap-2">
            <font-awesome-icon icon="clock" class="text-white"></font-awesome-icon>
            <span class="text-center small">
              <strong class="text-secondary">
                See our
                <span class="text-white">store hours and</span>
                  <span>services</span>
               
              </strong> 
            </span>
          </div>
       
          <!-- ICONA SPUNTA BIANCA CON  BEST DEALS-->
          <div class="col-4 d-flex justify-content-start align-items-center gap-2">
            <font-awesome-icon icon="check" class="text-white"></font-awesome-icon>
            <span class="text-center small">
              <span class="text-white">We price match to give tou the  
                <strong>best deals</strong>
              </span> 
            </span>
          </div>
         
        </div>


      </div>
   
    
    
    </div>
  </div>
 </template>
 <style scoped lang="scss">
 
 
 
 
 
 /* IMPORTO MAIN COLOR FILE COMMON.SCSS */
  @import '../assets/scss/partials/_variables.scss';
  

  
  @keyframes fadeIn {
    0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#about-content {
  animation: fadeIn 2s;
  letter-spacing: .15em;
}

.custom-link {
  margin: 0 auto; 
  letter-spacing: .15em;
  transform: scale(1);
  transition: all .3s ease-in-out;
}
 
 
 /* ROUTER LINK STYLE */

  .custom-link:hover {
    color: black !important;
    transform: scale(1.1);
  }

  /* BANNER-HEADER STYLE */
  #banner-header {
    /* uso bacground color in common.scss bg-main */
    background-color: $main-color;
    background-image: url('../img/bg-transparent-3.png'); 
    letter-spacing: .15em;
  }

  /* LOGO STICKY */
  .logo-sticky {
    display: none;
  }
  .sticky-top .logo-sticky {
    display: block;
  }

 </style>