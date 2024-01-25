<template>
  <Nav />

  <div class="head" id="Projects">
    <h2>Projects</h2>
  </div>

  <div class="all">

    <div class="cardz">

      <div class="cards" v-for="item in WP" :key="items">
        <div class="card">
          <div class="card-body">
            <div class="image">
              <img :src="item.image" />
            </div>

            <div class="info">
              <h5 class="card-title">{{ item.name }}</h5>
            <h6 class="card-subtitle">{{ item.brief }}</h6>

            <div class="linkz">
              <a :href="item.Pantheon">Site Link</a>
            </div>
            </div>
            
            </div>
        </div>
      </div>


      <div class="cards" v-for="item in Designs" :key="items">
        <div class="card">
          <div class="card-body">
            <div class="image">
              <img :src="item.image" />
            </div>

            <div class="info">
            <h5 class="card-title">{{ item.name }}</h5>
            <h6 class="card-subtitle">{{ item.tool }}</h6>

            <div class="linkz">
              <a href= "https://www.figma.com/file/eiNDtRORxk07lj6o3EwHLn/Untitled?type=design&node-id=1%3A2&mode=design&t=Tuf5NKZppgsN6wu0-1">Link</a>
            </div>
          </div>

            </div>
        </div>
      </div>

      <div class="cards" v-for="item in projects" :key="items">
        <div class="card">
          <div class="card-body">
            <div class="image">
              <img :src="item.image" />
            </div>

            <div class="info">
            <h5 class="card-title">{{ item.name }}</h5>
            <h6 class="card-subtitle">{{ item.brief }}</h6>

            <div class="links">
              <a :href="item.git">Git</a>
              <a :href="item.netlify">Netlify</a>
            </div>
          </div>
          </div>
        </div>
      </div>

        
    </div>
  </div>

        
  <div class="mobile">
    <div id="carouselExampleIndicators" class="carousel slide" style="display: flex; justify-content: center; ">
    <div id="carouselExampleIndicators" class="carousel slide w-100" style="display: flex; justify-content: center; ">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="8"
          aria-label="Slide 9"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="9"
          aria-label="Slide 10"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="10"
          aria-label="Slide 11"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="11"
          aria-label="Slide 12"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="12"
          aria-label="Slide 13"
        ></button>
      </div>
      <div class="carousel-inner ">
        <div class="carousel-item active">
          <img
            src="https://i.postimg.cc/6pSZY8T9/Screenshot-2023-10-05-113919-removebg-preview.png"
            alt=""
          />
          <div class="link-mobile">
            <h5>4Di</h5>
            <h6>Client Project</h6>
              <a href="https://4dicapital.com/">Site Link</a>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/2St818tb/Core-Logo-White.png"
            alt=""
          />
          <div class="link-mobile">
            <h5>Core Teaching Essentials</h5>
            <h6>Client Project</h6>
              <a href="https://www.core-education.co/">Site Link</a>
            </div>
        </div>
        <div class="carousel-item" >
          <img
            src="https://i.postimg.cc/gJYr7y86/Screenshot-2023-08-22-103447.png"
            alt=""
          />
          <div class="link-mobile">
            <h5>Wordpress Portfolio</h5>
            <h6>Wordpress</h6>
              <a href="https://dev-sibabalwe-mafetsire-portfolio.pantheonsite.io/">Site Link</a>
            </div>
        </div>
        <div class="carousel-item" >
          <img
            src="https://i.postimg.cc/0NhcdQw3/Screenshot-2023-08-22-103109.png"
            alt=""
          />
          <div class="link-mobile">
            <h5>Blog</h5>
            <h6>Wordpress</h6>
              <a href="https://dev-raven-bags.pantheonsite.io/">Site Link</a>
            </div>
        </div>
        <div class="carousel-item" >
          <img
            src="https://i.postimg.cc/nzYDh1Dm/Screenshot-2023-08-16-150249.png"
            alt=""
          />
          <div class="link-mobile">
            <h5>The Art of Traveling</h5>
            <h6>Wordpress</h6>
              <a href="https://dev-the-art-of-traveling.pantheonsite.io/">Site Link</a>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/sgDYh8zK/Screenshot-2023-08-16-123137.png"
            alt=""
          />

          <div class="link-mobile">
            <h5>Online Portfolio</h5>
            <h6>Vue</h6>
            <div class="link">
              <a href="https://github.com/Mafestire/vue-portfolio.git">Git</a>
              <a href="https://portfolio-d4110.web.app/#/">Netlify</a>
            </div>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/bYSD5N3s/Screenshot-2023-07-31-140740.png"
            alt=""
          />

          <div class="link-mobile">
            <h5>Tech News</h5>
            <h6>Vue</h6>
            <div class="link">
              <a href="https://github.com/Mafestire/Tech-News.git">Git</a>
              <a href="https://technews-d5a7b.web.app/#/">Netlify</a>
            </div>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/BQq8kcFj/Logo-2-removebg-preview.png"
            alt=""
          />

          <div class="link-mobile">
            <h5>Fitness House</h5>
            <h6>Figma Design</h6>
            <div class="link">
              <a href= "https://www.figma.com/file/eiNDtRORxk07lj6o3EwHLn/Untitled?type=design&node-id=1%3A2&mode=design&t=Tuf5NKZppgsN6wu0-1">Link</a>
            </div>
            </div>
        </div>



        <div class="carousel-item " >
          <img
            src="https://i.postimg.cc/BnNM0GKR/Screenshot-2023-07-17-085609.png"
            alt=""
          />
          <div class="link-mobile">
            <h5>Calculator</h5>
            <h6>JavaScript</h6>
            <div class="link">
              <a href="https://github.com/Mafestire/Calculator.git">Git</a>
              <a href="http://sibabalwe-calculator.netlify.app">Netlify</a>
            </div>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/LsFZZ1Sf/Screenshot-2023-07-31-110504.png"
            alt=""
          />

          <div class="link-mobile">
            <h5>BMI Calculator</h5>
            <h6>JavaScript</h6>
            <div class="link">
              <a href="https://github.com/Mafestire/BIM-Calculator.git">Git</a>
              <a href="https://sibabalwe-bmi-calculator.netlify.app">Netlify</a>
            </div>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/QMMmy8hY/Screenshot-2023-07-31-122337.png"
            alt=""
          />

          <div class="link-mobile">
            <h5>Temperature Convertor</h5>
            <h6>JavaScript</h6>
            <div class="link">
              <a href="https://github.com/Mafestire/Point-of-Sale-system.git">Git</a>
              <a href="https://sibabalwe-temperiture-converter.netlify.app">Netlify</a>
            </div>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/mgYs3PN8/logo3-removebg-preview.png"
            alt=""
          />

          <div class="link-mobile">
            <h5>Point-of-Sale-system</h5>
            <h6>JavaScript</h6>
            <div class="link">
              <a href="https://github.com/Mafestire/Point-of-Sale-system.git">Git</a>
              <a href="https://seababags.netlify.app">Netlify</a>
            </div>
        </div>      
        </div>
    </div>
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
            var section=this.$router.currentRoute.value.hash.replace("#", "");
            if (section)
                this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
        },

  data() {
    return {

      WP: [
      {
          name: "4Di",
          brief: "Wordpress Client Site",
          image:
            "https://i.postimg.cc/6pSZY8T9/Screenshot-2023-10-05-113919-removebg-preview.png",
          // git: 'https://github.com/Mafestire/Tech-News.git',
          Pantheon:
            "https://4dicapital.com/",
        },
        {
          name: "Core Teaching Essentials",
          brief: "Wordpress Client Site",
          image:
            "https://i.postimg.cc/2St818tb/Core-Logo-White.png",
          // git: 'https://github.com/Mafestire/Tech-News.git',
          Pantheon:
            "https://www.core-education.co/",
        },
        {
          name: "The Art of Traveling",
          brief: "Wordpress",
          image:
            "https://i.postimg.cc/nzYDh1Dm/Screenshot-2023-08-16-150249.png",
          // git: 'https://github.com/Mafestire/Tech-News.git',
          Pantheon: "https://dev-the-art-of-traveling.pantheonsite.io/",
        },
        {
          name: "Raven's Bags Blog",
          brief: "Wordpress",
          image:
            "https://i.postimg.cc/0NhcdQw3/Screenshot-2023-08-22-103109.png",
          // git: 'https://github.com/Mafestire/Tech-News.git',
          Pantheon: "https://dev-raven-bags.pantheonsite.io/",
        },
        {
          name: "WP Portfolio",
          brief: "Wordpress",
          image:
            "https://i.postimg.cc/gJYr7y86/Screenshot-2023-08-22-103447.png",
          // git: 'https://github.com/Mafestire/Tech-News.git',
          Pantheon:
            "https://dev-sibabalwe-mafetsire-portfolio.pantheonsite.io/",
        },
      ],

      projects: [
      {
          name: "Online Portfolio",
          brief: "Vue js",
          image:
            "https://i.postimg.cc/sgDYh8zK/Screenshot-2023-08-16-123137.png",
          git: "https://github.com/Mafestire/vue-portfolio.git",
          netlify: "https://portfolio-d4110.web.app/#/",
        },
        {
          name: "Tech News",
          brief: "Vue js, Express.js, Node js",
          image:
            "https://i.postimg.cc/bYSD5N3s/Screenshot-2023-07-31-140740.png",
          git: "https://github.com/Mafestire/Tech-News.git",
          netlify: "https://technews-d5a7b.web.app/#/",
        },
        {
          name: "Calculator",
          brief: "JavaScript",
          image:
            "https://i.postimg.cc/BnNM0GKR/Screenshot-2023-07-17-085609.png",
          git: "https://github.com/Mafestire/Calculator.git",
          netlify: "https://sibabalwe-calculator.netlify.app",
        },
        {
          name: "BMI Calculator",
          brief: "JavaScript",
          image:
            "https://i.postimg.cc/LsFZZ1Sf/Screenshot-2023-07-31-110504.png",
          git: "https://github.com/Mafestire/BIM-Calculator.git",
          netlify: "https://sibabalwe-bmi-calculator.netlify.app",
        },
        {
          name: "Temperature Convertor",
          brief: "JavaScript",
          image:
            "https://i.postimg.cc/QMMmy8hY/Screenshot-2023-07-31-122337.png",
          git: "https://github.com/Mafestire/Point-of-Sale-system.git",
          netlify: "https://sibabalwe-temperiture-converter.netlify.app",
        },
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

      Designs:[
        {
          name: "Web Design",
          tool: "Figma",
          Link: "https://www.figma.com/file/eiNDtRORxk07lj6o3EwHLn/Untitled?type=design&node-id=1%3A2&mode=design&t=Tuf5NKZppgsN6wu0-1",
          image: "https://i.postimg.cc/BQq8kcFj/Logo-2-removebg-preview.png"
        },
        // {
        //   name: "Portfolio Design",
        //   tool: "Figma",
        //   Link: "https://www.figma.com/file/wtvGMGm4OBEoHonSBDYLfi/Portfolio?type=design&node-id=0%3A1&mode=design&t=UXjuOjMZrRVKPwEl-1"
        // },
      ]
    };
  },
};
</script>

<style scoped>
.head {
  /* height: 20rem; */
  /* background-image: url(https://i.postimg.cc/Z5WsZZHQ/1000-F-422687964-0-W77-Tl-Y5us-MM3g-SOkg-BDf-TIr-Pev-TQZb-H.jpg); */
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Nunito Sans", sans-serif;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 5rem;
}

.head h2 {
  /* font-size: 3.5rem; */
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

.cardz {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  /* margin-top: 3rem; */
  justify-content: center;
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

.info{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
}

.card-title {
  align-items: center;
  text-align: center;
  color: aqua;
  font-size: 1.5rem;
}

.card-subtitle {
  text-align: center;
  /* margin-top: 1.5rem; */
  font-family: "Nunito Sans", sans-serif;
}

.all {
  padding: 5rem 5rem;
  text-align: center;
  height: 100%;
  margin-bottom: -15rem;
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 15rem;
  height: 9rem;
  margin-bottom: 1rem;
}

.links {
  display: flex;
  justify-content: space-around;
}
.linkz {
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
.linkz a {
  color: aqua;
  width: 9rem;
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

.mobile{
    visibility: hidden;
}

.link{
    display: flex;
    justify-content: space-between;
    max-width: 100%;
}

.link a  {
  color: aqua;
  width: 100%;
  padding: 0.3rem;
  text-align: center;
  font-size: 1.3rem;
  text-decoration: none;
  background-color: #171717;
}
.link-mobile a{
  color: aqua;
  width: 100%;
  padding: 0.3rem;
  text-align: center;
  font-size: 1.3rem;
  text-decoration: none;}

  .link-mobile{
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  h5{
    color: #fff;
    font-weight: 300;
    text-align: center;
  }
  h6{
    font-weight: 200;
    color: #fff;
  }

.carousel-inner{
    padding-bottom: 3rem !important;
    padding-top: 3rem;
    width: fit-content;
}

.carousel-item img {
  align-items: center;
  width: 15rem;
}

@media (max-width: 800px) {
  .cardz {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
  }

  .all {
    padding: 3rem 2rem;
    text-align: center;
    height: 100%;
    margin-bottom: 5rem;
    font-family: "Nunito Sans", sans-serif;
    display: none;
  }

  .card {
    background-color: #171717;
    color: white;
    border: 1px solid black;
    padding: 2rem 1rem;
    margin: 0;
    height: 100%;
    width: 100%;
    animation: in 1.5s ease-in;
    box-shadow: 0 8px 32px 0 black;
  }

  .mobile{
    visibility: visible;
    margin-bottom: 5rem;
  }
}

</style>
