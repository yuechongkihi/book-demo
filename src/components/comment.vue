<template>
  <div class="comment-main">
    <div class="comment-center">
      <div class="comment-top">
        <div
          v-for="(item, idx) in NameOptions"
          :key="idx"
          class="comment-name-item"
        >
          {{ item }}
        </div>
      </div>
      <div class="comment-content">
        <div v-for="i in 3" :key="i" class="comment-item">
          <div class="header-box">
            <div class="header-image">
              <img :src="ImageOptions[0]" alt="" />
            </div>
            <div class="header-name">{{ name }}</div>
            <div class="header-time">{{ date }}</div>
          </div>
          <div class="item-info">
            <el-row class="item-info-box">
                <el-col :span="8">审核时间： {{ date }}</el-col>
                <el-col :span="8">我的学历： 在读博士</el-col>
                <el-col :span="8">是否录用： 是</el-col>
            </el-row>
            <el-row class="item-info-box">
                <el-col :span="8">有无课题: 国家级</el-col>
                <el-col :span="8">投稿难度： 较易</el-col>
                <el-col :span="8">见刊周期： 尚无出版</el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mock from "mockjs";
import { getNameOptions, getImageOptions } from "./option";
export default {
  data() {
    return {
      NameOptions: getNameOptions(),
      ImageOptions: getImageOptions(),
      date:Mock.Random.now('day', 'yyyy-MM-dd HH:mm:ss SS'),
      name:Mock.Random.name(true)
    };
  }
};
</script>

<style>
.comment-main {
  width: 100%;
  min-height: 800px;
  display: flex;
  justify-content: center;
}
.comment-center {
  width: 90%;
  height: 800px;
  border: 1px solid #409eff;
  padding: 20px;
  margin-top: 50px;
}
.comment-top {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.comment-name-item {
  height: 30px;
  color: #409eff;
  font: 12px "宋体";
  font-weight: 600;
  line-height: 30px;
  padding-left: 10px;
  cursor: pointer;
}
.comment-content {
  width: 100%;
}
.comment-item {
  width: 100%;
  /* height: 80px; */
  border: 1px solid #409eff;
  margin-top: 30px;
  padding: 10px;
  border-radius: 20px;
}
.header-box {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.header-image {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.header-image img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.header-name{
    margin-right: 10px;
}
.item-info-box{
    margin-top: 10px;
}
</style>
