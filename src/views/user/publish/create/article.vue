<template>
  <div class="create-article">
    <f-normal-header message="创作文章" historyurl="" />
    <p class="article-publish" @click="submitArticle">发布</p>
    <div class="add-article">
      <form id="addArticleForm" ref="addarticleform">
        <div class="form-list">
          <div class="article-pic">
            <div class="article-picbg">
              <i class="fa fa-plus-square" aria-hidden="true" />
              <p>添加封面图</p>
              <van-image v-show="isShowPic" ref="mainpic" class="article-img">
                <input ref="mainImg" type="file" class="article-pic-upload" @change="mainPicSelect">
              </van-image></div>
          </div>
        </div>
        <div class="form-list">
          <input ref="mainTitle" type="text" class="article-title" name="menuTitle" placeholder="添加文章标题">
        </div>
        <div class="add-component">
          <div :is="item.component" v-for="(item, index) in items" :key="index" />
        </div>
      </form>
      <div class="add-article-details">
        <div class="details-item" @click="addSubTitle">
          <i class="fa fa-file-powerpoint-o" aria-hidden="true" />
          <p>添加二级标题</p>
        </div>
        <div class="details-item" @click="addSection">
          <i class="fa fa-file-text-o" aria-hidden="true" />
          <p>添加段落文字</p>
        </div>
        <div class="details-item" @click="addPicture">
          <i class="fa fa-file-image-o" aria-hidden="true" />
          <p>添加图片</p>
        </div>
      </div>
    </div>
    <!-- 验证返回信息 -->
    <toast v-show="isShowPrompt" :prompttext="promptCallback" />
  </div>
</template>
<script>
import fNormalHeader from '@/components/common/normalHeader.vue'
import subTitle from '../../../form/article/subtitle.vue'
import articleSection from '../../../form/article/section.vue'
import articlePicture from '../../../form/article/picture.vue'
import toast from '@/components/toast/toast.vue'

export default {
  components: {
    'f-normal-header': fNormalHeader,
    'sub-title': subTitle,
    'article-section': articleSection,
    'article-picture': articlePicture,
    'toast': toast
  },
  data() {
    return {
      isShowPic: false,
      items: [],
      isShowPrompt: false,
      promptCallback: ''
    }
  },
  methods: {
    mainPicSelect: function(e) {
      e = e || window.event
      const that = this
      const files = e.target.files
      for (let i = 0; i <= files.length; i++) {
        const f = files[i]
        const reader = new FileReader()
        reader.onload = (function() {
          return function(e) {
            if (this.result !== '') {
              that.isShowPic = true
              that.$refs.mainpic.src = this.result
            }
          }
        })(f)
        reader.readAsDataURL(f)
      }
    },
    addSubTitle: function() {
      this.items.push({
        'component': subTitle
      })
    },
    addSection: function() {
      this.items.push({
        'component': articleSection
      })
    },
    addPicture: function() {
      this.items.push({
        'component': articlePicture
      })
    },
    submitArticle: function() {
      const that = this
      const mainImgValue = this.$refs.mainImg.value
      const mainTitleValue = this.$refs.mainTitle.value
      if (mainImgValue === '') {
        this.promptCallback = '请上传文章封面图'
        this.showPrompt()
      } else if (mainTitleValue === '') {
        this.promptCallback = '请添加文章标题'
        this.showPrompt()
      } else {
        this.promptCallback = '文章提交成功，请等待管理员审核'
        this.isShowPrompt = true
        setTimeout(function() {
          that.isShowPrompt = false
          that.$router.replace('/user/publish/article')
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
	.create-article {
		padding: 12vw 0 15vw 0;
		.article-publish {
			position: absolute;
			top: 0;
			right: 2.3vw;
			height: 12vw;
			line-height: 12vw;
			color: #ff2323;
			z-index: 105;
		}
		.add-article {
			.article-pic {
				position: relative;
				width: 100%;
				height: 67vw;
				.article-picbg {
					width: 100%;
					height: 67vw;
					text-align: center;
					i {
						margin-top: 22vw;
						font-size: 19vw;
						color: #bbb;
					}
					p {
						margin-top: 1.1vw;
						font-size: 4vw;
						color: #bbb;
					}
					.article-img {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
					}
					.article-pic-upload {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						opacity: 0;
					}
				}
			}
			.article-title {
				width: 100%;
				padding: 2.3vw;
				line-height: 8vw;
				font-size: 4.6vw;
				font-weight: 700;
				background-color: #fdf4d5;
				border: 0;
				box-sizing: border-box;
			}
			.add-article-details {
				display: flex;
				.details-item {
					flex-grow: 1;
					width: 0;
					padding: 4.6vw 0;
					text-align: center;
					i {
						font-size: 7vw;
						color: #f15348;
					}
					p {
						margin-top: 2.3vw;
						color: #f15348;
					}
				}
			}
		}
	}
</style>
