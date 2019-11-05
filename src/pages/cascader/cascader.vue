<template>
  <div>
    <!-- click 触发子菜单 -->
    <div class="block">
      <span class="demonstration">默认 click 触发子菜单</span>
      <el-cascader :options="options" v-model="value" @change="handleChange"></el-cascader>
    </div>

    <!-- hover 触发子菜单 -->
    <!-- props.expandTrigger可以定义展开子级菜单的触发方式。 -->
    <div class="block">
      <span class="demonstration">hover 触发子菜单</span>
      <el-cascader
        v-model="value"
        :options="options"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"
      ></el-cascader>
    </div>

    <!-- 禁用选项 -->
    <!-- 在数据源中设置 disabled 字段来声明该选项是禁用的 -->

    <!-- 可清空 -->
    <!-- 通过 clearable 设置输入框可清空 -->
    <div class="block">
      <span class="demonstration">输入框可清空</span>
      <el-cascader :options="options" clearable></el-cascader>
    </div>

    <!-- 仅显示最后一级 -->
    <!-- 属性show-all-levels定义了是否显示完整的路径，将其赋值为false则仅显示最后一级 -->
    <div class="block">
      <span class="demonstration">仅显示最后一级</span>
      <el-cascader :options="options" :show-all-levels="false"></el-cascader>
    </div>

    <!-- 通过 props.multiple = true 来开启多选模式 -->
    <!-- 使用collapse-tags来折叠Tag -->
    <multiple></multiple>

    <!-- 选择任意一级选项 -->
    <!-- 通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的 (单选) -->
    <div class="block">
      <span class="demonstration">单选选择任意一级选项</span>
      <el-cascader :options="options" :props="{checkStrictly:true}" clearable></el-cascader>
    </div>

    <!-- 多选选择任意一级选项 -->
    <div class="block">
      <span class="demonstration">多选选择任意一级选项</span>
      <el-cascader :options="options" clearable :props="{ multiple: true, checkStrictly: true }"></el-cascader>
    </div>

    <!-- 动态加载 -->
    <lazyload></lazyload>

    <!-- 可搜索 -->
    <!-- 将filterable赋值为true即可打开搜索功能，默认会匹配节点的label或所有父节点的label(由show-all-levels决定)中包含输入值的选项。
    可以用filter-method自定义搜索逻辑，接受一个函数，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中-->
    <div class="block">
      <span class="demonstration">单选可搜索</span>
      <el-cascader placeholder="试试搜索：指南" :options="options" filterable></el-cascader>
    </div>

    <!-- 多选可搜索 -->
    <div class="block">
      <span class="demonstration">多选可搜索</span>
      <el-cascader placeholder="试试搜索：指南" :options="options" :props="{ multiple:true }" filterable></el-cascader>
    </div>

    <!-- 自定义节点内容 -->
    <!-- 通过scoped slot对级联选择器的备选项的节点内容进行自定义 -->
    <!-- scoped slot会传入两个字段 node 和 data，分别表示当前节点的 Node 对象和数据 -->
    <div class="block">
      <span class="demonstration">自定义节点内容</span>
      <el-cascader :options="options">
        <template slot-scope="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf">({{ data.children.length }})</span>
        </template>
      </el-cascader>
    </div>

    <!-- 级联面板 -->
    <div class="block">
      <span class="demonstration">级联面板</span>
      <el-cascader-panel :options="options"></el-cascader-panel>
    </div>
  </div>
</template>

<script>
import multiple from "./multiple.vue";
import lazyload from "./lazyload.vue";

export default {
  components: {
    multiple,
    lazyload
  },
  data: () => ({
    value: [],
    options: [
      {
        value: "zhinan",
        label: "指南",
        disabled: true,
        children: [
          {
            value: "shejiyuanze",
            label: "设计原则",
            children: [
              {
                value: "yizhi",
                label: "一致"
              },
              {
                value: "fankui",
                label: "反馈"
              },
              {
                value: "xiaolv",
                label: "效率"
              },
              {
                value: "kekong",
                label: "可控"
              }
            ]
          },
          {
            value: "daohang",
            label: "导航",
            children: [
              {
                value: "cexiangdaohang",
                label: "侧向导航"
              },
              {
                value: "dingbudaohang",
                label: "顶部导航"
              }
            ]
          }
        ]
      },
      {
        value: "zujian",
        label: "组件",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout 布局"
              },
              {
                value: "color",
                label: "Color 色彩"
              },
              {
                value: "typography",
                label: "Typography 字体"
              },
              {
                value: "icon",
                label: "Icon 图标"
              },
              {
                value: "button",
                label: "Button 按钮"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio 单选框"
              },
              {
                value: "checkbox",
                label: "Checkbox 多选框"
              },
              {
                value: "input",
                label: "Input 输入框"
              },
              {
                value: "input-number",
                label: "InputNumber 计数器"
              },
              {
                value: "select",
                label: "Select 选择器"
              },
              {
                value: "cascader",
                label: "Cascader 级联选择器"
              },
              {
                value: "switch",
                label: "Switch 开关"
              },
              {
                value: "slider",
                label: "Slider 滑块"
              },
              {
                value: "time-picker",
                label: "TimePicker 时间选择器"
              },
              {
                value: "date-picker",
                label: "DatePicker 日期选择器"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker 日期时间选择器"
              },
              {
                value: "upload",
                label: "Upload 上传"
              },
              {
                value: "rate",
                label: "Rate 评分"
              },
              {
                value: "form",
                label: "Form 表单"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table 表格"
              },
              {
                value: "tag",
                label: "Tag 标签"
              },
              {
                value: "progress",
                label: "Progress 进度条"
              },
              {
                value: "tree",
                label: "Tree 树形控件"
              },
              {
                value: "pagination",
                label: "Pagination 分页"
              },
              {
                value: "badge",
                label: "Badge 标记"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert 警告"
              },
              {
                value: "loading",
                label: "Loading 加载"
              },
              {
                value: "message",
                label: "Message 消息提示"
              },
              {
                value: "message-box",
                label: "MessageBox 弹框"
              },
              {
                value: "notification",
                label: "Notification 通知"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "NavMenu 导航菜单"
              },
              {
                value: "tabs",
                label: "Tabs 标签页"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb 面包屑"
              },
              {
                value: "dropdown",
                label: "Dropdown 下拉菜单"
              },
              {
                value: "steps",
                label: "Steps 步骤条"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog 对话框"
              },
              {
                value: "tooltip",
                label: "Tooltip 文字提示"
              },
              {
                value: "popover",
                label: "Popover 弹出框"
              },
              {
                value: "card",
                label: "Card 卡片"
              },
              {
                value: "carousel",
                label: "Carousel 走马灯"
              },
              {
                value: "collapse",
                label: "Collapse 折叠面板"
              }
            ]
          }
        ]
      },
      {
        value: "ziyuan",
        label: "资源",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "jiaohu",
            label: "组件交互文档"
          }
        ]
      }
    ]
  }),
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<style lang="less">
.block {
  display: block;
  .demonstration {
    margin: 10px;
    display: block;
  }
}
</style>