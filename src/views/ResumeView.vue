<template>
  <Nav />
  <div class="head">
    <h1>Resume</h1>
  </div>
  <Res />
  <Education />
</template>
  
<script>
import Nav from '@/components/Nav.vue';
import Res from '@/components/Res.vue';
import Education from '@/components/Education.vue';

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
    components: { Nav, Res, Education }
}
</script>

<style scoped>
.head {
  height: 20rem;
  background-image: url(https://i.postimg.cc/7LgghXBr/bb.jpg);
  font-family: 'Playfair Display', serif;
color: #fff;
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 2rem;
}

.head h1{
  font-size: 3.5rem;
  font-weight: 600;
}
</style>