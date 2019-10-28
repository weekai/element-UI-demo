<template>
  <div>
    <!-- 可选项目数量的限制   使用 min 和 max 属性能够限制可以被勾选的项目的数量-->
    <div>
      <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
        <el-checkbox v-for="city in cities" :label="city" :key="city" border>{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];

export default {
  data: () => ({
    checkedCities: ["上海", "北京"],
    cities: cityOptions
  })
};
</script>

<style lang="less" scoped>
</style>