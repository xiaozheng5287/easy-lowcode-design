<template>
  <div v-for="field in fieldsList" :key="field.title" class="item">
    <draggable v-model="field.list">
      <template v-for="(item, cIndex) in field.list"
          :key="'c_' + cIndex">
        <div
          class="field-label"
        >
          <a @click="handleFieldClick(item)">
            <i class="icon iconfont" :class="item.icon"></i>
            <span>{{ item.title || item.label }}</span>
          </a>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import draggable from "vuedraggable";
import fieldsList from "../fieldsConfig";
import { ref, watch } from "vue";
const handleFieldClick = (item) => {
  console.log(item);
}
watch(() => fieldsList, (newVal) => {
  console.log(newVal)
}, { deep: true, immediate: true })
</script>

<style lang="scss" scoped></style>
