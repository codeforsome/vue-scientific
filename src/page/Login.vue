<template>
  <div class="login-wrap">
    <div class="left-wrap">
      <img class="register-bg" src="./../assets/img/login_bg.jpg" alt />
    </div>
    <div class="right-wrap">
      <div class="title-wrap">
        <span class="title">用户登陆</span>
      </div>
      <div class="input-wrap">
        <div class="demo-input-suffix">
          <el-input
            class="input-user"
            placeholder="请输入账号"
            autofocus="true"
            maxlength="10"
            prefix-icon="el-icon-user-solid"
            v-model="username"
            ref="inputUsername"
          ></el-input>
          <el-input
            class="input-password"
            placeholder="请输入密码"
            maxlength="10"
            prefix-icon="el-icon-lock"
            v-model="password"
            ref="inputPassword"
            show-password
          ></el-input>
        </div>
      </div>
      <div class="bottom-wrap">
        <router-link  class="login-link" :to="{name:'Register'}">还没账号?点我注册</router-link>
        <el-button class="register" @click="submit()" round>登陆</el-button>
      </div>
      <div class="back-index">
        <router-link class="index-link" :to="{name:'Main'}">返回首页</router-link>
      </div>
      <div class="tip-error-wrap">
        <span class="tip-error">{{tip}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { loginVerify } from "./../request/api";
export default {
  data() {
    return {
      username: "",
      password: "",
      tip: ""
    };
  },
  methods: {
   checkUsername(val) {
      var reg = /^[A-Za-z0-9]{1,10}$/;
      if(val===''){
        this.$refs.inputUsername.focus();
        this.tip = "账号不能为空";
        return false;
      }
      else if (!reg.test(val)) {
        this.$refs.inputUsername.focus();
        this.username = "";
        this.tip = "账号输入只能是字母和数字组合";
        return false
      } else {
        this.tip = "";
        return true;
      }
    },
    checkPassword(val) {
      var reg = /^[A-Za-z0-9]{1,10}$/;
     if(val===''){
        this.$refs.inputPassword.focus();
        this.tip = "密码不能为空";
        return false;
      }
      else  if (!reg.test(val)) {
        this.$refs.inputPassword.focus();
        this.password = "";
        this.tip = "密码输入只能是字母和数字组合";
        return false;
      } else {
        this.tip = "";
        return true;
      }
    },
    submit() {
      if(!this.checkUsername(this.username)){
        return;
      }
      if(!this.checkPassword(this.password)){
        return;
      }
      this.checkUsername(this.username);
      this.checkPassword(this.password);
      let login = {};
      login.username = this.username;
      login.password = this.password;
      loginVerify(login).then((val)=>{
        let result=val.data;
        this.tip=result.msg;
        if(result.success){
          this.$store.dispatch('setToken',result.data.username);
           setTimeout(() => {
          this.$router.push({name:'Main'})            
          }, 1200);
        }
      },function(error){
        console.log(error);
      });
    }
  }
};
</script>
<style lang="less" scoped>
@paddingSize: 25px;
.blockWidth {
  width: 300px;
  margin: 0 auto;
  padding-top: @paddingSize;
}

.login-wrap {
  font-size: 16px;
  display: flex;
  height: 100vh;
  color: @themeColor;
  > .left-wrap {
    width: 50%;
    height: 100%;
    @media screen {
      @media (max-width: 700px) {
        display: none;
      }
    }
    > .register-bg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  > .right-wrap {
    width: 50%;
    padding-top: @paddingSize;
    @media screen {
      @media (max-width: 700px) {
        width: 90%;
        min-width: 320px;
        margin: 0 auto;
      }
    }
    > .title-wrap {
      padding: @paddingSize 0;
      text-align: center;
      > .title {
        font-size: 2.5em;
      }
    }
    .input-wrap {
      .blockWidth();
    }
    .input-password {
      margin-top: @paddingSize;
    }
    .bottom-wrap {
      .blockWidth();
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 6px;
      border-bottom: 1px solid @themeColor;
      > .login-link {
        color: #666;
        font-size: 0.8em;
        padding-bottom: 6px;
        &:hover {
          color: @themeColor;
        }
      }
      > .register {
        color: #fff;
        background-color: @backgroundColor;
      }
    }
    .tip-error-wrap {
      .blockWidth();
      text-align: center;
    }
    .back-index{
      .blockWidth();
      .index-link{
        font-size: 14px;
        color:  @themeColor;
      }
    }
  }
}
</style>