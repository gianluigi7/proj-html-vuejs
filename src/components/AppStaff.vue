<script>
export default{
    name: 'AppStaff',
    data(){
        return{
            p: 'Meet our awesome staff',
            h2: 'Passionate about animals',
            staffs: [
                {
                    image: 'src/img/staff-1@2x-600x565.jpg',
                    name: 'Cheryl Dobson',
                    title: 'Eu elementum sodales malesuada dictum amet, neque diam sed ac egestas augue.',
                },
                {
                    image: 'src/img/avatar-8-600x565.jpg',
                    name: 'Andrew McNiel',
                    title: 'Aliquam enim amet nulla interdum rhoncus pretium mus massa tellus. Enim non egestas.',
                },
                {
                    image: 'src/img/staff-3@2x-600x565.jpg',
                    name: 'Sarah Green',
                    title: 'Aliquam enim amet nulla interdum rhoncus pretium mus massa tellus. Enim non egestas.',
                },
            ]
        }
    }
}
</script>
<template>
        <section id="staff">
        <div class="container mt-5">
            <div class="row justify-content-between text-center">
                <div class="col-12 ">
                    <p>{{ p }}</p>
                    <h2 class="pb-5">
                        {{ h2 }}
                    </h2>
                </div>
                <div class="col-4 staff" v-for="(staff, index) in staffs" :key="index">
                   <div class="image-container">
                    <img :src="staff.image" alt="" class="scale">
                   </div>
                    
                    <div>
                        <p class="text-start mt-4 fw-medium">
                          {{ staff.name }}
                        </p>
                        <p class="text-start ">
                            {{ staff.title }}
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
<style scoped lang="scss">
@import '../assets/scss/partials/_variables.scss';

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

.green-color{
    color: $color-green;
}
       </style>