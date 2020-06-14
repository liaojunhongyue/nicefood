<template>
	<div class="category padding">
		<router-link :to="'/foodgroup'" class="category-list">
			<i class="fa fa-coffee" aria-hidden="true"></i>
			<span>智能组菜</span>
		</router-link>
		<router-link :to="'/currentseason'" class="category-list">
			<i class="fa fa-leaf" aria-hidden="true"></i>
			<span>当季食材</span>
		</router-link>
		<router-link :to="'/myfooter'" class="category-list">
			<i class="fa fa-map-o" aria-hidden="true"></i>
			<span>我的足迹</span>
		</router-link>
		<router-link :to="'/foodcategory'" class="category-list">
			<i class="fa fa-list" aria-hidden="true"></i>
			<span>菜谱分类</span>
		</router-link>
	</div>
</template>
<script>
	export default {

	}
</script>
<style lang="less">
	.category {
		display: flex;
		.category-list {
			flex-grow: 1;
			padding-top: 10px;
			text-align: center;
			i {
				font-size: 22px;
				margin-bottom: 10px;
				&.fa-coffee {
					color: #9a6666;
				}
				&.fa-leaf {
					color: #69e259;
				}
				&.fa-map-o {
					color: #bd01b2;
				}
				&.fa-list {
					color: #8784fe;
				}
			}
			span {
				display: block;
				color: #787878;
			}
		}
	}
</style>