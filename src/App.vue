<template>
  <div id="app">
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
  margin-top: 60px;
  


}
.terminal-div{
 


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
