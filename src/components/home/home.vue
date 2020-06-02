<template>
	<div class="wrap home">
		<f-search></f-search><!-- 搜索 -->
		<f-category></f-category><!-- 菜单 -->
		<f-menu></f-menu><!-- 每日三餐 -->
		<f-hot></f-hot><!-- 热门专题 -->
		<f-promote></f-promote><!-- 为你推荐 -->
		<f-add></f-add><!-- 左上角加号 -->
	</div>
</template>
<script>
	import fSearch from './search/search.vue'
	import fCategory from './category/category.vue'
	import fMenu from './menu/menu.vue'
	import fHot from './hot/hot.vue'
	import fPromote from './promote/promote.vue'
	import fAdd from './add/add.vue'

	export default {
		components: {
			'f-search': fSearch,
			'f-category': fCategory,
			'f-menu': fMenu,
			'f-hot': fHot,
			'f-promote': fPromote,
			'f-add': fAdd
		}
	}
</script>
<style lang="less">
	.home {
		padding: 40px 0 50px 0;
	}
</style>