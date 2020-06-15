<template>
  <div v-if="isShowSubTitle" ref="articlecontent" class="form-list">
    <div class="article-subtitle">
      <input type="text" class="article-subtitle-text" placeholder="添加二级标题">
      <i class="fa fa-times" aria-hidden="true" @click="removeThis" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowSubTitle: true
    }
  },
  methods: {
    removeThis: function() {
      this.isShowSubTitle = false
    }
  }
}
</script>
<style lang="less">
	.article-subtitle {
		position: relative;
		padding: 10px;
		border-bottom: 1px solid #e7e7e7;
		.article-subtitle-text {
			width: 100%;
			height: 25px;
			line-height: 25px;
			border: 0;
		}
		i {
			position: absolute;
			right: 10px;
			top: 10px;
			line-height: 25px;
		}
	}
</style>
