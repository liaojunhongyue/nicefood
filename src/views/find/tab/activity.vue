<template>
  <div class="find-activity padding">
    <div class="find-activity-list">
      <div v-for="item in activityData" :key="item.id" class="find-activity-item">
        <img :src="item.image">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      findData: '',
      activityData: ''
    }
  },
  mounted() {
    this.$http.get('/api/findData').then((response) => {
      this.findData = response.data.data
      this.activityData = this.findData.activity
    })
  }
}
</script>
<style lang="less">
	.find-activity-list {
		padding-bottom: 2.3vw;
		&:last-child {
			padding-bottom: 0;
		}
		.find-activity-item {
			width: 100%;
			margin-bottom: 2.3vw;
			img {
				width: 100%;
			}
		}
	}
</style>
