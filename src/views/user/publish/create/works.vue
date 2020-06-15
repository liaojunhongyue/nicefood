<template>
  <div class="create-works">
    <header class="create-works-header">
      <div class="go-back" @click="goHistory">
        <i class="fa fa-angle-left" aria-hidden="true" />
      </div>
      发布作品
      <div class="go-publish-works" @click="submitWorks">
        发布
      </div>
    </header>
    <div class="add-works">
      <form id="addWorksForm">
        <div class="works-content">
          <div class="works-pic">
            <div class="works-picbg">
              <i class="fa fa-file-image-o" aria-hidden="true" />
            </div>
            <img v-show="isShowPic" ref="worksimg" src="">
            <input ref="workspic" type="file" class="upload-works-pic" @change="fileSelect">
          </div>
          <div class="works-textarea">
            <textarea ref="workstext" placeholder="说说照片背后的故事" />
          </div>
        </div>
      </form>
    </div>
    <div class="join-activity">
      <p class="join-activity-title">参加活动</p>
      <div class="join-activity-content">
        <p class="content-title">【每日签到】我的美食日记</p>
        <p class="content-text">
          从今天开始，自己动手，丰衣足食，生活不仅需要笑声，还有锅碗瓢的敲打声，不华丽，不复杂，我们都不是做饭的高手，只是认真生活的平常人。
        </p>
        <p class="content-time">01月01日-12月31日</p>
      </div>
    </div>
    <!-- 验证返回信息 -->
    <toast v-show="isShowPrompt" :prompttext="promptCallback" />
  </div>
</template>
<script>
import toast from '@/components/toast/toast.vue'

export default {
  components: {
    'toast': toast
  },
  data() {
    return {
      isShowPic: false,
      isShowPrompt: false,
      toast: ''
    }
  },
  methods: {
    goHistory: function() {
      this.$router.go(-1)
    },
    fileSelect: function(e) {
      e = e || window.event
      const that = this
      const files = e.target.files
      for (let i = 0; i <= files.length; i++) {
        const f = files[i]
        const reader = new FileReader()
        reader.onload = (function(file) {
          return function(e) {
            if (this.result !== '') {
              that.isShowPic = true
              that.$refs.worksimg.src = this.result
            }
          }
        })(f)
        // 读取文件内容
        reader.readAsDataURL(f)
      }
    },
    submitWorks: function() {
      const that = this
      const picValue = this.$refs.workspic.value
      const textValue = this.$refs.workstext.value
      if (picValue === '') {
        this.promptCallback = '请上传作品图片'
        this.showPrompt()
      } else if (textValue === '') {
        this.promptCallback = '请发表您的感想'
        this.showPrompt()
      } else {
        this.promptCallback = '作品提交成功，请等待管理员审核'
        this.isShowPrompt = true
        setTimeout(function() {
          that.isShowPrompt = false
          that.$router.replace('/user/publish/works')
        }, 1500)
      }
    },
    showPrompt: function() {
      const that = this
      this.isShowPrompt = true
      setTimeout(function() {
        that.isShowPrompt = false
      }, 1500)
    }
  }
}
</script>
<style lang="less">
	.create-works {
		padding: 40px 0 0 0;
		min-height: 100%;
		background-color: #f5f5f5;
		box-sizing: border-box;
		.create-works-header {
			position: fixed;
			top: 0px;
			left: 0px;
			width: 100%;
			height: 40px;
			text-align: center;
			line-height: 40px;
			font-size: 16px;
			color: #333;
			background-color: #fff;
			border-bottom: 1px solid #e7e7e7;
			z-index: 100;
			.go-back {
				position: absolute;
				left: 10px;
				i {
					font-size: 18px;
					color: #ff2323;
				}
			}
			.go-publish-works {
				position: absolute;
				top: 0;
				right: 10px;
				height: 40px;
				line-height: 40px;
				color: #ff2323;
			}
		}
		.add-works {
			border-bottom: 2px solid #e8e8e8;
			.works-content {
				padding: 20px;
				overflow: hidden;
				.works-pic {
					position: relative;
					float: left;
					width: 15vh;
					height: 15vh;
					.works-picbg {
						width: 100%;
						height: 100%;
						text-align: center;
						border: 1px solid #ababab;
						border-radius: 5px;
						box-sizing: border-box;
						i {
							line-height: 15vh;
							font-size: 50px;
						}
					}
					img {
						position: absolute;
						position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            min-height: 100%;
            transform: translate3d(-50%,-50%,0);
						border-radius: 5px;
					}
					.upload-works-pic {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						opacity: 0;
					}
				}
				.works-textarea {
					padding-left: 10px;
					margin-left: 15vh;
					height: 15vh;
					textarea {
						background-color: #f5f5f5;
						border: 0;
						resize: none;
					}
				}
			}
		}
		.join-activity {
			padding: 10px;
			.join-activity-title {
				line-height: 35px;
				color: #333;
			}
			.join-activity-content {
				padding: 10px;
				background-color: #fff;
				.content-title {
					margin-bottom: 10px;
					color: #333;
				}
				.content-text {
					text-align: justify;
				}
				.content-time {
					margin-top: 10px;
					color: #ff2323;
				}
			}
		}
	}
</style>
