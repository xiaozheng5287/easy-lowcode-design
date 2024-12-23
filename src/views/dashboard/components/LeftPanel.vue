<template>
  <div class="left-panel">
    <div
      v-for="component in components"
      :key="component.type"
      class="draggable-item"
      @dragstart="onDragStart(component)"
      draggable
    >
      {{ component.label }}
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const components = [
      { type: "el-input", label: "输入框", props: { placeholder: "请输入" } },
      { type: "el-select", label: "选择框", props: { placeholder: "请选择" } },
    ];

    const onDragStart = (component) => {
      window.dragData = component;
    };

    return {
      components,
      onDragStart,
    };
  },
};
</script>

<style>
.left-panel {
  padding: 10px;
}
.draggable-item {
  padding: 10px;
  background: #f4f4f5;
  margin: 5px 0;
  cursor: grab;
}
</style>
