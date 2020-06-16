<template>
  <div v-if="isShowSection" class="form-list">
    <div class="article-section">
      <textarea class="article-section-textarea" placeholder="添加段落文字" />
      <i class="fa fa-times" aria-hidden="true" @click="removeThis" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowSection: true
    }
  },
  methods: {
    removeThis: function() {
      this.isShowSection = false
    }
  }
}
</script>
<style lang="less">
	.article-section {
		padding: 2.3vw;
		.border-bottom-1px(#e7e7e7);
		.article-section-textarea {
			width: 100%;
			height: 12vw;
			border: 0;
			box-sizing: border-box;
			resize: none;
		}
		i {
			position: absolute;
			right: 2.3vw;
			top: 2.3vw;
		}
	}
</style>
