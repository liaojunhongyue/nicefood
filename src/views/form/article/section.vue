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
		padding: 10px;
		border-bottom: 1px solid #e7e7e7;
		.article-section-textarea {
			width: 100%;
			height: 50px;
			border: 0;
			box-sizing: border-box;
			resize: none;
		}
		i {
			position: absolute;
			right: 10px;
			top: 10px;
		}
	}
</style>
