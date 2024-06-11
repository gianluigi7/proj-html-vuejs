
<script>
export default{
    name: 'AppHeader',
}

</script>

<template>
  <div class="container">
       <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
        <a class="navbar-brand" href="#">
          <img src="../img/LOGO.jpg.jpg" alt="logo">
        </a>
      <div class="input-group my-2 my-lg-0 d-flex col- position-relative p-5 w-25">
        <input type="text" class="form-control rounded-pill border-0" placeholder="Search..." aria-label="Search" style="padding-left: 50px; padding-top: 5px; padding-bottom: 5px; background-color: #f3f4f3;">
      <button class="btn position-absolute border-0 bg-transparent" style="left: 15px; top: 50%; transform: translateY(-50%);">
        <font-awesome-icon icon="search" />
      </button>
    </div>
    <!-- QUESTION CALL-US -->
    <div class="d-flex justify-content-end align-items-center gap-3">
          <font-awesome-icon icon="phone-alt"></font-awesome-icon>
          <div class="d-flex align-items-center gap-2">
            <strong>Questions? </strong>
            Call us : 1.800.123.4567
          </div>
        </div>
        <!-- aggiungo icone alla fine della navbar -->
        <div class="d-flex justify-content-end align-items-center gap-3 ">
          <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
          <font-awesome-icon icon="user"></font-awesome-icon>
        </div>
  </nav>
    </div>
  <!-- AGGIUNGO SOTTO LA NAVBAR LA NAVIGAZIONE TRAMITE ROUTERVIEW -->


  <!-- ROUTERVIEW -->
  <!-- <ul>
  <li>
    <router-link to="/">Home</router-link>

  </li>
  <li>
    <router-link to="/about">About</router-link>
  </li>
  <li>
    <router-link to="/contact">Contact</router-link>
  </li>
</ul> -->

  </div>
  
  
  
  
 

   

  </template>