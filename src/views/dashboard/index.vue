<template>
  <!-- <div class="common-layout"> -->
  <el-container class="common-layout">
    <el-aside width="320px" class="my-aside">
      <AsideComponent />
    </el-aside>
    <el-main class="my-main">
      <MiddleComponent />
    </el-main>
    <el-aside width="200px">Aside</el-aside>
  </el-container>
  <!-- </div> -->
</template>

<script setup>
import AsideComponent from "./components/AsideComponent.vue";
import MiddleComponent from "./components/MiddleComponent.vue";
</script>

<style lang="scss" scoped>
.common-layout {
  height: calc(100vh - 30px);
}
.my {
  &-aside {
    height: 100%;
    overflow: auto;
    border-right: 1px solid #ccc;
  }
  &-main {
    height: 100%;
    overflow: auto;
    // border: 1px solid #ccc;
  }
}
</style>
