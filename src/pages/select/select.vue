<template>
  <div>
    <!-- 基础用法 -->
    <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
    <h3>基础用法</h3>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>

    <!-- 有禁用选项 -->
    <!-- 在el-option中，设定disabled值为 true，即可禁用该选项 -->
    <h3>有禁用选项</h3>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></el-option>
    </el-select>

    <!-- 选择器不可用状态 -->
    <!-- 为el-select设置disabled属性，则整个选择器不可用 -->
    <h3>选择器不可用状态</h3>
    <el-select v-model="value" disabled placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>

    <!-- 可清空单选 -->
    <!-- 为el-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。 -->
    <h3>可清空单选</h3>
    <el-select v-model="value" clearable placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>

    <!-- 基础多选 -->
    <!-- 为el-select设置multiple属性即可启用多选 -->
    <!-- 此时v-model的值为当前选中值所组成的数组 -->
    <!-- 默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。 -->
    <h3>基础多选</h3>
    <el-select v-model="value2" multiple placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>

    <el-select v-model="value2" multiple collapse-tags placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>

    <!-- 自定义模板 -->
    <!-- 可以自定义备选项 -->
    <h3>自定义模板</h3>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
        <span style="float:left">{{ item.label }}</span>
        <span style="float:right; color:#8492a6; font-size:13px;">{{item.value}}</span>
      </el-option>
    </el-select>

    <!-- 分组 -->
    <!-- 备选项进行分组展示 -->
    <!-- 使用el-option-group对备选项进行分组，它的label属性为分组名 -->
    <h3>分组</h3>
    <el-select v-model="value" placeholder="请选择">
      <el-option-group v-for="group in options1" :key="group.label" :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-option-group>
    </el-select>

    <!-- 可搜索 -->
    <!-- 为el-select添加filterable属性即可启用搜索功能。 -->
    <!-- 如果希望使用其他的搜索逻辑，可以通过传入一个filter-method来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。 -->
    <h3>可搜索</h3>
    <el-select v-model="value" placeholder="请选择" filterable>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>

    <!-- 远程搜索 -->
    <!-- 为了启用远程搜索，需要将filterable和remote设置为true，同时传入一个remote-method -->
    <!-- remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值 -->
    <h3>远程搜索</h3>
    <el-select
      v-model="value3"
      placeholder="请输入关键词"
      multiple
      filterable
      remote
      reserve-keyword
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>

    <!-- 创建条目 -->
    <!-- 使用allow-create属性即可通过在输入框中输入文字来创建新的条目 -->
    <!-- 注意此时filterable必须为真 -->
    <!-- default-first-option属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项 -->
    <h3>创建条目</h3>
    <el-select
      v-model="value3"
      placeholder="请选择文章标签"
      multiple
      filterable
      allow-create
      default-first-option
    >
      <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: [
      {
        value: "选项1",
        label: "黄金糕"
      },
      {
        value: "选项2",
        label: "双皮奶"
      },
      {
        value: "选项3",
        label: "蚵仔煎"
      },
      {
        value: "选项4",
        label: "龙须面",
        disabled: true
      },
      {
        value: "选项5",
        label: "北京烤鸭"
      }
    ],
    cities: [
      {
        value: "Beijing",
        label: "北京"
      },
      {
        value: "Shanghai",
        label: "上海"
      },
      {
        value: "Nanjing",
        label: "南京"
      },
      {
        value: "Chengdu",
        label: "成都"
      },
      {
        value: "Shenzhen",
        label: "深圳"
      },
      {
        value: "Guangzhou",
        label: "广州"
      }
    ],
    options1: [
      {
        label: "热门城市",
        options: [
          {
            value: "Shanghai",
            label: "上海"
          },
          {
            value: "Beijing",
            label: "北京"
          }
        ]
      },
      {
        label: "城市名",
        options: [
          {
            value: "Chengdu",
            label: "成都"
          },
          {
            value: "Shenzhen",
            label: "深圳"
          },
          {
            value: "Guangzhou",
            label: "广州"
          },
          {
            value: "Dalian",
            label: "大连"
          }
        ]
      }
    ],
    value: "",
    value2: [],
    list: [],
    loading: false,
    states: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ],
    options2: [],
    value3: [],
    options3: [
      {
        value: "HTML",
        label: "HTML"
      },
      {
        value: "CSS",
        label: "CSS"
      },
      {
        value: "JavaScript",
        label: "JavaScript"
      }
    ]
  }),
  mounted() {
    this.list = this.states.map(item => {
      return { value: item, label: item };
    });
  },
  methods: {
    remoteMethod(query) {
      if (query != "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          console.log(this.list);

          this.options2 = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 5);
      } else {
        this.options2 = [];
      }
    }
  }
};
</script>
<style>
.el-select{
  display: block;
  margin: 10px;
}
</style>