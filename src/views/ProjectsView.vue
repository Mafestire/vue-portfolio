<template>
  <Nav />

  <div class="head">
    <h3>Projects</h3>
  </div>

  <div class="all">
    <div class="top">
      <!-- <h1>Projects</h1> -->
      <!-- <h2>My most recent work</h2> -->
    </div>

    <div class="cardz">
      <div class="cards" v-for="item in projects" :key="items">
        <div class="card">
          <div class="card-body">
            <img :src="item.image" />

            <h5 class="card-title">{{ item.name }}</h5>
            <h6 class="card-subtitle">{{ item.brief }}</h6>

            <div class="links">
              <a :href="item.git">Git</a>
              <a :href="item.netlify">Netlify</a>
            </div>
          </div>
        </div>
      </div>

      <div class="cards" v-for="item in WP" :key="items">
        <div class="card">
          <div class="card-body">
            <img :src="item.image" />

            <h5 class="card-title">{{ item.name }}</h5>
            <h6 class="card-subtitle">{{ item.brief }}</h6>

            <div class="linkz">
              <!-- <a :href="item.git">Git</a> -->
              <a :href="item.Pantheon">Pantheon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mobile">
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
      </div>
      <div class="carousel-inner ">
        <div class="carousel-item active" >
          <img
            src="https://i.postimg.cc/BnNM0GKR/Screenshot-2023-07-17-085609.png"
            alt=""
          />
          <div class="link">
              <a href="https://github.com/Mafestire/Calculator.git">Git</a>
              <a href="http://sibabalwe-calculator.netlify.app">Netlify</a>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/LsFZZ1Sf/Screenshot-2023-07-31-110504.png"
            alt=""
          />

          <div class="link">
              <a href="https://github.com/Mafestire/BIM-Calculator.git">Git</a>
              <a href="https://sibabalwe-bmi-calculator.netlify.app">Netlify</a>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/QMMmy8hY/Screenshot-2023-07-31-122337.png"
            alt=""
          />

          <div class="link">
              <a href="https://github.com/Mafestire/Point-of-Sale-system.git">Git</a>
              <a href="https://sibabalwe-temperiture-converter.netlify.app">Netlify</a>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/mgYs3PN8/logo3-removebg-preview.png"
            alt=""
          />

          <div class="link">
              <a href="https://github.com/Mafestire/Point-of-Sale-system.git">Git</a>
              <a href="https://seababags.netlify.app">Netlify</a>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/sgDYh8zK/Screenshot-2023-08-16-123137.png"
            alt=""
          />

          <div class="link">
              <a href="https://github.com/Mafestire/vue-portfolio.git">Git</a>
              <a href="https://portfolio-d4110.web.app/#/">Netlify</a>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/bYSD5N3s/Screenshot-2023-07-31-140740.png"
            alt=""
          />

          <div class="link">
              <a href="https://github.com/Mafestire/Tech-News.git">Git</a>
              <a href="https://technews-d5a7b.web.app/#/">Netlify</a>
            </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.postimg.cc/c6ykcJtT/Screenshot-2023-08-22-110022.png"
            alt=""
          />

          <div class="link">
              <a href="https://github.com/Mafestire/Tech-News.git">Git</a>
              <a href="https://technews-d5a7b.web.app/#/">Netlify</a>
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

    <!-- <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner" v-for="item in projectz" :key="item">
        <div class="carousel-item active">
            <img :src="item.image1" class="d-block w-100" alt="..." />

          <div class="carousel-caption d-none d-md-block">
            <h5 class="card-title">{{ item.name1 }}</h5>
            <h6 class="card-subtitle">{{ item.brief1 }}</h6>            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
            <img :src="item.image2" class="d-block w-100" alt="..." />

          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
            <img :src="item.image3" class="d-block w-100" alt="..." />

          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> -->
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
      projects: [
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
        {
          name: "Point of Sale",
          brief: "JavaScript",
          image: "https://i.postimg.cc/mgYs3PN8/logo3-removebg-preview.png",
          git: "https://github.com/Mafestire/Point-of-Sale-system.git",
          netlify: "https://seababags.netlify.app",
        },
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
          name: "e-commerce",
          brief: "Java",
          image:
            "https://i.postimg.cc/c6ykcJtT/Screenshot-2023-08-22-110022.png",
          git: "https://github.com/Mafestire/Tech-News.git",
          netlify: "https://technews-d5a7b.web.app/#/",
        },
      ],

      WP: [
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
    };
  },
};
</script>

<style scoped>
.head {
  height: 20rem;
  background-image: url(https://i.postimg.cc/Z5WsZZHQ/1000-F-422687964-0-W77-Tl-Y5us-MM3g-SOkg-BDf-TIr-Pev-TQZb-H.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Nunito Sans", sans-serif;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
}

.head h3 {
  font-size: 3.5rem;
  font-weight: 200;
}

.top {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.card {
  background-color: #171717;
  color: white;
  border: 1px solid black;
  padding: 2rem 1rem;
  height: 25rem;
  width: 100%;
  animation: in 1.5s ease-in;
  box-shadow: 0 2px 7px 0 black;
}

.card-body {
  margin-top: -0.5rem;
}

.card-title {
  align-items: center;
  text-align: center;
  color: aqua;
  font-size: 1.5rem;
  height: 2rem;
}

.card-subtitle {
  text-align: center;
  margin-top: 1.5rem;
  font-family: "Nunito Sans", sans-serif;
}

.all {
  padding: 5rem 11.1rem;
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
  width: 10rem;
  height: 10rem;
  margin-bottom: 1rem;
}

.links {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}
.linkz {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}

.links a {
  color: aqua;
  width: 6rem;
  padding: 0.3rem;
  font-size: 1.3rem;
  text-decoration: none;
  border: 1px solid aqua;
  background-color: #171717;
}
.linkz a {
  color: aqua;
  width: 9rem;
  padding: 0.3rem;
  font-size: 1.3rem;
  text-decoration: none;
  border: 1px solid aqua;
  background-color: #171717;
}

a:hover {
  border: 2px solid black;
  background-color: aqua;
  color: #171717;
}

/* .carousel-item {
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
} */

.mobile{
    visibility: hidden;
}

.link{
    display: flex;
    justify-content: space-between;
    max-width: 100%;
}

.link a {
  color: aqua;
  width: 4.5rem;
  padding: 0.3rem;
  text-align: center;
  font-size: 1.3rem;
  text-decoration: none;
  /* border: 1px solid aqua; */
  background-color: #171717;
}

.carousel-inner{
    padding-bottom: 3rem !important;
    padding-top: 3rem;
    width: fit-content;
}

@media (max-width: 800px) {
  .cardz {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* flex-direction: column; */
    margin-top: 3rem;
    /* width: 18rem; */
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

/*@media (width < 576px) {
    .links {
        display: flex;
        flex-direction: column;
    }

    img {
        width: 3rem;
        height: 3rem;
    }

    .all {
        height: 100%;
        margin-bottom: 5rem;
    }
} */
</style>
