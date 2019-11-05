<template>
  <div>
    <!-- 通过拖动滑块在一个固定区间内进行选择 -->
    <!-- 基础用法 -->
    <h3>基础用法</h3>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>

    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <el-slider v-model="value2"></el-slider>
    </div>

    <div class="block">
      <span class="demonstration">隐藏Tooltip</span>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>

    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>

    <div class="block">
      <span class="demonstration">禁用</span>
      <el-slider v-model="value5" disabled></el-slider>
    </div>

    <!-- 改变step的值可以改变步长，通过设置show-stops属性可以显示间断点 -->
    <h3>离散值</h3>
    <div class="block">
      <span class="demonstration">不显示间断点</span>
      <el-slider v-model="value1" :step="10"></el-slider>
    </div>

    <div class="block">
      <span class="demonstration">显示间断点</span>
      <el-slider v-model="value2" :step="10" show-stops></el-slider>
    </div>

    <!-- 通过输入框设置精确数值 -->
    <!-- 设置show-input属性会在右侧显示一个输入框 -->
    <h3>带有输入框</h3>
    <div class="block">
      <el-slider v-model="value" show-input></el-slider>
    </div>

    <!-- 范围选择 -->
    <!-- 设置range即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值 -->
    <h3>范围选择</h3>
    <div class="block">
      <el-slider v-model="value6" range show-stops :max="10"></el-slider>
    </div>

    <!-- 竖向模式 -->
    <!-- 设置vertical可使 Slider 变成竖向模式，此时必须设置高度height属性 -->
    <h3>竖向模式</h3>
    <div class="block">
      <el-slider v-model="value" vertical height="200px"></el-slider>
    </div>

    <!-- 展示标记 -->
    <!-- 设置 marks 属性可以展示标记 -->
    <h3>展示标记</h3>
    <marks></marks>
  </div>
</template>

<script>
import marks from "./marks";
export default {
  components: {
    marks
  },
  data: () => ({
    value: 0,
    value1: 0,
    value2: 50,
    value3: 36,
    value4: 48,
    value5: 42,
    value6: [2, 8]
  }),
  methods: {
    formatTooltip(val) {
      return val / 100;
    }
  }
};
</script>
<style>
.block {
  margin-bottom: 30px;
  width: 600px;
}
</style>