<template>
  <div class>
    <div class="thesis">
      <div class="row">
        <span class="name">科研题目：</span>
        <div class="input-wrap">{{item.title}}</div>
      </div>
      <div class="row">
        <span class="name">发布者：</span>
        <div class="input-wrap">
          <router-link
            class="link"
            :to="{name:'UserInfo',params:{
          id:user.id}}"
          >{{user.nickname}}</router-link>
        </div>
      </div>
      <div class="row">
        <span class="name">科研要求：</span>
        <div class="input-wrap">{{item.content.slice(0,800)}}</div>
      </div>
      <div class="row">
        <span class="name">学科专业：</span>
        <div class="change-wrap">{{item.disciplineSpecialty}}</div>
      </div>

      <div class="row">
        <span class="name">发表时间：</span>
        <span>{{item.date.slice(0,10)}}</span>
      </div>
      <div class="row">
        <router-link class="link" :to="{name:'ItemApply',params:{
          id:id}}">查看项目申请人</router-link>
      </div>
      <div class="row">
        <el-link @click="back()" type="primary">返回上一级</el-link>
        <div class="tip-error-wrap">
          <span class="tip-error">{{tip}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getItemByItemId, getUserInfoById } from "./../request/api";
export default {
  data() {
    return {
      item: {},
      tip: "",
      user: {},
      collect: false,
      id: 0
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    getItemByItemId(this.id).then(
      val => {
        this.item = val.data.data;
        getUserInfoById(this.item.authorId).then(
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
      .link {
        color: @themeColor;
        padding-bottom: 5px;
        border-bottom: 1px solid transparent;
        &:hover {
          border-bottom-color: @themeColor;
        }
      }
    }
    .name {
      display: inline-block;
      width: @baseFontSize*6;
      text-align: justify;
      color: @themeColor;
    }
    .keyword-wrap {
      width: 700px;
    }
  }
}
</style>