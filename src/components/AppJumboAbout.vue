<script>
export default {
    name: 'AppJumboAbout'
}

</script>

<template>
    
    <div class="container-fluid container-about d-flex justify-content-center align-items-center about-content">
  <div class="row">
    <div class="col-12 text-white ">
      <h1>About</h1>
      <p class="lead ">LEARN ABOUT OUR BUSINESS PHILOSOPHY</p>
    </div>
  </div>

</div>
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

.background-section p {
  font-family:serif;
}

.about-content {
  animation: fadeIn 2s;
  letter-spacing: .15em;
}




</style>