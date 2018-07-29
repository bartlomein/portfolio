<template>
    <div id = "fried-chix">
        <div class = "image"><img src="../assets/tech.png" alt="" srcset=""></div>

        <div class = "fried-chix-text">
            <div class ="card-heading">
            <h1>Other techonologies I work with</h1>
            </div>

        <div class ="card-text">
        <div>Some of the other front and back end technologies I have worked with during my career:
        </div>
          </div>
           <div class = "build-with-container">
               <div class = "built-with">
              <div class="technolojeesus">Git</div>
              <div class="technolojeesus">Wordpress</div>
              <div class="technolojeesus">MySQL</div>
              <div class="technolojeesus">Adobe Photoshop</div>
              <div class="technolojeesus">Adobe Premiere</div>

              <div class="technolojeesus">PostgreSQL</div>
              <div class="technolojeesus">FlaskSQL-Alchemy</div>

              <div class="technolojeesus">Phonegap</div>
              <div class="technolojeesus">Ubuntu</div>


              
          </div>
          </div>
          </div>
         
              
         
        </div>
        
</template>

<script>
export default {};
</script>

<style scoped>
.built-with{
    margin-top:40px;
    height: 100%;
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-gap: 10px;

  text-align: center;

}

.build-with-container{


}
.technolojeesus{
    margin-right:20px;
    border:2px solid #88CCF1;
    padding:5px;
    border-radius:5px;
}
#fried-chix {
  background-color: white;
  position: relative;
  height: 400px;
  max-height: 400px;
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
