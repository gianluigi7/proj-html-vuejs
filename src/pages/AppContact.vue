<script>
import AppStaff from '../components/AppStaff.vue'
import AppTestimonial from '../components/AppTestimonial.vue';
import AppNewsLetter from '../components/AppNewsLetter.vue';
import AppContactForm from'../components/AppContactForm.vue';
export default{
    name: 'AppContact',
    components: {
        AppStaff,
        AppTestimonial,
        AppNewsLetter,
        AppContactForm,
    }
}
</script>

<template>

    <!----Inizio Sezione Jumbotron-->
    <section id="jumbotron">
        <div class="container-fluid p-5 text-center " >
            <h2 class="text-white position-absolute top-50 start-50 translate-middle fs-1" id="about-content">
                Contact            
            </h2>
        </div>
    </section>
    <!----Fine Sezione Jumbotron-->
    
    <!----Inizio Sezione Forms-->
    <AppContactForm />
    <!----Fine Sezione Form-->

    <!----Inizio Sezione Testimonial-->
        <AppTestimonial :limit="3"  />
    <!----Fine Sezione Testimonial-->

    <!----Inizio Sezione NewsLetter-->
    <AppNewsLetter />
    <!----Fine Sezione NewsLetter-->

    <!----Inizio Sezione Staff-->
    <AppStaff />
    <!----Fine Sezione Staff-->

</template>

<style scoped lang="scss">
@import '../assets/scss/partials/_variables.scss';

@keyframes fadeIn {
    0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#about-content {
  animation: fadeIn 2s;
  letter-spacing: .15em;
}

#jumbotron .container-fluid {
    max-width: 100%;
    background-image: url(../img/banner-14@2x-scaled.jpg);
    background-size: cover;
    background-color: antiquewhite;
    background-color: #c4c3c3;
    background-blend-mode: multiply;
    height: 500px;
     //filter: brightness(65%);
     
     
     }


     /* spiegheremo cosa fanno queste classi in seguito!*/


.button-color{
  background-color: $button-h4-icon-color;
}

.green-color{
    color: $button-h4-icon-color;
}
.button-color:hover{
  background-color: $button-bg-hover;
}


#banner-header {
    /* uso bacground color in common.scss bg-main */
    background-color: $main-color;
    background-image: url('../img/bg-transparent-3.png'); 
    background-repeat: repeat-x;
   
  }

  .col-12 h4{
    text-transform: uppercase;
    color: white;

  }

  .t-up{
    text-transform:uppercase;
    color: white;
  }

  .testimonial img{
    width: 100px;
  }

  

  .staff img{
    width: 100%;
  }

  .scale:hover {
       transform: scale(1.03);
       filter: brightness(1.05);
       transition-duration: 0.4s; 
       }


  
</style>