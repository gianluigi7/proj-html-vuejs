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
                    image: '../img/blog-1.jpg',
                },
                {
                    date:'April 19th, 2020',
                    title:'Stop cats from scratching furniture',
                    image: '../img/blog-2.jpg',
                },
                {
                    date:'April 18th, 2020',
                    title:'Where to buy the best pet food',
                    image: '../img/blog-3.jpg',
                },
                {
                    date:'April 17th, 2020',
                    title:'Proper care for your pet toys',
                    image: '../img/blog-4.jpg',
                }
            ]
        }
    }
}
</script>
<template>
    <h2 class="main-color">{{ h2 }}</h2>
    <h5>{{ h5 }}</h5>
    <div class="contenitore">
       <div class="col" v-for="(card, index) in cards">
          <img src="../img/blog-1.jpg">
          <!-- <img :src="cards[index].image"> -->
         <div>

            <p>{{ cards[index].date }} <span>Tips & Tricks</span></p>
            <h4>{{ cards[index].title }}</h4>
            <p class="reading">continue reading</p>
         </div>
         
       </div>
       </div>
       <div class="d-flex">
           <button>Read All Articles</button>
       </div>
</template>
<style scoped lang="scss">
 h2, h5 {
    text-align: center;
 }
 h5 {
    color: #3d6f42;
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
    font-size: 13px;
    color: #3d6f42;
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
    transition-duration: 0.3s;
    border: 1px solid gray;
 }
 h4:hover {
    color: #3d6f42;
    cursor: pointer;
 }
 span:hover {
    color: #3d6f42;
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
    background-color: #3d6f42;
   
 }
 button:hover {
        filter: brightness(0.75) contrast(1.3);
        
      }
 img {
   width:85%;
   height: 42%;
   padding: 18px;
   object-fit: cover;
 }    
</style>