<script>
export default {
    name: 'AppAboutAnimals',
    data() {
        return {
            p:'Meet our awesome staff',
            h2:'Passionate about animals',
            members: [
                {
                    image:'../img/staff-1@2x-600x565.jpg',
                    name:'Cheryl Dobson',
                    title:'Eu elementum sodales malesuada dictum amet, neque diam sed ac egestas augue.',

                },

                {
                    image:'../img/staff-1@2x-600x565.jpg',
                    name:'Andrew McNiel',
                    title:'Aliquam enim amet nulla interdum rhoncus pretium mus massa tellus. Enim non egestas.',

                },

                {
                    image:'../img/staff-1@2x-600x565.jpg',
                    name:'Sarah Green',
                    title:'Aliquam enim amet nulla interdum rhoncus pretium mus massa tellus. Enim non egestas.',

                },


            ]

        }
        
    },
}


</script>

<template>
    <section id="staff">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-12 text-center">
                    <p>
                        {{ p }}
                    </p>

                    <h2>
                        {{ h2 }}
                    </h2>
                </div>
                <div class="col-4 staff" v-for="(member, index) in members">
                    <img src="../img/avatar-8-600x565.jpg" alt="" class="scale">
                    <div>
                        <p class="text-start mt-4 fw-medium">
                            {{ member.name }}
                        </p>

                        <p class="text-start">
                            {{ member.title }}

                        </p>
                    </div>
                    <div class="text-start pt-4 ">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="me-4 mb-4 green-color "  />
                        <font-awesome-icon icon="fa-brands fa-x-twitter" class="me-4 mb-4 green-color" />
                        <font-awesome-icon icon="fa-brands fa-square-instagram" class="me-4 mb-4 green-color"  />
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<style>

.scale:hover {
       transform: scale(1.03);
       filter: brightness(1.05);
       transition-duration: 0.4s; 
       }

       .staff img{
        width: 100%;
       }
</style>