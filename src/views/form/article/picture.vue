<template>
  <div v-if="isShowPicture" class="form-list">
    <div class="article-content-pic">
      <div class="article-content-picbg">
        <i class="fa fa-plus-square" aria-hidden="true" />
        <p>添加图片</p>
        <van-image v-show="isShowImg" ref="articleImg" class="article-img" src="">
          <input type="file" class="article-content-pic-upload" @change="selectFile">
        </van-image></div>
      <i class="fa fa-times" aria-hidden="true" @click="removeThis" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowPicture: true,
      isShowImg: false
    }
  },
  methods: {
    removeThis: function() {
      this.isShowPicture = false
    },
    selectFile: function(e) {
      e = e || window.event
      const that = this
      const files = e.target.files
      for (let i = 0; i <= files.length; i++) {
        const f = files[i]
        const reader = new FileReader()
        reader.onload = (function() {
          return function(e) {
            if (this.result !== '') {
              that.isShowImg = true
              that.$refs.articleImg.src = this.result
            }
          }
        })(f)
        reader.readAsDataURL(f)
      }
    }
  }
}
</script>
<style lang="less">
	.article-content-pic {
		position: relative;
		padding: 12vw 2.3vw 2.3vw 2.3vw;
		.border-bottom-1px(#e7e7e7);
		.fa-times {
			position: absolute;
			top: 2.3vw;
			right: 2.3vw;
		}
		.article-content-picbg {
			position: relative;
			height: 45vw;
			text-align: center;
			background-color: #f5f5f5;
			.fa-plus-square {
				margin-top: 12vw;
				font-size: 18vw;
			}
			.article-img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			.article-content-pic-upload {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				opacity: 0;
			}
		}
	}
</style>
