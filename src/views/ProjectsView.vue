<template>
  <Nav />

  <div class="head" id="Projects">
    <h3>Projects</h3>
  </div>

  <!-- filter buttons -->
  <div class="buttons">
    <button @click="filterProjects('all')" class="btn" :class="{ 'active': selectedFilter === 'all' }">All</button>
    <button @click="filterProjects('WordPress')" class="btn" :class="{ 'active': selectedFilter === 'WordPress' }">Wordpress</button>
    <button @click="filterProjects('JavaScript')" class="btn" :class="{ 'active': selectedFilter === 'JavaScript' }">JavaScript</button>
    <button @click="filterProjects('design')" class="btn" :class="{ 'active': selectedFilter === 'design' }">Design</button>
  </div>


  <!-- 3 cards displaying all projects -->
  <div class="all">

    <div class="cardz">

      <div class="cards" v-for="project in filteredProjects" :key="project.id">
        <div class="card">
          <div class="card-body">
            <div class="image">
              <img :src="project.image" />
            </div>

            <div class="info">
              <h5 class="card-title">{{ project.name }}</h5>
              <h6 class="card-subtitle">{{ project.brief }}</h6>
              <h6 class="card-subtitle lang">{{ project.language }}</h6>

              <div class="links">
                <a :href="project.code">Code</a>
                <a :href="project.live">Live</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section id="Testimonials" ref="Testimonials" class="Testimonials">
    <Testimonials />
  </section>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Testimonials from "@/components/Testimonials.vue";
export default {
  components: { Nav, Testimonials },

  mounted() {
    var section = this.$router.currentRoute.value.hash.replace("#", "");
    if (section)
      this.$nextTick(() => window.document.getElementById(section).scrollIntoView());
  },

  data() {
    return {

      projects: [
        {
          name: "4Di",
          id: '1',
          brief: "Client Site",
          language: "WordPress",
          image:
            "https://i.postimg.cc/6pSZY8T9/Screenshot-2023-10-05-113919-removebg-preview.png",
          // git: 'https://github.com/Mafestire/Tech-News.git',
          live:
            "https://4dicapital.com/",
        },
        {
          name: "Core Teaching Essentials",
          id: '2',
          brief: "Client Site",
          language: "WordPress",
          image:
            "https://i.postimg.cc/Wz352bQ0/Core-Logo-White-177x65.png",
          // git: 'https://github.com/Mafestire/Tech-News.git',
          live:
            "https://www.core-education.co/",
        },
        {
          name: "The Art of Traveling",
          id: '3',
          brief: "Assignment",
          language: "WordPress",
          image:
            "https://i.postimg.cc/5tXt8r6B/cropped-logo-black-60opac-header-transparent-67x66-removebg-preview.png",
          // git: 'https://github.com/Mafestire/Tech-News.git',
          live: "https://dev-the-art-of-traveling.pantheonsite.io/",
        },
        {
          name: "Raven's Bags Blog",
          id: '4',
          brief: "Assignment",
          language: "WordPress",
          image:
            "https://i.postimg.cc/657wjZ9K/Screenshot-2024-02-01-154550-removebg-preview.png",
          // git: 'https://github.com/Mafestire/Tech-News.git',
          live: "https://dev-raven-bags.pantheonsite.io/",
        },
        {
          name: "WP Portfolio",
          brief: "Portfolio",
          language: "Assignment",
          id: '5',
          image:
            "https://i.postimg.cc/TwLjpQV1/Screenshot-2024-02-01-155921.png",
          // git: 'https://github.com/Mafestire/Tech-News.git',
          live:
            "https://dev-sibabalwe-mafetsire-portfolio.pantheonsite.io/",
        },
        {
          name: "Online Portfolio",
          id: '6',
          brief: "Portfolio",
          language: "JavaScript",
          image:
            "https://i.postimg.cc/6QBCftCk/Screenshot-2024-02-01-160352.png",
          code: "https://github.com/Mafestire/vue-portfolio.git",
          live: "https://portfolio-d4110.web.app/#/",
        },
        {
          name: "Tech News",
          id: '7',
          brief: "Assignment",
          language: "JavaScript",
          image:
            "https://i.postimg.cc/dtzb1SGk/Screenshot-2024-02-01-160836.png",
          code: "https://github.com/Mafestire/Tech-News.git",
          live: "https://technews-d5a7b.web.app/#/",
        },
        {
          name: "Calculator",
          id: '8',
          brief: "Assignment",
          language: "JavaScript",
          image:
            "https://i.postimg.cc/8PM7s9xx/Screenshot-2024-02-01-161605.png",
          code: "https://github.com/Mafestire/Calculator.git",
          live: "https://sibabalwe-calculator.netlify.app",
        },
        {
          name: "BMI Calculator",
          id: '9',
          brief: "Assignment",
          language: "JavaScript",
          image:
            "https://i.postimg.cc/wBcPvqk3/Screenshot-2024-02-01-162221.png",
          code: "https://github.com/Mafestire/BIM-Calculator.git",
          live: "https://sibabalwe-bmi-calculator.netlify.app",
        },
        {
          name: "Temperature Convertor",
          id: '10',
          brief: "Assignment",
          language: "JavaScript",
          image:
            "https://i.postimg.cc/k5f0sMRz/Screenshot-2024-02-01-162609.png",
          code: "https://github.com/Mafestire/Point-of-Sale-system.git",
          live: "https://sibabalwe-temperiture-converter.netlify.app",
        },
        {
          name: "Web Design",
          id: '11',
          tool: "Figma",
          language: "design",
          live: "https://www.figma.com/file/eiNDtRORxk07lj6o3EwHLn/Untitled?type=design&node-id=1%3A2&mode=design&t=Tuf5NKZppgsN6wu0-1",
          image: "https://i.postimg.cc/BQq8kcFj/Logo-2-removebg-preview.png"
        },
        // {
        //   name: "Portfolio Design",
        //   tool: "Figma",
        //   Link: "https://www.figma.com/file/wtvGMGm4OBEoHonSBDYLfi/Portfolio?type=design&node-id=0%3A1&mode=design&t=UXjuOjMZrRVKPwEl-1"
        // },
        // {
        //   name: "Point of Sale",
        //   brief: "JavaScript",
        //   image: "https://i.postimg.cc/mgYs3PN8/logo3-removebg-preview.png",
        //   git: "https://github.com/Mafestire/Point-of-Sale-system.git",
        //   netlify: "https://seababags.netlify.app",
        // },
        // {
        //   name: "e-commerce",
        //   brief: "HTML & CSS",
        //   image:
        //     "https://i.postimg.cc/c6ykcJtT/Screenshot-2023-08-22-110022.png",
        //   git: "https://github.com/Mafestire/Tech-News.git",
        //   netlify: "https://technews-d5a7b.web.app/#/",
        // },
      ],
      selectedFilter: "all",
    };
  },
  computed: {
    filteredProjects() {
      if (this.selectedFilter === 'all') {
        return this.projects;
      } else {
        return this.projects.filter(project => project.language === this.selectedFilter);
      }
    },
  },
  methods: {
    filterProjects(language) {
      this.selectedFilter = language
    }
  },
};
</script>

<style scoped>
.head {
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Nunito Sans", sans-serif;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.head h3 {
  font-size: 36px;
  font-weight: 200;
}

h1 {
  font-size: 2rem;
  font-weight: 200;
  color: #fff;
  border-bottom: 1px solid aqua;
  width: 10rem;
  text-align: center;
  padding: 0.5rem;
  font-family: "Nunito Sans", sans-serif;
}

h2 {
  color: #fff;
  margin-top: 1rem;
}

.buttons{
  display: flex;
  justify-content: center;
  margin: 2% 0;
  background-color: #171717 !important;
}

.btn{
  border: none;
  font-size: 1.5rem;
  font-weight: 200;
  color: #fff;
}

button:hover{
  color: aqua;
}

.active{
  color: aqua;
}

.cardz {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-left: auto;
  margin-right: auto;
}

.card {
  background-color: #171717;
  color: white;
  border: 1px solid black;
  padding: 1rem 0rem;
  width: 100%;
  animation: in 1.5s ease-in;
  box-shadow: 0 1px 5px 0 black;
}

.card-body {
  display: flex;
  justify-content: center;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-title {
  align-items: center;
  text-align: center;
  color: aqua;
  font-size: 1.5rem;
}

.card-subtitle {
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
}

.all {
  text-align: center;
  height: 100%;
  margin-bottom: 5%;
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lang{
  display: none;
}

@keyframes in {
  0% {
    transform: translateX(-20vh) scale(0);
  }

  100% {
    transform: translateX(0vh) scale(1);
  }
}

img {
  width: 10rem;
  height: 6rem;
  margin-bottom: 1rem;
}

.links {
  display: flex;
  justify-content: space-around;
}

.links a {
  color: aqua;
  width: 6rem;
  font-size: 1.3rem;
  text-decoration: none;
  background-color: #171717;
}

a:hover {
  border: none;
  background-color: aqua;
  color: #171717;
  font-weight: 600;
}


h5 {
  color: #fff;
  font-weight: 300;
  text-align: center;
}

h6 {
  font-weight: 200;
  color: #fff;
}


@media (max-width: 993px) {
  .cardz {
    display: flex !important;
    margin: 3rem 0;
    margin-left: auto;
    margin-right: auto;
    max-height: 450px !important;
  overflow-x: aqua scroll !important;
  overflow-y: hidden !important;
  }

  .btn{
    font-size: 1rem;
  }

  .buttons{
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
  }
   .all {
     padding: 0rem 2rem;
   /* text-align: center;
    height: 100%; */
    overflow-y: hidden !important;

    margin-bottom: 5rem;
   
  }

 .card {
   height: 100%;
  }

  /* .mobile {
    visibility: visible;
    margin-bottom: 5rem;
  } */

  .head h2 {
    font-size: 2rem;
    margin-top: 1rem;
  }
}

@media (width < 1290px) {
  .cardz {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
