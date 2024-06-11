
<script>
export default{
    name: 'AppHeader',
}

</script>

<template>
  <div class="container">
       <div class="row">
     
        <!-- LOGO -->
        <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-between p-0">
        <a class="navbar-brand col-3" href="#">
          <img src="../img/LOGO.jpg.jpg" 
          alt="logo" 
          style="height: 30px;">
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
    <div class="container-fluid">
      <div class="row">
        <div class="navbar-nav d-flex justify-content-center align-items-center">
          <div class="d-flex gap-4">
          <router-link to="/" class="nav-link custom-link">Home</router-link>
          <router-link to="/about" class="nav-link custom-link">About</router-link>
          <router-link to="/contact" class="nav-link custom-link">Contact</router-link>

          </div>
         
        </div>

      </div>
      
                  
  
    </div>
 </template>
 <style scoped>
 
 .custom-link:hover{
    color: #000;
  
  }
 </style>