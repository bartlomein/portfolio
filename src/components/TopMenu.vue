<template>
    <div class = "menu">
      <a href="#" v-scroll-to="'#port'">Portfolio</a> | 
      <a href="#" v-scroll-to="{
     el: '#contact',
     duration: 500,
     easing: 'ease-in-out'}">Contact</a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.menu{
  margin-bottom:40px;
  margin-top:20px;
  color:#FF715B;
  font-size:30px;
  
}
.menu a{

color:#FF715B;
  text-decoration: none;
  font-size:26px;
  padding:5px;
  font-weight:bold;
  position:relative;
}
.menu a:after{
   content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  border-bottom: 2px solid #FF715B;
  transition: 0.4s;
}
.menu a:hover:after{
  width:100%;
}


@keyframes hoverbutton {
  from {
    
    border-bottom: none;
   
  }
  to {
    border-bottom:2px solid #FF715B;

  }
}




.menu a:visited{
  color:#FF715B;
}
</style>
