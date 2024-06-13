<script>
export default {
    name: 'AppNewArrivals'
}
</script>



<template>
    
<div class="background-section d-flex flex-column justify-content-center align-items-center gap-5">
    
      <div class="lead text-uppercase font-weight-bold">find the best animals supplies</div>
    
      <p class="display-3">New Arrivals every weeks </p>

      <button class="btn btn-primary rounded-pill">Visit our shop</button>
  </div>

</template>
<style lang="scss" scoped>

@import '../assets/scss/partials/_variables.scss';

.background-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../img/banner-5@2x-scaled.jpg');
  background-attachment: fixed;
  height: 500px;
  color: white;
  background-size: cover;
}
.btn{
  background-color:$button-h4-icon-color;
  border: none;
  padding: 10px 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

}

</style>



