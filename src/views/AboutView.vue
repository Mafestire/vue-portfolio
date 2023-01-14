<template>
  <div class="abt">
    <div class="about">
      <img src="https://i.postimg.cc/7ZW6dJLY/C11-Sibabalwe-Mafestire-2-1-removebg-preview.png" alt="">
      <div class="details">
        <h2>About Me</h2>
        <p id="info">
I am a web developer, passionate about beutiful interfaces and intuitively implemented UI. I have always been someone who has both a creative and logical sides, when I discovered coding at Life Choices, I found a field that challenges me to do better and put my skills into practical use.</p>
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
  display: flex;
  justify-content: space-between;
}

.about img{
  width: 17rem;
  height: 25rem;
  margin-top: 9rem;
  margin-left: 12rem;
  transform: translateX(10%);
}
.details {
  width: 25rem;
  text-align: center;
  margin: 5rem 15rem;
  transform: translateX(-40%);
  color: rgb(175, 175, 238);
}

.details p {
  font-size: 1.5rem;
}

.details h2 {
  border-bottom: 1px solid rgb(175, 175, 238);
  font-size: 3rem;
}

@media (max-width: 700px) {
  .details h2{
    font-size: 1.5rem;
    border-bottom: none;
  }
  .about{
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
    margin-left: 5rem;
  }
.about img{
  width: 9rem;
  height: 13rem;
  margin-left: 15rem;
}

.details p{
  font-size: .7rem;
  margin-left: 17rem;
  width: 13rem;

}

.details{
  margin-left: 5.5rem;
  margin-top: 1rem;
  text-align: center;
}
}
@media (max-width: 768px) {
  .about{
    margin-left: -12rem;
  }
  .details{
    font-size: 1rem;
    margin-left: 6rem;
  }
}
</style>
