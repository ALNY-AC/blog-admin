<template>
  <div id="list">
    <el-row :gutter="30">
      <el-col :span="8" v-for="item in list" :key="item.paper_id">
        <o-paper-card :img="item.head_img" :title="item.title" :info="item.abstract" :tags="item.tags" :id="item.paper_id"></o-paper-card>
      </el-col>
    </el-row>
  </div>
</template>
<script src="./list.js"></script>
<style lang="scss" scoped>
@import "list.scss";
</style>