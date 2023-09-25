<template>
  <Nav />

  <div class="head">
    <h3>Testimonials</h3>
  </div>

  <div class="testimonials">
    <div class="on">
      <div class="topz">
        <div class="cards" v-for="item in testimonials" :key="items">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="item.image" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }} {{ item.Surname }}</h5>
                  <p class="card-re" style="color: aqua">
                    <small class="text-body-secondary"
                      >{{ item.relations }} | {{ item.contact }}</small
                    >
                  </p>
                  <p class="card-text">{{ item.Quote }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Nav from "@/components/Nav.vue";
export default {
    // components: { Nav },

    data() {
        return {
            testimonials: [
                {
                    name: 'Ryan ',
                    Surname: 'Thomas',
                    relations: 'Lecture',
                    Quote: '"Sibabalwe is an individual who strives to get the job done and getting it done correctly and is always willing to assist her colleagues. She has a great sense of humor and a bubbly personality.""',
                    contact: ' : ryant@lifechoices.co.za',
                    image: 'https://i.postimg.cc/90FJxcY4/ryan-removebg-preview.png'
                },
                {
                    name: 'Kelebogile',
                    Surname: 'Nobomvu',
                    relations: 'Colleague',
                    Quote: '"Sibabalwe is a humble and loving person who is always keen on helping others and she is a hard worker."',
                    contact: ' : nobomvukelebogile497@gmail.com',
                    image: 'https://i.postimg.cc/j5RX5R98/Lebo-removebg-preview.png'
                },
                {
                    name: 'Deno',
                    Surname: 'Rautenbach',
                    relations: 'Colleague',
                    Quote: '"Sibabalwe always engulfs you in her rays of happiness. Not just a magnet of unparalleled jubilation thought, she is also a genius with a burning passion to learn. A light in the struggles of coding"',
                    contact: ' : denorauten@gmail.com',
                    image: 'https://i.postimg.cc/Qt6pd1ct/deno-removebg-preview.png'
                },
                {
                    name: 'Buhle',
                    Surname: 'Qampi',
                    relations: 'Colleague',
                    Quote: '"Sibabalwe is a great team player and always helps other colleagues. Her developer skills are exceptional and necessary for any workplace."',
                    contact: ' : buhle3857@gmail.com',
                    image: 'https://i.postimg.cc/m2Ky9YJ1/Buhle-1-removebg-preview.png'
                }

            ]
        }
    },
}
</script>

<style scoped>
.head {
  font-family: "Nunito Sans", sans-serif;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.head h3 {
  font-size: 36px;
  font-weight: 200;
  animation: cont 2s ease-in;
  border-bottom: 1px solid aqua;
}

@keyframes cont {
  0% {
    opacity: 0;
  }
}

.testimonials {
  padding: 0rem 3rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
}

h1 {
  font-size: 2rem;
  font-weight: 200;
  color: #fff;
  border-bottom: 1px solid aqua;
  font-family: "Nunito Sans", sans-serif;
  text-align: center;
  padding: 0.5rem;
}

.on {
  padding: 0.2rem 0.2rem;
}

.topz {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-left: auto;
  margin-right: auto;
}

img {
  width: 100%;
  height: 15rem;
  border-radius: 1%;
  object-fit: cover;
}

.cards {
  margin-left: auto;
  margin-right: auto;
}

.card {
  background-color: #171717;
  color: #fff;
  border-right: 2px solid aqua;
  font-family: "Nunito Sans", sans-serif;
  width: 100%;
  height: 100%;
  animation: cards 0.5s ease-in;
}

@keyframes cards {
  0% {
    transform: rotateX(180% "angle");
  }
}

.card-body {
  width: 100%;
  padding-left: 2rem;
}

.card-title {
  font-size: 1.8rem;
}

.card-text {
  font-size: 1.2rem;
}

/*
        media query
    */

@media (width < 500px) {
  .topz {
    display: flex !important;
    flex-direction: column !important;
    margin-left: auto;
    margin-right: auto;
  }

  .col-md-4{
    align-items: center;
    justify-content: center;

  }

  .head h3{
    font-size: 2rem;
  }

  .card {
    width: 100%;
    border: none;
  }

  img {
    width: 10.5rem;
    height: 10.5rem !important;
    border-radius: 1%;
  }

  .row {
    display: flex;
    flex-direction: column;
  }

  .card-body {
    width: 17.5rem;
    padding: 0rem;
  }

  .testimonials {
    padding: 1rem 1rem !important;
    margin-left: auto;
    margin-right: auto;
  }

  .top {
    margin-bottom: 0rem;
    padding: 1rem 0rem;
  }
}
@media (width < 800px) {
  .topz {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: auto;
    margin-right: auto;
  }

  .head h3{
    font-size: 2rem;
  }

  .card {
    width: 100%;
    border: none;
  }

  img {
    width: 10.5rem;
    height: 11.5rem;
    border-radius: 1%;
    margin-left: auto;
    margin-right: auto;
    /* align-items: center; */
  }

  .row {
    display: flex;
    flex-direction: column;
  }

  .card-body {
    width: 17.5rem;
    padding: 0rem;
  }

  .testimonials {
    padding: 3rem 3rem;
    margin-left: auto;
    margin-right: auto;
  }

  .ref {
    color: #fff;
    padding: 0rem 2rem;
  }

  .top {
    margin-bottom: 0rem;
    padding: 1rem 0rem;
  }
}
</style>
