<template>
	<div class="menu-display-content" v-if="isShowProcedure" ref="test">
		<p class="menu-display-title">步骤<span>{{ dataindex + 1 }}</span><i class="fa fa-times" aria-hidden="true" @click="removeProcedure"></i></p>
		<ul class="menu-display-list">
			<li class="menu-display-item">
				<div class="menu-display-pic">
					<div class="menu-display-picbg">
						<i class="fa fa-plus-square" aria-hidden="true"></i>
						<p>添加步骤图</p>
					</div>
					<img class="menu-display-img" v-show="isShowPic" ref="menuImg" :src="dataImg" />
					<input type="file" class="pic-upload" @change="fileSelect" />
				</div>
				<div class="menu-display-desc">
					<textarea class="menu-display-textarea" placeholder="请填写步骤描述" ref="textObg" @input="textChange" v-model="textValue">
						{{ datas[dataindex].textValue }}
					</textarea>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
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
		mounted(){
			if(this.dataImg != ''){
				this.isShowPic = true
			}
		},
		props: ['datas','dataindex','dataImg','dataText'],
		methods: {
			removeProcedure: function(){
				// 执行删除
				let dataLength = this.datas.length;
				if(dataLength <= 1){
					return false;
				}
				let thisIndex = this.dataindex;
				let deleteData = this.datas.splice(this.dataindex, 1);
				let newDatasLength = this.datas.length;
				this.$emit('getValue', this.dataValue, this.dataindex, newDatasLength);
				console.log(this.datas)

			},
			fileSelect: function(e){
				let that = this;
				e = e || window.event;
				let files = e.target.files;
				for(let i = 0, f; f = files[i]; i++){
					let reader = new FileReader();
					reader.onload = (function(file){
						return function(e){
							if(this.result != ''){
								that.isShowPic = true;
								that.$refs.menuImg.src = this.result;
								that.imgValue = this.result;
								that.dataValue = {
									'imgValue': that.imgValue,
									'textValue': that.textValue
								}
								that.$emit('getValue', that.dataValue, that.dataindex, that.datas.length);
							}
						}
					})(f);
					reader.readAsDataURL(f);
				}
			},
			textChange: function(){
				this.dataValue = {
					'imgValue': this.imgValue,
					'textValue': this.textValue
				}
				this.$emit('getValue', this.dataValue, this.dataindex, this.datas.length);
			}
		}
	}
</script>
<style lang="less">
	
</style>
