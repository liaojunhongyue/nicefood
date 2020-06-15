<template>
  <div class="comment-menu">
    <f-normal-header message="发布评论" historyurl="" />
    <div class="comment-menu-content">
      <form id="menuCommentForm">
        <div class="evaluate-star">
          <div class="title"><p>给菜谱打分</p></div>
          <div class="star">
            <i class="fa fa-star active" aria-hidden="true" />
            <i class="fa fa-star active" aria-hidden="true" />
            <i class="fa fa-star active" aria-hidden="true" />
            <i class="fa fa-star" aria-hidden="true" />
            <i class="fa fa-star" aria-hidden="true" />
          </div>
          <div class="text"><p>味道不错</p></div>
        </div>
        <div class="evaluate-content">
          <textarea class="evaluate-content-textarea" placeholder="填写评论内容" />
        </div>
        <div class="upload-pic">
          <div class="upload-picbg">
            <div class="upload-picbg-icon">
              <i class="fa fa-file-image-o" aria-hidden="true" />
            </div>
            <input type="file" class="upload-pic-button" name="">
          </div>
        </div>
        <div class="submit-button">
          <input type="submit" class="submit-menu-comment" value="发布">
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import fNormalHeader from '@/components/common/normalHeader.vue'

export default {
  components: {
    'f-normal-header': fNormalHeader
  }
}
</script>
<style lang="less">
	.comment-menu {
		padding: 40px 0 0 0;
		box-sizing: border-box;
		.comment-menu-content {
			.evaluate-star {
				display: flex;
				padding: 10px 10px 0 10px;
				p {
					color: #333;
				}
				.title {
					margin-right: 15px;
					p {
						font-size: 16px;
					}
				}
				.star {
					margin-right: 15px;
					i {
						color: #fdeb99;
						&.active {
							color: #e9c001;
						}
					}
				}
			}
			.evaluate-content {
				padding: 0 10px;
				margin-top: 10px;
				.evaluate-content-textarea {
					width: 100%;
					height: 90px;
					resize: none;
					border: 0;
				}
			}
			.upload-pic {
				box-sizing: border-box;
				overflow: hidden;
				.upload-picbg {
					position: relative;
					width: 33.3vw;
					height: 33.3vw;
					padding: 10px;
					text-align: center;
					background-color: #fff;
					box-sizing: border-box;
					.upload-picbg-icon {
						background-color: #fafafa;
						border: 1px solid #a0a0a0;
						border-radius: 5px;
						box-sizing: border-box;
						i {
							line-height: 28vw;
							font-size: 42px;
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
			.submit-button {
				padding: 0 10px;
				margin-top: 10px;
				.submit-menu-comment {
					display: block;
					width: 100%;
					height: 40px;
					line-height: 40px;
					text-align: center;
					font-size: 16px;
					color: #fff;
					background-color: #ff6453;
					border: 0;
					border-radius: 30px;
				}
			}
		}
	}
</style>
