<template>
  <transition name="slidetop">
    <div v-show="showaddGetters" class="add-more-info">
      <div class="close" @click="hideAdd">
        <i class="fa fa-times" aria-hidden="true" />
      </div>
      <p class="title">生活不止诗和远方，还有眼前的肉和汤</p>
      <div class="go-operate">
        <router-link :to="'/user/create/menu'" class="operate-item">
          <i class="fa fa-coffee" aria-hidden="true" />
          <span>传菜谱</span>
        </router-link>
        <router-link :to="'/user/create/works'" class="operate-item">
          <i class="fa fa-shopping-basket" aria-hidden="true" />
          <span>晒作品</span>
        </router-link>
        <router-link :to="'/user/create/article'" class="operate-item">
          <i class="fa fa-book" aria-hidden="true" />
          <span>发文章</span>
        </router-link>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['showaddGetters'])
  },
  methods: {
    hideAdd: function() {
      this.$store.commit('setShowadd', false)
      this.$store.commit('setAddrotate', '')
    }
  }
}
</script>
<style lang="less">
	.add-more-info {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		background-color: #fff;
		.close {
			position: absolute;
      top: 0px;
      left: 0px;
      height: 12vw;
      width: 12vw;
      text-align: center;
			i {
        margin-top: 2.3vw;
        color: #303030;
        font-size: 6vw;
			}
		}
		&>.title {
			position: absolute;
			top: 15vw;
			padding: 0 4.6vw;
			font-size: 5.5vw;
			line-height: 8vw;
			color: #333;
		}
		.go-operate {
			position: absolute;
			bottom: 15vw;
			width: 100%;
			padding: 0 6.9vw;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			.operate-item {
				text-align: center;
				i {
					font-size: 10vw;
					padding: 2.3vw;
					border: 2px solid #ddd;
					border-radius: 100vw;
					&.fa-coffee {
						color: #d4e966;
					}
					&.fa-shopping-basket {
						color: #ffb381;
					}
					&.fa-book {
						color: #7fc7f6;
					}
				}
				span {
					display: block;
					margin-top: 2.3vw;
					font-size: 4vw;
					color: #666;
				}
			}
		}
	}
</style>
