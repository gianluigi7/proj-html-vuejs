<script>
export default {
    name: 'AppContactForm',
}
</script>

<template>
<section>
    <div class="container text-center">
        <div class="d-flex justify-content-between">
            <div class="col-4">
                <div class="mt-5 text-start">
                    Amet pulvinar dignissim sapien massa amet, ac orci rutrum. Quam in sed leo mauris etiam ut diam id. Metus viverra parturient montes, purus condimentum quis non sit amet. Euismod ligula.
                </div>
                <div class="mt-5 fs-1 fw-bold text-start">
                    We are passionnate about taking care of your animals
                </div>
                <div class="mt-5 text-start">
                    1234 Avada Avenue Avadaville, 11221
                </div>
                <div class="mt-3 text-start">
                    info@your-company.com
                    Call us: (1) 234 5678
                </div>
                <div class="mt-4 text-start">
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
                <input type="text" name="" id="" class="w-100 rounded-pill mb-2 p-2 border border-success p-2 border-opacity-10 ">
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

</template>

<style scoped lang="scss">
@import '../assets/scss/partials/_variables.scss';

.green-color{
    color: $color-green;
}

.button-color{
background-color: $button-h4-icon-color;
}

.button-color:hover{
  background-color: $button-bg-hover;
}

input , textarea{
    background-color: #f8f5f2;
}

</style>