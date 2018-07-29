<template>
    <div id = "fried-chix">
        <div class = "image"><img src="../assets/me2.png" alt="" srcset=""></div>

        <div class = "fried-chix-text">
            <div class ="card-heading">
            <h2>Bartlomiej Tyrpien</h2>
            </div>

        <div class ="card-text">
        <div>Here are some ways you contact me:
        </div>
          </div>
           
               <div class = "built-with">
              <span class="technolojeesus">bartlomiej.tyrpien@gmail.com</span>
              <span class="technolojeesus">Resume</span>
              <span class="technolojeesus">Github</span>
              <span class="technolojeesus">Twitter</span>
              <span class="technolojeesus">Instagram</span>
              
          </div>
          </div>
         
              
         
        </div>
        
</template>

<script>
export default {};
</script>

<style scoped>
.built-with{
    margin-top:20px;
}
.technolojeesus{
    margin-right:20px;
    
    border:2px solid #FF715B;
    padding:5px;
    border-radius:5px;
}
#fried-chix {
  background-color: white;
  position: relative;
  height: 210px;
  max-height: 210px;
  max-width: 100%;
  width: 1000px;
  border-radius: 5px;
  box-shadow: 5px 5px 50px darkgray;
}
.link-and-github img{
    max-width:50%;
    width:15%;
    margin:30px 30px 30px 0px;



}

.fried-chix-text {
  text-align: left;
  height: 100%;
  max-width: 765px;
  padding-right: 30px;
  padding-left: 327px;
  color:#231F20;
}
.card-text {
  text-align: left;
  color:#231F20;
}
.image img {
  border-radius: 5px 0px 0px 5px;
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
