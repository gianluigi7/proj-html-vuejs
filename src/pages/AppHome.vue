<script>
import AppCard from '../components/AppCard.vue';
import AppNewsLetter from '../components/AppNewsLetter.vue';
import AppTestimonial from '../components/AppTestimonial.vue';


export default{
    name: 'AppHome',
    data() {
      return {
        //shop
        shop: [
          {
            type: 'Transport',
            numbers: '(7)',
            image: 'src/img/product-4.jpg',
          },
          {
            type: 'Toys',
           numbers: '(6)',
           image: 'src/img/product-2.jpg',
           },
           {
            type: 'Food',
            numbers: '(6)',
            image: 'src/img/product-3.jpg',
           },
          {
            type: 'Bed',
           numbers: '(1)',
           image: 'src/img/product-9.jpg',
           }],
           //food
           foods: [
             {
              h3: 'Kibble',
              p: 'Dry dog food',
              image: 'src/img/food-transparent-18.png',
              button: 'shop dry food'
             },
             {
              h3: 'Moist',
              p: 'Canned dog food',
              image: 'src/img/food-transparent-17.png',
              button: 'shop moist food'
             },
             {
              h3: 'Frozen',
              p: 'Freeze-dried dog food',
              image: 'src/img/food-transparent-16.png',
              button: 'shop frozen food'
             }
           ],
           //items
           items: [
            {
              image: 'src/img/product-23.jpg',
              h5:'Chewable Weight',
              price: '11.00',
              sale: null
            },
            {
              image: 'src/img/product-22.jpg',
              h5:'Chewable toy',
              price: '25.00',
              sale: 52
            },
            {
              image: 'src/img/product-21.jpg',
              h5:'transport cage',
              price: '25.00',
              sale: null
            },
            {
              image: 'src/img/product-20.jpg',
              h5:'Dog Leash',
              price: '25.00',
              sale: null
            },
           ],
           products: [
            {
              image: 'src/img/product-21.jpg',
              h5:'Transport cage',
              price: '25.00',
              sale: null
            },
            {
              image: 'src/img/product-20.jpg',
              h5:'Dog Leash',
              price: '25.00',
              sale: null
            },
            {
              image: 'src/img/product-16.jpg',
              h5:'Animal transport cage',
              price: '35.00',
              sale: 29
            },
            {
              image: 'src/img/product-11.jpg',
              h5:'colorful cat leash',
              price: '25.00',
              sale: null
            },
            {
              image: 'src/img/product-5.jpg',
              h5:'Animal transport cage',
              price: '25.00',
              sale: null
            },
            {
              image: 'src/img/product-4.jpg',
              h5:'Animal transport bag',
              price: '25.00',
              sale: null
            },
           ]
      }},
    components: {
      AppCard,
      AppTestimonial,
      AppNewsLetter,
    },
    methods: {
        applySales(total, percentage) {
        if (percentage) {

          let discountValue = (total / 100) * percentage;
        let finalPrice = total - discountValue;
      
      return finalPrice.toFixed(2);
      }
      }
    
}}
</script>
<template>
  <section id="jumbotron">

      <div>
          <div class="container-fluid">
            <div>
              <div>
                <div>
                <h4>find the best animal supplies</h4>
                <h2>
                We know animals are a part of your famlily, let us help take care of them
                
                </h2>
                <router-link to="/about">
                  <button>
                      Learn more about us
                  </button>
                </router-link>
              </div>
              </div>
            </div>  
          </div>
        </div>
    </section>
    <!-- fine jumbo -->
     <section id="fix">

         <div class="container-fluid bg-main-color">
             <div>
                <img src="../img/food-transparent-5.png">

                <p>
                    Get $25 OFF your first purchase of our homemade pet food! <span>Visit the shop</span>
                </p>
             </div>
            
         </div>
        </section>
      <!-- da fissare -->
    <section id="browse">
      <h3 class="main-color">
        Browse by category
      </h3>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laboriosam eos officia inventore voluptates consequatur recusandae rerum consectetur 
       </p>
       <div class="contenitore-shop">
         <div class="col" v-for="card in shop">
            <img :src="card.image">
            <h5>{{card.type}}<span>{{card.numbers}}</span></h5>
         </div>
       </div>
       </section>
    <section id="arrival">
     <div class="contenitore">
        <div class="bg-main-color scale" v-for="food in foods">
           <div>
             <h3>{{food.h3}}</h3>
             <p>{{food.p}}</p>
             <img :src="food.image">
             <button>{{food.button}}</button>
           </div>
        </div>
     </div>
     <div class="img-container">
       <div>
        <h4>Find the best animal supplies</h4>
        <h2>New arrivals weekly</h2>
        <router-link to="/about">
          <button>Learn more about us</button>
        </router-link>
       </div>
     </div>
    </section>
    <section id="best-sellers">
      <div class="contenitore">
        <div>
          <h5>All-time best sellers</h5>
          <h3 class="main-color">Item everyone loves</h3>
        </div>
        <div><button>view all products</button></div>
      </div>
      
      <div class="contenitore-shop">
        <div class="col" v-for="item in items">
            <img :src=item.image>
            <h5>{{ item.h5 }}</h5>
            <p class="price" :class="{'line-tr': item.sale}">&#65284;{{ item.price }} <span class="sconto" v-if="item.sale">{{ item.sale }}% off</span>
            <span class="new-price" v-if="item.sale">&#65284;{{applySales(item.price, item.sale)}}</span></p>
            
            <div class="sale" v-if="item.sale">Sale!</div>  <!--  :class="{'none': item.onSale === false}" -->
             
         </div>
         
      </div>
    </section>
  <AppTestimonial :limit="3" class="mt-5"></AppTestimonial>
  <AppNewsLetter></AppNewsLetter>
  <AppCard></AppCard>
  
  <section id="find">
    <div class="container-max">
      <div class="left">
        <div>
        <h4>Find the best animal supplies</h4>
        <h2>Popular accessories</h2>
        <button>View all toys accessories</button>
     </div>
    </div>
      <div class="right">
        <div>
        <h4>Find the best food</h4>
        <h2>New food arrival</h2>
        <button>View all food products</button>
     </div>
      </div>
      </div>
        <div class="bot bg-main-color">
           <div class="row">
             <div class="col-icon">
              <font-awesome-icon icon="fa-solid fa-truck" />
              <p>Free worldwide deliveries</p>
             </div>
             <div class="col-icon">
              <font-awesome-icon icon="fa-regular fa-map" />
              <p>Free stores near to you</p>
             </div>
             <div class="col-icon">
              <font-awesome-icon icon="fa-solid fa-dollar-sign" />  
              <p>Best prices guarranteed</p>
             </div>
             <div class="col-icon">
              <font-awesome-icon icon="fa-regular fa-credit-card" />
              <p>All credit card accepted</p>
             </div>
           </div>
        </div>
  </section>

  <section id="products">
  <div class="contenitore">
        <div>
          <h3 class="main-color">New Products arrival</h3>
          <h5 class="light-green">latest products</h5>
        </div>
      </div>
      
      <div class="contenitore-shop">
        <div class="col-products" v-for="product in products">
            <img :src=product.image>
            <h5>{{ product.h5 }}</h5>
            <p class="price" :class="{'line-tr': product.sale}">&#65284;{{ product.price }} <span class="sconto" v-if="product.sale">{{ product.sale }}% off</span>
            <span class="new-price" v-if="product.sale">&#65284;{{applySales(product.price, product.sale)}}</span></p>
            
            <div class="sale" v-if="product.sale">Sale!</div>  <!--  :class="{'none': item.onSale === false}" -->
             
         </div>
         
      </div>

  </section>
  
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/_variables.scss';
  #jumbotron .container-fluid {
    max-width: 100%;
    background-image: url(../img/banner-5@2x-scaled.jpg);
    background-size: cover;
    background-color: #c4c3c3;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    height: 100%;
    
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
  }
  #jumbotron h4, .img-container h4, #find h4 {
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 0.45mm;
    font-weight: 600;
  }
  #jumbotron h4 {
    padding-top: 230px;
  }
  h2 {
    font-size: 52px;
    margin-top: 30px;
    margin-bottom: 40px;
    
  }
   
  #jumbotron button {
    background-color: white;
    color: black;
    margin-bottom: 250px;
  }
  #jumbotron button:hover {
    background-color: $button-bg-hover;
    color: white;
  }

   button {
    
    font-size: 14px;
    border: none;
    padding: 9px 28px;
    border-radius: 20px;
    font-weight: 400;
    letter-spacing: 0.15mm;

   }
   #fix .container-fluid {
    background-image: url(../img/bg-transparent-3.png);
    background-size: 15%;

     div {
        max-width: 1000px;
        margin: 0 auto; 
        display: flex;
        color: white;
        font-size: 20px;
        height: 130px;
        //align-items: center;
        

        img {
            height: 80%;
            align-self: flex-end;
        }

        p {
            
            margin: auto 20px;
            
        }

        span {
            text-decoration: underline;
            color: lightgray;
            margin-left: 13px;

            
        }
     }
     span:hover {
                color: white;
                
     }
   }
   #browse {
       margin-top: 100px;
     h3 {
       text-align: center;
       
     }
     p {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
        font-size: 16px;
        margin-top: 25px;
        margin-bottom: 20px;
        letter-spacing: 0.25mm;
     }
     
     }
      
   h3 {
    font-size: 34px;
    font-weight: 400;
   }
   #arrival .contenitore {
    max-width: 1240px;
    display: flex;
    margin: 100px auto;
     div {
        width: calc(100% / 3 - 12px);
        margin: 6px;
        background-image: url(../img/bg-transparent-3.png);
        background-size: 100%;
        background-repeat: no-repeat;
        text-align: center;
        div {
          margin: 60px auto;
          width: 60%;
          h3 {
            color: white;

          }
          p {
            color: $color-green;
            margin-top: 10px;
            font-size: 16px;
            font-weight: 600;
          }
          img {
            width: 100%;
            margin-top: 30px;
          }
          button {
            color: white;
            background-color: $button-h4-icon-color;
            font-weight: 600;
            margin-top: 25px;
          }
        }

     }
     }
     .scale:hover {
       transform: scale(1.03);
       filter: brightness(1.2);
       transition-duration: 0.4s; 
       }
    .img-container {
         max-width: 1240px;
         background-image: url(../img/banner-3@2x-scaled.jpg);
          background-size: cover;
          margin: 20px auto;
          background-color: #c4c3c3;
          background-blend-mode: multiply;
          div {
            padding: 150px 0;
            color: white;
            text-align: center;
            button {
              background-color: white;
              color: black;
              }}}
            .img-container button:hover{
                  background-color: $button-h4-icon-color;
                  color: white;
                }
  #best-sellers .contenitore {
    max-width: 1240px;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    div {
      margin-bottom: 40px;
      h5 {
        color: $color-green;
        font-weight: 400;
        font-size: 17px;
        letter-spacing: 0.30mm;
      }
      button {
        margin-top: 30px;
        color: white;
        background-color: #3d6f42;
        
      }
      button:hover {
        filter: brightness(0.75) contrast(1.3);
        
      }
    }
  }
  .contenitore-shop {
         display: flex;
         flex-wrap: wrap;
         max-width: 1240px;
         margin: 0 auto;
         .col {
             margin: 20px;
             width: calc(100% / 4 - 40px);
             position: relative;
             img {
                 width: 100%;
             }
         }
        .col-products {
          width: calc(100% / 3 - 40px);
          margin: 20px;
          position: relative;
          img {
            width: 100%;
          }
        } 
        h5 {
         margin-top: 15px;
         font-weight: 500;
         letter-spacing: 0.15mm;
         text-align: center;
          span {
             vertical-align: text-top;
             margin-left: 3px;
             font-size: 12px;
          }
        }
      }

  #find {
     margin-top: 60px;
    .container-max {
      max-width: 100vw;
      display: flex;
      .left, .right {
        width: 50%;
        background-size: cover; 
        background-color: #c4c3c3;
        background-blend-mode: multiply;
       div {
        padding: 150px 0;
        color: white;
        text-align: center;
       button {
         background-color: white;
         color: black;
}}}}
      .right {
        background-image: url(../img/banner-9@2x.jpg);
        }
      .left {
        background-image: url(../img/banner-8@2x.jpg);
      }
      .right:hover, .left:hover{
        transform: scale(1.03);
        transition: 0.2s;
        cursor: pointer;
      }
      .bot {
        background-image: url(../img/bg-transparent-3.png);
        background-repeat: repeat-x;
      }
      .row {
        max-width: 1240px;
        display: flex;
        margin: 0 auto;
        padding: 100px 0;
        
      }
      .col-icon {
        width: calc(100% / 4 - 40px);
        margin: 20px;
        color: white;
        text-align: center;
        
      }
      .fa-truck, .fa-map, .fa-dollar-sign, .fa-credit-card {
        font-size: 43px;
        margin-bottom: 20px;
      }
  }
  .price, .new-price {
    text-align: center;
    color: $color-green;
    position: relative;
  }
  .sale {
    border-radius: 50%;
    position: absolute;
    left: 10px;
    top: 20px;
    padding: 12px 7px;

  } .sconto, .sale {
    color: white;
    background-color: #3d6f42;
  }
  .sconto {
    border-radius: 5px;
    padding: 1px 8px;
    letter-spacing: 0.55mm;
    font-weight: 600;
    font-size: 12px;
    vertical-align: text-top;
    text-decoration: none;
    position: absolute;
    right: 5%;
    top: 1px;
  }
  .line-tr {
    text-decoration: line-through;
    color: black;
    
  } .new-price {
    position: absolute;
    left: 15%;
    top: 1px;
  }
  #products {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 40px;
    h5 {
      
      margin-top: 20px;
      font-weight: 400;
      letter-spacing: 0.25mm;
    } 
    
  }
  .light-green {
    color: $color-green;
  }
  
</style>