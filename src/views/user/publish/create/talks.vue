<template>
  <div class="create-talks">
    <header class="create-talks-header">
      <div class="go-back" @click="goHistory">
        <i class="fa fa-angle-left" aria-hidden="true" />
      </div>
      发布食话
      <div class="go-publish-talks">
        发布
      </div>
      <div class="header-bottom" />
    </header>
    <div class="add-talks">
      <form id="addTalksForm">
        <div class="talks-content">
          <textarea class="talks-content-textarea" placeholder="请输入文字" />
          <div class="upload-pic">
            <div class="upload-picbg">
              <div class="upload-picbg-icon">
                <i class="fa fa-file-image-o" aria-hidden="true" />
              </div>
              <input type="file" class="upload-pic-button" name="">
            </div>
          </div>
        </div>
        <div class="talks-add-menu">
          <p>
            <i class="fa fa-plus-circle" aria-hidden="true" />
            <span>添加相关菜谱</span>
          </p>
        </div>
        <div class="talks-publish-position">
          <p class="position-title">发布至</p>
          <div class="publish-position">
            <div class="position-list">
              <input id="table" type="radio" name="position">
              <span class="radio-icon" />
              <label for="table">餐桌时光</label>
            </div>
            <div class="position-list">
              <input id="bake" type="radio" name="position">
              <span class="radio-icon" />
              <label for="bake">玩转烘焙</label>
            </div>
            <div class="position-list">
              <input id="classroom" type="radio" name="position">
              <span class="radio-icon" />
              <label for="classroom">美食课堂</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goHistory: function() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less">
	.create-talks {
		padding: 12vw 0 0 0;
		min-height: 100%;
		background-color: #f5f5f5;
		box-sizing: border-box;
		.create-talks-header {
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
					color: #ff2323;
				}
			}
			.go-publish-talks {
				position: absolute;
				top: 0;
				right: 2.3vw;
				height: 12vw;
				line-height: 12vw;
				color: #ff2323;
      }
		}
		.add-talks {
			.talks-content {
				background-color: #fff;
				padding-bottom: 1.1vw;
				.talks-content-textarea {
					padding: 10px;
					width: 100%;
					height: 100px;
					resize: none;
					box-sizing: border-box;
					border: 0;
				}
				.upload-pic {
					box-sizing: border-box;
					overflow: hidden;
					.upload-picbg {
						position: relative;
						width: 33.3vw;
						height: 33.3vw;
						padding: 2.3vw;
						text-align: center;
						background-color: #fff;
						box-sizing: border-box;
						.upload-picbg-icon {
              background-color: #fafafa;
              box-sizing: border-box;
							.border-1px(#a0a0a0, 2vw);
							i {
								line-height: 28vw;
								font-size: 13vw;
							}
						}
						.upload-pic-button {
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							opacity: 0;
						}
					}
				}
			}
			.talks-add-menu {
				margin-top: 10px;
				line-height: 40px;
				text-align: center;
				background-color: #fff;
				p {
					color: #ff2323;
				}
			}
			.talks-publish-position {
				margin-top: 20px;
				.position-title {
					padding: 0 10px;
					font-size: 16px;
				}
				.publish-position {
					display: flex;
					margin-top: 10px;
					padding: 10px;
					background-color: #fff;
					.position-list {
						position: relative;
						flex-grow: 1;
						width: 0;
						.radio-icon {
							display: inline-block;
							width: 10px;
							height: 10px;
							border: 1px solid #b5b5b5;
							border-radius: 100px;
						}
						input[type=radio] {
							position: absolute;
							width: 100%;
							height: 100%;
							background-color: #333;
							opacity: 0;
							box-sizing: border-box;
						}
						input[type=radio]:checked + .radio-icon {
							background-color: #ff2323;
							border: 1px solid #ff2323;
						}
					}
				}
			}
		}
	}
</style>
