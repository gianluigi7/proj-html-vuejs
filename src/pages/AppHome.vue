<script>
export default{
    name: 'AppHome',
}
</script>
<template>
    <h2>
        AppHome
    </h2>

    <div>
    <!-- AGGIUNGO ROUTER -->
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
    

    
  </div>
    
</template>
