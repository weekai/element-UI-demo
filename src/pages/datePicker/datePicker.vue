<template>
  <div>
    <!-- DatePicker 日期选择器 -->
    <!-- 用于选择或输入日期 -->
    <!-- 使用format指定输入框的格式；使用value-format指定绑定值的格式。 -->

    <!-- 选择日 -->
    <!-- 以「日」为基本单位，基础的日期选择控件 -->
    <!-- 基本单位由type属性指定。 -->
    <!-- 快捷选项需配置 picker-options 对象中的shortcuts -->
    <!-- 禁用日期通过 disabledDate 设置，传入函数 -->
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker v-model="value1" placeholder="选择日期" type="date"></el-date-picker>
    </div>

    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        align="right"
        placeholder="选择日期"
        type="date"
        :picker-options="pickerOptions"
      ></el-date-picker>
    </div>

    <!-- 其他日期单位 -->
    <!-- 通过扩展基础的日期选择，可以选择周、月、年或多个日期 -->
    <date-unit></date-unit>

    <!-- 选择日期范围 -->
    <!-- 可在一个选择器中便捷地选择一个时间范围 -->
    <!-- 在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用unlink-panels属性解除联动 -->
    <date-range></date-range>

    <!-- 选择月份范围 -->
    <!-- 可在一个选择器中便捷地选择一个月份范围 -->
    <month-range></month-range>
  </div>
</template>

<script>
import dateUnit from "./dateUnit";
import dateRange from "./dateRange";
import monthRange from "./monthRange";
export default {
  components: {
    dateUnit,
    dateRange,
    monthRange
  },
  data() {
    return {
      value1: "",
      value2: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
    };
  }
};
</script>
<style>
</style>