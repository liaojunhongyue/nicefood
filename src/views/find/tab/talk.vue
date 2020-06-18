<template>
  <div class="find-talk">
    <div class="find-talk-banner">
      <img :src="talkBanner">
    </div>
    <div class="find-talk-icon">
      <div class="icon-scroll" style="width: 560px;">
        <div class="item">
          <i class="fa fa-beer" style="background-color: #1d9442;" aria-hidden="true" />
          <span>V家厨房</span>
        </div>
        <div class="item">
          <i class="fa fa-bell" style="background-color: #fe6e0d;" aria-hidden="true" />
          <span>玖号厨房</span>
        </div>
        <div class="item">
          <i class="fa fa-camera-retro" style="background-color: #3ece9b;" aria-hidden="true" />
          <span>美食厨房</span>
        </div>
        <div class="item">
          <i class="fa fa-comments" style="background-color: #ab82c4;" aria-hidden="true" />
          <span>最IN活动</span>
        </div>
        <div class="item">
          <i class="fa fa-cubes" style="background-color: #ffca08;" aria-hidden="true" />
          <span>餐桌时光</span>
        </div>
        <div class="item">
          <i class="fa fa-balance-scale" style="background-color: #ff969a;" aria-hidden="true" />
          <span>玩转烘培</span>
        </div>
        <div class="item">
          <i class="fa fa-book" style="background-color: #139466;" aria-hidden="true" />
          <span>美食课堂</span>
        </div>
      </div>
    </div>
    <div class="find-talk-tab">
      <router-link :to="'/find/talk/newtab'" class="item">
        最新
      </router-link>
      <router-link :to="'/find/talk/hottab'" class="item">
        最热
      </router-link>
    </div>
    <div class="find-talk-add">
      <transition name="slideshowadd">
        <ul v-show="isShowAdd" class="add-list">
          <router-link :to="'/user/create/talks'" class="add-item"><i class="fa fa-comments-o" aria-hidden="true" /><span>发食话</span></router-link>
          <router-link :to="'/user/create/works'" class="add-item"><i class="fa fa-picture-o" aria-hidden="true" /><span>晒作品</span></router-link>
          <li class="add-item"><i class="fa fa-search" aria-hidden="true" /><span>搜用户</span></li>
        </ul>
      </transition>
      <div class="add-icon" :class="rotateClass" @click="addTalk">
        <i class="fa fa-plus" aria-hidden="true" />
      </div>
    </div>
    <div v-show="isShowAdd" class="add-mask" />
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      findData: '',
      talkData: '',
      talkBanner: '',
      isShowAdd: false,
      rotateClass: ''
    }
  },
  mounted() {
    this.http.get(this.api.query.findData.url).then((response) => {
      this.findData = response.data.data
      this.talkData = this.findData.talk
      this.talkBanner = this.talkData.banner
    })
  },
  methods: {
    addTalk: function() {
      if (!this.isShowAdd) {
        this.isShowAdd = true
        this.rotateClass = 'rotate'
      } else {
        this.isShowAdd = false
        this.rotateClass = ''
      }
    }
  }
}
</script>
<style lang="less">
	.find-talk {
		width: 100%;
		.find-talk-banner {
			width: 100%;
			img {
				width: 100%;
			}
		}
		.find-talk-icon {
			overflow: auto;
			.icon-scroll {
				display: flex;
				padding: 2.3vw 4.6vw;
				.item {
					width: 22vw;
					text-align: center;
					i {
						display: block;
						width: 12vw;
						height: 12vw;
						margin: 0 auto 1.5vw;
						color: #fff;
						font-size: 5vw;
						text-align: center;
						line-height: 12vw;
						border-radius: 100vw;
					}
				}
			}
		}
		.find-talk-tab {
			display: flex;
			margin: 1.35vw auto;
			width: 35vw;
			line-height: 7vw;
			border: 1px solid #ff2323;
			border-radius: 1.2vw;
			box-sizing: border-box;
			.item {
				flex-grow: 1;
				color: #ff2323;
				text-align: center;
				&.router-link-active {
					color: #fff;
					background-color: #ff2323;
				}
			}
		}
		.find-talk-add {
			position: fixed;
			right: 4.6vw;
			bottom: 22vw;
			z-index: 101;
			.slideshowadd-enter {
				opacity: 0;
				top: 100px;
			}
			.slideshowadd-enter-active {
				transition: all 0.5s !important;
			}
			.slideshowadd-enter-to {
				opacity: 1;
				top: 0;
			}
			.add-list {
				position: relative;
				margin-bottom: 30vw;
				.add-item {
					display: block;
					height: 10vw;
					line-height: 10vw;
					padding: 0 3.35vw;
					margin-bottom: 2.3vw;
					.border-1px(#e7e7e7, 4vw);
					i {
						margin-right: 1.35vw;
					}
				}
			}
			.add-icon {
				position: fixed;
				right: 4.6vw;
				bottom: 22vw;
				width: 12vw;
				height: 12vw;
				line-height: 12vw;
				text-align: center;
				font-size: 8vw;
				color: #fff;
				background-color: #ff2323;
				border-radius: 100vw;
				transition: all 0.3s;
			}
			.rotate {
				transform: rotateZ(45deg);
			}
		}
		.add-mask {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #fff;
			opacity: 0.9;
			z-index: 100;
		}
	}
</style>
