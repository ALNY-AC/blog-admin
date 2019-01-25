<template>
  <div class="o-url-list">
    <nuxt-link :to="item.path" v-for="item in routerList" :key="item.name" class="url-item" tag="div">
      <span><b>{{item.name}}</b>：</span>
      <span>{{item.path}}</span>
      <i class="fa fa-chevron-right"></i>
    </nuxt-link>
  </div>
</template>
<script src="./OUrlList.js"></script>
<style lang="scss" scoped>
@import "OUrlList.scss";
</style>