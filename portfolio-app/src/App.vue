<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      
    };
  },
  methods:{
    scrollFunction(){
      console.log('scorll')
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  padding: 0px;
  width: 100%;
}
</style>