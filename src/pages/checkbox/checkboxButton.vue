<template>
  <div>
    <el-checkbox-group v-model="checkboxGroup1">
      <el-checkbox-button v-for="(city) in cities" :key="city" :label="city">{{ city }}</el-checkbox-button>
    </el-checkbox-group>

    <div style="margin-top:20px;"></div>
    <el-checkbox-group v-model="checkboxGroup2" size="medium">
      <el-checkbox-button v-for="(city) in cities" :key="city" :label="city">{{ city }}</el-checkbox-button>
    </el-checkbox-group>

    <div style="margin-top:20px;"></div>
    <el-checkbox-group v-model="checkboxGroup3" size="small">
      <el-checkbox-button
        v-for="(city) in cities"
        :key="city"
        :label="city"
        :disabled="city === '广州'"
      >{{ city }}</el-checkbox-button>
    </el-checkbox-group>

    <div style="margin-top:20px;"></div>
    <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <el-checkbox-button v-for="(city) in cities" :key="city" :label="city">{{ city }}</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data: () => ({
    checkboxGroup1: ["上海"],
    checkboxGroup2: ["上海"],
    checkboxGroup3: ["上海"],
    checkboxGroup4: ["上海"],
    cities: cityOptions
  })
};
</script>
<style scoped>
</style>