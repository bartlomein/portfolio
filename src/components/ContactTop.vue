<template>
  <div id="fried-chix">
    <div class="image">
      <img src="../assets/me2.png" alt srcset />
    </div>

    <div class="fried-chix-text">
      <div class="card-heading">
        <h2>Bartlomiej Tyrpien</h2>
      </div>

      <div class="card-text">
        <div>Contact me here:</div>
      </div>

      <div class="built-with">
        <span class="email-and-other">
          <span class="info button">
            <a href="mailto:bartlomiej.tyrpien@gmail.com"
              >bartlomiej.tyrpien@gmail.com</a
            >
          </span>
        </span>
        <span class="contact-not-email">
          <!-- <span class="info button">
            <a
              href="https://drive.google.com/file/d/1GMoo4ZNAkas99E5PGgCVVDe1nxybQKl6/view?usp=sharing"
              target="_blank"
              >Resume</a
            >
          </span> -->
          <span class="info button">
            <a href="https://github.com/bartlomein" target="_blank">Github</a>
          </span>
          <span class="info button">
            <a href="https://twitter.com/bartlomein" target="_blank">Twitter</a>
          </span>
          <span class="info button">
            <a
              href="https://www.linkedin.com/in/bartlomiej-tyrpien-a1708968"
              target="_blank"
              >LinkedIn</a
            >
          </span>
          <span class="info button">
            <a
              href="https://drive.google.com/file/d/1coP5qcQr9Rr8dOWLVmcsAx8Y0VmUkXlW/view?usp=sharing"
              target="_blank"
              >CV</a
            >
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.built-with {
  margin-top: 20px;
}
.info {
  margin-right: 20px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  border: 2px solid #ff715b;
  background-color: #ff715b;
  padding: 7px;
  border-radius: 5px;
}
#fried-chix {
  background-color: white;
  position: relative;
  height: 210px;
  max-height: 210px;
  max-width: 100%;
  width: 1000px;
  border-radius: 5px;
  box-shadow: 5px 5px 50px darkgray;
}
.link-and-github img {
  max-width: 50%;
  width: 15%;
  margin: 30px 30px 30px 0px;
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
</style>
