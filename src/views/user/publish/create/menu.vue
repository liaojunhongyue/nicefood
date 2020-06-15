<template>
	<div class="create-menu">
		<header class="create-menu-header">
			<div @click="goHistory" class="go-back">
				<i class="fa fa-angle-left" aria-hidden="true"></i>
			</div>
			发布菜谱
			<div class="go-publish-menu">
				发布
			</div>
		</header>
		<div class="add-menu">
			<form id="addMenuForm">
				<div class="form-list">
					<div class="main-pic">
						<div class="pic-bg">
							<i class="fa fa-plus-square" aria-hidden="true"></i>
							<p>添加封面图</p>
						</div>
						<img v-show="false" class="menu-pic" id="mianpic" />
						<input @change="fileSelect" objId="mianpic" type="file" name="menuPic" />
					</div>
				</div>
				<div class="form-list">
					<input type="text" class="menu-title" name="menuTitle" placeholder="添加菜谱标题" />
				</div>
				<div class="form-list">
					<textarea name="menuInto" class="menu-into" placeholder="说说这道菜背后的故事吧~"></textarea>
				</div>
				<div class="form-list form-list-select" @click="selectTechShow">
					<p>工艺：<span ref="techChose">请选择</span></p>
					<i class="fa fa-angle-right" aria-hidden="true"></i>
				</div>
				<div class="form-list form-list-select" @click="selectTasteShow">
					<p>口味：<span ref="tasteChose">请选择</span></p>
					<i class="fa fa-angle-right" aria-hidden="true"></i>
				</div>
				<div class="form-list form-list-select" @click="selectTimeShow">
					<p>时间：<span ref="timeChose">请选择</span></p>
					<i class="fa fa-angle-right" aria-hidden="true"></i>
				</div>
				<!-- 主料 -->
				<div class="form-list">
					<div class="menu-material">
						<p class="menu-material-title">主料</p>
						<ul class="menu-material-list">
							<li :is="item.component" v-for="(item, index) in mainMaterial" :key="index" :datas="mainMaterial" :dataindex="index"></li>
						</ul>
						<p class="menu-material-add" @click="addMainMaterial">
							<i class="fa fa-plus" aria-hidden="true"></i>
							<span>添加主料</span>
						</p>
					</div>
				</div>
				<!-- 辅料 -->
				<div class="form-list">
					<div class="menu-material">
						<p class="menu-material-title">辅料</p>
						<ul class="menu-material-list">
							<li :is="item.component" v-for="(item, index) in othersMaterial" :key="index" :datas="othersMaterial" :dataindex="index"></li>
						</ul>
						<p class="menu-material-add" @click="addOthersMaterial">
							<i class="fa fa-plus" aria-hidden="true"></i>
							<span>添加辅料</span>
						</p>
					</div>
				</div>
				<!-- 步骤图 -->
				<div class="form-list">
					<div class="menu-display">
						<div class="menu-display-content" v-for="(item, index) in procedures" :key="index">
							<p class="menu-display-title">步骤<span>{{ index + 1 }}</span><i class="fa fa-times" :dataindex="index" aria-hidden="true"
								@click="deleteThisProcedure"></i></p>
							<ul class="menu-display-list">
								<li class="menu-display-item">
									<div class="menu-display-pic">
										<div class="menu-display-picbg">
											<i class="fa fa-plus-square" aria-hidden="true"></i>
											<p>添加步骤图</p>
										</div>
										<img class="menu-display-img" v-show="item.img" :src="item.img" />
										<input type="file" class="pic-upload" value="item.img" @change="fileSelect" :objIndex="index" />
									</div>
									<div class="menu-display-desc">
										<textarea class="menu-display-textarea" placeholder="请填写步骤描述" ref="textObg" v-model="item.text">
										</textarea>
									</div>
								</li>
							</ul>
						</div>
						<p class="menu-display-add" @click="addProcedure">
							<i class="fa fa-plus" aria-hidden="true"></i>
							<span>添加步骤</span>
						</p>
					</div>
				</div>
				<!-- 成品图 -->
				<div class="form-list">
					<div class="menu-display">
						<p class="menu-display-title">成品图<span>1</span><i class="fa fa-times" aria-hidden="true"></i></p>
						<ul class="menu-display-list">
							<li class="menu-display-item">
								<div class="menu-display-pic">
									<div class="menu-display-picbg">
										<i class="fa fa-plus-square" aria-hidden="true"></i>
										<p>添加成品图</p>
									</div>
									<img v-if="true" src="" />
								</div>
							</li>
						</ul>
						<p class="menu-display-add">
							<i class="fa fa-plus" aria-hidden="true"></i>
							<span>添加成品图</span>
						</p>
					</div>
				</div>
				<!-- 小贴士 -->
				<div class="form-list">
					<div class="menu-tips">
						<div class="menu-tips-content">
							<p class="menu-tips-title">烹饪小贴士</p>
							<textarea class="menu-tips-textarea" placeholder="分享下你做这道菜的过程中的心得和小技巧吧！"></textarea>
						</div>
					</div>
				</div>
			</form>
		</div>
		<div class="mask" v-show="isshowmask" @click="hideAllSelect"></div>
		<!-- 工艺 -->
		<transition name="slidebottom">
			<div class="menu-select-list" v-show="isshowtech" id="menuTechnology">
				<div class="title">
					<p>选择工艺</p>
					<i class="fa fa-times" aria-hidden="true" @click="hideAllSelect"></i>
				</div>
				<div class="content" id="menuTechCont">
					<p v-for="tech in menuTech" :key="tech"><span @click="getMenuInfo" type="techType">{{ tech }}</span></p>
				</div>
			</div>
		</transition>
		<!-- 口味 -->
		<transition name="slidebottom">
			<div class="menu-select-list" v-show="isshowtaste" id="menuTaste">
				<div class="title">
					<p>选择口味</p>
					<i class="fa fa-times" aria-hidden="true" @click="hideAllSelect"></i>
				</div>
				<div class="content">
					<p v-for="item in menuTaste" :key="item"><span @click="getMenuInfo" type="tasteType">{{ item }}</span></p>
				</div>
			</div>
		</transition>
		<!-- 时间 -->
		<transition name="slidebottom">
			<div class="menu-select-list" v-show="isshowtime">
				<div class="title">
					<p>选择时间</p>
					<i class="fa fa-times" aria-hidden="true" @click="hideAllSelect"></i>
				</div>
				<div class="content">
					<p v-for="item in menuTime" :key="item"><span @click="getMenuInfo" type="timeType">{{ item }}</span></p>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
	import menuMaterial from '../../../form/menu/material.vue'

	export default {
		data() {
			return {
				menuMainPic: '',
				menuTech: '',
				menuTaste: '',
				menuTime: '',
				isshowpic: false,
				isshowmask: false,
				isshowtech: false,
				isshowtaste: false,
				isshowtime: false,
				mainMaterial: [],
				othersMaterial: [],
				procedures: [{
					img: '',
					text: ''
				}]
			}
		},
		components: {
			'menu-material': menuMaterial
		},
		mounted() {
			this.$http.get('/api/userData').then((response) => {
				this.menuTech = response.data.data.publish.menu.technology;
				this.menuTaste = response.data.data.publish.menu.taste;
				this.menuTime = response.data.data.publish.menu.time;
			})
			this.mainMaterial.push({
				'component': menuMaterial
			})
			this.othersMaterial.push({
				'component': menuMaterial
			})
		},
		methods: {
			goHistory: function(){
				this.$router.go(-1);
			},
			fileSelect: function(e){
				e = e || window.event;
				let that = this;
				let files = e.target.files;
				let targetObj = e.target.getAttribute('objIndex');
				for(let i = 0, f; f = files[i]; i++){
			        let reader = new FileReader();
			        reader.onload = (function(file){
			            return function(e){
			            	if(this.result != ''){
			            		that.procedures[targetObj].img = this.result;

			            	}
			            };
			        })(f);
		        	//读取文件内容
		       		reader.readAsDataURL(f);
		    	}
			},
			selectTechShow: function(){
				this.isshowmask = true;
				this.isshowtech = true;
			},
			selectTasteShow: function(){
				this.isshowmask = true;
				this.isshowtaste = true;
			},
			selectTimeShow: function(){
				this.isshowmask = true;
				this.isshowtime = true;
			},
			hideAllSelect: function(){
				this.isshowmask = false;
				this.isshowtech = false;
				this.isshowtaste = false;
				this.isshowtime = false;
			},
			getMenuInfo: function(e){
				let infoText = e.target.innerHTML;
				let infoType = e.target.getAttribute('type');
				if(infoType == 'techType'){
					this.$refs.techChose.innerHTML = infoText;
				}else if(infoType == 'tasteType'){
					this.$refs.tasteChose.innerHTML = infoText;
				}else if(infoType == 'timeType'){
					this.$refs.timeChose.innerHTML = infoText;
				}
				this.hideAllSelect();
			},
			addMainMaterial: function(){
				this.mainMaterial.push({
					component: menuMaterial
				})
			},
			addOthersMaterial: function(){
				this.othersMaterial.push({
					component: menuMaterial
				})
			},
			deleteThisProcedure: function(e){
				if(this.procedures.length <= 1){
					return false;
				}
				let thisIndex = e.target.getAttribute('dataindex');
				this.procedures.splice(thisIndex, 1);
			},
			addProcedure: function(){
				this.procedures.push({
					img: '',
					text: ''
				})
			}
		}
	}
</script>
<style lang="less">
	.create-menu {
		padding: 40px 0 60px 0;
		.create-menu-header {
			position: fixed;
			top: 0px;
			left: 0px;
			width: 100%;
			height: 40px;
			text-align: center;
			line-height: 40px;
			font-size: 16px;
			color: #333;
			background-color: #fff;
			border-bottom: 1px solid #e7e7e7;
			z-index: 100;
			.go-back {
				position: absolute;
				left: 10px;
				i {
					font-size: 18px;
				}
			}
			.go-publish-menu {
				position: absolute;
				top: 0;
				right: 10px;
				height: 40px;
				line-height: 40px;
				color: #333;
			}
		}
		.add-menu {
			.form-list-select {
				display: flex;
				width: 100%;
				padding: 10px;
				justify-content: space-between;
				box-sizing: border-box;
				border-bottom: 1px solid #e7e7e7;
			}
			.main-pic {
				position: relative;
				width: 100%;
				height: 300px;
				.menu-pic {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 300px;
				}
				.pic-bg {
					position: absolute;
					top: 0;
					left: 0;
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
				}
				input[type=file] {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					opacity: 0;
				}
			}
			.menu-title {
				width: 100%;
				padding: 10px;
				line-height: 35px;
				font-size: 20px;
				font-weight: 700;
				background-color: #fdf4d5;
				border: 0;
				box-sizing: border-box;
			}
			.menu-into {
				width: 100%;
				height: 100px;
				padding: 10px;
				border: 0;
				resize: none;
				box-sizing: border-box;
				border-bottom: 1px solid #e5e5e5;
			}
			.menu-display-content {
				.menu-display-title {
					position: relative;
					padding: 10px;
					line-height: 30px;
					font-size: 16px;
					color: #666;
					i {
						position: absolute;
						top: 0;
						right: 0;
						width: 30px;
						height: 50px;
						line-height: 50px;
						text-align: center;
					}
				}
				.menu-display-list {
					.menu-display-item {
						padding: 10px;
						border-bottom: 1px solid #e7e7e7;
						.menu-display-pic {
							position: relative;
							height: 160px;
							text-align: center;
							.menu-display-picbg {
								height: 100%;
								background-color: #f5f5f5;
								i {
									margin-top: 40px;
									font-size: 56px;
									color: #999999;
								}
								p {
									margin-top: 5px;
								}
							}
							.menu-display-img {
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
							}
							.pic-upload {
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								opacity: 0;
							}
						}
						.menu-display-desc {
							.menu-display-textarea {
								line-height: 35px;
								height: 35px;
								width: 100%;
								resize: none;
								border: 0;
							}
						}
					}
				}
			}
			.menu-display {
				margin-top: 20px;
				.menu-display-title {
					position: relative;
					padding: 10px;
					line-height: 30px;
					font-size: 16px;
					color: #666;
					i {
						position: absolute;
						top: 0;
						right: 0;
						width: 30px;
						height: 50px;
						line-height: 50px;
						text-align: center;
					}
				}
				.menu-display-list {
					.menu-display-item {
						padding: 10px;
						border-bottom: 1px solid #e7e7e7;
						.menu-display-pic {
							position: relative;
							height: 160px;
							text-align: center;
							.menu-display-picbg {
								height: 100%;
								background-color: #f5f5f5;
								i {
									margin-top: 40px;
									font-size: 56px;
									color: #999999;
								}
								p {
									margin-top: 5px;
								}
							}
						}
						.menu-display-desc {
							.menu-display-textarea {
								line-height: 35px;
								height: 35px;
								width: 100%;
								resize: none;
								border: 0;
							}
						}
					}
				}
				.menu-display-add {
					line-height: 45px;
					font-size: 16px;
					color: #ff2323;
					text-align: center;
				}
			}
			.menu-tips {
				padding: 5px 0;
				background-color: #f5f5f5;
				border-top: 1px solid #e7e7e7;
				border-bottom: 1px solid #e7e7e7;
				.menu-tips-content {
					padding: 15px 10px;
					background-color: #fff;
					border-top: 1px solid #e7e7e7;
					border-bottom: 1px solid #e7e7e7;
					.menu-tips-title {
						color: #666;
					}
					.menu-tips-textarea {
						width: 100%;
						height: 35px;
						line-height: 35px;
						resize: none;
						border: 0;
					}
				}
			}
		}
		.menu-select-list {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			background-color: #fff;
			z-index: 1001;
			.title {
				display: flex;
				justify-content: space-between;
				width: 100%;
				padding: 10px;
				border-bottom: 1px solid #e7e7e7;
				box-sizing: border-box;
			}
			.content {
				width: 100%;
				padding: 10px;
				box-sizing: border-box;
				overflow: hidden;
				p {
					float: left;
					margin: 3px 10px 5px 0;
					span {
						display: inline-block;
						line-height: 30px;
						padding: 0 10px;
						border: 1px solid #e7e7e7;
					}
				}
			}
		}
	}

</style>
