<template>
  <div id="app">
    <div class="introduction">
      <transition appear appear-active-class="fade-enter-heading">
        <div class="menu">
          <TopMenu />
        </div>
      </transition>
      <transition appear appear-active-class="fade-enter-heading">
        <div class="name">
          <h1>Bartlomiej Tyrpien</h1>
        </div>
      </transition>

      <div class="terminal-div">
        <Terminal />
      </div>
    </div>
    <div class="portfolio-work-container">
      <div id="port">Portfolio</div>
      <hr />
      <div class="card-container">
        <MarketMotion />
      </div>
      <div class="card-container">
        <Iambic />
      </div>
     
      <div class="card-container">
        <Soccer />
      </div>
      <div class="card-container">
        <Rap />
      </div>
    </div>
    <hr />
    <div class="card-container tech-container">
      <Tech />
    </div>
    <div id="contact">Contact</div>
    <hr />
    <div class="card-container contact-container">
      <ContactTop />
    </div>
    <div class="bottom-footer">Bartlomiej Tyrpien 2025</div>
    <br />
  </div>
</template>

<script>
import Checkpoint from "./components/Checkpoint.vue";
import ContactTop from "./components/ContactTop.vue";
import Iambic from "./components/Iambic.vue";
import MarketMotion from "./components/MarketMotion.vue";
import Rap from "./components/Rap.vue";
import Soccer from "./components/Soccer.vue";
import Tech from "./components/Tech.vue";
import Terminal from "./components/Terminal.vue";
import TopMenu from "./components/TopMenu.vue";

export default {
  name: "app",
  components: {
    Terminal,
    TopMenu,
    ContactTop,
    Iambic,
    Soccer,
    Checkpoint,
    MarketMotion,
    Rap,
    Tech
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway|Work+Sans|Fira+Mono");

/*BUTTON*/
a {
  text-decoration: none;
}

/*transitions*/
.fade-enter-heading {
  animation: heading 1s;
  animation-timing-function: easeOutElastic;
  animation-fill-mode: both;
}

@keyframes heading {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.button {
  -webkit-transition: all 500ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
  -moz-transition: all 500ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
  -ms-transition: all 500ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
  -o-transition: all 500ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
  transition: all 500ms cubic-bezier(0.39, 0.5, 0.15, 1.36);

  margin: 20px auto;

  text-decoration: none;
  border-radius: 4px;
  padding: 10px 20px;
}

.button {
  color: rgba(30, 22, 54, 0.6);
}
.button a {
  color: white;
}

.button:hover {
  color: #ff715b;
  box-shadow: white 0 0px 0px 40px inset;
  cursor: pointer;
}
.button:hover a {
  color: #ff715b;
}

html,
body {
  height: 100%;
  background-color: #f7f0f5;
  height: 100vh !important;
}
.contact-top-container {
  margin-top: 50px;
  margin-bottom: 50px;
}
#port {
  font-size: 60px;
  color: #231f20;
}
#contact {
  font-size: 60px;
  color: #231f20;
}
hr {
  border: 2px solid #ff715b;
  width: 5%;
}
.menu {
  float: right;
  width: 100%;
  text-align: right;
}

.introduction {
  width: 100%;
  height: 100vh;
}
.introduction h1 {
  text-align: left;
  margin-top: 0px;
  font-size: 70px;
  letter-spacing: 7px;

  font-family: "Raleway", sans-serif;
  font-weight: 900 !important;
  color: #231f20;
}
#app {
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
}
.fried-chix-text h1 {
  font-family: "Raleway", sans-serif;
  font-weight: 700 !important;

  font-size: 40px;
  font-weight: bold;
}
.card-container {
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: minmax(100px, auto);
  grid-gap: 10px;
}
.contact-top-container {
  margin-top: 100px;
}
.name {
  font-size: 70px;
  margin-bottom: 30px;
  color: #71677c;
  font-family: "Muli", sans-serif;
}

.terminal {
  width: 100%;
  margin: 0 auto;
}

.vue-typer {
  font-family: monospace;
}
.complete {
  display: inline-block !important;
}
.vue-typer .custom.char {
  color: white;
  font-weight: 500;
  line-height: 50px;
  background-color: #3a405a;
  font-family: "Fira Mono", monospace;
}
.vue-typer .custom.char.selected {
  background-color: #3a405a;
}

.vue-typer .custom.caret {
  width: 10px;
  height: 20px;
  background-color: #99b2dd;
}

.terminal-text-mobile {
  padding: 10px 10px 30px 10px;
  text-align: left;
  margin: 5px auto;
  line-height: 30px;
  font-size: 20px;

  font-family: "Fira Mono", monospace;
}

.bottom-footer {
  padding: 30px 0px 0px 10px !important;
}

/*MEDIA QUERIES*/
@media only screen and (min-width: 1000px) {
.single{
  margin:0 !important;
}
}
@media only screen and (max-width: 1000px) {
  .technolojeesus {
    margin: 2px;
    display: flex;
    justify-content: center;
  }
  #port {
    margin-top: 40px;
  }
  .card-heading {
    display: flex;
    justify-content: center;
  }
  .card-text {
    text-align: center !important;
  }
  .card-heading h1 {
    font-size: 24px;
  }
  .image {
    display: none;
  }
  .fried-chix-text {
    padding: 10px !important;
    max-width: 90% !important;
    margin: 0 auto;
  }
  .link-and-github {
    font-size: 16px !important;
    margin: 0px 10px 0px 0px !important;
    max-width: 100% !important;
    display: flex;
    align-content: center;
  }
  .built-with {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .vue-typer .custom.char {
    line-height: 40px !important;
  }
}

@media only screen and (min-width: 600px) {
  .terminal-text-mobile {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .info {
    font-size: 15px;
    padding: 5px !important;
  }
  .card-text {
    font-size: 15px !important;
  }
  .name {
    margin-bottom: 40px;
  }
  .terminal-container {
    height: 430px !important;
  }
  .card-container {
  }
  .terminal-text {
    font-size: 16px !important;
    display: none;
  }
  .introduction h1 {
    font-size: 40px;
  }
  .technolojeesus {
    font-size: 12px;
  }
  .tech-container {
  }
  .tech-container #fried-chix {
    height: 100% !important;
    max-height: 100% !important;
  }
  .contact-container #fried-chix {
    height: 100% !important;
    max-height: 100% !important;
  }
  .contact-container .built-with .email-and-other span {
    margin: 0 auto;
  }
  .contact-container .built-with span {
    display: flex;
    justify-content: center;
    margin-right: 10px;
  }

  .contact-container .built-with {
    display: grid;
    grid-template-columns: 1fr;
  }
}
@media only screen and (max-width: 400px) {
  .info {
    font-size: 14px;
    padding: 2px !important;
  }
}
</style>
