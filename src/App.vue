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
    

    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>

    
  </div>
  

</template>

<style>
body {
  font-family:'Roboto', sans-serif;
}

</style>

