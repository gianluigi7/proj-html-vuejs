
<script>
export default{
    name: 'AppHeader',
    // AGGIUNGO METODO PER VISIBILITà LOGO//
    data() {
        return {
            isSticky: false,
            showDropdown: false,
            isHovered: false,
            searchTerm: ''
            
        }

    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.updateDropdownPosition);

        this.$nextTick(() => {
            this.updateDropdownPosition();
        });

    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.updateDropdownPosition);
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 0) {
                this.isSticky = true;
            } else {
                this.isSticky = false;
            }
        },
        showDropdownMenu() {
            this.showDropdown = true;
        },
        hideDropdownMenu() {
            this.showDropdown = false;
        },
        toggleDropdownMenu() {
            this.showDropdown = !this.showDropdown;
        },
        handleMouseEnter() {
            this.isHovered = true;
        },
        handleMouseLeave() {
            this.isHovered = false;
        },

        updateDropdownPosition() {
          const navbar = this.$refs.secondNavbar;
          const dropdownMenu = this.$refs.dropdownMenu;
         dropdownMenu.style.top = `${navbar.getBoundingClientRect().bottom}px`;

        },
        handleSubmit(){
          console.log('searchTerm', this.searchTerm);
          //CODICE DA ESEGUIRE//


        }

    }

  }

 
   


       
            




          
      
        // AGGIUNGO METODO PER DROPDOWN //
   



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
        @keyup.enter="handleSubmit"
        v-model="searchTerm"
        style="padding-left: 50px; 
        padding-top: 5px; 
        padding-bottom: 5px; 
        background-color: #f3f4f3;">
        
      <button 
      class="btn position-absolute border-0 bg-transparent" 
      style="left: 15px; top: 50%; transform: translateY(-50%);"
      @click="handleSubmit"
      >
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
    </div>
    <!-- QUESTION CALL-US -->
    <div class="d-flex justify-content-end align-items-center gap-3 col-4">
     
          
      <font-awesome-icon icon="phone-alt"></font-awesome-icon>
      
      <div class="d-flex align-items-center gap-2">
      
        <strong>Questions? </strong>
      
      </div>
      
      Call us : 1.800.123.4567
       
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
   <div class="container-fluid sticky-top border-top bg-white about-content" ref="secondNavbar">
  <div class="container position-relative">
  <div class="row">
    <div class="navbar-nav d-flex justify-content-between align-items-center fw-light p-2 ">
      <div class="d-flex justify-content-center gap-5 flex-grow-1">
      <!-- LOGO-STICKY -->
        <img class="logo-sticky position-absolute start-0 ps-3" v-show="isSticky" src="../img/LogoNoscritta.png" alt="logo" srcset="">
        <!-- HOME(ROUTER LINK) E DROPDOWN CON HOVER CON UNA SOLO VOCE-->
        <div class="dropdown">
          <router-link to="/" class="nav-link custom-link text-secondary">Home
            <!-- FONT FRECCETTA DROPDOWN -->
            <font-awesome-icon icon="chevron-down" class="text-secondary"></font-awesome-icon>
          </router-link>
          <div class="dropdown-menu">
            <li><a href="#">Home-Alternate</a></li>
          </div>
        </div>
        <!-- SHOP+DROPDOWN-->
        <div class="dropdown">
          <a href="#" class="nav-link custom-link text-secondary">Shop
            <font-awesome-icon icon="chevron-down" class="text-secondary"></font-awesome-icon>
          </a>
          <div class="dropdown-menu">
            <li><a href="#">Shop no sidebar</a></li>
            <li><a href="#">Shop single sidebar</a></li>
            <li><a href="#">Shop dual sidebar</a></li>
            <li><a href="#">Shop Simple product</a></li>
            <li><a href="#">Shop Variable product</a></li>
          </div>
        </div>

         

        <!-- ABOUT -->
        <router-link to="/about" class="nav-link custom-link text-secondary">About</router-link>
        <!-- BLOG -->
          <a href="#" class="nav-link custom-link text-secondary">Blog</a>
        <!-- CONTACT -->
        <router-link to="/contact" class="nav-link custom-link text-secondary">Contact</router-link>
        <!-- SHOP BY BRAND -->
         <div class="dropdown">
          <a href="#" class="nav-link custom-link text-secondary">Shop by Brand
            <font-awesome-icon icon="chevron-down" class="text-secondary"></font-awesome-icon>
          </a>
    
          <div class="custom-dropdown-menu" ref="dropdownMenu">
  
            <!-- INSERISCO TRE CARD CHE OCCUPANO ORIZZONTALMENTE 100VH -->
  
              <div class="col foodCol-1 d-flex justify-content-end flex-column p-5">
              
              <img src="../img/food-transparent-16.png" 
              alt="brand" 
              class="img-fluid"
        
              >
             <div>
              <h1>Frozen</h1>
              <p>Freeze-Dried dog food</p>

             </div>
              
            </div>
 
            <div class="col foodCol-2 d-flex justify-content-end flex-column p-5">
  
              <img src="../img/food-transparent-18.png" 
              alt="brand" 
              class="img-fluid"
              
              >    
                <div>
              <h1>Kibble</h1>
              <p>Dry dog food </p>

             </div>
            </div>
  
            <div class="col foodCol-3 d-flex justify-content-end flex-column p-5">
              <img src="../img/food-transparent-17.png" 
              alt="brand" 
              class="img-fluid"
           
              >
                 <div>
              <h1>Canned</h1>
              <p>Moist dog food</p>

             </div>
            </div>

          </div>

        </div>

        
   
      
        
        

         
       
        <!-- ICONE STICKY E VISIBILITA -->
         
      <div class="icons-sticky d-flex justify-content-end align-self-center gap-3 col-3 position-absolute end-0 pe-3  " v-if="isSticky">
        <font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon>
        <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
      </div>
        </div>


    
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
          <div class="col-4 d-flex justify-content-end align-items-center gap-2 about-content">
            <font-awesome-icon icon="globe" class="text-white"></font-awesome-icon>
            <span class="text-center small">
              <strong class="text-white">International <span class="text-secondary">Shipping Service</span></strong> </span>
          </div>
        
<!-- ICONA OROLOGIO SEE HOUR STORE  -->
          <div class="col-4 d-flex justify-content-center align-items-center gap-2 about-content">
            <font-awesome-icon icon="clock" class="text-white"></font-awesome-icon>
            <span class="text-center small">
              <strong class="text-secondary">
                See our
                <span class="text-white">store hours and</span>
                  <span> services</span>
               
              </strong> 
            </span>
          </div>
       
          <!-- ICONA SPUNTA BIANCA CON  BEST DEALS-->
          <div class="col-4 d-flex justify-content-start align-items-center gap-2 about-content">
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

.about-content {
  animation: fadeIn 2s;
  letter-spacing: .15em;
}

.custom-link {
  margin: 0 auto; 
  letter-spacing: .15em;
  transform: scale(1);
  transition: all .3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
 
 
 /* ROUTER LINK STYLE */

 .dropdown:hover 
 .custom-link, 
 .dropdown:hover 
 .custom-link:hover, 
 .dropdown:hover 
 .custom-link:active, 
 .dropdown:hover 
 .custom-link:focus {
  color: black !important;
  transform: scale(1.1);
  transition: all .3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

  /* BANNER-HEADER STYLE */
  #banner-header {
    /* uso bacground color in common.scss bg-main */
    background-color: $main-color;
    background-image: url('../img/bg-transparent-3.png'); 
    letter-spacing: .15em;
  }

  /* LOGO STICKY*/

  .logo-sticky {
    display: none;
  }
  .sticky-top .logo-sticky {
    display: block;
  }




/* ICONS STICKY */

.icons-sticky {
  display: none;
}
.sticky-top .icons-sticky {
  display: block;
}

.dropdown {
  position: relative;
  
}
/* DROPDOWN*/
.dropdown-menu {
  display: none;
  position: absolute;
  min-width: 300px;
  padding: 0;
  left: -20%;
  z-index: 1;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  transition: background 0.3s ease-in-out;
  top: calc(100% + 5px);
}
.dropdown-menu li {
  text-align: left;
  
  
}
.dropdown-menu li:not(:last-child) {
  border-bottom: 1px solid #f3f4f3 ;
}


.dropdown-menu li a {
  color: black;
  text-decoration: none;
  display: block; 
  letter-spacing: .15em;
  transform: scale(1);
  transition: all .3s ease-in-out;
  padding: 20px 20px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}


.dropdown-menu li a:hover {
  /* BACKGROUND COLOR DI TUTTO DROPDOWN MENU*/

  background-color: $button-h4-icon-color;
  color: white;
  transition: all .3s ease-in-out;

}
  /* DROPDOWN MENU IMG*/

.custom-dropdown-menu {
  display: none;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  left: 0;
  width: 100%;
   opacity: 0;
  transform: translateY(-20px);
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  
}

.dropdown:hover .custom-dropdown-menu {
  display: flex;
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}


.foodCol-1{
  background-color:#e2f1e4;

  
}
.foodCol-2{
  background-color:#faf5f2;

  
}
.foodCol-3{
  background-color:#e2f0f1;

  
}
.col{
  height:300px ;
  overflow: hidden;
  position: relative;
}
.col img{
  position: absolute;
  right: 0;
  bottom : 0;
  transform: translate(40%, 40%);
}




 </style>