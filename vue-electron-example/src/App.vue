<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/nai.jpg" class="homeImg"/>
    <HomePage msg="Welcome to OnlyChat" />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.homeImg{
  width: 300px;
  height: 500px;
  
  margin-top: 10px;
}
</style>
