<template>
  <Home />
  <LatestWork />
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import LatestWork from '@/components/LatestWork.vue'

export default {
  name: 'HomeView',
  components: { Home, LatestWork }
}
</script>