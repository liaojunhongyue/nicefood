<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
* {
  font-size: @normalFontSize;
}
a {
  color: @normalFontColor;
  text-decoration: none;
}
p {
  margin: 0;
}
input, textarea {
  outline: none;
}
ul, li {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
