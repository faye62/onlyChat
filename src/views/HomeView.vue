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
.home h1 {
  font-size: 20px;
  margin: 30px 0 0;
}
.home h3 {
  font-size: 16px;
  margin: 0;
  padding: 0;
}
.home ul {
}
.homeImg {
  width: 240px;
  height: 400px;
  margin-top: 5px;
}
</style>
