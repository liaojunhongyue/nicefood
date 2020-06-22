<template>
  <div class="video-content">
    <div class="video">
      <video :poster="cover" :src="videoSrc" controls="controls" autoplay="autoplay" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cover: {
      type: String,
      default: function() {
        return ''
      }
    },
    videoSrc: {
      type: String,
      default: function() {
        return ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.video-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .video {
    position: relative;
    video {
      width: 100%;
    }
    i {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -9vw;
      margin-left: -9vw;
      font-size: 18vw;
      color: #fff;
    }
  }
}
</style>
