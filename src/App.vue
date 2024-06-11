<!-- <script></script> -->
 <script>
 import AppAbout from './pages/AppAbout.vue';
 import AppContact from './pages/AppContact.vue';
 import AppHome from './pages/AppHome.vue';
 import AppFooter from './components/AppFooter.vue';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

 export default{
  components: {
    AppAbout,
    AppContact,
    AppHome,
    AppFooter,
    AppHeader,
    AppMain,
  }
 }
</script>
<template>
  <div>
    <!-- AGGIUNGO ROUTER -->
    <AppHeader/>
    <router-view> </router-view>
    <AppMain/>
    <AppFooter/>
  

    

    
  </div>

</template>

