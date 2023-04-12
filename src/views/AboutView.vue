<template>
  <div class="abt">
    <div class="about">
      <img src="https://i.postimg.cc/7ZW6dJLY/C11-Sibabalwe-Mafestire-2-1-removebg-preview.png" alt="">
      <div class="details">
        <h2>About Me</h2>
        <p id="info">
          I am a full stack developer, passionate about unique web applications. I have always been
          someone who has both a creative and logical sides, when I discovered coding at Life Choices, I found a field
          that challenges me to do better and put my skills into practical use.</p>
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
  height: 30rem;
  margin-top: 5rem;
  margin-left: 15rem;
  transform: translateX(10%);
}

.details {
  width: 20rem;
  text-align: center;
  margin: 5rem 15rem;
  margin-left: auto;
  margin-right: auto;
  color: brown;
}

.details p,
.details h2 {
  font-size: 1.5rem;
  margin-left: auto;
  margin-right: auto;
}

.abt {
  height: 85vh;
}

.details h2 {
  border-bottom: 1px solid brown;
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

}</style>
