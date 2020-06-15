<template>
  <transition name="slideleft">
    <div class="message-wrap">
      <f-message-header message="消息通知" />
      <div class="message-list">
        <router-link :to="'/message/news'" class="message-list-item">
          <div class="icon-text">
            <i class="fa fa-envelope" aria-hidden="true" />
            <span>消息</span>
          </div>
          <div class="goto">
            <i class="fa fa-angle-right" aria-hidden="true" />
          </div>
        </router-link>
        <router-link :to="'/message/activity'" class="message-list-item">
          <div class="icon-text">
            <i class="fa fa-cube" aria-hidden="true" />
            <span>活动</span>
          </div>
          <div class="goto">
            <i class="fa fa-angle-right" aria-hidden="true" />
          </div>
        </router-link>
        <router-link :to="'/message/comment'" class="message-list-item">
          <div class="icon-text">
            <i class="fa fa-commenting" aria-hidden="true" />
            <span>评论</span>
          </div>
          <div class="goto">
            <i class="fa fa-angle-right" aria-hidden="true" />
          </div>
        </router-link>
        <router-link :to="'/message/like'" class="message-list-item">
          <div class="icon-text">
            <i class="fa fa-thumbs-up" aria-hidden="true" />
            <span>点赞</span>
          </div>
          <div class="goto">
            <i class="fa fa-angle-right" aria-hidden="true" />
          </div>
        </router-link>
        <router-link :to="'/message/collect'" class="message-list-item">
          <div class="icon-text">
            <i class="fa fa-heart" aria-hidden="true" />
            <span>收藏</span>
          </div>
          <div class="goto">
            <i class="fa fa-angle-right" aria-hidden="true" />
          </div>
        </router-link>
      </div>
    </div>
  </transition>
</template>
<script>
import fMessageHeader from '@/components/common/messageHeader.vue'

export default {
  components: {
    'f-message-header': fMessageHeader
  }
}
</script>
<style lang="less">
	.message-wrap {
		padding: 40px 0 0 0;
		min-height: 100%;
		background-color: #f9f9f9;
		box-sizing: border-box;
		.message-list-item {
			display: flex;
			justify-content: space-between;
			padding: 10px;
			background-color: #fff;
			border-bottom: 1px solid #e9e9e9;
			.icon-text {
				i {
					padding: 10px;
					font-size: 18px;
					color: #fff;
					border-radius: 200px;
					&.fa-envelope {
						background-color: #1ece9f;
					}
					&.fa-cube {
						background-color: #a6dc6c;
					}
					&.fa-commenting {
						background-color: #3f9cea;
					}
					&.fa-thumbs-up {
						background-color: #feb60c;
					}
					&.fa-heart {
						background-color: #f9533b;
					}
				}
				span {
					margin-left: 10px;
					color: #333;
				}
			}
			.goto {
				i {
					font-size: 16px;
					line-height: 38px;
				}
			}
		}
	}
</style>
