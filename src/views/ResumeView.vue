<template>
  <section class="info">
    <div class="res">
      <div class="resume">

        <div class="skills">
          <!-- <h1>Skills</h1> -->
          <section class="soft" v-for="skill in soft" :key="skill">
            <div class="label">{{ skill.label }}</div>
            <div class="row">{{ skill.skill1 }}</div>
            <div class="row">{{ skill.skill2 }}</div>
            <div class="row">{{ skill.skill3 }}</div>
            <div class="row">{{ skill.skill4 }}</div>
            <div class="row">{{ skill.skill5 }}</div>
            <div class="row">{{ skill.skill6 }}</div>
            <div class="row">{{ skill.skill7 }}</div>
          </section>

          <section class="hard" v-for="skill in hard" :key="skill">
            <!-- table head -->
            <div class="label">{{ skill.label }}</div>

            <div class="together">

              <div class="first">

                <!-- table row1 -->
                <div class="rw">{{ skill.skill1 }}<div class="outer">
                    <div class="inner">
                      <div id="number">
                        80%
                      </div>
                    </div>
                    <!-- svg -->
                    <svg xmlns="http://www.we.org/2000/svg" version="1.1" width="8rem" height="8rem">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#481F01" />
                          <stop offset="100%" stop-color="#65150F" />
                        </linearGradient>
                      </defs>
                      <circle cx="40" cy="40" r="25" :stroke-linecap="round" />
                    </svg>
                  </div>
                </div>

                <!-- table row2 -->
                <div class="rw">{{ skill.skill2 }}
                  <div class="outer">
                    <div class="inner">
                      <div id="number">
                        75%
                      </div>
                    </div>
                    <!-- svg -->
                    <svg class="two-1" xmlns="http://www.we.org/2000/svg" version="1.1" width="8rem" height="8rem">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#e91e63" />
                          <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                      </defs>
                      <circle class="two" cx="40" cy="40" r="25" :stroke-linecap="round" />
                    </svg>
                  </div>
                </div>

                <!-- table row3 -->
                <div class="rw">{{ skill.skill3 }}<div class="outer">
                    <div class="inner">
                      <div id="number">
                        60%
                      </div>
                    </div>
                    <!-- svg -->
                    <svg class="two-3" xmlns="http://www.we.org/2000/svg" version="1.1" width="8rem" height="8rem">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#e91e63" />
                          <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                      </defs>
                      <circle class="tree" cx="40" cy="40" r="25" :stroke-linecap="round" />
                    </svg>
                  </div>
                </div>

                <!-- table row4 -->
                <div class="rw">{{ skill.skill4 }}<div class="outer">
                    <div class="inner">
                      <div id="number">
                        50%
                      </div>
                    </div>
                    <!-- svg -->
                    <svg class="two-4" xmlns="http://www.we.org/2000/svg" version="1.1" width="8rem" height="8rem">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#e91e63" />
                          <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                      </defs>
                      <circle class="four" cx="40" cy="40" r="25" :stroke-linecap="round" />
                    </svg>
                  </div>
                </div>

              </div>

              <div class="second">

                <!-- table row5 -->
                <div class="rw">{{ skill.skill5 }}<div class="outer">
                    <div class="inner">
                      <div id="number">
                        45%
                      </div>
                    </div>
                    <!-- svg -->
                    <svg class="two-5" xmlns="http://www.we.org/2000/svg" version="1.1" width="8rem" height="8rem">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#e91e63" />
                          <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                      </defs>
                      <circle class="five" cx="40" cy="40" r="25" :stroke-linecap="round" />
                    </svg>
                  </div>
                </div>

                <!-- table row6 -->
                <div class="rw">{{ skill.skill6 }}<div class="outer">
                    <div class="inner">
                      <div id="number">
                        50%
                      </div>
                    </div>
                    <!-- svg -->
                    <svg class="two-6" xmlns="http://www.we.org/2000/svg" version="1.1" width="8rem" height="8rem">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#e91e63" />
                          <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                      </defs>
                      <circle class="six" cx="40" cy="40" r="25" :stroke-linecap="round" />
                    </svg>
                  </div>
                </div>

                <!-- table row7 -->
                <div class="rw">{{ skill.skill7 }}<div class="outer">
                    <div class="inner">
                      <div id="number">
                        65%
                      </div>
                    </div>
                    <!-- svg -->
                    <svg class="two-7" xmlns="http://www.we.org/2000/svg" version="1.1" width="8rem" height="8rem">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="grey" />
                          <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                      </defs>
                      <circle class="seven" cx="40" cy="40" r="25" :stroke-linecap="round" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>

          </section>


        </div>

        <!-- ARROW ANIMATION -->
        <Animation />

        <!-- EDUCATION -->
        <div class="education" v-for="item in education" :key="item">
          <!-- Education -->
          <h1 class="hd">{{ item.label }}</h1>
          <div class="tim">
            <div class="conts" v-for="item in education" :key="item">
              <div class="firstt">
                <div class="cont left o">
                  <div class="content">
                    <h2>{{ item.year4 }} </h2>
                    <p>{{ item.time4 }}</p>
                    <h6>{{ item.name4 }}</h6>
                    <!-- <img src="../images/Logo-Life-Choices.jpg.crdownload" alt="logo" style="width: 90px; height: 50px;"> -->

                    <p>{{ item.activity4 }}</p>
                  </div>
                </div>

                <div class="cont left">
                  <div class="content">
                    <h2>{{ item.year2 }}</h2>
                    <p>{{ item.time2 }}</p>
                    <h6>{{ item.name2 }}</h6>
                    <!-- <img src="../images/ecd.png" alt="logo" style="width: 50px; height: 50px;"> -->

                    <p>{{ item.activity2 }}</p>
                  </div>
                </div>

              </div>
              <div class="secondd">
                <div class="cont right">
                  <div class="content">
                    <h2>{{ item.year3 }}</h2>
                    <p>{{ item.time3 }}</p>
                    <h6>{{ item.name3 }}</h6>
                    <!-- <img src="../images/ACA.png" alt="logo" style="width: 50px; height: 50px;"> -->

                    <p>{{ item.activity3 }}</p>
                  </div>
                </div>

                <div class="cont right">
                  <div class="content">
                    <h2>{{ item.year1 }}</h2>
                    <p>{{ item.time1 }}</p>
                    <h6>{{ item.name1 }}</h6>
                    <!-- <img src="../images/edu.jpg" alt="logo" style="width: 80px; height: 60px;"> -->

                    <p>Activities:</p>
                    <p>{{ item.activity1 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import Animation from '@/components/Animation.vue';

export default {
  data() {
    return {
      soft: [
        {
          label: "Soft Skills",
          skill1: "Attitute to learn",
          skill2: "Analytical Skills",
          skill3: "Communication",
          skill4: "Creative",
          skill5: "Flexibility",
          skill6: "Strategic Thinking",
          skill7: "Team Player",
        }
      ],
      hard: [
        {
          label: "Hard Skills",
          skill1: "HTML5",
          skill2: "CSS",
          skill3: "BOOTSTRAP",
          skill4: "JAVASCRIPT",
          skill5: "VUE JS",
          skill6: "Node js",
          skill7: "MYSQL"
        },
      ],
      education: [
        {
          label: "Education",
          year1: "2017",
          year2: "2018",
          year3: "2019",
          year4: "2022",
          time1: "Passed Matric",
          time2: "Volunteerd 2018-2022",
          time3: "Volunteerd 2019-2022",
          time4: "Currently",
          name1: "Mfuleni Secondary School",
          name2: "Mange Day Care",
          name3: "African Climate Alliance",
          name4: "Life Choices Academy",
          activity1: "Volleyball, Student Leadership",
          activity2: "Helped at a Early Childhood Development focused of solft skills development and arts",
          activity3: "Assisted to spread awearness of the need to look after the enviroment and part-taked in enviromental clean ups",
          activity4: "Studying and practising coding",
          image1: "",
          image2: "",
          image3: "",
          image4: ""
        }
      ]
    };
  },
  components: { Animation }
}
</script>
  
<style scoped>
.info {
  font-family: 'Lobster Two', cursive;
}

.skills {
  padding-top: 40px;
  margin-top: 3rem;
  margin-bottom: 15rem;
  margin-right: 2rem;
  margin-left: 2rem;
  height: 30rem;
  padding-bottom: 1px;
  display: flex;

}

.together {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.soft,
.hard {
  text-align: center;
}

.soft {
  margin-left: auto;
  margin-right: 0;
  justify-content: space-around;
  display: flex;
  text-align: center;
  width: 100vh;
  flex-direction: column;
  border-right: 2px solid brown;
  border-left: 2px solid brown;
  border-radius: 10%;
}

/* hard skills */
.hard {
  width: 100vh;
  margin-left: 0;
  margin-right: auto;
  color: brown;
  border-left: 2px solid brown;
  border-right: 1px solid brown;
  border-radius: 10%;

}

.rw {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  font-size: 1.5rem;

}

.label {
  font-size: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: brown;
}

.row {
  font-size: 1.5rem;
  color: brown;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.outer {
  width: 3.7rem;
  height: 3.8rem;
  margin-left: 2rem;
  border-radius: 50%;
  position: relative;
}

.inner {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px brown,
    -0.5px -0.5px 0px rgba(0, 0, 0, 0.15),
    0px 12px 10px -10px rgba(0, 0, 0, 0.05);
}

#number {
  font-weight: 600px;
  font-size: 1.2rem;
  margin-top: 8px;
}

circle {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: .6rem;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: show 3s linear forwards;
}

@keyframes show {
  100% {
    stroke-dashoffset: 60;
  }
}

svg {
  position: absolute;
  top: 31%;
  left: 62.9%;
}

.two {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: .6rem;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: show2 3s linear forwards;
}

@keyframes show2 {
  100% {
    stroke-dashoffset: 80;
  }
}

.two-1 {
  position: absolute;
  top: 42.9%;
  left: 61.5%;
}

.tree {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: .6rem;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: show3 3s linear forwards;
}

@keyframes show3 {
  100% {
    stroke-dashoffset: 110;
  }
}

.two-3 {
  position: absolute;
  top: 56.1%;
  left: 64.9%;
}

.four {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: .6rem;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: show4 3s linear forwards;
}

@keyframes show4 {
  100% {
    stroke-dashoffset: 122;
  }
}

.two-4 {
  position: absolute;
  top: 68.5%;
  left: 64.7%;
}

.five {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: .6rem;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: show5 3s linear forwards;
}

@keyframes show5 {
  100% {
    stroke-dashoffset: 135;
  }
}

.two-5 {
  position: absolute;
  top: 30.3%;
  left: 86.7%;
}

.six {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: .6rem;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: show6 3s linear forwards;
}

@keyframes show6 {
  100% {
    stroke-dashoffset: 95;
  }
}

.two-6 {
  position: absolute;
  top: 56%;
  left: 86.7%;
}

.seven {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: .6rem;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: show7 3s linear forwards;
}

@keyframes show7 {
  100% {
    stroke-dashoffset: 120;
  }
}

.two-7 {
  position: absolute;
  top: 43.2%;
  left: 86.5%;
}

/* Education */
.education {
  margin-top: 4rem;
  height: 97vh;
  width: 95%;
  border-right: 2px solid brown;
  border-left: 2px solid brown;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0rem;
  border-radius: 10%;
}

.tim {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  padding-top: 110px;
  margin-left: auto;
  margin-right: auto;
}

.tim::after {
  content: '';
  position: absolute;
  width: 80%;
  height: 1vh;
  background-color: brown;
  top: 51%;
  bottom: 0;
  margin-left: 10rem;
  margin-right: auto;
}

.conts {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: relative;
}

.cont h6,
.cont h2 {
  font-size: 1.7rem;
}

.cont::after {
  content: '';
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 4px solid brown;
  top: -14%;
  border-radius: 50%;
  z-index: 1;
}

.cont {
  padding: 10px 10px;
  background-color: inherit;
  width: 20rem;
  text-align: center;
  margin-top: 10px;
  color: brown;
  font-size: 20px;
  box-shadow: 0 8px 32px 0 brown;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid brown;
}

.hd {
  font-size: 2.5rem;
  color: brown;
  text-decoration: solid;
  position: relative;
  text-align: center;
  justify-content: center;
}

h2,
h6,
p {
  color: brown;
  font-size: 1.3rem;
}

.left {
  transform: translateY(-45%);
  margin-left: 20rem;
}

.right {
  margin-left: 20rem;
  transform: translateX(-100%);
}

.right::after {
  left: -45px;
}

.left::before {
  content: '';
  height: 0;
  position: absolute;
  width: 0;
  z-index: 1;
  right: -2rem;
  border: medium solid white;
  border-width: 0px 10rem 1.3rem 1.5rem;
  top: 18rem;
  border-color: transparent transparent transparent brown;
  ;
}

.right::before {
  content: '';
  height: 0;
  position: absolute;
  width: 0;
  z-index: 1;
  top: -2rem;
  left: -1rem;
  border: medium solid black;
  border-width: 0rem 1.3rem 1.5rem 10rem;
  border-color: transparent brown transparent transparent;
}

.firstt {
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
}

.secondd {
  display: flex;
  flex-direction: row-reverse;
}

.o {
  margin-left: -1rem;
}

@media (width < 768px) {

  /* EDUCATION */
  .education {
    height: 170vh;
    transform: translateY(15%);
  }

  .tim::after {
    transform: translateY(-54%);
    width: .5rem;
    height: 58rem;
    margin-left: -12rem;
  }

  .conts {
    width: 50%;
    height: 100;
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* flex-direction: column; */
  }

  .cont {
    margin-top: 2rem;
  }

  .tim {
    width: 1rem;
    height: 100%;
  }

  .left {
    margin-left: 0;
  }

  .firstt,
  .secondd {
    display: flex;
    flex-direction: column;
    width: 20%;
  }

  .firstt {
    margin-left: -7rem;
    margin-right: auto;
  }

  .o {
    margin-left: 0rem;
  }

  .secondd {
    display: flex;
    flex-direction: column;
    margin-top: -6rem;
    margin-left: 1rem;
  }

  .left::before {
    border-width: 0px 18rem 1.3rem 1.5rem;
    margin-top: -15rem;
  }

  .right::before {
    border-width: 0rem 1.3rem 1.5rem 0rem;
    margin-left: -2rem;
    margin-top: 2.2rem;
  }

  .skills {
    display: flex;
    flex-direction: column;
    margin-left: 0rem;
  }


  th {
    font-size: 1.5rem;
  }

  tr {
    font-size: 1rem;
  }

  /* SKILLS */
  .skills {
    display: flex;
    flex-direction: column;
  }

  .soft {
    margin-left: 1rem;
    margin-right: auto;
    width: 100%;
  }

  .hard {
    margin-left: 1rem;
    margin-right: auto;
    margin-top: 3rem;
    width: 100%;
  }

  h2,
  h6,
  p {
    font-size: 1rem;
  }

  .info {
    height: 310vh;
  }

  svg {
    top: 93.6%;
    left: 26.4%;
  }

  .two-1 {
    top: 107.7%;
    left: 24.7%
  }

  .two-3 {
    top: 121.7%;
    left: 29%
  }

  .two-4 {
    top: 136.2%;
    left: 28.7%
  }

  .two-5 {
    top: 107.7%;
    left: 74.4%
  }

  .two-6 {
    top: 93.7%;
    left: 73.8%
  }

  .two-7 {
    top: 121.8%;
    left: 74.1%
  }

}

@media (width < 600px) {

  /* EDUCATION */
  .education {
    height: 170vh;
    margin-top: 40rem;
    /* transform: translateY(50%); */
  }

  .tim::after {
    transform: translateY(-59%);
    width: .5rem;
    height: 58rem;
    margin-left: -10rem;
  }

  .conts {
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .cont {
    width: 15rem;
  }

  .tim {
    width: 1rem;
    height: 100%;
  }

  .left {
    margin-left: 1rem;
  }

  .right {
    margin-left: 8rem;
  }

  .firstt {
    margin-left: -7rem;
    margin-right: auto;
  }

  .o {
    margin-left: rem;
    margin-bottom: 1.6rem;
  }

  .left::before {
    border-width: 0px 18rem 1.3rem 1.5rem;
    margin-top: -18rem;
  }

  .right::before {
    border-width: 0rem 1.3rem 1.5rem 0rem;
    margin-left: -2rem;
    margin-top: 2.2rem;
  }

  .skills {
    display: flex;
    flex-direction: column;
    margin-left: 0rem;
  }


  th {
    font-size: 1.5rem;
  }

  tr {
    font-size: 1rem;
  }

  /* SKILLS */
  .skills {
    display: flex;
    flex-direction: column;
  }

  .soft {
    margin-left: 1rem;
    margin-right: auto;
    width: 100%;
  }

  .hard {
    margin-left: 1rem;
    margin-right: auto;
    margin-top: 3rem;
    width: 100%;
  }

  .hard .together{
    display: flex;
    flex-direction: column;
    height: 110vh;
  }

  h2,
  h6,
  p {
    font-size: 1rem;
  }

  .info {
    height: 310vh;
  }

  svg {
    top: -20%;
    left: -18%;
  }

  .two-1 {
    top: -20.9%;
    left: -18%
  }

  .two-3 {
    top: -20%;
    left: -18%
  }

  .two-4 {
    top: -20%;
    left: -18.2%
  }

  .two-5 {
    top: -20%;
    left: -18%
  }

  .two-6 {
    top: 139.5%;
    left: -15%
  }

  .two-7 {
    top: -165%;
    left: -25%
  }

  .info{
    height: 360vh;
  }
}</style>