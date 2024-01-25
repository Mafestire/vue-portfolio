<template>
  <div>
    <div class="skills">
      <div class="top">
        <h1 class="sl">Skills</h1>
        <h2>"An investment in knowledge always pays the best interest."</h2>
        <h2 class="Q">-Benjamin Franklin</h2>
      </div>
      <div class="progress">
        <li>
          <div class="icon">
            <i class="fa-brands fa-html5" style="color: #ffff"></i>
          </div>
          <div class="line"><div class="under"></div></div>
          <h3>html</h3>


          <!-- <span class="bar"><span class="html"></span></span> -->
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-js" style="color: #ffff"></i>
          </div>
          <div class="line"><div class="under"></div></div>
          <h3>JavaScript</h3>


          <!-- <span class="bar"><span class="javascript"></span></span> -->
        </li>
        <li>
          <div class="icon">
            <i class="fa-solid fa-database" style="color: #ffff"></i>
          </div>
          <div class="line"><div class="under"></div></div>
          <h3>MySQL</h3>

          <!-- <span class="bar"><span class="mysql"></span></span> -->
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-node" style="color: #ffff"></i>
          </div>
          <div class="line"><div class="under"></div></div>
          <h3>Node js</h3>

          <!-- <span class="bar"><span class="node"></span></span> -->
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-php" style="color: #ffff"></i>
          </div>
          <div class="line"><div class="under"></div></div>
          <h3>PHP</h3>


          <!-- <span class="bar"><span class="php"></span></span> -->
        </li>

        <li>
          <div class="icon">
            <i class="fa-brands fa-css3-alt" style="color: #ffff"></i>
          </div>
          <div class="line"><div class="under"></div></div>
          <h3>CSS</h3>

          <!-- <span class="bar"><span class="css"></span></span> -->
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-bootstrap" style="color: #ffff"></i>
          </div>
          <div class="line"><div class="under"></div></div>
          <h3>Bootstrap</h3>

          <!-- <span class="bar"><span class="bootstrap"></span></span> -->
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-vuejs" style="color: #ffff"></i>
          </div>
          <div class="line"><div class="under" ></div></div>
          <h3>Vue 3</h3>

          <!-- <span class="bar"><span class="vue"></span></span> -->
        </li>
        <li>
          <div class="icon">
            <i class="fa-solid fa-mobile-screen" style="color: #ffff"></i>
          </div>
          <div class="line"><div class="under"></div></div>
          <h3>UI/UX</h3>

          <!-- <span class="bar"><span class="ui-ux"></span></span> -->
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-wordpress" style="color: #ffff"></i>
          </div>
          <div class="line"><div class="under"></div></div>
          <h3>WordPress</h3>

          <!-- <span class="bar"><span class="wordpress"></span></span> -->
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-salesforce" style="color: #ffff;"></i>          </div>
          <div class="line"><div class="under"></div></div>
          <h3>Salesforce</h3>
          <!-- <span class="bar"><span class="wordpress"></span></span> -->
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Skills */
.skills {
  padding: 5rem, 10rem;
  margin-top: 4rem;
  font-family: "Nunito Sans", sans-serif;
}
@keyframes ups {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes up {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0%);
  }
}

.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  margin-top: 2rem;
  font-family: "Nunito Sans", sans-serif;
}

.icon {
  font-size: 3rem;
  text-align: center;
}

.line {
  align-items: center;
  display: flex;
  justify-content: center;
}
.under {
  background-color: aqua;
  height: 0.1rem;
  width: 15%;
}

.progress {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: space-between;
  background-color: #171717;
  padding: 0 10rem;
}

li {
  text-decoration: none !important;
}

li h3 {
  font-size: 1.7rem;
  color: aqua;
  text-align: center;
  margin-top: .5rem;
}

h2 {
  color: #fff;
  margin-top: 1rem;
  font-size: 2rem;
}

h1 {
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
  border-bottom: 1px solid aqua;
  width: 10rem;
  text-align: center;
  padding: 0.5rem;
  font-family: "Nunito Sans", sans-serif;
  animation: fade 5s ease;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
}
h2 {
  animation: fading 13s ease;
}
@keyframes fading {
  0% {
    opacity: 0;
  }
}

@keyframes html {
  0% {
    width: 0%;
  }

  100% {
    width: 80%;
  }
}

@keyframes css {
  0% {
    width: 0%;
  }

  100% {
    width: 70%;
  }
}

@keyframes bootstrap {
  0% {
    width: 0%;
  }

  100% {
    width: 40%;
  }
}

@keyframes javascript {
  0% {
    width: 0%;
  }

  100% {
    width: 60%;
  }
}

@keyframes vue {
  0% {
    width: 0%;
  }

  100% {
    width: 70%;
  }
}

@keyframes mysql {
  0% {
    width: 0%;
  }

  100% {
    width: 80%;
  }
}

@keyframes node {
  0% {
    width: 0%;
  }

  100% {
    width: 70%;
  }
}
@keyframes php {
  0% {
    width: 0%;
  }

  100% {
    width: 60%;
  }
}

@keyframes ui {
  0% {
    width: 0%;
  }

  100% {
    width: 70%;
  }
}

@keyframes wp {
  0% {
    width: 0%;
  }

  100% {
    width: 65%;
  }
}

/*
        Media Screen 
        */

@media (width < 430px) {
  .skills {
    padding: 0rem, 0rem;
    margin-top: 0rem;
    margin-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
  }

  .top {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0rem 2rem;
    margin-bottom: 2rem;
  }

  .progress {
    height: 30rem !important;
    display: grid;
    flex-direction: column;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 0 1rem !important;
    margin-left: auto;
    margin-right: auto;
    margin-top: -3rem;
  }

  .icon {
    font-size: 2rem;
    text-align: center;
  }

  li h3 {
    font-size: 1.2rem !important;
  }
}
@media (width < 766px) {
  .skills {
    padding: 0rem, 0rem;
    margin-top: 0rem;
    margin-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
  }

  .top {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0rem 2rem;
  }

  .progress {
    height: 30rem !important;
    display: grid;
    flex-direction: column;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 0 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: -3rem;
  }

  .icon {
    font-size: 3rem;
    text-align: center;
  }

  li h3 {
    font-size: 1.5rem;
  }

  h2{
    font-size: 1.5rem;
  }

  h1{
    font-size: 1rem;
  }
}

@media (width < 1010px) {
  .progress {
    height: 25rem;
    align-items: center;
    padding: 0 5rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    margin-top: -2rem;
  }
  li h3 {
  font-size: 1.2rem;
}

h1{
  font-size: 32px;
}

.top h2{
  font-size: 1.5rem;
}
.icon {
  font-size: 2.5rem;
  text-align: center;
}
}
@media (width > 1010px) {
  .progress {
    height: 100%;
    align-items: center;
    padding: 0 5rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    margin-top: -2rem;
  }
  li h3 {
  font-size: 1.7rem;
  color: aqua;
  text-align: center;
  margin-top: .5rem;
}
.icon {
  font-size: 3rem;
  text-align: center;
}

h2{
  font-size: 24px;
}

h1{
  font-size: 36px;
}
}
</style>
