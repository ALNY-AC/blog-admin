<template>
  <div class="o-editor">
    <textarea :id="`editor_${id}`" :placeholder="placeholder"></textarea>
  </div>
</template>
<script src="./OEditor.js"></script>
<style lang="scss" scoped>
@import "OEditor.scss";
</style>