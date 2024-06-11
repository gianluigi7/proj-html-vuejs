<script>
export default{
    name: 'AppHome',
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
                <h1>
                We know animals are a part of your famlily, let us help take care of them
                
                </h1>
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
    <section id="browse">
      <h3 class="main-color">
        Browse by category
      </h3>
       <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laboriosam eos officia inventore voluptates consequatur recusandae rerum consectetur 
       </div>
       <div class="contenitore">
         <div class="col">
            <img src="../img/product-4.jpg">
         </div>
         <div class="col">
            <img src="../img/product-2.jpg">
         </div>
         <div class="col">
            <img src="../img/product-3.jpg">
         </div>
         <div class="col">
            <img src="../img/product-9.jpg">
         </div>
       </div>
    </section>
    <!-- da fissare -->

    
</template>

<style scoped lang="scss">
  #jumbotron .container-fluid {
    max-width: 100%;
    background-image: url(../img/banner-5@2x-scaled.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    height: 100%;
     //filter: brightness(65%);
    
    
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
  #jumbotron h4 {
    text-transform: uppercase;
    font-size: 13px;
    padding-top: 230px;
    
  }
  h1 {
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
    font-stretch: expanded;

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
     h3 {
       text-align: center;
       margin-top: 100px;
     }
     div {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
        font-size: 13px;
        margin-top: 25px;
        margin-bottom: 20px;
     }
     .contenitore {
        display: flex;
        flex-wrap: wrap;
        max-width: 1240px;
        .col {
            margin: 20px;
            width: calc(100% / 4 - 40px);
            img {
                width: 100%;
            }
        }
     }
    
   }
   h3 {
    font-size: 34px;
    font-weight: 400;
   }
</style>