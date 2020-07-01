<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.performance()
  },
  methods: {
    performance() {
      const timing = window.performance.timing
      console.log(timing)
      const domainLookupTiming = timing.domainLookupEnd - timing.domainLookupStart
      console.log('DNS查询耗时：' + domainLookupTiming)
      const connectTiming = timing.connectEnd - timing.connectStart
      console.log('TCP链接耗时：' + connectTiming)
      const requestTiming = timing.responseEnd - timing.responseStart
      console.log('Request请求耗时：' + requestTiming)
      const domTiming = timing.domComplete - timing.domInteractive
      console.log('解析dom树耗时：' + domTiming)
      const whiteTiming = timing.domLoading - timing.fetchStart
      console.log('白屏时间：' + whiteTiming)
      const domreadyTiming = timing.domContentLoadedEventEnd - timing.fetchStart
      console.log('domready时间：' + domreadyTiming)
      const onloadTiming = timing.loadEventEnd - timing.fetchStart
      console.log('onload时间：' + onloadTiming)
    }
  }
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
input, textarea, button {
  outline: none;
}
ul, li {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
