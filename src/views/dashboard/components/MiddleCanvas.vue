<template>
  <div class="canvas" @dragover.prevent @drop="onDrop">
    <draggable v-model="formItems" group="form" class="drag-area">
      <div
        v-for="item in formItems"
        :key="item.id"
        class="form-item"
        @click="selectItem(item)"
      >
        <component :is="item.type" v-bind="item.props" />
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  props: ["formItems"],
  emits: ["drop", "selectItem"],
  setup(props, { emit }) {
    const onDrop = () => {
      emit("drop", window.dragData);
    };

    const selectItem = (item) => {
      emit("selectItem", item);
    };

    return {
      onDrop,
      selectItem,
    };
  },
};
</script>

<style>
.canvas {
  border: 1px dashed #ccc;
  height: 100%;
  padding: 10px;
  background: #fff;
}
.drag-area {
  min-height: 400px;
}
.form-item {
  margin: 10px 0;
}
</style>
