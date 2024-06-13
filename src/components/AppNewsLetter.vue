<script>
export default{
    name:'AppNewsLetter',
}

</script>

<template>
    <section id="newsletter-contact">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h2 class="py-5">
                        Join our newsletter
                    </h2>
                    <p class="mb-5">Volutpat vel turpis nulla lorem sed semper. Aliquam sagittis sem libero viverra vehicula nullam ut nisl.</p>
                    <div class="row">
                        <div class="col-8"> 
                            <input type="text" name="" id="" placeholder="Insert your email...*" class="rounded-pill px-2 mb-3 w-100 border border-dark-subtle mb-5" >
                        </div>
                        
                        <div class="col-4">
                            <button type="button" class="btn  rounded-pill mb-5 button-color text-white px-5">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
#newsletter-contact .container{
    background-image: url(../img/banner-7@2x-scaled.jpg);
    background-size: 100%;
    position: relative;
    top: -40px;
  }

  .button-color{
  background-color: #3D6F42;
}

.button-color:hover{
  background-color: #2B4F2F;
}
.row {
    padding: 40px 60px;
}
h2 {
    font-size: 37px;
    color: #2B4F2F;
    font-weight: 400;
}
p {
    font-size: 16px;
}
input {
    background-color: #f8f5f2;
}
input, button {
    padding-top: 11px;
    padding-bottom: 11px;
}
input::placeholder {
    color: rgba(0, 0, 0, 0.815);
    font-weight: 400;
    font-size: 14px;
    padding-left: 10px;
}



</style>