<template>
    <div id="contact-top">
        <div class = "contact-me-container">
        <span class  = "contact-me">bartlomiej.tyrpien@gmail.com</span>
        <span class  = "contact-me">Github</span>
        <span class  = "contact-me">Resume</span>
        <span class  = "contact-me">Twitter</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.contact-me{
    margin-right:20px;
    border:2px solid #FF715B;
    padding:5px;
    border-radius:5px;
}
#contact-top {
    margin:50px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  background-color: white;
  position: relative;


  height: 100px;
  max-width: 100%;
  width: 1000px;
  border-radius: 5px;
  box-shadow: 5px 5px 50px darkgray;
}
</style>
