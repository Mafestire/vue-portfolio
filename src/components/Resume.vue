<template>
<div class="education" v-for="item in education" :key="item">
   <!-- Education -->
   <h1 class="hd">{{ item.label }}</h1>
   <div class="tim">
      <div class="conts" v-for="item in education" :key="item">
      <div class="cont left">
        <div class="content">
          <h2>{{ item.year4 }}</h2>
          <p>{{ item.time4 }}</p>
          <h6>{{ item.name4 }}</h6>
          <!-- <img src="../images/Logo-Life-Choices.jpg.crdownload" alt="logo" style="width: 90px; height: 50px;"> -->

          <p>{{ item.activity4 }}</p>
        </div>
      </div>
      <div class="cont right">
        <div class="content">
          <h2>{{ item.year3 }}</h2>
          <p>{{ item.time3 }}</p>
          <h6>{{ item.name3 }}</h6>
          <!-- <img src="../images/ACA.png" alt="logo" style="width: 50px; height: 50px;"> -->

          <p>{{ item.activity3 }}</p>
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

  <div class="skills">
    <!-- <h1>Skills</h1> -->
    <table class="soft" v-for="skill in soft" :key="skill">
      <th>{{ skill.label }}</th>
      <tr class="row">{{ skill.skill1 }}</tr>
      <tr class="row">{{ skill.skill2 }}</tr>
      <tr class="row">{{ skill.skill3 }}</tr>
      <tr class="row">{{ skill.skill4 }}</tr>
      <tr class="row">{{ skill.skill5 }}</tr>
      <tr class="row">{{ skill.skill6 }}</tr>
      <tr class="row">{{ skill.skill7 }}</tr>
    </table>

    <table class="hard" v-for="skill in hard" :key="skill">
      <!-- table head -->
      <th>{{ skill.label }}</th>

      <!-- table row1 -->
      <tr class="rw">{{ skill.skill1 }}<div class="outer">
          <div class="inner">
            <div id="number">
              80%
            </div>
          </div>
          <!-- svg -->
          <svg xmlns="http://www.we.org/2000/svg" version="1.1" width="8rem" height="8rem">
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="25" :stroke-linecap="round" />
          </svg>
        </div>
      </tr>

      <!-- table row2 -->
      <tr class="rw">{{ skill.skill2 }}<div class="outer">
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
      </tr>

      <!-- table row3 -->
      <tr class="rw">{{ skill.skill3 }}<div class="outer">
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
      </tr>

      <!-- table row4 -->
      <tr class="rw">{{ skill.skill4 }}<div class="outer">
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
      </tr>

      <!-- table row5 -->
      <tr class="rw">{{ skill.skill5 }}<div class="outer">
          <div class="inner">
            <div id="number">
              55%
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
      </tr>

    </table>

   
  </div>
</template>

<script>
export default {
  data() {
    return {
      soft: [
        {
          label: 'Soft Skills',
          skill1: 'Attitute to learn',
          skill2: 'Analytical Skills',
          skill3: 'Communication',
          skill4: 'Creative',
          skill5: 'Flexibility',
          skill6: 'Strategic Thinking',
          skill7: 'Team Player',
        }
      ],
      hard: [
        {
          label: 'Hard Skills',
          skill1: 'HTML5',

          skill2: 'CSS',
          skill3: 'BOOTSTRAP',
          skill4: 'JAVASCRIPT',
          skill5: 'VUE JS',
        },

      ],
      education: [
        {
          label: 'Education',
          year1: '2017',
          year2: '2018',
          year3: '2019',
          year4: '2022',
          time1: 'Passed Matric',
          time2: 'Volunteerd 2018-2022',
          time3: 'Volunteerd 2019-2022',
          time4: 'Currently',
          name1: 'Mfuleni Secondary School',
          name2: 'Mange Day Care',
          name3: 'African Climate Alliance',
          name4: 'Life Choices Academy',
          activity1: 'Volleyball, Student Leadership',
          activity2: 'Helped at a Early Childhood Development focused of solft skills development and arts',
          activity3: 'Assisted to spread awearness of the need to look after the enviroment and part-taked in enviromental clean ups',
          activity4: 'Studying and practising coding',
          image1: '',
          image2: '',
          image3: '',
          image4: ''
        }
      ]
    }
  },
}
</script>

<style scoped>
.skills {
  padding-top: 40px;
  margin-top: 0.2rem;
  margin-left: 2rem;
  height: 30rem;
  padding-bottom: 1px;
  display: flex;
  justify-content: space-between;
}

h1 {
  font-size: 30px;
  color: rgb(175, 175, 238);
}

h5 {
  font-size: 25px;
  color: rgb(175, 175, 238);
}

.soft,
.hard {
  text-align: center;

}

.soft {
  margin-left: 7rem;
  display: flex;
  flex-direction: column;
}

/* hard skills */
.hard {
  width: 20rem;
  display: flex;
  flex-direction: column;
  margin-right: 9.2rem;
}

.rw {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}

th {
  font-size: 2rem;

  width: 12rem;
}

.row {
  font-size: 1.3rem;
}

.outer {
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  width: 3rem;
  height: 3rem;
  margin-left: 2rem;
  border-radius: 50%;
  /* padding: 10px; */
}

.inner {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 9px;
  display: flex;
  justify-content: center;
  text-align: center;
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
    -0.5px -0.5px 0px rgba(0, 0, 0, 0.15),
    0px 12px 10px -10px rgba(0, 0, 0, 0.05);
}

#number {
  font-weight: 600px;
  font-size: 16px;
  margin-top: 8px;
}

circle {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: .5rem;
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
  top: 123.5%;
  left: 75.5%;
}

.two {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: .5rem;
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
  top: 134.2%;
  left: 74.5%;
}

.tree {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: .5rem;
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
  top: 145%;
  left: 77%;
}

.four {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: .5rem;
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
  top: 155.6%;
  left: 76.9%;
}

.five {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: .5rem;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: show5 3s linear forwards;
}

@keyframes show5 {
  100% {
    stroke-dashoffset: 115;
  }
}

.two-5 {
  position: absolute;
  top: 166.3%;
  left: 75.3%;
}

/* Education */

.education{
   margin-top: 4rem;
}
.tim {
  position: relative;
  max-width: 400px;
  padding-top: 110px;
  margin-left: 12rem;
}

.tim::after {
  content: '';
  position: absolute;
  width: 100vh;
height: 10px;
  background-color: rgb(139, 71, 93);
  top: 11%;
  bottom: 0;
  left: 20%;
  margin-left: 1.5rem;
}

.conts{
  display: flex;
  width: 60rem;
  position: relative;
}

.cont h6,
.cont h2 {
  font-size: 18px;
}

.cont::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 4px solid #FF9F55;
    top: -14%;
    border-radius: 50%;
    z-index: 1;
}

.cont {
    padding: 10px 10px;
    background-color: inherit;
    width: 10rem;
    text-align: center;
    margin-top: 10px;
    margin-left: 1rem;
    color: black;
    font-size: 20px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.hd {
  font-size: 1.5rem;
  color: black;
  text-decoration: solid;
  position: relative;
  text-align: center;
  justify-content: center;
}

h2,
h6,
p {
  color: black;
  font-size: 24px;
}

.left {
    left: -107%;
    margin-top: 40px;
}

.right {
    left: 50%;
    margin-top: 25px;
}

/* .right::after {
    left: 0px;
} */

/* @media (max-width: 768px) {
  .one {
    font-size: 24px;
  }

  .six {
    font-size: 16px;
  }

  .ten {
    font-size: 24px;
  }

  h1 {
    font-size: 20px;
  }

  h5 {
    font-size: 18px;
  }
  
  .tim{
    width: 51rem;
    margin: 1rem;
  }
  .tim::after{
    width: 100%;
  }
  .cont{
    width: 10rem;
  }
  .cont::after{
    top: -5%;
  }
  .conts{
    width: 32rem;
    
  }

  .soft{
    margin: 1.5rem;
  }

  .two-5{
    top: 216.3%;
  left: 60.1%;
  }
  .two-4{
    top: 203.5%;
  left: 63.3%;
  }
  .two-3{
    top: 190.9%;
  left: 63.5%;
  }
  .two-1{
    top: 178.4%;
  left: 58.2%;
  }

  svg{
    top: 165.8%;
    left: 60.3%;
  }
  
} */

/* @media (min-width: 300px) {
    .tim::after{
    width: 10px;
    height: 10rem;
  }

  .conts{
    display: flex;
    flex-direction: column;
    width: 10rem;
  }
  .tim{
    width: 10rem;
  }
  .skills{
    display: flex;
    flex-direction: column;
    margin-left: 0rem;
  }
  th{
    font-size: 1.5rem;
  }
  tr{
    font-size: 1rem;
  }
  .soft{
    margin-left: 0;
  }
  .hard{
    width: 10rem;
    margin-left: 2rem;
  }
  h2,
h6,
p {
  font-size: 1rem;
}
} */
</style>