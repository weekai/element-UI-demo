<template>
  <div>
    <!-- 基础用法 -->
    <!-- 要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。 -->
    <div>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>

    <!-- 禁用状态 -->
    <!-- 在el-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用 -->
    <div>
      <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
    </div>

    <!-- 单选框组   适用于在多个互斥的选项中选择的场景-->
    <div>
      <el-radio-group v-model="radio2">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </div>

    <!-- 按钮样式 -->
    <!-- el-radio元素换成el-radio-button元素即可，此外，Element 还提供了size属性 -->
    <div>
      <div>
        <el-radio-group v-model="radio3">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio4" size="medium">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio5" size="small">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" disabled></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio6" disabled size="mini">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
    </div>

    <!-- 带有边框 -->
    <div>
      <div>
        <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
        <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio9" size="small">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border disabled>备选项2</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio10" size="mini" disabled>
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    radio: "1",
    radio1: "选中且禁用",
    radio2: 3,
    radio3: "上海",
    radio4: "上海",
    radio5: "上海",
    radio6: "上海",
    radio7: "1",
    radio8: "1",
    radio9: "1",
    radio10: "1"
  })

  /* 
    Radio Attributes
    参数	说明	类型	可选值	默认值
    label	Radio 的 value	string / number / boolean	—	—
    disabled	是否禁用	boolean	—	false
    border	是否显示边框	boolean	—	false
    size	Radio 的尺寸，仅在 border 为真时有效	string	medium / small / mini	—
    name	原生 name 属性	string	—	—
    

    Radio Events
    事件名称	说明	回调参数
    change	绑定值变化时触发的事件	选中的 Radio label 值
    
    
    Radio-group Attributes
    参数	说明	类型	可选值	默认值
    size	单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效	string	medium / small / mini	—
    disabled	是否禁用	boolean	—	false
    text-color	按钮形式的 Radio 激活时的文本颜色	string	—	#ffffff
    fill	按钮形式的 Radio 激活时的填充色和边框色	string	—	#409EFF
    
    
    Radio-group Events
    事件名称	说明	回调参数
    change	绑定值变化时触发的事件	选中的 Radio label 值
    
    
    Radio-button Attributes
    参数	说明	类型	可选值	默认值
    label	Radio 的 value	string / number	—	—
    disabled	是否禁用	boolean	—	false
    name	原生 name 属性	string	—	—
  */
};
</script>
<style>
</style>