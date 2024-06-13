<script>
export default{
    name: 'AppStaff',
}
</script>
<template>
        <section id="staff">
        <div class="container mt-5">
            <div class="row justify-content-between text-center">
                <div class="col-12 ">
                    <p>Meet our awesome staff</p>
                    <h2 class="pb-5">
                        Passionate about animals
                    </h2>
                </div>
                <div class="col-4 staff">
                   <div class="image-container">
                    <img src="../img/staff-1@2x-600x565.jpg" alt="" class="scale">
                   </div>
                    
                    <div>
                        <p class="text-start mt-4 fw-medium">
                          Cheryl Dobson
                        </p>
                        <p class="text-start ">Eu elementum sodales malesuada dictum amet, neque diam sed ac egestas augue.</p>
                    </div>
                    <div class="text-start pt-4 ">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-4 mb-4 green-color "  />
                        <font-awesome-icon icon="fa-brands fa-x-twitter" class="me-4 mb-4 green-color" />
                        <font-awesome-icon icon="fa-brands fa-square-instagram" class="me-4 mb-4 green-color"  />
                    </div>
                </div>
                <div class="col-4 staff">
                    <div class="image-container">
                        <img src="../img/avatar-8-600x565.jpg" alt="" class="scale">
                    </div>
                    
                    <div>
                        <p class="text-start mt-4 fw-medium">
                            Andrew McNiel
                        </p>
                        <p class="text-start ">
                            Aliquam enim amet nulla interdum rhoncus pretium mus massa tellus. Enim non egestas.
                        </p>
                    </div>
                    <div class="text-start pt-4" >
                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-4 mb-4 green-color"  />
                        <font-awesome-icon icon="fa-brands fa-x-twitter" class="me-4 mb-4 green-color" />
                        <font-awesome-icon icon="fa-brands fa-square-instagram" class="me-4 mb-4 green-color"  />
                    </div>
                </div>
                <div class="col-4 staff">
                    <div class="image-container">
                        <img src="../img/staff-3@2x-600x565.jpg" alt="" class="scale">
                    </div>
                    
                    <div>
                        <p class="text-start mt-4 fw-medium">
                            Sarah Green
                        </p>
                        <p class="text-start">
                            Aliquam enim amet nulla interdum rhoncus pretium mus massa tellus. Enim non egestas.
                        </p>
                    </div>
                    <div class="text-start pt-4">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-4 mb-4 green-color"  />
                        <font-awesome-icon icon="fa-brands fa-x-twitter" class="me-4 mb-4 green-color" />
                        <font-awesome-icon icon="fa-brands fa-square-instagram" class="me-4 mb-4 green-color"  />
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<style>
.staff{
    overflow: hidden;
}
 .scale:hover {
       
       filter: brightness(1.05);
       transition-duration: 0.4s; 
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
       cursor: pointer;
       background-position: center;

       }

    .staff img{
width: 100%;
}
.staff img:hover{
    filter: brightness(1.05);
    transition-duration: 1s;
    transform: scale(1.2);
}
.image-container {
  overflow: hidden;
}
       </style>