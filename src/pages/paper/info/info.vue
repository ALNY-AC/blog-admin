<template>
  <div id="info">
    <template v-if="info">

      <div class="head-img" v-if="info.head_img" :style="{backgroundImage:`url(${info.head_img})`}"></div>
      <div class="info-body">
        <div class="info-title">{{info.title}}</div>
        <div class="tag-list">
          <span v-for="tag in info.tags" :key="tag" class="tag">{{tag}}</span>
        </div>
        <div class="info-info">{{info.abstract}}</div>
        <div class="info-content">
          <div v-html="info.content"></div>
        </div>
      </div>
    </template>

  </div>
</template>
<script src="./info.js"></script>
<style lang="scss" scoped>
@import "info.scss";
</style>