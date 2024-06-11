<script>
export default{
    name: 'AppHome',
}
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
        max-width: 700px;
        margin: 0 auto;
        
        

        div {
            width: 70%;
            margin-left: 0;
        }
     }
     
     
     }
  
  #jumbotron img {
    width: 100%;
  }
  #jumbotron h4 {
    text-transform: uppercase;
    font-size: 8px;
    padding-top: 140px;
    filter: brightness(100%);
  }
  h1 {
    font-size: 28px;
    margin-top: 20px;
    margin-bottom: 30px;
    
  }
   
  #jumbotron button {
    background-color: white;
    color: black;
    margin-bottom: 150px;
  }
  #jumbotron button:hover {
    background-color: #3d6f42;
    color: white;
  }

   button {
    
    font-size: 7px;
    border: none;
    padding: 5px 16px;
    border-radius: 20px;
    font-weight: 600;
    font-stretch: expanded;

   }
   #fix .container-fluid {
    background-image: url(../img/bg-transparent-3.png);
    

     div {
        max-width: 550px;
        margin: 0 auto; 
        display: flex;
        color: white;
        font-size: 10px;
        height: 80px;
        //align-items: center;
        

        img {
            height: 80%;
            align-self: flex-end;
        }

        p {
            
            margin: auto 10px;
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
</style>