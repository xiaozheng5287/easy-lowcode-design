<template>
  <!-- <div class="common-layout"> -->
  <el-container class="common-layout">
    <el-aside width="320px" class="my-aside">
      <AsideComponent :contentList="contentList" />
    </el-aside>
    <el-main class="my-main">
      <MiddleComponent :contentList="contentList" />
    </el-main>
    <el-aside width="350px" class="my-right">
      <RightConfigComponent :contentForm="contentForm" />
    </el-aside>
  </el-container>
  <!-- </div> -->
</template>

<script setup>
import AsideComponent from "./components/AsideComponent.vue";
import MiddleComponent from "./components/MiddleComponent.vue";
import RightConfigComponent from "./components/RightConfigComponent.vue";
import { ref } from "vue";
const contentList = ref([]);
const contentForm = ref({});
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
  &-right {
    height: 100%;
    overflow: auto;
    border-left: 1px solid #ccc;
    padding: 10px 15px 0;
  }
}
</style>
