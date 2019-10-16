<template>
  <div class="my">
    <div class="left">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>我的信息</span>
          <el-button
            v-show="show"
            @click="updateUser()"
            style="float: right; padding: 3px 0"
            type="text"
          >修改个人信息</el-button>
          <el-button
            v-show="!show"
            @click="getUser()"
            style="float: right; padding: 3px 0"
            type="text"
          >查看个人信息</el-button>
        </div>
        <div class="text-wrap" v-show="show">
          <div class="text item">
            <img class="head-icon" width="100px" height="100px" :src="user.headIcon" alt />
            <!-- <img class="head-icon"width="100px" height="100px" src="./../assets/img/login_bg.jpg" alt /> -->
          </div>
          <div class="text item">
            <span class="info">姓名：</span>
            <span class="info-content">{{user.nickname}}</span>
          </div>
          <div class="text item">
            <span class="info">学院：</span>
            <span class="info-content">{{user.college}}</span>
          </div>
          <div class="text item">
            <span class="info">性别：</span>
            <span class="info-content">{{user.sex}}</span>
          </div>
          <div class="text item">
            <span class="info">学历：</span>
            <span class="info-content">{{user.education}}</span>
          </div>
        </div>

        <div class="text-wrap update-info" v-show="!show">
          <div class="item">
            <span class="info">头像：</span>
            <el-upload
              class="avatar-uploader"
              action="/api/file/img/add"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <div class="text item">
            <span class="info">姓名：</span>
            <div class="change-wrap">
              <el-input v-model="nickname" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="text item">
            <span class="info">学院：</span>
            <div class="change-wrap">
              <el-select v-model="college" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="text item">
            <span class="info">性别：</span>
            <div class="change-wrap">
              <el-select v-model="sex" placeholder="请选择">
                <el-option
                  v-for="item in sexOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="text item">
            <span class="info">学历：</span>
            <div class="change-wrap">
              <el-select v-model="education" placeholder="请选择">
                <el-option
                  v-for="item in educationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="text item">
            <el-button class="register" @click="submit()" round>提交信息</el-button>
          </div>
          <div class="tip-error-wrap">
            <span class="tip-error">{{tip}}</span>
          </div>
        </div>
      </el-card>
    </div>
    <right></right>
  </div>
</template>
<script>
import { getUserInfo, updateUserInfo } from "./../request/api";
import Right from "./Right";
export default {
  components: { Right },
  data() {
    return {
      imageUrl: "",
      options: [
        {
          value: "金融学院",
          label: "金融学院"
        },
        {
          value: "会计学校",
          label: "会计学校"
        },
        {
          value: "信息学院",
          label: "信息学院"
        },
        {
          value: "旅游学校",
          label: "旅游学校"
        },
        {
          value: "电商学院",
          label: "电商学院"
        },
        {
          value: "艺术学院",
          label: "艺术学院"
        },
        {
          value: "管理学院",
          label: "管理学院"
        }
      ],
      college: "",
      sexOptions: [
        {
          value: "男",
          label: "男"
        },
        {
          value: "女",
          label: "女"
        }
      ],
      sex: "",
      educationOptions: [
        {
          value: "本科",
          label: "本科"
        },
        {
          value: "硕士",
          label: "硕士"
        },
        {
          value: "博士",
          label: "博士"
        },
        {
          value: "教授",
          label: "教授"
        },
        {
          value: "副教授",
          label: "副教授"
        }
      ],
      education: "",
      nickname: "",
      show: true,
      user: {},
      tip: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    getUser() {
      this.show = !this.show;
      getUserInfo().then(
        val => {
          this.user = val.data.data;
          for (let item in this.user) {
            this[item] = this.user[item];
          }
        },
        err => {}
      );
    },
    updateUser() {
      this.show = !this.show;
      this.imageUrl = "";
      this.tip = "";
    },
    submit() {
      let user = {};
      user.nickname = this.nickname;
      user.sex = this.sex;
      user.education = this.education;
      user.college = this.college;
      updateUserInfo(user).then(
        val => {
          let result = val.data;
          this.tip = result.msg;
          this.getUser();
        },
        err => {}
      );
    }
  },
  mounted() {
    getUserInfo().then(
      val => {
        this.user = val.data.data;
        for (let item in this.user) {
          this[item] = this.user[item];
        }
      },
      err => {}
    );
  }
};
</script>
<style >
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<style lang="less" scoped>
.my {
  font-size: 16px;
  padding: 5px 70px;
  display: flex;
  justify-content: space-between;
  .text {
    font-size: 1em;
  }
  .head-icon {
    border-radius: 10px;
  }
  .update-info {
    .item {
      display: flex;
      align-items: center;
    }
    .change-wrap {
      width: 180px;
    }
    .tip-error {
      color: @warningColor;
    }
  }

  .text-wrap {
    .item {
      margin-bottom: 18px;

      .info {
        color: @themeColor;
      }
    }
  }
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 480px;
  border-radius: 20px;
}
</style>