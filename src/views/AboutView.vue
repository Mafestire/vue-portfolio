<template>
  <Nav />

  <div class="head">
    <h1>About me</h1>
  </div>

  <div class="abt">
    <div class="about">
      <img src="https://i.postimg.cc/7ZW6dJLY/C11-Sibabalwe-Mafestire-2-1-removebg-preview.png" alt="">
      <div class="details">
        <h2>Hello, I am</h2>
        <h2 style="color: aqua;">Sibabalwe Mafestire</h2>
        <h2 style="font-size: 1.3rem; font-weight: 5rem;">Web Developer</h2>
        <p id="info">
          Hello, I am Sibabalwe Mafestire As a full stack developer i am passionate about unique web applications. Ever
          since i discovered coding at Life Choices, I found a field
          that challenges me to do better and put my skills into practical use.
        </p>


        <div class="more">
          <ul class="list-group list-group-vertical w-25">
            <li class="list-group-item">Age</li>
            <li class="list-group-item">Address</li>
            <li class="list-group-item">Phone</li>
            <li class="list-group-item">Linkedin</li>
            <li class="list-group-item">Email</li>
          </ul>
          <ul class="list-group list-group-vertical-sm w-50">
            <li class="list-group-item">22</li>
            <li class="list-group-item">Mfuleni, Cape Town</li>
            <li class="list-group-item">062 4244 310 | 065 9425 403</li>
            <li class="list-group-item">Sibabalwe Mafestire</li>
            <li class="list-group-item">seabaraven@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <Values />
</template>

<script>
import Nav from "@/components/Nav.vue";
import Values from '@/components/Values.vue'
export default {
  components: { Nav, Values }
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

/* body */
.about {
  padding: 2rem 1rem;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #000;
  box-shadow: 0 8px 32px 0 black;
  margin-bottom: 3rem;
  margin-top: 2.5rem;
}

.about img{
  height: 30rem;
  margin: 0rem 4rem;
}

.details {
  width: 39rem;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-family: 'Playfair Display', serif;
}

.details p {
  font-size: 1.1rem;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Playfair Display', serif;
}

.abt {
  /* height: 95vh; */
  padding: 2rem 11.1rem;
}

.details h2 {
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
}

.more {
  display: flex;
}

.list-group li {
  background-color: #171717;
  border: none;
  color: white;
  font-family: 'Playfair Display', serif;
}

@media (width < 567px) {
  .details h2 {
    font-size: 1.5rem;
    border-bottom: none;
    margin-left: auto;
    margin-right: auto;
  }

  .about {
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
    margin-left: auto;
    margin-right: auto;
  }

  .abt {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }

  .about img {
    width: 9rem;
    height: 13rem;
    margin-left: auto;
    margin-right: auto;
  }

  .details p,
  h2 {
    font-size: 1rem;
    width: 13rem;

  }


}

@media (width < 768px) {
  .details h2 {
    font-size: 2rem;
    border-bottom: none;
    margin-left: auto;
    margin-right: auto;
  }

  .about {
    display: flex;
    justify-content: space-around;
    margin-top: .5rem;

  }

  .details,
  #info {
    width: 15rem;
  }

  .about img {
    width: 13rem;
    height: 14rem;
    margin-left: auto;
    margin-right: auto;
  }

  .details p,
  h2 {
    font-size: 1rem;
  }

}
</style>
