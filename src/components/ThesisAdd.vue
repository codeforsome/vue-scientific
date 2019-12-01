<template>
  <div class="thesis-add">
    <div class="thesis">
      <div class="row">
        <span class="name">论文名称：</span>
        <div class="input-wrap">
          <el-input placeholder="请输入论文名" ref="title" maxlength="20" v-model="thesisTitle" clearable></el-input>
        </div>
      </div>
      <div class="row">
        <span class="name">论文摘要：</span>
        <div class="input-wrap">
          <el-input
            type="textarea"
            ref="abstracts"
            :autosize="{ minRows: 2, maxRows: 6}"
            placeholder="请输入摘要"
            v-model="abstracts"
          ></el-input>
        </div>
      </div>
      <div class="row">
        <span class="name">关键词：</span>
        <div class="input-wrap keyword-wrap">
          <el-tag
            :key="tag"
            v-for="tag in keyword"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >{{tag}}</el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          ></el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+关键词</el-button>
        </div>
      </div>

      <div class="row">
        <span class="name">学科专业：</span>
        <div class="change-wrap">
          <el-select v-model="disciplineSpecialty" placeholder="请选择">
            <el-option
              v-for="item in disciplineSpecialtyList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="row">
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

      <div class="row">
        <el-button class="register" @click="back()" round>返回上一级</el-button>
        <el-button class="register" @click="submit()" round>提交信息</el-button>
      </div>
      <div class="tip-error-wrap">
        <span class="tip-error">{{tip}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { addThesis } from "./../request/api";
export default {
  data() {
    return {
      keyword: [],
      inputVisible: false,
      inputValue: "",
      thesisTitle: "",
      abstracts: "",
      disciplineSpecialtyList: [
        {
          value: "互联网",
          label: "互联网"
        },
        {
          value: "金融",
          label: "金融"
        },
        {
          value: "文学",
          label: "文学"
        },
        {
          value: "创新",
          label: "创新"
        },
        {
          value: "工业技术",
          label: "工业技术"
        },
        {
          value: "电子工程与计算机",
          label: "电子工程与计算机"
        },
         {
          value: "环境",
          label: "环境"
        },
         {
          value: "政治",
          label: "政治"
        }
      ],
      disciplineSpecialty: "",
      tip: "",
      success: false
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    handleClose(tag) {
      this.keyword.splice(this.keyword.indexOf(tag), 1);
    },
    successFile() {
      this.success = true;
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    checkInput() {
      if (this.thesisTitle === "") {
        this.$refs.title.focus();
        return false;
      } else if (this.abstracts === "") {
        this.$refs.abstracts.focus();
        return false;
      } else if (this.success === false) {
        this.tip = "请上传文件";
        return false;
      }
      return true;
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.keyword.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    submit() {
      if (!this.checkInput()) {
        return;
      }
      let thesis = {};
      thesis.disciplineSpecialty = this.disciplineSpecialty;
      thesis.abstracts = this.abstracts;
      thesis.keyword = this.keyword.join("-");
      thesis.title = this.thesisTitle;
      addThesis(thesis).then(
        val => {
          let result = val.data;
          this.tip = result.msg;
          if (result.success) {
            setTimeout(() => {
              this.$router.push({ name: "My" });
            }, 1000);
          }
        },
        error => {}
      );
    }
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
    .input-wrap {
      width: 250px;
      margin-left: 10px;
    }
    .name {
      color: @themeColor;
    }
    .keyword-wrap {
      width: 700px;
    }
  }
  .tip-error-wrap{
      color: @themeColor;

    margin-top: 10px;
  }
}
</style>