<script>
 export default{
    name: 'AppCard',
    data() {
        return {
            h2:'Get the best tips & tricks',
            h5:'Recents article',
            cards: [
                {
                    date:'April 21st, 2020',
                    title:'How to "loose leash walk" your dog',
                    image: 'src/img/blog-1.jpg',
                },
                {
                    date:'April 19th, 2020',
                    title:'Stop cats from scratching furniture',
                    image: 'src/img/blog-2.jpg',
                },
                {
                    date:'April 18th, 2020',
                    title:'Where to buy the best pet food',
                    image: 'src/img/blog-3.jpg',
                },
                {
                    date:'April 17th, 2020',
                    title:'Proper care for your pet toys',
                    image: 'src/img/blog-4.jpg',
                }
            ]
        }
    }
    }
</script>
<template>
    <h2 class="main-color mt-5">{{ h2 }}</h2>
    <h5>{{ h5 }}</h5>
    <div class="contenitore">
      <div class="col" v-for="(card, index) in cards" :key="index">
         <!-- ITERO SU CARDS.IMAGE -->
        <img :src="card.image">

         <div>

            <p>{{ card.date }} <span>Tips & Tricks</span></p>
            <h4>{{ card.title }}</h4>
            <p class="reading">Continue reading</p>
         </div>
         
       </div>
       </div>
       <div class="d-flex">
           <button>Read All Articles</button>
       </div>
       
</template>
<style scoped lang="scss">
@import '../assets/scss/partials/_variables.scss';

 h2, h5 {
    text-align: center;
 }
 h5 {
    color: $color-green;
    margin-top: 15px;
    font-weight: 400;
 }
 .contenitore {
    max-width: 1240px;
    display: flex;
    flex-wrap: wrap; 
    margin: 0 auto;
    margin-top: 35px;
    .col {
        width: calc(100% / 4 - 36px);
        margin: 18px;
        border: 1px solid rgb(235, 235, 235);
        border-radius: 5px;
        div {
            margin: 24px;
        }
    }
 }
 
 p {
    font-size: 12px;
 }
 .reading {
    letter-spacing: 0.15mm;
    font-size: 15px;
    color: $color-green;
    font-weight: 600;
    margin-top: 30px;
    cursor: pointer;
 }
 h4 {
    font-weight: 400;
 }
 .col:hover {
    background-color: rgb(235, 235, 227);
    transform: scale(1.03);
    transition-duration: 0.5s;
    border: 1px solid gray;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      

 }
 h4:hover {
    color: $color-green;
    cursor: pointer;
 }
 span:hover {
    color: $color-green;
    cursor: pointer;
 }
 .d-flex {
    display: flex;
    
 }
 button {
    font-size: 14px;
    border: none;
    padding: 9px 28px;
    border-radius: 20px;
    font-weight: 400;
    letter-spacing: 0.15mm;
    margin: 30px auto;
    color: white;
    background-color: $button-h4-icon-color;
   
 }
 button:hover {
        filter: brightness(0.75) contrast(1.3);
        
      }
 img {
   width: 100%;
   height: 30vh;
   padding: 18px;
   object-fit: cover;
 }    
</style>