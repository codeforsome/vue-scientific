<template>
  <div class="thesie-edit">
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
            maxlength="600"
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
        <span class="name">论文文件：</span>
        <a :href="filePath">点击下载论文</a>
      </div>

      <div class="row">
        <el-upload class="upload-demo" :on-success="successFile"  drag action="/api/file/add" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">请上传word或者pdf文档</div>
        </el-upload>
      </div>

      <div class="row">
        <el-button class="register" @click="submit()" round>提交信息</el-button>
      </div>
      <div class="tip-error-wrap">
        <span class="tip-error">{{tip}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getThesisByThesisId, updateThesis } from "./../request/api";
export default {
  data() {
    return {
      keyword: [],
      inputVisible: false,
      inputValue: "",
      thesisTitle: "",
      abstracts: "",
      filePath: "",
      disciplineSpecialtyList: [
        {
          value: "哲学",
          label: "哲学"
        },
        {
          value: "经济学",
          label: "经济学"
        },
        {
          value: "文学",
          label: "文学"
        },
        {
          value: "政治学",
          label: "政治学"
        },
        {
          value: "行政学",
          label: "行政学"
        },
        {
          value: "数学",
          label: "数学"
        },
         {
          value: "物理学",
          label: "物理学"
        },
         {
          value: "计算机科学",
          label: "计算机科学"
        },
          {
          value: "环境学",
          label: "环境学"
        },
         {
          value: "艺术学",
          label: "艺术学"
        }
      ],
      disciplineSpecialty: "",
      tip: "",
      success:false,
    };
  },
  methods: {
    handleClose(tag) {
      this.keyword.splice(this.keyword.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
      successFile(){
      this.success=true;
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.keyword.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    checkInput() {
      if (this.thesisTitle === "") {
        this.$refs.title.focus();
        return false;
      } else if (this.abstracts === "") {
        this.$refs.abstracts.focus();
        return false;
      }
      return true;
    },
    submit() {
      if (!this.checkInput()) {
        return;
      }
      let thesis = {};
       let id = this.$route.params.id;
      if(!this.success){
        thesis.filePath=this.filePath;
      }
      thesis.id=id;
      thesis.disciplineSpecialty = this.disciplineSpecialty;
      thesis.abstracts = this.abstracts;
      thesis.keyword = this.keyword.join("-");
      thesis.title = this.thesisTitle;
      updateThesis(thesis).then(
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
  },
  created() {
    let id = this.$route.params.id;
    getThesisByThesisId(id).then(
      val => {
        let resultData = val.data.data;
        this.keyword = resultData.keyword.split("-");
        this.thesisTitle = resultData.title;
        this.abstracts = resultData.abstracts;
        this.disciplineSpecialty = resultData.disciplineSpecialty;
        this.filePath = resultData.filePath;
      },
      error => {}
    );
  }
};
</script>
<style lang="less" scoped>
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
}
</style>