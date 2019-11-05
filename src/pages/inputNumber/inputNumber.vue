<template>
  <div>
    <!-- InputNumber 计数器 仅允许输入标准的数字值，可定义范围 -->

    <!-- 基础用法 -->
    <!-- 需要在el-input-number元素中使用v-model绑定变量即可，变量的初始值即为默认值 -->
    <h3>基础用法</h3>
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>

    <!-- 禁用状态 -->
    <!-- disabled属性接受一个Boolean，设置为true即可禁用整个组件 -->
    <!-- 不设置min和max时，最小值为 0。 -->
    <h3>禁用状态</h3>
    <el-input-number v-model="num" :disabled="true"></el-input-number>

    <!-- 步数 -->
    <!-- 允许定义递增递减的步数控制  设置step属性可以控制步长，接受一个Number-->
    <h3>步数</h3>
    <el-input-number v-model="num" :step="2"></el-input-number>

    <!-- 严格步数 -->
    <!-- step-strictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数 -->
    <h3>严格步数</h3>
    <el-input-number v-model="num" :step="2" step-strictly></el-input-number>

    <!-- 精度 -->
    <!-- 设置 precision 属性可以控制数值精度，接收一个 Number。 -->
    <!-- precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。 -->
    <h3>精度</h3>
    <el-input-number v-model="num1" :precision="2" :step="0.1" :max="10"></el-input-number>

    <!-- 尺寸  提供了 medium、small、mini 三种尺寸的数字输入框-->
    <h3>尺寸</h3>
    <el-input-number v-model="num1"></el-input-number>
    <el-input-number size="medium" v-model="num2"></el-input-number>
    <el-input-number size="small" v-model="num3"></el-input-number>
    <el-input-number size="mini" v-model="num4"></el-input-number>

    <!-- 按钮位置 -->
    <!-- 设置 controls-position 属性可以控制按钮位置。 -->
    <h3>按钮位置</h3>
    <el-input-number
      v-model="num"
      controls-position="right"
      @change="handleChange"
      :min="1"
      :max="10"
    ></el-input-number>
  </div>
</template>

<script>
export default {
  data: () => ({
    num: 1,
    num1: 1,
    num2: 1,
    num3: 1,
    num4: 1
  }),
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};

/* 

Attributes
参数	          说明	类型	可选值	默认值
value / v-model	绑定值	number	—	0
min	            设置计数器允许的最小值	number	—	-Infinity
max	            设置计数器允许的最大值	number	—	Infinity
step          	计数器步长	number	—	1
step-strictly	  是否只能输入 step 的倍数	number	—	false
precision	      数值精度	number	—	—
size	          计数器尺寸	string	large, small	—
disabled	      是否禁用计数器	boolean	—	false
controls	      是否使用控制按钮	boolean	—	true
controls-position	控制按钮位置	string	right	-
name	          原生属性	string	—	—
label	          输入框关联的label文字	string	—	—
placeholder	    输入框默认 placeholder	string	-	-

Events
事件名称	    说明	回调参数
change	      绑定值被改变时触发	currentValue, oldValue
blur	        在组件 Input 失去焦点时触发	(event: Event)
focus	        在组件 Input 获得焦点时触发	(event: Event)

Methods
方法名	      说明	参数
focus	        使 input 获取焦点	-
select	      选中 input 中的文字	—
*/
</script>
<style>
.el-input-number {
  display: block;
  margin: 10px;
}
</style>