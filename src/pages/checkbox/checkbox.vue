<template>
  <div>
    <!-- 基础用法 -->
    <el-checkbox v-model="checked">备选项</el-checkbox>

    <!-- 禁用状态 设置disabled属性-->
    <el-checkbox v-model="checked1" disabled></el-checkbox>
    <el-checkbox v-model="checked2" disabled></el-checkbox>

    <!-- 多选框组 适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项-->
    <!-- el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍 -->
    <!-- label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中 -->
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框A"></el-checkbox>
      <el-checkbox label="复选框B"></el-checkbox>
      <el-checkbox label="复选框C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>

    <!-- indeterminate 状态  indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果-->
    <!-- 注：el-checkbox-group中缺少 v-model会导致内容不显示 -->
    <div>
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="isCheckedAll"
        @change="handleCheckedAll"
      >全选</el-checkbox>
      <div style="margin:15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
      </el-checkbox-group>
    </div>

    <!-- 使用 min 和 max 属性能够限制可以被勾选的项目的数量。 -->
    <limitcount></limitcount>

    <!-- 按钮样式    把el-checkbox元素替换为el-checkbox-button元素即可    size属性-->
    <!-- 设置border属性可以渲染为带有边框的多选框 -->
    
    <checkboxbutton></checkboxbutton>
  </div>
</template>

<script>
import limitCount from "./limitCount";
import checkboxButton from "./checkboxButton";

const cityOptions = ["上海", "北京", "广州", "深圳"];

export default {
  components: {
    limitcount: limitCount,
    checkboxbutton: checkboxButton
  },
  data: () => ({
    checked: true,
    checked1: false,
    checked2: true,
    // 存在即选中
    checkList: ["选中且禁用", "复选框A"],
    cities: cityOptions,
    checkedCities: ["上海", "北京"],
    isCheckedAll: false,
    // 是否是不确定状态
    isIndeterminate: true
  }),
  methods: {
    handleCheckedAll(val) {
      //   console.log(val);
      //   console.log(Boolean(this.checkedCities));
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(val) {
      //   console.log(val);
      let checkedCount = val.length;
      this.isCheckedAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};


/* 
    Checkbox Attributes
    参数	        说明	            类型	可选值	默认值
    value /         v-model	绑定值	    string / number / boolean	—	—
    label	        选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）	string / number / boolean	—	—
    true-label	    选中时的值	        string / number	—	—
    false-label	    没有选中时的值	    string / number	—	—
    disabled	    是否禁用	        boolean	—	false
    border	        是否显示边框	    boolean	—	false
    size	        Checkbox 的尺寸，仅在 border 为真时有效	string	medium / small / mini	—
    name	        原生 name 属性	    string	—	—
    checked	        当前是否勾选	    boolean	—	false
    indeterminate	设置 indeterminate 状态，只负责样式控制	    boolean	—	false

    Checkbox Events
    事件名称	说明	回调参数
    change	当绑定值变化时触发的事件	更新后的值

    Checkbox-group Attributes
    参数	        说明	类型	可选值	默认值
    value / v-model	绑定值	    array	—	—
    size	        多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效	string	medium / small / mini	—
    disabled	    是否禁用	boolean	—	false
    min	            可被勾选的  checkbox 的最小数量	number	—	—
    max	            可被勾选的  checkbox 的最大数量	number	—	—
    text-color	    按钮形式的  Checkbox 激活时的文本颜色	string	—	#ffffff
    fill	        按钮形式的  Checkbox 激活时的填充色和边框色	string	—	#409EFF

    Checkbox-group Events
    事件名称	    说明	回调参数
    change	       当绑定值变化时触发的事件	更新后的值

    Checkbox-button Attributes
    参数	        说明	类型	可选值	默认值
    label	        选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）	string / number / boolean	—	—
    true-label	    选中时的值	string / number	—	—
    false-label	    没有选中时的值	string / number	—	—
    disabled	    是否禁用	boolean	—	false
    name	        原生 name 属性	string	—	—
    checked	        当前是否勾选	boolean	—	false

*/
</script>
<style lang="less" scoped>
</style>