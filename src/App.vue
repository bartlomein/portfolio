<template>
  <div id="app">
    <div class = "menu">
      <a href="#">Portfolio</a>
      <a href="#">Contact</a>
    </div>

    <div class = "terminal-div">
    <Terminal/>
    </div>
  </div>
</template>

<script>
import Terminal from './components/Terminal.vue'

export default {
  name: 'app',
  components: {
    Terminal
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli');
html, 
body{
  height: 100%;
  background-color:#F7F0F5;
  height: 100vh !important;
}
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}
.name{
  
  font-size: 70px;
  margin-bottom:30px;
  color:#71677C;
  font-family: 'Muli', sans-serif;

}

.menu{
  margin-bottom:80px;
  
}
.menu a{
  font-family: 'Tajawal', sans-serif;
color:#71677C;
  text-decoration: none;
  font-size:26px;
  padding:5px;
}
.menu a:visited{
  color:#71677C;
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
  background-color: #99B2DD;
}
</style>
