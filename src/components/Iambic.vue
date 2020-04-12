<template>
  <div id="iambic">
    <div class="image">
      <img src="../assets/iambic.png" alt srcset />
    </div>

    <div class="fried-chix-text">
      <div class="card-heading">
        <h1>Iambic.dev</h1>
      </div>

      <div class="card-text">
        <div>Taking inspiration from my past projects, I created Iambic.dev, a full stack web-app. Using a self made poetry generator API, that generates poems by creating markov chains from thousands of other poems, a user is able to vote and comment on these AI generated poems. Backend is created in Apollo, GraphQL and MongoDB for storage, poetry generation and the API for it is made with Python, while the front-end is with React (with hooks) in Typescript.</div>
      </div>
      <div class="link-and-github">
        <span class="link button">
          <a href="https://iambic.dev" target="_blank">
            <font-awesome-icon icon="link" size="1x" />URL
          </a>
        </span>
        <span class="git button">
          <a href="https://github.com/bartlomein/iambic" target="_blank">
            <font-awesome-icon :icon="['fab','github']" size="1x" />Code
          </a>
        </span>
      </div>
      <div class="built-with">
        <span class="technolojeesus">React</span>
        <span class="technolojeesus">Typescript</span>
        <span class="technolojeesus">Apollo</span>
        <span class="technolojeesus">GraphQL</span>
        <span class="technolojeesus">Python</span>
        <span class="technolojeesus">NodeJS</span>
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
  color: black;
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
#iambic {
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
  margin: 50px 30px 50px 0px;
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
