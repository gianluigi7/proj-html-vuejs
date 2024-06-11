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
    
</template>

<style scoped lang="scss">
  .container-fluid {
    max-width: 100%;
    background-image: url(../img/banner-5@2x-scaled.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
    filter: brightness(65%);
    
    
     div {
        color: white;
        max-width: 700px;
        margin: 0 auto;
        height: 1200px;

        div {
            width: 70%;
            margin-left: 0;
        }
     }
     
     
    
  }

  #jumbotron img {
    width: 100%;
  }
  h4 {
    text-transform: uppercase;
    font-size: 8px;
    padding-top: 140px;
  }
  h1 {
    font-size: 28px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
   
   button {
    background-color: white;
    color: black;
    font-size: 7px;
    border: none;
    padding: 5px 16px;
    border-radius: 20px;
    font-weight: 600;
    font-stretch: expanded;

   }
</style>