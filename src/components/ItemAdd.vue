<template>
  <div class="thesis-add">
    <div class="thesis">
      <div class="row">
        <span class="name">科研题目：</span>
        <div class="input-wrap">
          <el-input
            placeholder="请输入科研题目"
            ref="title"
            maxlength="20"
            autofocus
            v-model="title"
            clearable
          ></el-input>
        </div>
      </div>
      <div class="row">
        <span class="name">科研要求：</span>
        <div class="input-wrap">
          <el-input
            type="textarea"
            ref="content"
            :autosize="{ minRows: 4, maxRows: 10}"
            maxlength="1000"
            placeholder="请输入科研要求"
            v-model="content"
          ></el-input>
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
import { addItem } from "./../request/api";
export default {
  data() {
    return {
      inputValue: "",
      title: "",
      content: "",
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
    successFile() {
      this.success = true;
    },
    checkInput() {
      if (this.title === "") {
        this.$refs.title.focus();
        return false;
      } else if (this.content === "") {
        this.$refs.content.focus();
        return false;
      }
      return true;
    },
    submit() {
      if (!this.checkInput()) {
        return;
      }
      let item = {};
      item.disciplineSpecialty = this.disciplineSpecialty;
      item.content = this.content;
      item.title = this.title;
      addItem(item).then(
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
    .change-wrap{
      margin-left: 10px;

    }
    .name {
      color: @themeColor;
    }
    .keyword-wrap {
      width: 700px;
    }
  }
  .tip-error-wrap {
    color: @themeColor;

    margin-top: 10px;
  }
}
</style>