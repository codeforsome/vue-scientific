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
        <span class="name">题目发布时间：</span>
        <span>{{ item.createDate.slice(0,10)+' '+item.createDate.slice(11,19)}}</span>
      </div>
      <div class="row" style="margin-top:20px;" v-if=" (userType==1 ||  userType==2 )">
        <router-link class="link" :to="{name:'ItemApply',params:{
          id:id}}">查看项目申请人</router-link>
      </div>
      <div class="row" v-show="isShow" style="display: flex;margin-top:20px;">
        <span>申请状态：</span>
        <div v-if="applyed" class="block">
          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp"
            >{{activity.content}}</el-timeline-item>
          </el-timeline>
        </div>
        <el-link v-else style="float: right; padding: 3px 0" @click="showApply">我要申请</el-link>
      </div>
      <div class="row" v-if="apply">
        <el-upload
          class="upload-demo"
          drag
          action="/api/file/add"
          :on-success="successFile"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">请上传word或者pdf文档</div>
        </el-upload>
      </div>
      <div class="text item" v-if="apply">
        <el-button class="register" @click="submit()" round>提交信息</el-button>
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
import {
  getItemByItemId,
  getUserInfoById,
  addItemApply,
  getItemApply,
  getItemApplyStatusByItemId
} from "./../request/api";
export default {
  data() {
    return {
      activities: [
        {
          content: "提交成功",
          timestamp: "无"
        },
        {
          content: "未审核",
          timestamp: "无"
        },
        {
          content: "未分配专家",
          timestamp: "无"
        },
        {
          content: "专家未审核",
          timestamp: "无"
        }
      ],
      apply: false,
      applyed: false,
      success: false,
      isShow: true,
      item: {},
      tip: "",
      user: {},
      collect: false,
      id: 0
    };
  },
  computed: {
    token() {
      return this.$store.getters.token;
    },
    userType() {
      return this.$store.getters.userType;
    },
    StoreUser() {
      return this.$store.getters.user;
    }
  },
  methods: {
    submit() {
      addItemApply(this.id).then(
        val => {
          let result = val.data;
          this.tip = result.msg;
          this.applyed = true;
        },
        error => {}
      );
    },
    showApply() {
      if (this.token) {
        this.apply = !this.apply;
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    successFile() {
      this.success = true;
    },
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    console.log(this.StoreUser);
    this.id = this.$route.params.id;
    if (this.token) {
      getItemApply(this.id).then(
        val => {
          let apply = val.data.data;
          this.activities[0].timestamp = apply.date.slice(0, 10);
          if (apply.apply != null) {
            this.activities[1].content =
              apply.apply == 1 ? "通过审核" : "审核不通过";
            this.activities[1].timestamp = apply.applyDate
              ? apply.applyDate.slice(0, 10)
              : "无";
          }
          if (apply.professorId != null) {
            this.activities[2].content =
              apply.professorId != null ? "分配专家" : "未分配专家";
            this.activities[2].timestamp = apply.professorDate
              ? apply.professorDate.slice(0, 10)
              : "无";
          }
          if (apply.checkStatus != null) {
            this.activities[3].content =
              apply.checkStatus == 1 ? "专家审核" : "专家未审核";
            this.activities[3].timestamp = apply.checkDate
              ? apply.checkDate.slice(0, 10)
              : "无";
          }
        },
        err => {}
      );
    }

    getItemByItemId(this.id).then(
      val => {
        this.item = val.data.data;

        getUserInfoById(this.item.authorId).then(
          val => {
            this.user = val.data.data;
            if (this.user.username == this.StoreUser.username)
              this.isShow = false;
              else this.isShow = true;
          },
          error => {}
        );
      },
      error => {}
    );
    getItemApplyStatusByItemId(this.id).then(
      val => {
        let result = val.data;
        this.applyed = result.data;
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
      width: @baseFontSize*8;
      text-align: justify;
      color: @themeColor;
    }
    .keyword-wrap {
      width: 700px;
    }
  }
}
</style>