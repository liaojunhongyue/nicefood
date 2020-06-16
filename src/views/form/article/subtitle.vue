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
		padding: 2.3vw;
		.border-bottom-1px(#e7e7e7);
		.article-subtitle-text {
			width: 100%;
			height: 6vw;
			line-height: 6vw;
			border: 0;
		}
		i {
			position: absolute;
			right: 2.3vw;
			top: 2.3vw;
			line-height: 6vw;
		}
	}
</style>
