
<script>
export default{
    name: 'AppHeader',
}

</script>

<template>
  <div class="container px4">
      <nav class="navbar navbar-expand-lg navbar-light d-flex">
      <a class="navbar-brand" href="#">
        <img src="../img/LOGO.jpg.jpg" alt="logo">
      </a>
      <div class="input-group my-2 my-lg-0 d-flex w-25 position-relative">
        <input type="text" class="form-control pl-5" placeholder="Search..." aria-label="Search">
        <font-awesome-icon icon="search" class="position-absolute" style="left: 10px; top: 50%; transform: translateY(-50%);" />
      </div>
    </nav>
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