<template>
    <div id = "fried-chix">
        <div class = "image"><img src="../assets/cms.png" alt="" srcset=""></div>

        <div class = "fried-chix-text">
            <div class ="card-heading">
            <h1>CMS Checkpoint</h1>
            </div>

        <div class ="card-text">
        <div>It is a well known fact, that everyone in the world loves fried chicken, so naturally the purpose for this project is self evident. Using the Google Javascript Maps API one is able to enter a location, and be given all the chicken spots in the area, including all the relevant information about the particular spot.
        </div>
          </div>
           <div class = "link-and-github">
          <img src="../assets/Asset290.png" alt="" srcset=""><img src="../assets/github.png" alt="" srcset="">
              </div>
               <div class = "built-with">
              <span class="technolojeesus">HTML</span>
              <span class="technolojeesus">CSS</span>
              <span class="technolojeesus">Python</span>
              <span class="technolojeesus">Flask</span>
          </div>
          </div>
         
              
         
        </div>
        
</template>

<script>
export default {};
</script>

<style>
.technolojeesus{
    margin-right:20px;
    border:2px solid #88CCF1;
    padding:5px;
    border-radius:5px;
    color:#231F20;
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
  color:#231F20;
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
