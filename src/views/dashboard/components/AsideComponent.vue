<template>
  <!--左侧组件选择-->
  <div v-for="field in fieldsList" :key="field.title" class="field-item">
    <!-- <template v-if="field.list.find((f) => includeFieldsType.includes(f.type))"> -->
    <!-- <div class="field-title">{{ field.list }}</div> -->
    <!--/*
      draggable 对CSS样式没有什么要求万物皆可拖拽
      :list="state.list"         //需要绑定的数组
      ghost-class="ghost"        //被替换元素的样式
      chosen-class="chosenClass" //选中元素的样式
      animation="300"            //动画效果
      @start="onStart"           //拖拽开始的事件
      @end="onEnd"               //拖拽结束的事件
      */-->
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
      @start="onStart"
      @end="onEnd"
    >
      <template #item="{ element, index }">
        <div
          class="field-label"
          v-if="includeFieldsType.includes(element.type)"
          :key="'c_' + index"
        >
          <a @click="handleFieldClick($event, element)">
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
import fieldsList from "../config/fieldsConfig";
import { computed, ref, watch, toRefs } from "vue";
const props = defineProps({
  contentList: {
    type: Array,
    default: () => ([]) 
  }
});
// const { contentList } = toRefs(props);

const handleFieldClick = (evt, item) => {
  console.log('evt-------',evt);
  console.log('item-------',item);
  console.log('pppppppp',props.contentList);

  props.contentList.push({
    ...item,
    prop: item.type + '--xyz--' + Date.now(),
    readonly: false,
    required: false,
    disabled: false,
  })
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

const onStart = (e) => {
  console.log("start", e);
};
const onEnd = (e) => {
  console.log("end", e);
};
</script>

<style lang="scss" scoped>
.field {
  &-item {
    margin: 8px 0;
    overflow-y: auto;
  }
  &-content {
    // width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    margin-top: 6px;
  }
  &-label {
    width: 83%;
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
