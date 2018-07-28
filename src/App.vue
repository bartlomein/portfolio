<template>
  <div id="app">
    <TopMenu/>
      <div class = "terminal-div" >
        <Terminal/>
        
      </div>
      
      <div class = "portfolio-work-container">
        <div class = "fried-chix-container">
          <Friedchix/>
          
        </div>
        <div class = "fried-chix-container">
          <Soccer/>
          
        </div>
        <div class = "fried-chix-container">
          <Checkpoint/>
          
        </div>
         <div class = "fried-chix-container">
          <Rap/>
          
        </div>
      </div>
      <div class = "contact-top-container">
        <ContactTop/>
      </div>
      
  </div>
</template>

<script>
import Terminal from './components/Terminal.vue'
import TopMenu from './components/TopMenu.vue'
import ContactTop from './components/ContactTop.vue'
import Friedchix from './components/Friedchix.vue'
import Soccer from './components/Soccer.vue'
import Checkpoint from './components/Checkpoint.vue'
import Rap from './components/Rap.vue'


export default {
  name: 'app',
  components: {
    Terminal,TopMenu,ContactTop, Friedchix, Soccer, Checkpoint,Rap
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Lato|Work+Sans');

html, 
body{
  height: 100%;
  background-color:#F7F0F5;
  height: 100vh !important;
}
#app {

  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width:1000px;
  margin:0 auto;


}
.fried-chix-text h1{
font-family: 'Lato', sans-serif;
font-weight:400 !important;

  font-size:40px;
  font-weight:bold;
}
.fried-chix-container{
  margin:50px auto;
   display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: minmax(100px, auto);
  grid-gap:10px;
}
.contact-top-container{
  margin-top:100px;
}
.name{
  
  font-size: 70px;
  margin-bottom:30px;
  color:#71677C;
  font-family: 'Muli', sans-serif;

}



.terminal{
  width:100%;
  margin:0 auto;
}



.vue-typer {
  font-family: monospace;
}
.complete{
  display: inline-block !important;
}
.vue-typer .custom.char {
  color: white;
  font-weight:500;
line-height: 40px;
  background-color: #3A405A;
}
.vue-typer .custom.char.selected {
  background-color: #3A405A;
}

.vue-typer .custom.caret {
  width: 10px;
  height:20px;
  background-color: #99B2DD;
}
</style>
