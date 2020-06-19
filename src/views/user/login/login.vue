<template>
  <div class="login">
    <i class="fa fa-times" aria-hidden="true" @click="goHistory()" />
    <p class="go-register">注册</p>
    <div class="login-content">
      <p class="title">欢迎来到美食杰</p>
      <div class="login-box">
        <form class="login-form">
          <div class="form-list">
            <input v-model="userName" type="text" class="form-text" placeholder="请输入手机号/邮箱/昵称">
          </div>
          <div class="form-list">
            <input v-model="userPassword" type="password" class="form-text" placeholder="请输入密码">
            <!-- <i class="fa fa-eye" aria-hidden="true" /> -->
          </div>
          <p class="discription">用户名和密码可随意输入</p>
          <input
            type="submit"
            :class="['login-submit', {'active': isSubmitActive}]"
            value="登录"
            @click.prevent="loginSubmit()"
          >
        </form>
        <p class="login-method">
          <span class="forget-password">忘记密码？</span>
          <span class="phone-login">手机快捷登录</span>
        </p>
        <div class="login-third">
          <p class="login-third-title">
            <span class="line" />
            <span class="text">第三方登录</span>
          </p>
          <div class="login-third-content">
            <div class="list">
              <i class="fa fa-weixin" aria-hidden="true" />
            </div>
            <div class="list">
              <i class="fa fa-qq" aria-hidden="true" />
            </div>
            <div class="list">
              <i class="fa fa-weibo" aria-hidden="true" />
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
      userPassword: ''
    }
  },
  computed: {
    isSubmitActive() {
      return this.userName && this.userPassword
    }
  },
  methods: {
    goHistory() {
      this.$router.go(-1)
    },
    loginSubmit() {
      if (!this.userName) {
        this.Toast('请输入手机号/邮箱/昵称')
        return false
      } else if (!this.userPassword) {
        this.Toast('请输入密码')
        return false
      } else {
        // 真实项目中用POST 因为这个是mock的数据
        this.api.user.login.data = {
          account: this.userName,
          password: this.userPassword
        }
        this.http.post(this.api.user.login.url, this.api.user.login.data).then((response) => {
          const { code, data } = response.data
          if (code === 0) {
            this.$store.commit('setUserToken', data)
            if (this.$route.query.redirect) {
              this.$router.push(this.$route.query.redirect)
            } else {
              this.$router.push('/login')
            }
          }
        })
      }
    }
  }
}
</script>
<style lang="less">
  .login {
    position: relative;
    height: 100%;
    background-color: #ffffff;
    i {
      &.fa-times {
        position: absolute;
        left: 2.3vw;
        top: 2.3vw;
        color: #303030;
        font-size: 5.5vw;
      }
    }
    .go-register {
      position: absolute;
      top: 2.3vw;
      right: 2.3vw;
      height: 5vw;
      line-height: 5vw;
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
          margin-bottom: 6vw;
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
        .discription {
          color: @themeColor;
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

