<template>
  <div>
    <!--右侧表单配置项-->
    <!--这个地方是否应该循环表单项，从而将每个不同类型的表单配置项渲染出来-->
    <el-form label-width="80px" label-position="left">
      <el-form-item label="类型">
        <el-input v-model="contentForm.type"></el-input>
      </el-form-item>
      <el-form-item label="唯一标识">
        <el-input v-model="contentForm.prop"></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="contentForm.name"></el-input>
      </el-form-item>
      <el-form-item label="标题宽度">
        <el-input v-model="contentForm.width"></el-input>
      </el-form-item>
      <el-form-item label="是否只读">
        <el-radio-group v-model="contentForm.readonly">
          <el-radio :value="1">是</el-radio>
          <el-radio :value="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否禁用">
        <el-radio-group v-model="contentForm.disabled">
          <el-radio :value="1">是</el-radio>
          <el-radio :value="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否必填">
        <el-radio-group v-model="contentForm.required">
          <el-radio :value="1">是</el-radio>
          <el-radio :value="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  contentForm: {
    type: Object,
    default: () => ({}) 
  }
});

watch(props.contentForm.value, () => (newVal, oldVal) => {});
</script>

<style lang="scss" scoped></style>
