<template>
  <div class="login">
    <i class="fa fa-times" aria-hidden="true"></i>
    <p class="go-register">注册</p>
    <div class="login-content">
      <p class="title">欢迎来到美食杰</p>
      <div class="login-box">
        <form class="login-form">
          <div class="form-list">
            <input type="text" class="form-text" v-model="userName" placeholder="请输入手机号/邮箱/昵称" />
            <p class="validator">{{validator.name}}</p>
          </div>
          <div class="form-list">
            <input type="password" class="form-text" v-model="userPassword" placeholder="请输入密码" />
            <i class="fa fa-eye" aria-hidden="true"></i>
            <p class="validator">{{validator.password}}</p>
          </div>
          <input type="submit" :disabled="submitDisabled" :class="['login-submit', {'active': isSubmitActive}]" value="登录">
        </form>
        <p class="login-method">
          <span class="forget-password">忘记密码？</span>
          <span class="phone-login">手机快捷登录</span>
        </p>
        <div class="login-third">
          <p class="login-third-title">
            <span class="line"></span>
            <span class="text">第三方登录</span>
          </p>
          <div class="login-third-content">
            <div class="list">
              <i class="fa fa-weixin" aria-hidden="true"></i>
            </div>
            <div class="list">
              <i class="fa fa-qq" aria-hidden="true"></i>
            </div>
            <div class="list">
              <i class="fa fa-weibo" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: '',
      userPassword: '',
      validator: {
        name: '',
        password: ''
      },
      submitDisabled: true,
      isSubmitActive: false
    }
  }
}
</script>
<style lang="less">
  .login {
    position: relative;
    i {
      &.fa-times {
        position: absolute;
        left: 10px;
        top: 10px;
        color: #303030;
		    font-size: 20px;
      }
    }
    .go-register {
      position: absolute;
      top: 10px;
      right: 10px;
      height: 20px;
      line-height: 20px;
      color: #ff2323;
    }
    .login-content {
      position: relative;
      top: 13vw;
      .title {
        font-size: 6.2vw;
        color: #2e2e2e;
        text-align: center;
      }
      .login-box {
        width: 70vw;
        margin: 10vw 15vw 0 15vw;
        .form-list {
          position: relative;
          .form-text {
            width: 100%;
            height: 9vw;
            line-height: 9vw;
            font-size: 4vw;
            border: 0;
            border-bottom: solid 1px #dcdcdc;
            &::placeholder {
              color: #dcdcdc;
            }
          }
          .validator {
            height: 6vw;
            line-height: 6vw;
            color: #ff2323;
          }
          i {
            &.fa {
              position: absolute;
              right: 0;
              top: 0;
              height: 9vw;
              line-height: 9vw;
            }
          }
        }
        .login-submit {
          margin-top: 5vw;
          height: 10vw;
          line-height: 10vw;
          width: 100%;
          padding: 0;
          border: 0;
          border-radius: 0.7vw;
          font-size: 4vw;
          color: #fff;
          background-color: #cccccc;
          &.active {
            background-color: #ff2323;
          }
        }
        .login-method {
          margin-top: 4vw;
          overflow: hidden;
          .forget-password {
            float: left;
            color: #303030;
          }
          .phone-login {
            float: right;
            color: #303030;
          }
        }
        .login-third {
          margin-top: 10vw;
          .login-third-title {
            position: relative;
            height: 5vw;
            line-height: 5vw;
            text-align: center;
            .line {
              position: absolute;
              top: 2.4vw;
              left: 0;
              width: 100%;
              height: 1px;
              background-color: #cccccc;
            }
            .text {
              position: relative;
              padding: 0 10px;
              background-color: #fff;
            }
          }
          .login-third-content {
            display: flex;
            margin-top: 9vw;
            .list {
              flex-grow: 1;
              text-align: center;
              i {
                width: 13vw;
                height: 13vw;
                line-height: 13vw;
                font-size: 6.2vw;
                color: #fff;
                border-radius: 100vw;
                &.fa-weixin {
                  background-color: #4fca5f;
                }
                &.fa-qq {
                  background-color: #2dc6ef;
                }
                &.fa-weibo {
                  background-color: #fb7957;
                }
              }
            }
          }
        }
      }
    }
  }
</style>



