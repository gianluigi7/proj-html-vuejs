<script>
export default{
    name: 'AppContact',
}

</script>

<template>
    <section id="jumbotron">
        <div class="container-fluid p-5 text-center " >
            <h2 class="text-white position-absolute top-50 start-50 translate-middle fs-1">
                Contact            
            </h2>
        </div>
    </section>

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
            <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-4 mb-4"  />
    <font-awesome-icon icon="fa-brands fa-x-twitter" class="me-4 mb-4" />
    <font-awesome-icon icon="fa-brands fa-square-instagram" class="me-4 mb-4"  />
    <font-awesome-icon icon="fa-brands fa-youtube" class="mb-4" />
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
    <section>

        <!-- BANNER CON SFONDO PERSONALIZZATO VERDE E 3 COL DI TESTO -->
  <div id="banner-header" class="container-fluid py-4">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h4 class="text-center p-5">
                    User Testimonials
                </h4> 
            </div>
        </div>
    </div>
    <!--- 3 col con le immagini -->
    <div class="container">
        <div class="row justify-content-center ">
            <div class="col-4 t-up text-center">
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
            <div class="col-4 t-up text-center">
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
            <div class="col-4 t-up text-center">
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
        </div>
    </div>
  </div>

    </section>

    <section id="newsletter-contact">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h2 class="py-5">
                        Join our newsletter
                    </h2>
                    <p class="fs-5 mb-5">Volutpat vel turpis nulla lorem sed semper. Aliquam sagittis sem libero viverra vehicula nullam ut nisl.</p>
                    <div class="row">
                        <div class="col-8"> 
                            <input type="text" name="" id="" placeholder="Insert your email..." class="rounded-pill px-2 mb-3 py-3 w-100 border border-dark-subtle mb-5" >
                        </div>
                        
                        <div class="col-4">
                            <button type="button" class="btn  rounded-pill mb-5 button-color text-white px-5 py-3 w-100">
                  Subscribe
                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="staff">
        <div class="container">
            <div class="row justify-content-between text-center">
                <div class="col-12 ">
                    <p>Meet our awesome staff</p>
                    <h2 class="pb-5">
                        Passionate about animals
                    </h2>
                </div>
                <div class="col-4 staff">
                    <img src="../img/staff-1@2x-600x565.jpg" alt="" class="scale">
                    <div>
                        <p class="text-start mt-4 fw-medium">
                          Cheryl Dobson
                        </p>
                        <p class="text-start ">Eu elementum sodales malesuada dictum amet, neque diam sed ac egestas augue.</p>
                    </div>
                    <div class="text-start pt-4">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-4 mb-4"  />
                        <font-awesome-icon icon="fa-brands fa-x-twitter" class="me-4 mb-4" />
                        <font-awesome-icon icon="fa-brands fa-square-instagram" class="me-4 mb-4"  />
                    </div>
                </div>
                <div class="col-4 staff">
                    <img src="../img/avatar-8-600x565.jpg" alt="" class="scale">
                    <div>
                        <p class="text-start mt-4 fw-medium">
                            Andrew McNiel
                        </p>
                        <p class="text-start ">
                            Aliquam enim amet nulla interdum rhoncus pretium mus massa tellus. Enim non egestas.
                        </p>
                    </div>
                    <div class="text-start pt-4" >
                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-4 mb-4"  />
                        <font-awesome-icon icon="fa-brands fa-x-twitter" class="me-4 mb-4" />
                        <font-awesome-icon icon="fa-brands fa-square-instagram" class="me-4 mb-4"  />
                    </div>
                </div>
                <div class="col-4 staff">
                    <img src="../img/staff-3@2x-600x565.jpg" alt="" class="scale">
                    <div>
                        <p class="text-start mt-4 fw-medium">
                            Sarah Green
                        </p>
                        <p class="text-start">
                            Aliquam enim amet nulla interdum rhoncus pretium mus massa tellus. Enim non egestas.
                        </p>
                    </div>
                    <div class="text-start pt-4">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-4 mb-4"  />
                        <font-awesome-icon icon="fa-brands fa-x-twitter" class="me-4 mb-4" />
                        <font-awesome-icon icon="fa-brands fa-square-instagram" class="me-4 mb-4"  />
                    </div>
                </div>
            </div>
        </div>

    </section>
    

    

</template>

<style scoped lang="scss">
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
  

.button-color{
  background-color: #3D6F42;
}

.button-color:hover{
  background-color: #2B4F2F;
}

#banner-header {
    /* uso bacground color in common.scss bg-main */
    background-color: #1E3120;
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

  #newsletter-contact .container{
    background-image: url(../img/banner-7@2x-scaled.jpg);
    background-size: 100%;
    position: relative;
    top: -40px;
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