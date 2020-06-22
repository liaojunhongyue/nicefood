<template>
  <div class="find-activity padding">
    <div class="find-activity-list">
      <div v-for="item in activityData" :key="item.id" class="find-activity-item">
        <van-image :src="item.image" />
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
    this.http.get(this.api.query.findData.url).then((response) => {
      const { code, data } = response.data
      if (code === 0) {
        this.findData = data
        this.activityData = this.findData.activity
      } else {
        this.Toast.fail('数据异常')
      }
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
