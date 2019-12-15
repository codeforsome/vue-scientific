<template>
  <div class="thesis-add">
    <div class="thesis">
      <div class="row">
        <span class="name">论文名称：</span>
        <div class="input-wrap">
          {{thesis.title}}
          <div class="collect">
            <el-button
              :type="collect==true ? 'success' : 'info'"
              @click="chocieThesis()"
              :title="collect==true ? '取消收藏论文' : '点击收藏论文'"
              icon="el-icon-star-off"
              circle
            ></el-button>
          </div>
        </div>
      </div>
      <div class="row">
        <span class="name">论文作者：</span>
        <div class="input-wrap">
          <router-link
            class="link"
            :to="{name:'UserInfo',params:{
          id:user.id}}"
          >{{user.nickname}}</router-link>
        </div>
      </div>
      <div class="row">
        <span class="name">论文摘要：</span>
        <div class="input-wrap">{{thesis.abstracts.slice(0,100)}}</div>
      </div>
      <div class="row">
        <span class="name">
          <i style="opacity: 0;">和</i>关键词：
        </span>
        <div class="keyword">
          <el-tag
            type="success"
            v-for="(item,index) in  thesis.keyword.split('-')"
            :key="index"
          >{{item}}</el-tag>
        </div>
      </div>

      <div class="row">
        <span class="name">学科专业：</span>
        <div class="change-wrap">{{thesis.disciplineSpecialty}}</div>
      </div>
      <div class="row" style="margin-top:10px" >
        <span class="name">论文文件：</span>
        <a :href="thesis.filePath"  @click="isLogin" >点击下载论文</a>
      </div>
      <div class="row">
        <span class="name">发表时间：</span>
        <span>{{thesis.date.slice(0,10)}}</span>
      </div>

      <div class="row">
        <el-link @click="back()" type="primary">返回上一级</el-link>
      </div>
      <div class="tip-error-wrap">
        <span class="tip-error">{{tip}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getThesisByThesisId,
  collectThesis,
  cancelCollectThesis,
  getUserInfoById
} from "./../request/api";
export default {
  data() {
    return {
      thesis: {},
      tip: "",
      user: {},
      collect: false
    };
  },
  methods: {
     isLogin() {
      if (this.token) {
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    back() {
      this.$router.go(-1);
    },
    chocieThesis() {
      this.collect = !this.collect;
      let id = this.$route.params.id;
      if (this.collect) {
        collectThesis({ id: id }).then(val => {}, error => {});
      } else {
        cancelCollectThesis({ id: id }).then(val => {}, error => {});
      }
    }
  },
  computed: {
  
    token() {
      return this.$store.getters.token;
    },
    userType() {
      return this.$store.getters.userType;
    }
  },
  mounted() {
    let id = this.$route.params.id;
    getThesisByThesisId(id).then(
      val => {
        this.thesis = val.data.data;
        getUserInfoById(this.thesis.authorId).then(
          val => {
            this.user = val.data.data;
          },
          error => {}
        );
      },
      error => {}
    );
  }
};
</script>
<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;

  margin-left: 10px;
  vertical-align: bottom;
}
</style>
<style lang="less" scoped>
.thesis {
  .row {
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: @gray;
    .input-wrap {
      width: 650px;
      margin-left: 10px;
      .collect {
        display: inline-block;
        margin-left: 10px;
        .el-button.is-circle {
          padding: 5px;
        }
      }
      .link {
        padding-bottom: 5px;
        border-bottom: 1px solid transparent;
        &:hover {
          color: @themeColor;
          border-bottom-color: @themeColor;
        }
      }
    }
    .name {
      color: @themeColor;
    }
    .keyword-wrap {
      width: 700px;
    }
  }
}
</style>