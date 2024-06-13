
<script>
import AppJumboAbout from '../components/AppJumboAbout.vue'
import AppStory from '../components/AppStory.vue'
import AppStaff from '../components/AppStaff.vue'
import AppCard from '../components/AppCard.vue'
import AppTestimonial from '../components/AppTestimonial.vue'
import AppAccessories from '../components/AppAccessories.vue'
import AppNewArrivals from '../components/AppNewArrivals.vue'



export default{
    name: 'AppAbout',
    components: {
        AppStaff,
        AppCard,
        AppTestimonial,
        AppAccessories,
        AppNewArrivals,
        AppStory,
        AppJumboAbout,
        


    }
}

</script>

<template>


    <!-- ABOUT JUMBOTRON -->
    <AppJumboAbout></AppJumboAbout>
    <!-- FINE ABOUT JUMBOTRON -->
    <!-- IMPORTO APP STORY -->
    <AppStory></AppStory>
    <!-- FINE APP STORY -->
  <!-- IMPORT APP NEW ARRIVALS -->
  <AppNewArrivals></AppNewArrivals>
  <!-- FINE APP NEW ARRIVALS -->
  
     <!-- IMPORTO APP STAFF -->
    <AppStaff></AppStaff>
    <!-- FINE APP STAFF -->
    <!-- IMPORTO APP TESTIMONIAL CON LIMIT-->
      <app-testimonial :limit="6" />


    
    
    <!-- FINE APP TESTIMONIAL -->
    <!-- IMPORTO APP ACCESSORIES -->
    <AppAccessories></AppAccessories>
    <!-- FINE APP ACCESSORIES -->

    <!-- INIZIO APP CARD -->
    <AppCard></AppCard>
    <!-- FINE APP CARD -->


  </template>
  <style scoped lang="scss">


</style>


