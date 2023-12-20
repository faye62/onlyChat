<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/nai.jpg" class="homeImg" />-->
    <HelloWorld msg="Welcome to OnlyChat" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
