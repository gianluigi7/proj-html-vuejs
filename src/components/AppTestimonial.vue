<script>

export default {
    name: 'AppTestimonial'
}

</script>
<template>
      <div id="banner-header" class="container-fluid py-4">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 class="text-center p-5 display-4 text-white">
                    User Testimonials
                </h4> 
            </div>
        </div>
    </div>
    <!--- 3 col con le immagini -->
    <div class="container">
        <div class="row justify-content-center ">
            <div class="col-4 text-center">
                <div class="testimonial">
                    <img src="/src/img/avatar-3-200x200.jpg" alt="" class="rounded-circle">
                </div>
                <div>
                    <p class="mt-4 p-3">
                        Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu.
                    </p>

                    <p class="mt-4 text-secondary">
                        Lisa Smith, ThemeFusion
                    </p>  
                </div>
            </div>
            <div class="col-4 text-center">
                <div class="testimonial">
                    <img src="/src/img/avatar-1-200x200.jpg" alt="" class="rounded-circle">
                </div>
                <div>
                    <p class="mt-4 p-3">
                        Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.
                    </p>
                    <p class="mt-4 text-secondary">
                        Melissa Green, ThemeFusion
                    </p>
                </div>
            </div>
            <div class="col-4 text-center">
                <div class="testimonial">
                    <img src="/src/img/avatar-4-200x200.jpg" alt="" class="rounded-circle">   
                </div>
                <div>
                    <p class="mt-4 p-3" >
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus vestibulum ante ipsum.
                    </p>
                    <p class="mt-4 text-secondary pb-5 ">
                        Sam Lewis, ThemeFusion
                    </p>
                    
                </div>
            </div>
             <div class="col-4 text-center">
                <div class="testimonial">
                    <img src="/src/img/avatar-7-200x200.jpg" alt="" class="rounded-circle">   
                </div>
                <div>
                    <p class="mt-4 p-3" >
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit.
                    </p>
                    <p class="mt-4 text-secondary pb-5 ">
                        Ben Springer , ThemeFusion
                    </p>
                    
                </div>
            </div>
             <div class="col-4 text-center">
                <div class="testimonial">
                    <img src="/src/img/avatar-6-200x200.jpg" alt="" class="rounded-circle">   
                </div>
                <div>
                    <p class="mt-4 p-3" >
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus vestibulum ante ipsum.
                    </p>
                    <p class="mt-4 text-secondary pb-5 ">
                        Sam Lewis, ThemeFusion
                    </p>
                    
                </div>
            </div>
             <div class="col-4 text-center">
                <div class="testimonial">
                    <img src="/src/img/avatar-5-200x200.jpg" alt="" class="rounded-circle">   
                </div>
                <div>
                    <p class="mt-4 p-3" >
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus vestibulum ante ipsum.
                    </p>
                    <p class="mt-4 text-secondary pb-5 ">
                        Sam Lewis, ThemeFusion
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
/* importo variable da partial */
 @import '../assets/scss/partials/_variables.scss';
.container-fluid{
    background-color: $main-color;
    background-image: url('/src/img/bg-transparent-3.png');
    background-position:top;
    background-repeat:repeat-x;
    
}
  .testimonial img{
    width: 100px;
  }
 p {
    color:white

  }
  h4{
    font-family: serif;
  }




</style>