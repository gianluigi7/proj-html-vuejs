<script>
 export default{
    name: 'AppCard',
    data() {
        return {
            h2:'Get the best tips & tricks',
            h5:'Recents article',
            cards: [
                {
                    date:'April 21st, 2020 Tips & Tricks',
                    title:'How to "loose leash walk" your dog',
                    img: '../img/blog-1.jpg.jpg'
                },
                {
                    date:'April 21st, 2020 Tips & Tricks',
                    title:'How to "loose leash walk" your dog',
                    img: '../img/blog-2.jpg.jpg'
                },
                {
                    date:'April 21st, 2020 Tips & Tricks',
                    title:'How to "loose leash walk" your dog',
                    img: '../img/blog-3.jpg.jpg'
                },
                {
                    date:'April 21st, 2020 Tips & Tricks',
                    title:'How to "loose leash walk" your dog',
                    img: '../img/blog-4.jpg.jpg'
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
         <img :src="cards[index].img">
         <p>{{ cards[index].date }}</p>
         <h4>{{ cards[index].title }}</h4>
       </div>
    </div>
</template>
<style scoped lang="scss">
 h2, h5, p, h4 {
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
    .col {
        width: calc(100% / 4 - 40px);
        margin: 20px;
        height: 200px;
        border: 1px solid rgb(235, 235, 235);
        border-radius: 5px;
    }
 }
</style>