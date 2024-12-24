<template>
  <div v-for="field in fieldsList" :key="field.title" class="item">
  <!-- <template v-if="field.list.find((f) => includeFieldsType.includes(f.type))"> -->
    <div class="field-title">{{ field.title }}</div>
    <Draggable
      tag="ul"
      :list="field.list"
      :group="{ name: 'form', clone: (original) => ({ ...original }), putTo: false }"
      :sort="false"
      drag-class="ghost"
    >
      <template #item="{ element, index }">
        <li
          class="field-label"
          v-if="includeFieldsType.includes(element.type)"
          :key="'c_' + index"
        >
          <a @click="handleFieldClick(element)">
            <i class="icon iconfont" :class="element.icon"></i>
            <span>{{ element.title || element.label }}</span>
          </a>
        </li>
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

<style lang="scss" scoped></style>
