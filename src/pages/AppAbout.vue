
<script>
import AppStaff from '../components/AppStaff.vue'
import AppCard from '../components/AppCard.vue'
import AppTestimonial from '../components/AppTestimonial.vue'
import AppAccessories from '../components/AppAccessories.vue'

export default{
    name: 'AppAbout',
    components: {
        AppStaff,
        AppCard,
        AppTestimonial,
        AppAccessories,


    }
}

</script>

<template>
    <!-- IMPORTO ROUTER SU SINGOLO A-HREF -->
 
    <!-- AGGIUNGO ROUTER -->

    <!-- ABOUT JUMBOTRON -->
<div class="container-fluid container-about d-flex justify-content-center align-items-center">
  <div class="row">
    <div class="col-12 text-white">
      <h1>About</h1>
      <p class="lead">LEARN ABOUT OUR BUSINESS PHILOSOPHY</p>
    </div>
  </div>

</div>
    <!-- FINE ABOUT JUMBOTRON -->
    <!-- INIZIO CONTAINER  -->
 <div class="container">
  <div class="row">
    <div class="col-4 p-4">
      <img src="../img/ourstorypic.jpg" alt="">
    </div>
    <div class="col-8 d-flex flex-column gap-5 mt-5">
      <h2>We are passionate about <br>taking care of your animals</h2>
      <div class="row">
        <div class="col-6">
          <p>Eu elementum sodales malesuada dictum amet, neque diam. Sed ac egestas augue vitae felis tellus id amet. Donec quisque integer egestas porttitor cursus consequat. Elementum nibh dictum enim vel. Lacinia at egestas lobortis varius enim felis. Purus lobortis mollis tincidunt curabitur amet sollicitudin eu diam. Augue in urna tortor cras eu quam. Etiam facilisis et quam.</p>
        </div>
        <div class="col-6">
          <p>Eu elementum sodales malesuada dictum amet, neque diam. Sed ac egestas augue vitae felis tellus id amet. Donec quisque integer egestas porttitor cursus consequat. Elementum nibh dictum enim vel. Lacinia at egestas lobortis varius enim felis. Purus lobortis mollis tincidunt curabitur amet sollicitudin eu diam. Augue in urna tortor cras eu quam. Etiam facilisis et quam.</p>
        </div>
      </div>
      <div>
        <img src="../img/firma.jpg" alt="">
      </div>
    </div>
  </div>
</div>
    <!-- FINE CONTAINER -->
    
      <!--INIZIO IMMAGINE FISSA+ NUOVI ARRIVI  -->
    <div class="background-section d-flex flex-column justify-content-center align-items-center gap-5">
    
      <div class="lead text-uppercase font-weight-bold">find the best animals supplies</div>
    
      <p class="display-3">New Arrivals every weeks </p>

      <button class="btn btn-primary rounded-pill">Visit our shop</button>
  </div>
 
     <!-- IMPORTO APP STAFF -->
    <AppStaff></AppStaff>
    <!-- FINE APP STAFF -->
    <!-- IMPORTO APP TESTIMONIAL -->
    <AppTestimonial></AppTestimonial>
    <!-- FINE APP TESTIMONIAL -->
    <!-- IMPORTO APP ACCESSORIES -->
    <AppAccessories></AppAccessories>
    <!-- FINE APP ACCESSORIES -->

    <!-- INIZIO APP CARD -->
    <AppCard></AppCard>
    <!-- FINE APP CARD -->


  </template>
  <style scoped lang="scss">
    @import '../assets/scss/partials/_variables.scss';
.container-about {
  background-image: linear-gradient(to top, lighten($main-color, 2%), darken($main-color, 10%));
  height: 400px;
}
h1 {
  font-size: 3rem;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  font-family: 'Times New Roman', Times, serif;
}
.background-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../img/banner-5@2x-scaled.jpg');
  background-attachment: fixed;
  height: 500px;
  color: white;
  background-size: cover;
}
.background-section p {
  font-family:serif;
}
.btn{
  background-color:$button-h4-icon-color ;
  border: none;
  padding: 10px 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

}

</style>


