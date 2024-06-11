<!-- <script></script> -->
 <script>
 import { RouterView } from 'vue-router';
import AppAbout from './pages/AppAbout.vue';
 import AppContact from './pages/AppContact.vue';
 import AppHome from './pages/AppHome.vue';

 export default{
  components: {
    AppAbout,
    AppContact,
    AppHome,
  }
 }
</script>
<template>
  <div>
    <!-- AGGIUNGO ROUTER -->
    <font-awesome-icon icon="fa-solid fa-user-secret" />
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
  <router-view>
    
  </router-view>
  <!---
  <h1>Vue Vite Template</h1>
  <AppAbout/>
  <AppContact/>
  <AppHome/>
  
  -->
  
</template>
<!-- <style></style> -->
