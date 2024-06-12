<script>
import AppCard from '../components/AppCard.vue';
export default{
    name: 'AppHome',
    components: {
      AppCard,
    }
}
const cards = [
 {type: 'Transport',
  numbers: '(7)'
 },
 {type: 'Toys',
  numbers: '(6)'
 },
 {type: 'Food',
  numbers: '(6)'
 },
 {type: 'Bed',
  numbers: '(1)'
 },
 ];
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
                <button>
                    Learn more about us
                </button>
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
         <div class="col">
            <img src="../img/product-4.jpg">
            <h5>Transport<span>(7)</span></h5>
         </div>
         <div class="col">
            <img src="../img/product-2.jpg">
            <h5>Toys<span>(6)</span></h5>
         </div>
         <div class="col">
            <img src="../img/product-3.jpg">
            <h5>Food<span>(6)</span></h5>
         </div>
         <div class="col">
            <img src="../img/product-9.jpg">
            <h5>Bread<span>(1)</span></h5>
         </div>
       </div>
       </section>
    <section id="arrival">
     <div class="contenitore">
        <div class="bg-main-color scale">
           <div>
             <h3>Kibble</h3>
             <p>Dry dog food</p>
             <img src="../img/food-transparent-18.png">
             <button>Shop dry food</button>
           </div>
        </div>
        <div class="bg-main-color scale">
            <div>
                <h3>Moist</h3>
                <p>Canned dog food</p>
                <img src="../img/food-transparent-17.png">
                <button>Shop moist food</button>

            </div>
        </div>
        <div class="bg-main-color scale">
            <div>
                <h3>Frozen</h3>
                <p>Freeze-dried dog food</p>
                <img src="../img/food-transparent-16.png">
                <button>Shop frozen food</button>

            </div>
        </div>
     </div>
     <div class="img-container">
       <div>
        <h4>Find the best animal supplies</h4>
        <h2>New arrivals weekly</h2>
        <button>Learn more about us</button>
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
        <div class="col">
            <img src="../img/product-23.jpg">
            <h5>Chewable Weight</h5>
         </div>
         <div class="col">
            <img src="../img/product-22.jpg">
            <h5>Chewable toy</h5>
         </div>
         <div class="col">
            <img src="../img/product-21.jpg">
            <h5>Transport cage</h5>
         </div>
         <div class="col">
            <img src="../img/product-20.jpg">
            <h5>Dog leash</h5>
         </div>
      </div>
    </section>
  <AppCard></AppCard>
  
</template>

<style scoped lang="scss">
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
  #jumbotron h4, .img-container h4 {
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
    background-color: #3d6f42;
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
            color: #3d6f42;
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
            background-color: #3d6f42;
            font-weight: 600;
            margin-top: 25px;
          }
        }

     }
     }
     .scale:hover {
       transform: scale(1.03);
       // break-inside: avoid;
       filter: brightness(1.2);
       transition-duration: 0.4s; 
       }
    .img-container {
         max-width: 1240px;
         background-image: url(../img/banner-3@2x-scaled.jpg);
          background-size: cover;
          background-color: antiquewhite;
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
                  background-color: #3d6f42;
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
        color: #3d6f42;
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

     
</style>