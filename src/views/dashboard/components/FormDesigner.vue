<template>
<!--左侧组件面板：包含各种可用表单组件。
中间拖拽区域：将组件拖拽到画布中动态生成表单。
右侧属性面板：配置选中组件的属性。
JSON 配置：支持从 JSON 配置生成表单，同时可导出表单 JSON。-->
  <el-container>
    <el-aside width="240px">
      <LeftPanel @dragStart="handleDragStart" />
    </el-aside>
    <el-main>
      <MiddleCanvas
        :form-items="formItems"
        @drop="handleDrop"
        @selectItem="selectItem"
      />
    </el-main>
    <el-aside width="300px">
      <RightPanel
        v-if="selectedItem"
        :item="selectedItem"
        @updateItem="updateItem"
      />
    </el-aside>
  </el-container>
</template>

<script>
import { ref } from "vue";
import LeftPanel from "./LeftPanel.vue";
import MiddleCanvas from "./MiddleCanvas.vue";
import RightPanel from "./RightPanel.vue";

export default {
  components: { LeftPanel, MiddleCanvas, RightPanel },
  setup() {
    const formItems = ref([]);
    const selectedItem = ref(null);

    const handleDragStart = (component) => {
      window.dragData = component; // 暂存拖拽数据
    };

    const handleDrop = (item) => {
      formItems.value.push({ ...item, id: Date.now() });
    };

    const selectItem = (item) => {
      selectedItem.value = item;
    };

    const updateItem = (updatedItem) => {
      const index = formItems.value.findIndex((i) => i.id === updatedItem.id);
      if (index !== -1) {
        formItems.value[index] = updatedItem;
      }
    };

    return {
      formItems,
      selectedItem,
      handleDragStart,
      handleDrop,
      selectItem,
      updateItem,
    };
  },
};
</script>

<style>
.el-container {
  height: 100vh;
}
</style>
