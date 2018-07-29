<template>
    <div id = "fried-chix">
        <div class = "image"><img src="../assets/rap1.png" alt="" srcset=""></div>

        <div class = "fried-chix-text">
            <div class ="card-heading">
            <h1>Other techonologies I work with</h1>
            </div>

        <div class ="card-text">
        <div>Working at an agency I have learned to work with several front end and back end technologies, not limited to:
        </div>
          </div>
           
               <div class = "built-with">
              <span class="technolojeesus">Wordpress</span>
              <span class="technolojeesus">Adobe Photoshop</span>
              <span class="technolojeesus">MySQL</span>
              <span class="technolojeesus">PostgreSQL</span>
              <span class="technolojeesus">EmberJS</span>
              <span class="technolojeesus">Phonegap</span>
              <span class="technolojeesus">Xcode</span>
              
          </div>
          </div>
         
              
         
        </div>
        
</template>

<script>
export default {};
</script>

<style>
.built-with{
    margin-top:20px;
    height: 100%;
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
