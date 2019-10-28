<template>
  <div>
    <!-- 基础用法 -->
    <el-input v-model="input" placeholder="请输入内容"></el-input>

    <!-- 禁用状态 -->
    <el-input placeholder="请输入内容" v-model="input" :disabled="true"></el-input>

    <!-- 可清空  使用clearable属性即可得到一个可清空的输入框 -->
    <el-input placeholder="请输入内容" v-model="input" clearable></el-input>

    <!-- 密码框  使用show-password属性即可得到一个可切换显示隐藏的密码框-->
    <el-input v-model="input" placeholder=" 请输入密码" show-password></el-input>

    <!-- 带 icon 的输入框 -->
    <!-- 可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。 -->
    <div>
      <div class="demo-input-suffix">
        <el-input v-model="input1" placeholder="请选择日期" suffix-icon="el-icon-date"></el-input>
        <el-input v-model="input2" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      </div>

      <!-- slot 方式 -->
      <div>
        <el-input placeholder="请选择日期" v-model="input3">
          <i slot="suffix" class="el-input__icon el-icon-date"></i>
        </el-input>

        <el-input v-model="input4" placeholder="请输入内容">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>

    <!-- 文本域  通过将 type 属性的值指定为 textarea  文本域高度可通过 rows 属性控制-->
    <el-input v-model="textarea" placeholder="请输入内容" :rows="2" type="textarea"></el-input>

    <!-- 可自适应文本高度的文本域-->
    <!-- 通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整 -->
    <!-- autosize 还可以设定为一个对象，指定最小行数和最大行数 -->
    <el-input v-model="textarea1" placeholder="请输入内容" autosize type="textarea"></el-input>

    <el-input
      type="textarea"
      :autosize="{ minRows:2, maxRows:4 }"
      placeholder="请输入内容"
      v-model="textarea2"
    ></el-input>

    <!-- 复合型输入框    可前置或后置元素，一般为标签或按钮-->
    <!-- 可通过 slot 来指定在 input 中前置或者后置内容 -->
    <compoundinputbox></compoundinputbox>

    <!-- 尺寸   通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸-->
    <div class="demo-list-size">
      <el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1"></el-input>
      <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1"></el-input>
      <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1"></el-input>
      <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1"></el-input>
    </div>

    <!-- 带输入建议   根据输入内容提供对应的输入建议-->
    <!-- autocomplete 是一个可带输入建议的输入框组件，fetch-suggestions 是一个返回输入建议的方法属性 -->
    <!-- querySearch(queryString, cb)，在该方法中你可以在你的输入建议数据准备好时通过 cb(data) 返回到 autocomplete 组件中 -->
    <suggestinput></suggestinput>

    <!-- 输入长度限制 -->
    <!-- maxlength 和 minlength 是原生属性，用来限制输入框的字符长度 -->
    <!-- 类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。 -->
    <el-input type="input" placeholder="请输入内容" v-model="text" maxlength="10" show-word-limit></el-input>
    <div style="margin:20px 0;"></div>
    
    <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="30" show-word-limit></el-input>
  </div>
</template>

<script>
import compoundInputBox from "./compoundInputBox";
import suggestInput from "./suggestInput";

export default {
  components: {
    compoundinputbox: compoundInputBox,
    suggestinput: suggestInput
  },
  data: () => ({
    input: "",
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    text: "",
    textarea: "",
    textarea1: "",
    textarea2: ""
  })
};


/*  
Input Attributes
参数	            说明	      类型	    可选值	    默认值
type	            类型	string	text，textarea 和其他 原生 input 的 type 值	text
value             / v-model	绑定值	string / number	—	—
maxlength	        原生属性，最大输入长度	number	—	—
minlength	        原生属性，最小输入长度	number	—	—
show-word-limit	  是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效	boolean	—	false
placeholder	      输入框占位文本	string	—	—
clearable	        是否可清空	boolean	—	false
show-password	    是否显示切换密码图标	boolean	—	false
disabled	        禁用	boolean	—	false
size	            输入框尺寸，只在 type!="textarea" 时有效	string	medium / small / mini	—
prefix-icon	      输入框头部图标	string	—	—
suffix-icon	      输入框尾部图标	string	—	—
rows	            输入框行数，只对 type="textarea" 有效	number	—	2
autosize	        自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }	boolean / object	—	false
autocomplete	    原生属性，自动补全	string	on, off	off
auto-complete	    下个主版本弃用	string	on, off	off
name	            原生属性	string	—	—
readonly	        原生属性，是否只读	boolean	—	false
max	              原生属性，设置最大值	—	—	—
min	              原生属性，设置最小值	—	—	—
step	            原生属性，设置输入字段的合法数字间隔	—	—	—
resize	          控制是否能被用户缩放	string	none, both, horizontal, vertical	—
autofocus	        原生属性，自动获取焦点	boolean	true, false	false
form	            原生属性	string	—	—
label	            输入框关联的label文字	string	—	—
tabindex	        输入框的tabindex	string	-	-
validate-event	  输入时是否触发表单的校验	boolean	-	true

Input Slots
name	  说明
prefix	输入框头部内容，只对 type="text" 有效
suffix	输入框尾部内容，只对 type="text" 有效
prepend	输入框前置内容，只对 type="text" 有效
append	输入框后置内容，只对 type="text" 有效

Input Events
事件名称	    说明	回调参数
blur	        在 Input 失去焦点时触发	(event: Event)
focus	        在 Input 获得焦点时触发	(event: Event)
change	      在 Input 值改变时触发	(value: string | number)
clear	        在点击由 clearable 属性生成的清空按钮时触发	—

Input Methods
方法名	      说明	参数
focus	        使 input 获取焦点	—
blur	        使 input 失去焦点	—
select	      选中 input 中的文字	—

Autocomplete Attributes
参数	        说明	类型	可选值	默认值
placeholder	  输入框占位文本	string	—	—
disabled	    禁用	boolean	—	false
value-key	    输入建议对象中用于显示的键名	string	—	value
value	        必填值，输入绑定值	string	—	—
debounce	    获取输入建议的去抖延时	number	—	300
placement	    菜单弹出位置	string	top / top-start / top-end / bottom / bottom-start / bottom-end	bottom-start
fetch-suggestions	返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它	Function(queryString, callback)	—	—
popper-class	Autocomplete 下拉列表的类名	string	—	—
trigger-on-focus	是否在输入框 focus 时显示建议列表	boolean	—	true
name	        原生属性	string	—	—
select-when-unmatched	在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件	boolean	—	false
label	        输入框关联的label文字	string	—	—
prefix-icon	  输入框头部图标	string	—	—
suffix-icon	  输入框尾部图标	string	—	—
hide-loading	是否隐藏远程加载时的加载图标	boolean	—	false
popper-append-to-body	是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false	boolean	-	true
highlight-first-item	是否默认突出显示远程搜索建议中的第一项	boolean	—	false

Autocomplete Slots
name	说明
prefix	输入框头部内容
suffix	输入框尾部内容
prepend	输入框前置内容
append	输入框后置内容

Autocomplete Scoped Slot
name	说明
—	自定义输入建议，参数为 { item }

Autocomplete Events
事件名称	说明	回调参数
select	点击选中建议项时触发	选中建议项

Autocomplete Methods
方法名	说明	参数
focus	使 input 获取焦点

*/
</script>
<style>
</style>