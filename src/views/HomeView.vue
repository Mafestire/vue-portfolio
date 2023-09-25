<template>
  <Home />
  <NavBar />


  <LatestWork />

  <section class="skills" id="skills" ref="skills">
    <Res />
  </section>
  <!-- <div class="skills" id="skills" ref="skills">
    <Res />
  </div> -->

  <section class="education" id="education">
    <Education />
  </section>

  <Form />

</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import NavBar from "@/components/NavBar.vue";
import LatestWork from '@/components/LatestWork.vue'
import Education from '@/components/Education.vue'
import Form from '@/components/Form.vue'
import Res from "@/components/Res.vue";

export default {
  name: 'HomeView',
  components: { Home, LatestWork, NavBar, Education, Form, Res },

  mounted() {
            var section=this.$router.currentRoute.value.hash.replace("#", "");
            if (section)
                this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
        },
}
</script>

<style scoped>
.navbar {
    display: flex;
    z-index: 1;
    justify-content: space-between;
    width: 100%;
    /* height: 1rem; */
    top: 1rem;
    z-index: 10;
    padding: 5rem 7rem;
    font-family: 'Nunito Sans', sans-serif;
    animation: in 2s ease-in;
}

@keyframes in {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0%);
    }
}

i {
    display: none;
    align-items: center;
    cursor: pointer;
}



.navbar h2 a {
    text-decoration: none;
}

.navbar h2:hover {
    font-size: 4rem;
}

.navbar ul {
    display: flex;
}

.navbar li {
    list-style: none;
    text-decoration: none;
}

.navbar a {
    list-style: none;
    text-decoration: none;
    margin-right: 15px;
    font-size: 1.3rem;
    color: #ffff;
}

.navbar a:hover:active{
    border-bottom: 1px solid aqua;
}

.container-fluid {
    width: 100%;
}

@media (width < 800px) {
    .navbar {
        display: flex;
        justify-content: end;
        z-index: 1;
        width: 100%;
        height: 5rem;
        top: 1rem;
        padding: 0;
        margin: 0 !important;
        font-family: 'Nunito Sans', sans-serif;
        animation: in 1s ease-in;
    }

    .collapse {
        background-color: #171717;
        width: 100%;
        border: 1px solid #ffff;
    }

    .navbar-collapse {
        width: 100%;
        padding-left: 1rem !important;
    }

    .container-fluid {
        width: 100%;
        align-items: end;
        display: flex;
        justify-content: end;
        padding-left: 1rem !important;
    }

}

</style>