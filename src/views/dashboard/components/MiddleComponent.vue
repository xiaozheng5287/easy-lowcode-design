<template>
  <!--中间布局容器-->
  <div>    
    <div>{{props.contentList}}</div>
    <Draggable
      class="middle-content"
      :list="props.contentList"
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
          class="middle-item"
          :key="'c_' + index"
        >
          <a @click="handleFieldClick(element)">
            <div>{{ element.title || element.label }}</div>
            <component :is="'el-'+element.type"/>
          </a>
        </div>
      </template>
    </Draggable>
  </div>
</template>

<script setup>
import Draggable from "vuedraggable";
import { ref } from "vue";

const props = defineProps({
  contentList: {
    type: Array,
    default: () => [],
  },
})
console.log('contentList',props.contentList.length);

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

<style lang="scss" scoped>
.middle-item {
  padding: 10px 5px 5px 2px;
  // border: 1px solid #ccc;
  margin-right: 5px;
  // margin: 10px;
  border-radius: 5px;
  cursor: move;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // color: #333;
    // text-decoration: none;
    div {
      flex: 1 0 auto;
      margin-right: 5px;
    }
  }
}
</style>
