<template>
  <div id="telemetry">
    <div class="image">
      <img src="../assets/telemetry.png" alt srcset />
    </div>

    <div class="fried-chix-text">
      <div class="card-heading">
        <h1>Telemetry Studio</h1>
      </div>

      <div class="card-text">
        <div>Telemetry Studio is my latest creation, a native desktop app for cyclists that syncs ride telemetry with video footage. I took it from 0 to 1 entirely on my own, growing it to hundreds of users including big-name creators like Norcal Cycling. It imports GPS, speed, heart rate, and power data from GPX/FIT files and Strava segments, then renders real-time data overlays directly onto your footage with customizable broadcast-quality themes. Built in Rust for performance, it handles multi-clip timelines, power zones and W'bal tracking, and exports production-ready video up to 4K on macOS and Windows.</div>
      </div>
      <div class="link-and-github">
        <span class="link button single">
          <a href="https://telemetrystudio.com" target="_blank">
            <font-awesome-icon icon="link" size="1x" />URL
          </a>
        </span>
      </div>
      <div class="built-with">
        <span class="technolojeesus">Rust</span>
        <span class="technolojeesus">NextJS</span>
        <span class="technolojeesus">Typescript</span>
        <span class="technolojeesus">Python</span>
        <span class="technolojeesus">PostgreSQL</span>
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
#telemetry {
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
.image {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 327px;
  height: 100%;
  border-radius: 5px 0px 0px 5px;
  overflow: hidden;
}
.image::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 220px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff);
  pointer-events: none;
}
.image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
}
.button svg {
  padding-right: 5px;
}
@media only screen and (max-width: 1000px) {
  .image {
    display: none;
  }
}
</style>
