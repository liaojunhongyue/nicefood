<template>
  <div v-if="isShowProcedure" ref="test" class="menu-display-content">
    <p class="menu-display-title">步骤<span>{{ dataindex + 1 }}</span><i class="fa fa-times" aria-hidden="true" @click="removeProcedure" /></p>
    <ul class="menu-display-list">
      <li class="menu-display-item">
        <div class="menu-display-pic">
          <div class="menu-display-picbg">
            <i class="fa fa-plus-square" aria-hidden="true" />
            <p>添加步骤图</p>
          </div>
          <img v-show="isShowPic" ref="menuImg" class="menu-display-img" :src="dataImg">
          <input type="file" class="pic-upload" @change="fileSelect">
        </div>
        <div class="menu-display-desc">
          <textarea ref="textObg" v-model="datas[dataindex].textValue" class="menu-display-textarea" placeholder="请填写步骤描述" @input="textChange" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    dataindex: {
      type: Number,
      default: 0
    },
    dataImg: {
      type: String,
      default: ''
    },
    dataText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isShowProcedure: true,
      isShowPic: false,
      dataValue: {},
      imgValue: '',
      textValue: '',
      thisIndex: ''
    }
  },
  mounted() {
    if (this.dataImg !== '') {
      this.isShowPic = true
    }
  },
  methods: {
    removeProcedure: function() {
      // 执行删除
      const dataLength = this.datas.length
      if (dataLength <= 1) {
        return false
      }
      const newDatasLength = this.datas.length
      this.$emit('getValue', this.dataValue, this.dataindex, newDatasLength)
      console.log(this.datas)
    },
    fileSelect: function(e) {
      const that = this
      e = e || window.event
      const files = e.target.files
      for (let i = 0; i <= files.length; i++) {
        const f = files[i]
        const reader = new FileReader()
        reader.onload = (function(file) {
          return function(e) {
            if (this.result !== '') {
              that.isShowPic = true
              that.$refs.menuImg.src = this.result
              that.imgValue = this.result
              that.dataValue = {
                'imgValue': that.imgValue,
                'textValue': that.textValue
              }
              that.$emit('getValue', that.dataValue, that.dataindex, that.datas.length)
            }
          }
        })(f)
        reader.readAsDataURL(f)
      }
    },
    textChange: function() {
      this.dataValue = {
        'imgValue': this.imgValue,
        'textValue': this.textValue
      }
      this.$emit('getValue', this.dataValue, this.dataindex, this.datas.length)
    }
  }
}
</script>
<style lang="less">

</style>
