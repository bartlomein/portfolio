<template>
    <div id="fried-chix">
      <div class="image">
        <img src="../assets/mm3.jpg" alt srcset />
      </div>
  
      <div class="fried-chix-text">
        <div class="card-heading">
          <h1>MarketMotion.io</h1>
        </div>
        <div class="card-text">
        <div>MarketMotion is a full stack one stop shop to learn how the markets move. Tracking prices, company information, insider and congress transactions and much, much more. It is also the first application to track Crypto Option transactions and prices from multiple exchanges and aggragating the data. I am the founder and sole engineer and have been working on this on my spare time for the past 2 years. </div>
      </div>
  
        <div class="card-text">
          <div></div>
        </div>
        <div class="link-and-github">
          <span class="link button single">
            <a href="https://marketmotion.io" target="_blank">
              <font-awesome-icon icon="link" size="1x" />URL
            </a>
          </span>
          <span class="link button single">
            <a href="https://apps.apple.com/us/app/marketmotion/id6479219751" target="_blank">
              <font-awesome-icon icon="link" size="1x" />React Native App
            </a>
          </span>
          
        </div>
        <div class="built-with">
          <span class="technolojeesus">NextJS</span>
          <span class="technolojeesus">Typescript</span>

          <span class="technolojeesus">Apollo GQL</span>
          <span class="technolojeesus">Prisma</span>
          <span class="technolojeesus">PostgreSQL</span>
          <span class="technolojeesus">Python</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .link {
    margin-right: 20px !important;
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
  #fried-chix {
    background-color: white;
    position: relative;
    height: 450px;
    max-height: 450px;
    max-width: 100%;
    width: 1000px;
    border-radius: 5px;
    box-shadow: 5px 5px 50px darkgray;
    color: #231f20;
  }
  .link-and-github {

    display: flex;
    font-size: 20px;
    margin: 30px 30px 50px 0px;
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
  @media only screen and (max-width: 600px) {
    .button{
      margin: 20px auto;
    }
  }
  </style>
  