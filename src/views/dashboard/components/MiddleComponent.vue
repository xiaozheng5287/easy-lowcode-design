<template>
  <!--中间布局容器-->
  <div>
    <Draggable
      class="middle-content"
      :list="contentList"
      :group="{
        name: 'form',
        clone: (original) => ({ ...original }),
        putTo: false,
      }"
      :sort="false"
      drag-class="ghost"
      @start="onStart"
      @end="onEnd"
    >
      <template #item="{ element, index }">
        <div
          class="middle-label"
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
  </div>
</template>

<script setup>
import Draggable from "vuedraggable";
import { ref, defineProps } from "vue";

defineProps({
  contentList: {
    type: Array,
    default: () => [],
  },
})

const onStart = (e) => {
  console.log("start", e);
};
const onEnd = (e) => {
  console.log("end", e);
};
const handleFieldClick = (element) => {
  console.log("handleFieldClick", element);
};



</script>

<style lang="scss" scoped></style>
