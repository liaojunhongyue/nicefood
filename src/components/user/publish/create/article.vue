<template>
	<div class="create-article">
		<f-normal-header message="创作文章" historyurl=""></f-normal-header>
		<p class="article-publish" @click="submitArticle">发布</p>
		<div class="add-article">
			<form id="addArticleForm" ref="addarticleform">
				<div class="form-list">
					<div class="article-pic">
						<div class="article-picbg">
							<i class="fa fa-plus-square" aria-hidden="true"></i>
							<p>添加封面图</p>
							<img class="article-img" v-show="isShowPic" ref="mainpic" />
							<input @change="mainPicSelect" type="file" class="article-pic-upload" ref="mainImg" />
						</div>
					</div>
				</div>
				<div class="form-list">
					<input type="text" class="article-title" name="menuTitle" placeholder="添加文章标题" ref="mainTitle" />
				</div>
				<div class="add-component">
					<div :is="item.component" v-for="item in items"></div>
				</div>
			</form>
			<div class="add-article-details">
				<div class="details-item" @click="addSubTitle">
					<i class="fa fa-file-powerpoint-o" aria-hidden="true"></i>
					<p>添加二级标题</p>
				</div>
				<div class="details-item" @click="addSection">
					<i class="fa fa-file-text-o" aria-hidden="true"></i>
					<p>添加段落文字</p>
				</div>
				<div class="details-item" @click="addPicture">
					<i class="fa fa-file-image-o" aria-hidden="true"></i>
					<p>添加图片</p>
				</div>
			</div>
		</div>
		<!-- 验证返回信息 -->
		<validate-prompt v-show="isShowPrompt" :prompttext="promptCallback"></validate-prompt>
	</div>
</template>
<script>
	import fNormalHeader from '../../../common/normalHeader.vue'
	import subTitle from '../../../form/article/subtitle.vue'
	import articleSection from '../../../form/article/section.vue'
	import articlePicture from '../../../form/article/picture.vue'
	import validatePrompt from '../../../prompt/validateprompt.vue'

	export default {
		data() {
			return {
				isShowPic: false,
				items: [],
				isShowPrompt: false,
				promptCallback: ''
			}
		},
		components: {
			'f-normal-header': fNormalHeader,
			'sub-title': subTitle,
			'article-section': articleSection,
			'article-picture': articlePicture,
			'validate-prompt': validatePrompt
		},
		methods: {
			mainPicSelect: function(e){
				e = e || window.event;
				let that = this;
				let files = e.target.files;
				for(let i = 0, f; f = files[i]; i++){
					let reader = new FileReader();
					reader.onload = (function(){
						return function(e){
							if(this.result != ''){
								that.isShowPic = true;
								that.$refs.mainpic.src = this.result;
							}
						}
					})(f);
					reader.readAsDataURL(f);
				}
			},
			addSubTitle: function(){
				this.items.push({
					'component': subTitle
				})
			},
			addSection: function(){
				this.items.push({
					'component': articleSection
				})
			},
			addPicture: function(){
				this.items.push({
					'component': articlePicture
				})
			},
			submitArticle: function(){
				let that = this;
				let mainImgValue = this.$refs.mainImg.value;
				let mainTitleValue = this.$refs.mainTitle.value;
				if(mainImgValue == ''){
					this.promptCallback = '请上传文章封面图';
					this.showPrompt();
				}else if(mainTitleValue == ''){
					this.promptCallback = '请添加文章标题';
					this.showPrompt();
				}else{
					this.promptCallback = '文章提交成功，请等待管理员审核';
					this.isShowPrompt = true;
					setTimeout(function(){
						that.isShowPrompt = false;
						that.$router.replace('/user/publish/article');
					}, 1500)
				}
			},
			showPrompt: function(){
				let that = this;
				this.isShowPrompt = true;
				setTimeout(function(){
					that.isShowPrompt = false;
				}, 1500)
			}
		}
	}
</script>
<style lang="less">
	.create-article {
		padding: 40px 0 60px 0;
		.article-publish {
			position: absolute;
			top: 0;
			right: 10px;
			height: 40px;
			line-height: 40px;
			color: #ff2323;
			z-index: 105;
		}
		.add-article {
			.article-pic {
				position: relative;
				width: 100%;
				height: 300px;
				.article-picbg {
					width: 100%;
					height: 300px;
					text-align: center;
					i {
						margin-top: 90px;
						font-size: 56px;
						color: #bbb;
					}
					p {
						margin-top: 5px;
						font-size: 16px;
						color: #bbb;
					}
					.article-img {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
					}
					.article-pic-upload {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						opacity: 0;
					}
				}
			}
			.article-title {
				width: 100%;
				padding: 10px;
				line-height: 35px;
				font-size: 20px;
				font-weight: 700;
				background-color: #fdf4d5;
				border: 0;
				box-sizing: border-box;
			}
			.add-article-details {
				display: flex;
				.details-item {
					flex-grow: 1;
					width: 0;
					padding: 20px 0;
					text-align: center;
					i {
						font-size: 30px;
						color: #f15348;
					}
					p {
						margin-top: 10px;
						color: #f15348;
					}
				}
			}
		}
	}
</style>