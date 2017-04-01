<template lang="pug">
#app
  test(v-scroll-response="{title:'.title',contentId:'content',catalogId:'catalog'}")

</template>

<script>
import test from './components/test.vue'

export default {
  name: 'app',
  components: {
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
