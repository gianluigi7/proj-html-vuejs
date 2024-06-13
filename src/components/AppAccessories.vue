<script>
export default {
    name: 'AppAccessories'
}
</script>
<template>
    <div class="container-fluid">
        <div class="row text-white">
            <div class="col-6 ph-acc d-flex align-items-center justify-content-center flex-column gap-3">
                <div class="lead">FIND THE BEST ANIMALS SUPPLIES</div>
                <div class="display-5">Popular accessories</div>
                <button class="btn btn-primary rounded-pill">View all toys accessories</button>
            </div>
            <div class="col-6 ph-cat d-flex align-items-center justify-content-center flex-column gap-3">
                 <div class="lead">FIND THE BEST FOOD</div>
                <div class="display-5">New food arrival</div>
                <button class="btn btn-primary rounded-pill">View all food products</button>
            </div>
            

        </div>
    </div>
    
</template>
<style scoped lang="scss">
.ph-acc{
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../img/banner-accessories.jpg');

    background-size: cover;
    background-position: center;
    height: 500px;
    transition: transform 0.5s, filter 0.5s ease-in-out;
    
}
.ph-cat{
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../img/banner-cat.jpg');
    background-size: cover;
    background-position: center;
    height: 500px;
    transition: transform 0.5s, filter 0.5s ease-in-out;
    
}
.ph-acc:hover, .ph-cat:hover{
    transition: 0.5s;
    transform: scale(1.1);
}
.btn {
    background-color: white;
    color: black;
    border: none;
    padding: 10px 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}


</style>