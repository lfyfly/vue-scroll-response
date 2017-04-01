<template lang="pug">
#app
  vue-scroll-response
</template>

<script>
import vueScrollResponse from './components/vue-scroll-response/vue-scroll-response.vue'

export default {
  name: 'app',
  components: {
    vueScrollResponse
  }
}
</script>

<style>
body,html{
  height: 100%;
  margin:0;
}
a {
  color: #555;
  text-decoration: none;
}
#app {
  height: 100%;
  overflow: hidden;
}
</style>
