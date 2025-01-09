<template>
  <div class="right-panel">
    <h3>属性配置</h3>
    <div v-for="(value, key) in item.props" :key="key" class="config-item">
      <label>{{ key }}</label>
      <el-input v-model="item.props[key]" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  emits: ["updateItem"],
  watch: {
    item: {
      deep: true,
      handler(newVal) {
        this.$emit("updateItem", newVal);
      },
    },
  },
};
</script>

<style>
.right-panel {
  padding: 10px;
}
.config-item {
  margin: 10px 0;
}
</style>
