<!-- <script></script> -->
 <script>
 import AppAbout from './pages/AppAbout.vue';
 import AppContact from './pages/AppContact.vue';
 import AppHome from './pages/AppHome.vue';
 import AppFooter from './components/AppFooter.vue';
  import AppHeader from './components/AppHeader.vue';

 export default{
  components: {
    AppAbout,
    AppContact,
    AppHome,
    AppFooter,
    AppHeader,
  }
 }
</script>
<template>
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

