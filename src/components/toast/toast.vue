<template>
  <transition name="prompt">
    <div class="validate-prompt validate-prompt-animate">
      <p class="prompt-text">{{ prompttext }}</p>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    prompttext: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less">
	.validate-prompt {
		position: fixed;
		left: 0;
		bottom: 20vh;
		width: 100%;
		text-align: center;
		.prompt-text {
			display: inline-block;
			padding: 0 20px;
			line-height: 25px;
			color: #fff;
			background-color: #000;
			opacity: 0.9;
			border-radius: 3px;
		}
	}
</style>
