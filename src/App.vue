<template>
  <!-- <NavBar /> -->
  <router-view />
  <Footer />
</template>

<script>
// import NavBar  from "./components/NavBar.vue";
import Footer  from "./components/Footer.vue";

export default {
  components: {  Footer }
}
</script>

<style scoped>
#app{
  background-color: burlywood;
  border: 2px solid red;
  font-family: 'Lobster Two', cursive;
}


</style>
