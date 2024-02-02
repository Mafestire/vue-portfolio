<template>
  <Nav />

  <!-- <div class="head">
    <h1>About me</h1>
  </div> -->

  <div class="abt">
    <div class="about">
      <img src="https://i.postimg.cc/BQDYRcGf/C11-Sibabalwe-Mafestire-3-removebg-preview-1.png
" alt="">
      <div class="details" >
        <h2 >Hello, I am</h2>
        <h2 style="color: aqua;">Sibabalwe Mafestire</h2>
        <h2 style="font-weight: 600;">Web Developer</h2>
        <p id="info">
          As a full stack developer i am passionate about unique web applications. Ever
          since i discovered coding at Life Choices, I found a field
          that challenges me to do better and put my skills into practical use.
        </p>


        <div class="more">
          <ul class="list-group list-group-vertical w-25">
            <li class="list-group-item">DOB</li>
            <li class="list-group-item">Address</li>
            <li class="list-group-item p ">Phone</li>
            <li class="list-group-item p n">Linkedin</li>
            <li class="list-group-item p ">Email</li>
            <li class="list-group-item p ">CV</li>
            <li class="list-group-item p ">Full Stack </li>
            <li class="list-group-item p ">SEO </li>
            <li class="list-group-item p ">Salesforce </li>
          </ul>
          <ul class="list-group sec list-group-vertical-sm w-100">
            <li class="list-group-item">2000 / 05 / 30</li>
            <li class="list-group-item">Mfuleni, Cape Town</li>
            <li class="list-group-item num call"><a class="L" href="tel:+27624244310" style="color: #fff; text-decoration: none;">062 4244 310</a></li>
            <li class="list-group-item num"> <a class="L" href="https://www.linkedin.com/in/sibabalwe-mafestire-804364147" style="color: #fff; text-decoration: none;">Sibabalwe Mafestire</a> </li>
            <li class="list-group-item"><a class="L" href="mailto: seabaraven@gmail.com" style="color: #fff; text-decoration: none;">seabaraven@gail.com</a></li>
            <li class="list-group-item"><a class="L" href="https://i.postimg.cc/J72spk9c/Black-White-Minimalist-CV-Resume-7.png" style="color: #fff; text-decoration: none;">View CV</a></li>
            <li class="list-group-item"><a class="L" href="https://i.postimg.cc/d1J5NXZX/Full-Stack-Certificate.png" style="color: #fff; text-decoration: none;">View Certificate</a></li>
            <li class="list-group-item"><a class="L" href="https://i.postimg.cc/KjRrdyG9/SEO-certificate.png" style="color: #fff; text-decoration: none;">View Certificate</a></li>
            <li class="list-group-item"><a class="L" href="https://i.postimg.cc/mrpjLSdp/Cert3850456-Associate20231124.png" style="color: #fff; text-decoration: none;">View Associate Certificate</a></li>
          </ul>
        </div>
      </div>
    </div>
    <Values />

  </div>

</template>

<script>
import Nav from "@/components/Nav.vue";
import Values from '@/components/Values.vue'
export default {
  components: { Nav, Values }
}
</script>

<style scoped>
/* .head {
  height: 20rem;
  background-image: url(https://i.postimg.cc/7LgghXBr/bb.jpg);
  font-family: 'Nunito Sans', sans-serif;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
} */

/* .head h1 {
  font-size: 3.5rem;
  font-weight: 200;
} */

/* body */
.about {
  padding: 0rem 1rem;
  /* height: 63vh !important; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid #000; */
  /* box-shadow: 0 2px 7px 0 black; */
  margin-bottom: 3rem;
  /* margin-top: 2rem; */
  overflow: hidden;
}

.about img {
  width: 25%;
  margin: 0rem 0rem;
  animation: image 2s ease-in;
}

.details {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: white;
  font-family: 'Playfair Display', serif;
}

.L:hover{
  color: aqua !important;
}

.details p {
  font-size: 1.1rem;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Nunito Sans', sans-serif;
}

.call{
  width: 110%;
}

.abt {
  padding: 2rem 11.1rem;
  margin-bottomm: 5rem;
  
}

.details h2 {
  font-size: 2rem;
  font-family: 'Nunito Sans', sans-serif;
}

.more {
  display: flex;
}

.list-group li {
  background-color: #171717;
  border: none;
  color: white;
  padding-left: 0;
  font-family: 'Nunito Sans', sans-serif;
}

        /**  --- animation --- */
  
@keyframes image {
  0%{
    transform: translateY(110%);
  }
}

        /** --- responsiveness --- */

@media (width > 900px) {
  .details h2 {
    font-size: 1.5rem;
    border-bottom: none;
    margin-left: 0;
    margin-right: auto;
  }

  .details {
    /* width: 20rem; */
    /* margin-top: -6rem; */
  }

  .details #info {
    margin: 0;
  }

  .about {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    /* height: 39rem; */
    border: none;
    box-shadow: none;
    padding: 1rem 1rem;
  }

  .abt {
    margin-left: auto;
    margin-right: auto;
    /* margin-bottom: 0rem; */
    /* height: 100%; */
    padding: 1rem 0rem;
  }

  .about img {
    /* width: 30% ; */
    /* height: 70%; */
    text-align: end;
    margin-left: auto;
    margin-right: 0;
    /* margin-top: -10rem; */
  }

  .details p,
  h2 {
    font-size: 1rem;
    width: 100%;
  }

  .more {
width: 100%;  }

  /* .p {
    margin-top: 1.5rem;
  } */

  /* .num{
    margin-top: 1.5rem;
  } */

}

@media (width < 900px) {
  
.num{
  margin-top: 0;
}

  /* .head{
    height: 10rem;
  }

  .head h1{
    font-size: 2rem;
  } */
  .abt{
    margin-top: 0rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem 0rem;
  }

  .L{
    width: 80%;
padding-right: 0;
color: aqua !important;
  }

  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0% 8%;
    /* margin-top: 15%; */
  }

  .details {
    width: 100%;
    margin-top: 2rem;
  }

  .about img {
    display: none;
  }

  .details p,
  h2 {
    font-size: 1rem;
  }

  .p {
    margin-top: 0rem;
  }

.sec{
  padding-left: 3%;
}

  
}
</style>
