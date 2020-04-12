<template>
  <div id="fried-chix">
    <div class="image">
      <img src="../assets/soccer6.png" alt srcset />
    </div>

    <div class="fried-chix-text">
      <div class="card-heading">
        <h1>World Cup 2018</h1>
      </div>

      <div class="card-text">
        <div>Being Polish, the love of soccer is in my blood. Since the World Cup was starting and I was just getting into learning VueJS, I decided to create a website that would pull game information from an API and output all the relevant data to the user.</div>
      </div>
      <div class="link-and-github">
        <span class="link button">
          <a href="https://nervous-turing-b0b50d.netlify.com" target="_blank">
            <font-awesome-icon icon="link" size="1x" />URL
          </a>
        </span>
        <span class="git button">
          <a href="https://github.com/bartlomein/World-Cup-2018" target="_blank">
            <font-awesome-icon :icon="['fab','github']" size="1x" />Code
          </a>
        </span>
      </div>
      <div class="built-with">
        <span class="technolojeesus">HTML</span>
        <span class="technolojeesus">CSS</span>
        <span class="technolojeesus">Javascript</span>
        <span class="technolojeesus">VueJS</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  margin-right: 20px;
  color: white;
  border: 2px solid #ff715b;
  background-color: #ff715b;
  border-radius: 5px;
  padding: 7px;
}
.git {
  color: white;
  border: 2px solid #ff715b;
  border-radius: 5px;
  padding: 7px;
  background-color: #ff715b;
}
.technolojeesus {
  margin-right: 20px;
  border: 2px solid #88ccf1;
  padding: 5px;
  border-radius: 5px;
  color: #231f20;
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
  color: #231f20;
}
.link-and-github {
  max-width: 50%;
  font-size: 20px;
  margin: 60px 30px 70px 0px;
}

.fried-chix-text {
  text-align: left;
  height: 100%;
  max-width: 765px;
  padding-right: 30px;
  padding-left: 327px;
  color: #231f20;
}
.card-text {
  text-align: left;
  color: #231f20;
}
.image img {
  border-radius: 5px 0px 0px 5px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.button svg {
  padding-right: 5px;
}
</style>
