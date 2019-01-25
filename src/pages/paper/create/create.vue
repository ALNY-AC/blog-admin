<template>
  <div id="create">
    <div class="edit-box">
      <div class="toolbar">
        <ul>
          <li>
            <div class="toolbar-item" @click="$router.go(-1)">
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
          </li>
        </ul>
        <el-button size="small" class="save-return" @click="create">保存并返回</el-button>
      </div>
      <div class="title-input-box">
        <input placeholder="Title" class="title-input" type="text" v-model="form.title">
      </div>
      <o-editor :config="config" v-model="form.content" @on-stop="onStop"></o-editor>
    </div>
    <div class="info-box">
      <div class="info-box-body">
        <h4>信息</h4>

        <el-form>

          <el-form-item>
            <el-input v-model="tag" placeholder="输入标签后回车" @keydown.enter="addTag"></el-input>

            <el-tag v-for="(item,i) in form.tags" @remove="form.tags.splice(i,1)">{{item}}</el-tag>

          </el-form-item>
          <el-form-item v-if="form.head_img">
            <el-input v-model="form.head_img" placeholder="封面地址"></el-input>
            <img :src="$getUrl(form.head_img)" alt="地址错误">
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.abstract" type="textarea" rows="10" placeholder="摘要"></el-input>
          </el-form-item>

        </el-form>

      </div>
    </div>
  </div>
</template>
<script src="./create.js"></script>
<style lang="scss" scoped>
@import "create.scss";
</style>