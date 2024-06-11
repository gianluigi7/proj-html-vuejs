
<script>
export default{
    name: 'AppHeader',
}

</script>

<template>
  <h2>
    Header
  </h2>
  <!-- ROUTERVIEW -->
  <ul>
  <li>
    <router-link to="/">Home</router-link>

  </li>
  <li>
    <router-link to="/about">About</router-link>
  </li>
  <li>
    <router-link to="/contact">Contact</router-link>
  </li>
</ul>

    <!-- IMPORTO ROUTER SU SINGOLO A-HREF -->

  </template>