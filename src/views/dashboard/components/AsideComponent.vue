<template>
  <div v-for="field in fieldsList" :key="field.title" class="field-item">
    <!-- <template v-if="field.list.find((f) => includeFieldsType.includes(f.type))"> -->
    <div class="field-title">{{ field.title }}</div>
    <Draggable
      class="field-content"
      :list="field.list"
      :group="{
        name: 'form',
        clone: (original) => ({ ...original }),
        putTo: false,
      }"
      :sort="false"
      drag-class="ghost"
    >
      <template #item="{ element, index }">
          <div
            class="field-label"
            v-if="includeFieldsType.includes(element.type)"
            :key="'c_' + index"
          >
            <a @click="handleFieldClick(element)">
              <el-icon>
                <component :is="element.icon" />
              </el-icon>
              <span>{{ element.title || element.label }}</span>
            </a>
          </div>
      </template>
    </Draggable>
    <!-- </template> -->
  </div>
</template>

<script setup>
import Draggable from "vuedraggable";
import fieldsList from "../fieldsConfig";
import { computed, ref, watch } from "vue";
const handleFieldClick = (item) => {
  console.log(item);
};
watch(
  () => fieldsList,
  (newVal) => {
    console.log(newVal);
  },
  { deep: true, immediate: true }
);

const includeFieldsType = computed(() => {
  const arr = [];
  console.log("fields", fieldsList);

  fieldsList.forEach((f) => {
    f.list.forEach((c) => {
      arr.push(c.type);
    });
  });
  console.log("arr", arr);

  return arr;
});
</script>

<style lang="scss" scoped>
.field {
  &-item {
    margin: 10px 0;
    overflow-y: auto;
  }
  &-content {
    // width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    margin-top: 10px;
  }
  &-label {
    width: 80%;
    padding: 3px 10px;
    margin-top: 5px;
    line-height: 30px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: rgb(202, 235, 255);
    &:hover {
      background-color: #f5f7fa;
    }
    a {
      display: flex;
      align-items: center;
      color: #333;
      .el-icon {
        margin-right: 8px;
        font-size: 18px;
      }
    }
  }
}
</style>
