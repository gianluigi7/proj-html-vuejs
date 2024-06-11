<script>
export default{
    name: 'AppContact',
}

</script>

<template>
    <section id="jumbotron">
        <div class="container-fluid">
        </div>
    </section>
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

    

</template>

<style scoped lang="scss">
#jumbotron .container-fluid {
    max-width: 100%;
    height: 500px;
    background-image: url(../img/banner-14@2x-scaled.jpg);
    background-size: 100%;
    background-color: #c4c3c3;
    background-repeat: no-repeat;
    position: relative;
    height: 100%;
     //filter: brightness(65%);
    
    
     div {
        color: white;
        max-width: 1240px;
        margin: 0 auto;
        
        

        div {
            width: 73%;
            margin-left: 0;
        }
     }
     
     
     }
  
  #jumbotron img {
    width: 100%;
    height: 500px;
  }

.button-color{
  background-color: #3D6F42;
}

.button-color:hover{
  background-color: #2B4F2F;
}
</style>