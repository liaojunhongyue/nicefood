<template>
  <div class="search">
    <div class="search-border-bottom">
      <div class="add" :class="addrotateGetters" @click="showAdd">
        <i class="fa fa-plus" aria-hidden="true" />
      </div>
      <div class="input">
        <i class="fa fa-search" aria-hidden="true" />
        <input v-debounce="[() => {getResult(2)}, 2000]" type="text" placeholder="菜谱、食材">
      </div>
      <router-link :to="'/message'" class="message">
        <i class="fa fa-envelope-o" aria-hidden="true" />
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      rotateAdd: ''
    }
  },
  computed: {
    ...mapGetters(['addrotateGetters'])
  },
  methods: {
    showAdd() {
      this.$store.commit('setShowadd', true)
      this.$store.commit('setAddrotate', 'rotate')
    },
    getResult(count) {
      console.log(count)
    }
  }
}
</script>
<style lang="less">
	.search {
		position: fixed;
		top: 0px;
		left: 0px;
		height: 12vw;
		width: 100%;
    background-color: #fff;
    .search-border-bottom {
      height: 12vw;
      .border-bottom-1px(#e7e7e7);
    }
		z-index: 100;
		.add {
			position: absolute;
			top: 0px;
			left: 0px;
			height: 12vw;
			width: 12vw;
			text-align: center;
			transition: all 0.3s;
			i {
				margin-top: 3vw;
				color: #303030;
				font-size: 6vw;
			}
		}
		.rotate {
			transform: rotateZ(45deg);
		}
		.input {
			position: absolute;
			top: 2.5vw;
			left: 12vw;
			right: 12vw;
			height: 7vw;
			background-color: #ececec;
			i {
				position: relative;
        margin: 1.5vw 0 0 2vw;
        font-size: 4vw;
				background-color: #ececec;
				z-index: 100;
			}
			input[type=text] {
				position: absolute;
				width: 100%;
				left: 0;
				padding-left: 8vw;
        height: 7vw;
        line-height: 7vw;
				border: 0;
				background-color: #ececec;
				box-sizing: border-box;
			}
		}
		.message {
			position: absolute;
			right: 0px;
			top: 0px;
			width: 12vw;
			height: 12vw;
			text-align: center;
			i {
				margin-top: 3vw;
				color: #303030;
				font-size: 6vw;
			}
		}
	}
</style>
