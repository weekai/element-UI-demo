<template>
  <div>
    <!-- 使用active-color属性与inactive-color属性来设置开关的背景色 -->
    <h3>基本用法</h3>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>

    <!-- 使用active-text属性与inactive-text属性来设置开关的文字描述。 -->
    <h3>文字描述</h3>
    <el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"></el-switch>
    <el-switch
      v-model="value2"
      active-text="按月付费"
      inactive-text="按年付费"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></el-switch>

    <!-- 扩展的 value 类型 -->
    <!-- 设置active-value和inactive-value属性，接受Boolean, String或Number类型的值 -->
    <h3>扩展的 value 类型</h3>
    <el-tooltip :content="'Switch value: ' + value" placement="top">
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0"
      ></el-switch>
    </el-tooltip>

    <!-- 禁用状态 -->
    <!-- 设置disabled属性，接受一个Boolean，设置true即可禁用 -->
    <h3>禁用状态</h3>
    <el-switch v-model="value1" disabled></el-switch>
    <el-switch v-model="value2" disabled></el-switch>
  </div>
</template> 

<script>
export default {
  data: () => ({
    value: true,
    value1: true,
    value2: false
  })
};
</script>
<style>
h3 {
  margin-top: 30px;
}
</style>