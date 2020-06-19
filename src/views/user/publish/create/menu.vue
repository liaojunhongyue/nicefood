<template>
  <div class="create-menu">
    <header class="create-menu-header">
      <div class="go-back" @click="goHistory">
        <i class="fa fa-angle-left" aria-hidden="true" />
      </div>
      发布菜谱
      <div class="go-publish-menu">
        发布
      </div>
      <div class="header-bottom" />
    </header>
    <div class="add-menu">
      <form id="addMenuForm">
        <div class="form-list">
          <div class="main-pic">
            <div class="pic-bg">
              <i class="fa fa-plus-square" aria-hidden="true" />
              <p>添加封面图</p>
            </div>
            <img v-show="false" id="mianpic" class="menu-pic">
            <input objId="mianpic" type="file" name="menuPic" @change="fileSelect">
          </div>
        </div>
        <div class="form-list">
          <input type="text" class="menu-title" name="menuTitle" placeholder="添加菜谱标题">
        </div>
        <div class="form-list">
          <textarea name="menuInto" class="menu-into" placeholder="说说这道菜背后的故事吧~" />
        </div>
        <div class="form-list form-list-select" @click="selectTechShow">
          <p>工艺：<span ref="techChose">请选择</span></p>
          <i class="fa fa-angle-right" aria-hidden="true" />
        </div>
        <div class="form-list form-list-select" @click="selectTasteShow">
          <p>口味：<span ref="tasteChose">请选择</span></p>
          <i class="fa fa-angle-right" aria-hidden="true" />
        </div>
        <div class="form-list form-list-select" @click="selectTimeShow">
          <p>时间：<span ref="timeChose">请选择</span></p>
          <i class="fa fa-angle-right" aria-hidden="true" />
        </div>
        <!-- 主料 -->
        <div class="form-list">
          <div class="menu-material">
            <p class="menu-material-title">主料</p>
            <ul class="menu-material-list">
              <li :is="item.component" v-for="(item, index) in mainMaterial" :key="index" :datas="mainMaterial" :dataindex="index" />
            </ul>
            <p class="menu-material-add" @click="addMainMaterial">
              <i class="fa fa-plus" aria-hidden="true" />
              <span>添加主料</span>
            </p>
          </div>
        </div>
        <!-- 辅料 -->
        <div class="form-list">
          <div class="menu-material">
            <p class="menu-material-title">辅料</p>
            <ul class="menu-material-list">
              <li :is="item.component" v-for="(item, index) in othersMaterial" :key="index" :datas="othersMaterial" :dataindex="index" />
            </ul>
            <p class="menu-material-add" @click="addOthersMaterial">
              <i class="fa fa-plus" aria-hidden="true" />
              <span>添加辅料</span>
            </p>
          </div>
        </div>
        <!-- 步骤图 -->
        <div class="form-list">
          <div class="menu-display">
            <div v-for="(item, index) in procedures" :key="index" class="menu-display-content">
              <p class="menu-display-title">步骤<span>{{ index + 1 }}</span><i
                class="fa fa-times"
                :dataindex="index"
                aria-hidden="true"
                @click="deleteThisProcedure"
              /></p>
              <ul class="menu-display-list">
                <li class="menu-display-item">
                  <div class="menu-display-pic">
                    <div class="menu-display-picbg">
                      <i class="fa fa-plus-square" aria-hidden="true" />
                      <p>添加步骤图</p>
                    </div>
                    <img v-show="item.img" class="menu-display-img" :src="item.img">
                    <input type="file" class="pic-upload" value="item.img" :objIndex="index" @change="fileSelect">
                  </div>
                  <div class="menu-display-desc">
                    <textarea ref="textObg" v-model="item.text" class="menu-display-textarea" placeholder="请填写步骤描述" />
                  </div>
                </li>
              </ul>
            </div>
            <p class="menu-display-add" @click="addProcedure">
              <i class="fa fa-plus" aria-hidden="true" />
              <span>添加步骤</span>
            </p>
          </div>
        </div>
        <!-- 成品图 -->
        <div class="form-list">
          <div class="menu-display">
            <p class="menu-display-title">成品图<span>1</span><i class="fa fa-times" aria-hidden="true" /></p>
            <ul class="menu-display-list">
              <li class="menu-display-item">
                <div class="menu-display-pic">
                  <div class="menu-display-picbg">
                    <i class="fa fa-plus-square" aria-hidden="true" />
                    <p>添加成品图</p>
                  </div>
                  <img v-if="true" src="">
                </div>
              </li>
            </ul>
            <p class="menu-display-add">
              <i class="fa fa-plus" aria-hidden="true" />
              <span>添加成品图</span>
            </p>
          </div>
        </div>
        <!-- 小贴士 -->
        <div class="form-list">
          <div class="menu-tips">
            <div class="menu-tips-content">
              <p class="menu-tips-title">烹饪小贴士</p>
              <textarea class="menu-tips-textarea" placeholder="分享下你做这道菜的过程中的心得和小技巧吧！" />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div v-show="isshowmask" class="mask" @click="hideAllSelect" />
    <!-- 工艺 -->
    <transition name="slidebottom">
      <div v-show="isshowtech" id="menuTechnology" class="menu-select-list">
        <div class="title">
          <p>选择工艺</p>
          <i class="fa fa-times" aria-hidden="true" @click="hideAllSelect" />
        </div>
        <div id="menuTechCont" class="content">
          <p v-for="tech in menuTech" :key="tech"><span type="techType" @click="getMenuInfo">{{ tech }}</span></p>
        </div>
      </div>
    </transition>
    <!-- 口味 -->
    <transition name="slidebottom">
      <div v-show="isshowtaste" id="menuTaste" class="menu-select-list">
        <div class="title">
          <p>选择口味</p>
          <i class="fa fa-times" aria-hidden="true" @click="hideAllSelect" />
        </div>
        <div class="content">
          <p v-for="item in menuTaste" :key="item"><span type="tasteType" @click="getMenuInfo">{{ item }}</span></p>
        </div>
      </div>
    </transition>
    <!-- 时间 -->
    <transition name="slidebottom">
      <div v-show="isshowtime" class="menu-select-list">
        <div class="title">
          <p>选择时间</p>
          <i class="fa fa-times" aria-hidden="true" @click="hideAllSelect" />
        </div>
        <div class="content">
          <p v-for="item in menuTime" :key="item"><span type="timeType" @click="getMenuInfo">{{ item }}</span></p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import menuMaterial from '../../../form/menu/material.vue'

export default {
  components: {
    'menu-material': menuMaterial
  },
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
  mounted() {
    this.http.get(this.api.query.userData.url).then((response) => {
      const { code, data } = response.data
      if (code === 0) {
        this.menuTech = data.publish.menu.technology
        this.menuTaste = data.publish.menu.taste
        this.menuTime = data.publish.menu.time
      } else {
        this.Toast.fail('数据异常')
      }
    })
    this.mainMaterial.push({
      'component': menuMaterial
    })
    this.othersMaterial.push({
      'component': menuMaterial
    })
  },
  methods: {
    goHistory: function() {
      this.$router.go(-1)
    },
    fileSelect: function(e) {
      e = e || window.event
      const that = this
      const files = e.target.files
      const targetObj = e.target.getAttribute('objIndex')
      for (let i = 0; i <= files.length; i++) {
        const f = files[i]
        const reader = new FileReader()
        reader.onload = (function(file) {
          return function(e) {
            if (this.result !== '') {
              that.procedures[targetObj].img = this.result
            }
          }
        })(f)
        // 读取文件内容
        reader.readAsDataURL(f)
      }
    },
    selectTechShow: function() {
      this.isshowmask = true
      this.isshowtech = true
    },
    selectTasteShow: function() {
      this.isshowmask = true
      this.isshowtaste = true
    },
    selectTimeShow: function() {
      this.isshowmask = true
      this.isshowtime = true
    },
    hideAllSelect: function() {
      this.isshowmask = false
      this.isshowtech = false
      this.isshowtaste = false
      this.isshowtime = false
    },
    getMenuInfo: function(e) {
      const infoText = e.target.innerHTML
      const infoType = e.target.getAttribute('type')
      if (infoType === 'techType') {
        this.$refs.techChose.innerHTML = infoText
      } else if (infoType === 'tasteType') {
        this.$refs.tasteChose.innerHTML = infoText
      } else if (infoType === 'timeType') {
        this.$refs.timeChose.innerHTML = infoText
      }
      this.hideAllSelect()
    },
    addMainMaterial: function() {
      this.mainMaterial.push({
        component: menuMaterial
      })
    },
    addOthersMaterial: function() {
      this.othersMaterial.push({
        component: menuMaterial
      })
    },
    deleteThisProcedure: function(e) {
      if (this.procedures.length <= 1) {
        return false
      }
      const thisIndex = e.target.getAttribute('dataindex')
      this.procedures.splice(thisIndex, 1)
    },
    addProcedure: function() {
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
		padding: 12vw 0 15vw 0;
		.create-menu-header {
			position: fixed;
			top: 0px;
			left: 0px;
			width: 100%;
			height: 12vw;
			text-align: center;
			line-height: 12vw;
			font-size: @titleFontSize;
			color: #333;
			background-color: #fff;
      z-index: 100;
      .header-bottom {
        .border-bottom-1px(#e7e7e7);
      }
			.go-back {
				position: absolute;
				left: 2.3vw;
				i {
					font-size: 5vw;
				}
			}
			.go-publish-menu {
				position: absolute;
				top: 0;
				right: 2.3vw;
				height: 12vw;
				line-height: 12vw;
				color: #333;
			}
		}
		.add-menu {
			.form-list-select {
				display: flex;
				width: 100%;
				padding: 2.3vw;
				justify-content: space-between;
				box-sizing: border-box;
				.border-bottom-1px(#e7e7e7);
			}
			.main-pic {
				position: relative;
				width: 100%;
				height: 67vw;
				.menu-pic {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 67vw;
				}
				.pic-bg {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 67vw;
					text-align: center;
					i {
						margin-top: 22vw;
						font-size: 19vw;
						color: #bbb;
					}
					p {
						margin-top: 1.1vw;
						font-size: 4vw;
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
				padding: 2.3vw;
				line-height: 8vw;
				font-size: 4.6vw;
				font-weight: 700;
				background-color: #fdf4d5;
				border: 0;
				box-sizing: border-box;
			}
			.menu-into {
				width: 100%;
				height: 100px;
				padding: 2.3vw;
				border: 0;
				resize: none;
				box-sizing: border-box;
				.border-bottom-1px(#e5e5e5);
			}
			.menu-display-content {
				.menu-display-list {
					.menu-display-item {
						padding: 2.3vw;
						.border-bottom-1px(#e7e7e7);
						.menu-display-pic {
							position: relative;
							height: 50vw;
							text-align: center;
							.menu-display-picbg {
								height: 100%;
								background-color: #f5f5f5;
								i {
									margin-top: 15vw;
									font-size: 16vw;
									color: #999999;
								}
								p {
									margin-top: 1.1vw;
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
								line-height: 7vw;
								height: 7vw;
								width: 100%;
								resize: none;
								border: 0;
							}
						}
          }
        }
			}
			.menu-display {
				margin-top: 4.6vw;
				.menu-display-title {
					position: relative;
					padding: 2.3vw;
					line-height: 6vw;
					font-size: 4vw;
					color: #666;
					i {
						position: absolute;
						top: 0;
						right: 0;
						width: 6vw;
						height: 12vw;
						line-height: 12vw;
						text-align: center;
					}
				}
				.menu-display-list {
					.menu-display-item {
						padding: 10px;
						.border-bottom-1px(#e7e7e7);
						.menu-display-pic {
							position: relative;
							height: 50vw;
							text-align: center;
							.menu-display-picbg {
								height: 100%;
								background-color: #f5f5f5;
								i {
									margin-top: 15vw;
									font-size: 16vw;
									color: #999999;
								}
								p {
									margin-top: 1.1vw;
								}
							}
						}
						.menu-display-desc {
							.menu-display-textarea {
								line-height: 7vw;
								height: 7vw;
								width: 100%;
								resize: none;
								border: 0;
							}
						}
					}
				}
				.menu-display-add {
					line-height: 12vw;
					font-size: 4vw;
					color: #ff2323;
					text-align: center;
				}
			}
			.menu-tips {
				padding: 1.1vw 0;
				background-color: #f5f5f5;
				.menu-tips-content {
					padding: 3.35vw 2.3vw;
					background-color: #fff;
					.menu-tips-title {
            line-height: 7vw;
						color: #666;
					}
					.menu-tips-textarea {
						width: 100%;
						height: 7vw;
						line-height: 7vw;
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
				padding: 2.3vw;
				.border-bottom-1px(#e7e7e7);
				box-sizing: border-box;
			}
			.content {
				width: 100%;
				padding: 10px;
				box-sizing: border-box;
				overflow: hidden;
				p {
					float: left;
					margin: 0.7vw 2.3vw 1.1vw 0;
					span {
						display: inline-block;
						line-height: 6vw;
						padding: 0 2.3vw;
						.border-1px(#e7e7e7, 0);
					}
				}
			}
		}
	}

</style>
