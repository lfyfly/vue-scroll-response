<template lang="pug">
#app
  //- vue-scroll-response
  test(v-scroll-response="{content:'.content',catalog:'.catalog',title:'.title',scrollEl:'abc'}")
  //- div(v-scroll-response="{a:1}", id ="ff")
</template>

<script>
import vueScrollResponse from './components/vue-scroll-response/vue-scroll-response.vue'
import test from './components/test.vue'

export default {
  name: 'app',
  components: {
    vueScrollResponse,
    test
  },


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
