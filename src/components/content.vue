<template>
  <div class="content">
    <div class="left-content">
      <div class="book-nav">周刊分类</div>
      <div class="nav-item">
        <div
          class="book-item"
          v-for="(item, idx) in bookOptions"
          :key="idx"
          @click="getMockTextContent"
        >
          {{ item.name }}<i class="el-icon-caret-right"></i>
        </div>
      </div>
      <div class="book-nav">首字母分类</div>
      <div class="nav-item">
        <div
          class="book-item"
          v-for="(item, idx) in alphabet"
          :key="idx"
          @click="getMockTextContent"
        >
          {{ item }}<i class="el-icon-caret-right"></i>
        </div>
      </div>
      <div class="book-nav">城市分类</div>
      <div class="nav-item">
        <div
          class="book-item"
          v-for="(item, idx) in cityOptions"
          :key="idx"
          @click="getMockTextContent"
        >
          {{ item }}<i class="el-icon-caret-right"></i>
        </div>
      </div>
    </div>
    <div class="right-content">
      {{ mockText }}
    </div>
  </div>
</template>

<script>
import Mock from "mockjs";
import { bookOptions, alphabet,getCityOptions } from "./option";
export default {
  data() {
    return {
      bookOptions,
      alphabet,
      cityOptions:getCityOptions(),
      mockText: ""
    };
  },
  methods: {
    getMockText() {
      return Mock.Random.csentence(5000, 8000);
    },
    getMockTextContent() {
      this.mockText = this.getMockText();
    }
  },
  mounted() {
    this.mockText = this.getMockText();
  }
};
</script>

<style scoped>
.content {
  width: 90%;
  margin: 0 auto;
  min-height: 800px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid red;
}
.left-content {
  width: 200px;
  /* height: 200px; */
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
}
.book-nav {
  width: 100%;
  height: 30px;
  background: #409eff;
  font: 12px "宋体";
  font-weight: 600;
  color: #ffffff;
  line-height: 30px;
  padding-left: 10px;
}
.nav-item {
  width: 100%;
  border: 1px solid #c4e1f1;
  background: #f2f7fd;
  margin-bottom: 10px;
  padding: 10px;
}
.book-item {
  width: 80px;
  height: 30px;
  cursor: pointer;
  font: 12px/18px "宋体";
  color: #343233;
  width: 65px;
  float: left;
  text-align: left;
}
.book-item:hover {
  color: orange;
}
.right-content {
  width: calc(100% - 215px);
  height: 100%;
  margin-left: 15px;
  padding: 30px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 宋体;
  color: #343233;
}
</style>
