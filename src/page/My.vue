<template>
  <div class="my">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>我的信息</span>
        <el-button
          v-show="show"
          @click="changeShow()"
          style="float: right; padding: 3px 0"
          type="text"
        >修改个人信息</el-button>
        <el-button
          v-show="!show"
          @click="changeShow()"
          style="float: right; padding: 3px 0"
          type="text"
        >查看个人信息</el-button>
      </div>
      <div class="text-wrap" v-show="show">
        <div class="text item">
          <span class="info">姓名：</span>
          <span class="info-content">fdfd</span>
        </div>
        <div class="text item">
          <span class="info">学院：</span>
          <span class="info-content">fdfd</span>
        </div>
        <div class="text item">
          <span class="info">职位：</span>
          <span class="info-content">fdfd</span>
        </div>
        <div class="text item">
          <span class="info">性别：</span>
          <span class="info-content">fdfd</span>
        </div>
        <div class="text item">
          <span class="info">发布的论文数：</span>
          <span class="info-content">fdfd</span>
        </div>
        <div class="text item">
          <span class="info">参与的科研项目：</span>
          <span class="info-content">fdfd</span>
        </div>
      </div>
      <div class="text-wrap" v-show="!show">
        <el-upload
          class="upload-demo"
          drag
          action="/api/file/add"
          name="file"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getUserInfo } from "./../request/api";
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    }
  },
  mounted() {
    getUserInfo({ name: "1", pa: "2" }).then(
      val => {
        console.log(val);
      },
      err => {}
    );
  }
};
</script>
<style lang="less" scoped>
.my {
  padding: 5px 70px;
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
    .info {
      color: @themeColor;
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
}
</style>