<template>
  <div>
    <!-- TimePicker 时间选择器 用于选择或输入日期 -->

    <!-- 固定时间点 -->
    <!-- 提供几个固定的时间点供用户选择 -->
    <!-- 使用 el-time-select 标签，分别通过star、end和step指定可选的起始时间、结束时间和步长 -->
    <h3>固定时间点</h3>
    <el-time-select
      v-model="value"
      placeholder="选择时间"
      :picker-options="{start:'08:30', step:'00:15', end:'18:30'}"
    ></el-time-select>

    <!-- 任意时间点 -->
    <!-- 可以选择任意时间 -->
    <!-- 使用 el-time-picker 标签，通过 selectableRange 限制可选时间范围 -->
    <!-- 两种交互方式：默认情况下通过鼠标滚轮进行选择，打开arrow-control属性则通过界面上的箭头进行选 -->
    <h3>任意时间点</h3>
    <el-time-picker
      v-model="value1"
      placeholder="任意时间点"
      :picker-options="{selectableRange:'18:30:00 - 20:30:00'}"
    ></el-time-picker>

    <el-time-picker
      arrow-control
      v-model="value2"
      placeholder="任意时间点"
      :picker-options="{selectableRange:'18:30:00 - 20:30:00'}"
    ></el-time-picker>

    <!-- 固定时间范围 -->
    <!-- 若先选择开始时间，则结束时间内备选项的状态会随之改变 -->
    <h3>固定时间范围</h3>
    <el-time-select
      v-model="startTime"
      placeholder="起始时间"
      :picker-options="{start:'08:30', step:'00:15', end:'18:30'}"
    ></el-time-select>

    <el-time-select
      v-model="endTime"
      placeholder="结束时间"
      :picker-options="{start:'08:30', step:'00:15', end:'18:30', minTime:startTime}"
    ></el-time-select>

    <!-- 任意时间范围 -->
    <!-- 可选择任意的时间范围 -->
    <!-- 添加is-range属性即可选择时间范围，同样支持arrow-control属性。 -->
    <h3>任意时间范围</h3>
    <el-time-picker
      is-range
      v-model="value3"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    ></el-time-picker>

    <el-time-picker
      v-model="value4"
      is-range
      arrow-control
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    ></el-time-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
      value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      startTime: "",
      endTime: ""
    };
  }
};
</script>
<style>
</style>