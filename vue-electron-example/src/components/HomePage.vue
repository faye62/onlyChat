<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      If you have any suggestions for us, please contact and send an email to loveuasuka@gmail.com
      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
    </p>


  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
