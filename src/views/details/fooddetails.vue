<template>
  <div class="food-details">
    <f-normal-header :message="menuDetails.title" historyurl="" />
    <div class="pic">
      <img :src="menuDetails.image">
    </div>
    <div class="food-title">
      <p class="title">{{ menuDetails.title }}</p>
      <p>
        <span>{{ menuDetails.like }}人收藏</span>
        <span>{{ menuDetails.browse }}次浏览</span>
      </p>
    </div>
    <div class="food-author">
      <div class="avatar">
        <img :src="menuAuthor.avatar">
      </div>
      <div class="info">
        <p>{{ menuAuthor.name }}</p>
        <p class="menu-number">{{ menuAuthor.desc }}</p>
      </div>
      <div class="follow-author">
        <p>关注</p>
      </div>
    </div>
    <div class="food-point">
      <p>
        <span>评分</span>
        <i v-for="(item, index) in menuDetails.star" :key="index" class="fa fa-star" aria-hidden="true" />
      </p>
    </div>
    <div class="food-footer">
      <router-link :to="{name: 'menucomment', params: {commentid: menuDetails.id}}" class="food-footer-list">
        <i class="fa fa-commenting-o" aria-hidden="true" />
      </router-link>
      <div class="food-footer-list" @click="likeMenu">
        <i class="fa fa-heart" :class="{active: isLikedActive}" aria-hidden="true" />
      </div>
      <div class="food-footer-list" @click="shareMenuShow">
        <i class="fa fa-share-square-o" aria-hidden="true" />
      </div>
    </div>
    <!-- 点赞后返回的信息 -->
    <toast v-show="isLikedShow" :prompttext="promptCallback" />
    <!-- 分享 -->
    <transition name="prompt">
      <div v-show="isShareShow" class="menu-share">
        <div class="menu-share-content">
          <p class="menu-share-title">好内容就应该与朋友分享</p>
          <ul class="menu-share-list">
            <li class="menu-share-item">
              <i class="fa fa-file" aria-hidden="true" />
              <p>菜谱整图分享</p>
            </li>
            <li class="menu-share-item">
              <i class="fa fa-weixin" aria-hidden="true" />
              <p>微信好友</p>
            </li>
            <li class="menu-share-item">
              <i class="fa fa-qq" aria-hidden="true" />
              <p>QQ好友</p>
            </li>
            <li class="menu-share-item">
              <i class="fa fa-weibo" aria-hidden="true" />
              <p>新浪微博</p>
            </li>
            <li class="menu-share-item">
              <i class="fa fa-files-o" aria-hidden="true" />
              <p>复制链接</p>
            </li>
          </ul>
        </div>
        <div class="menu-share-close">
          <div class="close-icon" @click="shareMenuHide">
            <i class="fa fa-times" aria-hidden="true" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import fNormalHeader from '@/components/common/normalHeader.vue'
import toast from '@/components/toast/toast.vue'

export default {
  components: {
    'f-normal-header': fNormalHeader,
    'toast': toast
  },
  data() {
    return {
      menuData: '',
      menuIndex: '',
      menuDetails: '',
      menuAuthor: '',
      isLiked: false,
      isLikedShow: false,
      isLikedActive: false,
      toast: '',
      isShareShow: false
    }
  },
  mounted() {
    // 获取数据
    this.$http.get('/api/menuData').then((response) => {
      this.menuData = response.data.data
      this.menuIndex = this.$route.params.id - 1
      this.menuDetails = this.menuData[this.menuIndex]
      this.menuAuthor = this.menuDetails.author
      // 判断是否收藏该菜谱
      this.judgeLikedState()
    })
  },
  methods: {
    likeMenu: function() {
      const that = this
      if (!this.isLiked) {
        this.promptCallback = '收藏成功，请前往收藏夹查看'
        this.isLikedActive = true
        this.isLiked = true
        this.isLikedShow = true
        setTimeout(function() {
          that.isLikedShow = false
        }, 1500)
        // 存入sessionStorage
        this.saveSessionLiked(this.menuDetails.id)
      } else {
        this.promptCallback = '已取消收藏'
        this.isLikedActive = false
        this.isLiked = false
        this.isLikedShow = true
        setTimeout(function() {
          that.isLikedShow = false
        }, 1500)
        // 移除sessionStorage
        this.removeSessionLiked(this.menuDetails.id)
      }
    },
    shareMenuShow: function() {
      this.isShareShow = true
    },
    shareMenuHide: function() {
      this.isShareShow = false
    },
    saveSessionLiked: function(likeid) {
      let likeIdArray = sessionStorage.getItem('likeMenuIds')
      likeIdArray += likeid
      sessionStorage.setItem('likeMenuIds', likeIdArray)
      console.log()
    },
    removeSessionLiked: function(likeid) {
      const likeIds = sessionStorage.getItem('likeMenuIds')
      const newLikeIds = likeIds.replace(likeid, '')
      sessionStorage.setItem('likeMenuIds', newLikeIds)
    },
    judgeLikedState: function() {
      const likeIds = sessionStorage.getItem('likeMenuIds')
      if (likeIds.indexOf(this.menuDetails.id) !== -1) {
        this.isLikedActive = true
        this.isLiked = true
      }
    }
  }
}
</script>
<style lang="less">
	.food-details {
		padding: 40px 0 50px 0;
		width: 100%;
		.pic {
			img {
				width: 100%;
			}
		}
		.food-title {
			padding: 10px;
			background-color: #fdf4d5;
			p {
				color: #666;
				line-height: 30px;
			}
			p.title {
				color: #333;
				font-size: 20px;
				font-weight: 700;
			}
			span {
				margin-right: 10px;
			}
		}
		.food-author {
			position: relative;
			justify-content: space-between;
			padding: 10px;
			overflow: hidden;
			.avatar {
				float: left;
				img {
					width: 50px;
					height: 50px;
					border-radius: 200px;
				}
			}
			.info {
				margin-left: 60px;
				padding: 5px 10px;
				color: #757575;
				line-height: 22px;
				.menu-number {
					color: #b0b0b0;
				}
			}
		}
		.follow-author {
			position: absolute;
			top: 23px;
			right: 10px;
			p {
				padding: 2px 7px;
				border-radius: 20px;
				color: #ff2323;
				border: 1px solid #ff2323;
			}
		}
		.food-footer {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 50px;
			display: flex;
			background-color: #fff;
			border-top: 1px solid #e7e7e7;
			.food-footer-list {
				flex-grow: 1;
				text-align: center;
				i {
					font-size: 22px;
					margin-top: 13px;
					&.fa-heart {
						&.active {
							color: #ff6453;
						}
					}
				}
			}
		}
		.food-point {
			padding: 10px;
			p {
				span {
					font-size: 16px;
					margin-right: 10px;
				}
				i {
					margin-left: 5px;
					color: #fbb81f;
				}
			}
		}
		.menu-share {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,0.6);
			z-index: 100;
			.menu-share-content {
				position: relative;
				top: 10vh;
				width: 80%;
				margin: 0 auto;
				background-color: #fff;
				.menu-share-title {
					height: 60px;
					line-height: 60px;
					text-align: center;
					font-size: 16px;
					color: #333;
					background-color: #fdf8f5;
				}
				.menu-share-list {
					.menu-share-item {
						display: flex;
						padding: 10px 30px 10px 30px;
						border-bottom: 1px solid #e7e7e7;
						i {
							width: 40px;
							height: 40px;
							line-height: 40px;
							text-align: center;
							font-size: 18px;
							border: 1px solid #e7e7e7;
							border-radius: 300px;
							&.fa-file {
								color: #76b0b1;
							}
							&.fa-weixin {
								color: #92d957;
							}
							&.fa-qq {
								color: #66afe2;
							}
							&.fa-weibo {
								color: #fd544f;
							}
							&.fa-files-o {
								color: #fa913e;
							}
						}
						p {
							margin-left: 20px;
							line-height: 40px;
						}
					}
				}
			}
			.menu-share-close {
				position: fixed;
				left: 0;
				bottom: 10vh;
				width: 100%;
				text-align: center;
				.close-icon {
					display: inline-block;
					width: 40px;
					height: 40px;
					line-height: 40px;
					border: 1px solid #ededed;
					border-radius: 100px;
					i {
						font-size: 18px;
						color: #ededed;
					}
				}
			}
		}
	}
</style>
