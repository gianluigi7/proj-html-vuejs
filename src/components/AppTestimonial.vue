<script>

const testimonials = [
    {
        img: '/src/img/avatar-3-200x200.jpg',
        text: 'Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu.',
        name: 'Lisa Smith',
        company: 'ThemeFusion'
    },
    {
        img: '/src/img/avatar-1-200x200.jpg',
        text: 'Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.',
        name: 'Melissa Green',
        company: 'ThemeFusion'
    },
    {
        img: '/src/img/avatar-4-200x200.jpg',
        text: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus vestibulum ante ipsum.',
        name: 'Sam Lewis',
        company: 'ThemeFusion'
    },
    {
        img: '/src/img/avatar-7-200x200.jpg',
        text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit.',
        name: 'Ben Springer',
        company: 'ThemeFusion'
    },
    {
        img: '/src/img/avatar-6-200x200.jpg',
        text: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus vestibulum ante ipsum.',
        name: 'Sam Lewis',
        company: 'ThemeFusion'
    },
    {
        img: '/src/img/avatar-5-200x200.jpg',
        text: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus vestibulum ante ipsum.',
        name: 'Sam Lewis',
        company: 'ThemeFusion'
    }

];
export default {
    name: 'AppTestimonial',
    props: {
        limit: {
            type: Number,
            default: Infinity
        }
    },
    computed: {
        limitedTestimonials() {
            return this.testimonials.slice(0, this.limit)
        }
       
    },
    data() {
        return {
            testimonials: testimonials
        }
    }

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
    <!-- ITERO SU TUTTI I DATI -->
    <div class="container">
        <div class="row justify-content-center">
            <div v-for="testimonial in limitedTestimonials" :key="testimonial.name" class="col-4 text-center">
                <div class="testimonial">
                    <img :src="testimonial.img" alt="" class="rounded-circle">
                </div>
                <div>
                    <p class="mt-4 p-3">
                        {{testimonial.text}}
                    </p>

                    <p class="mt-4 text-secondary">
                        {{testimonial.name}}, {{testimonial.company}}
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