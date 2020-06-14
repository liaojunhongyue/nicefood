<template>
	<div class="user-comment-list" :class="{blank: isBlank}"></div>
</template>
<script>
	export default {
		data() {
			return {
				isBlank: true
			}
		}
	}
</script>
<style lang="less"></style>