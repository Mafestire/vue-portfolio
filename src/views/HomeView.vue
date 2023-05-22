<template>
  <Home />
  <NavBar />
  <LatestWork />
  <Education />
  <Form />

</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import NavBar from "@/components/NavBar.vue";
import LatestWork from '@/components/LatestWork.vue'
import Education from '@/components/Education.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'HomeView',
  components: { Home, LatestWork, NavBar, Education, Form }
}
</script>