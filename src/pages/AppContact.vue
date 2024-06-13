<script>
import AppStaff from '../components/AppStaff.vue'
import AppTestimonial from '../components/AppTestimonial.vue';
import AppNewsLetter from '../components/AppNewsLetter.vue';
export default{
    name: 'AppContact',
    components: {
        AppStaff,
        AppTestimonial,
        AppNewsLetter,
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

    <section>
        

        
        <div class="container text-center">
  <div class="d-flex justify-content-between">
    <div class="col-4">
        <div class="mt-5">
            Amet pulvinar dignissim sapien massa amet, ac orci rutrum. Quam in sed leo mauris etiam ut diam id. Metus viverra parturient montes, purus condimentum quis non sit amet. Euismod ligula.
        </div>
        <div class="mt-5 fs-1 fw-bold">
            We are passionnate about taking care of your animals
        </div>
        <div class="mt-5">
            1234 Avada Avenue Avadaville, 11221
        </div>
        <div class="mt-3">
            info@your-company.com
            Call us: (1) 234 5678
        </div>
        <div class="mt-4">
            <font-awesome-icon icon="fa-brands fa-facebook-f" style="font-size: 1.25rem;" class="me-4 mb-4 green-color"  />
            <font-awesome-icon icon="fa-brands fa-x-twitter" style="font-size: 1.25rem;" class="me-4 mb-4 green-color" />
            <font-awesome-icon icon="fa-brands fa-square-instagram" style="font-size: 1.25rem;" class="me-4 mb-4 green-color"  />
            <font-awesome-icon icon="fa-brands fa-youtube" style="font-size: 1.25rem;" class="mb-4 green-color" />
        </div>
        
    </div>
    <div class="col-7">
        <div class="d-flex justify-content-start">
            <p class="mt-5">
                Your name
            </p>

        </div>
        <input type="text" name="" id="" class="w-100 rounded-pill mb-2 p-2 border border-success p-2 border-opacity-10">
        <div class="d-flex justify-content-start">
            <p>
                Your email
            </p>

        </div>
        <input type="text" name="" id="" class="w-100 rounded-pill mb-2 p-2 border border-success p-2 border-opacity-10">
        <div class="d-flex justify-content-start">
            <p>
                Subject
            </p>

        </div>
        
        <input type="text" name="" id="" class="w-100 rounded-pill mb-2 p-2 border border border-success p-2 border-opacity-10">
        <div class="d-flex justify-content-start">
            <p>
                Message
            </p>

        </div>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px">

            </textarea>
            <label for="floatingTextarea2"></label>
        </div>
        <div class="d-flex justify-content-start">
            <button type="button" class="btn  rounded-pill mb-4 mt-4 button-color px-5 py-3 text-white">
                Send your message
            </button>

        </div>
        
    </div>
  </div>
</div>
    </section>
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