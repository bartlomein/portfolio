<template>
  <div class="terminal">
     


    <div class="container">

      <transition appear
                  appear-active-class="fade-enter-textarea">
        <div class="terminal-container">
          
          <transition appear
                  appear-active-class="fade-enter-bar">
            <div class = "top-terminal-bar">

                 <transition appear
                  appear-active-class="fade-enter-red">
    

                <div class = "circle red"></div>
                </transition>
                <transition appear
                  appear-active-class="fade-enter-yellow">
                <div class = "circle yellow"></div>
                </transition>
                <transition appear
                  appear-active-class="fade-enter-green">
                <div class = "circle green"></div>
                </transition>
            </div>
          </transition>
          
            <div class = "terminal-text element">
                <vue-typer
                  :text='["> Hi there! :)\n> My name is Bartlomiej Tyrpien and I am a web developer from New Jersey.\n> My passion lies in creating functional, yet beautiful user experiences.\n> Take a look at some of my work below!"]'
                  :repeat='0'
                  :shuffle='false'
                  initial-action='typing'
                  :pre-type-delay='2600'
                  :type-delay='70'
                  :pre-erase-delay='2'
                  :erase-delay='250000000'
                  erase-style='select-all'
                  :erase-on-complete='false'
                  caret-animation='blink'
                ></vue-typer>
            </div>
            <div class = "terminal-text-mobile">
              <div>> Hi there! :)</div>
              <br>
              <div>> My name is Bartlomiej Tyrpien and I am a web developer from New Jersey.</div>
              <br>
              <div>> My passion is creating functional, yet beautiful user experiences.</div>
              <br>
              <div>> Take a look at some of my work below! </div>
              
            </div>
          

        </div> 
        </transition>
       
    </div>
  </div>
</template>

<script>

export default {
  name: "Terminal",
  
};
</script>


<style scoped>
.terminal{
  position:relative;
  z-index: 1;
  height: 100%;
}
.guy-inside-terminal{
  position:fixed;
  width:150px;
  top:190px;
  right:150px;
  z-index: 123;
}
/*TERMINAL*/
.terminal-container {
  background-color: #3A405A;
  max-width: 1000px;
  height: 340px;
  color: white;
  border-radius: 10px;

  margin:0 auto;
  box-shadow: 7px 7px 100px darkgray;
}
.top-terminal-bar {
  height: 30px;
  background-color: black;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
}
.circle {
  height: 13px;
  width: 13px;
  border-radius: 50px;
}
.red {
  background-color: #fc5754;
  margin-left: 10px;
}
.yellow {
  background-color: #fdbd41;
  margin-left: 8px;
}
.green {
  background-color: #34c84a;
  margin-left: 8px;
}
.terminal-text  {
  text-align: left;
  margin-top:15px;
  color: black;
  font-size: 22px;
  padding: 10px;
}

/*ANIMATIONS*/

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


.block {
  background: #999;
  width: 100px;
  height: 100px;
}

.fade-enter-red {
  animation: go 0.9s;
  animation-fill-mode: both;
  animation-delay: 1.1s;
}
.fade-enter-yellow {
  animation: go-yellow 1.1s;
  animation-fill-mode: both;
  animation-delay: 1.3s;
}
.fade-enter-green {
  animation: go-green 1.3s;
  animation-fill-mode: both;
  animation-delay: 1.6s;
}
.fade-enter-bar {
  animation: expand 0.7s;
  animation-fill-mode: both;
  animation-delay: 1.1s;
  animation-timing-function: easeInCirc;


}
.fade-enter-textarea {
  animation: textarea 1.1s;
   animation-timing-function:easeOutElastic;
  animation-fill-mode: both;
  

}
.fade-enter-codeguy {
  animation: codeguy 0.5s;
   animation-timing-function: easeInCirc;
  animation-fill-mode: both;
  animation-delay: 1s;

}

@keyframes codeguy {
  from {
    border-radius: 100px;
    transform: scale(0)
  }
  to {
    border-radius: 0px;
    transform: scale(1)
  }
}
@keyframes expand {
  from {
    
    width: 0%;
  }
  to {
    width:100%;
  }
}
@keyframes textarea {
  from {
transform: scale(0);
border-radius:100px;
background-color: #E9AFA3;
  }
  to{
    transform:scale(1);
    border-radius:10px;
    background-color:#3A405A;
  }
}




@keyframes go {
  from {
    
    transform: scale(0);
  }
  50%{

     transform:scale(1.5);
  }
  to {
    transform:scale(1.0);
  }
}
@keyframes go-green {
  from {
    transform: scale(0);
  }
  50%{
     transform:scale(1.5);
  }
  to {
    transform:scale(1.0);
  }
}
@keyframes go-yellow {
  from {
    transform: scale(0);
  }
  50%{
     transform:scale(1.5);
  }
  to {
    transform:scale(1.0);
  }
}
/*TYPER*/


</style>
