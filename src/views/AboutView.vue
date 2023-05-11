<template>
  <div class="abt">
    <div class="about">
      <img src="https://i.postimg.cc/7ZW6dJLY/C11-Sibabalwe-Mafestire-2-1-removebg-preview.png" alt="">
      <div class="details">
        <h2>About Me</h2>
        <p id="info">
          Hello, I am Sibabalwe Mafestire born in 30 May 2000 and based in CapeTown, Mfuleni. The official languages i am fluent in is IsiXhosa and English. As a full stack developer i am passionate about unique web applications. Ever since i discovered coding at Life Choices, I found a field
          that challenges me to do better and put my skills into practical use.
        </p>

        <div class="contacts" style="margin-top: 2rem; font-size: 1.5rem;">
          <h3 style="border-bottom: 1px solid #3c2a21;">Contact Me</h3>
          <i class="fa-solid fa-envelope"></i> | seabaraven@gmail.com
          <br>
          <i class="fa-solid fa-phone"></i> | 062-4244-310 \ 065-9425-403
        </div>

        <div class="hobbies" style="margin-top: 2rem; font-size: 1.5rem;">
          <h3 style="border-bottom: 1px solid #3c2a21;">Hobbies</h3>
          <i class="fa-solid fa-puzzle-piece"></i> | Solving Puzzles - 

          <i class="fa-solid fa-lines-leaning"></i> | Playing Dominos - 

          <i class="fa-solid fa-music"></i> | Listening to Music
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* body */
.about {
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
}

.about img {
  width: 20rem;
  height: 33rem;
  margin-top: 1rem;
  margin-left: 10rem;
  transform: translateX(20%);
}

.details {
  width: 39rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: #3c2a21;
  font-family: 'Lobster Two', cursive;
}

.details p {
  font-size: 1.5rem;
  margin-left: auto;
  margin-right: auto;
}

.abt {
  height: 95vh;
}

.details h2 {
  border-bottom: 1px solid #3c2a21;
  font-size: 3rem;
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
    font-size: 1.3rem;
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
    margin-top: 5rem;
    margin-bottom: 2rem;
  }

  .details,
  #info {
    width: 15rem;
  }

  .about img {
    width: 13rem;
    height: 20rem;
    transform: translateX(0);
    margin-left: auto;
    margin-right: auto;
  }

  .details p,
  h2 {
    font-size: 1rem;
  }

}</style>
