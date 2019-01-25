<template>
  <div class="o-paper-card">

    <div class="card-head">
      <div class="img-box" v-if="img" :style="{backgroundImage:`url(${img})`}"></div>
    </div>
    <div class="card-body">
      <div class="title">
        <nuxt-link :to="`/paper/info/info?id=${id}`" tag="span">
          {{title}}
        </nuxt-link>
      </div>
      <div class="info">{{info}}</div>
      <nuxt-link :to="`/paper/info/info?id=${id}`" tag="div" class="go-info">
        阅读更多<i class="fa fa-angle-right" aria-hidden="true"></i>
      </nuxt-link>
    </div>
    <div class="card-footer">
      <div class="tag-list">
        <span v-for="tag in tags" :key="tag" class="tag">{{tag}}</span>
      </div>
    </div>
  </div>
</template>
<script src="./OPaperCard.js"></script>
<style lang="scss" scoped>
@import "OPaperCard.scss";
</style>awsws