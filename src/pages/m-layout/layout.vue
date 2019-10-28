<template>
  <div>
    <!-- 常规多列布局   通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。 -->
    <h3>常规多列布局</h3>
    <div>
      <!-- ------------------一列----------------------------------- -->
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>
      <!-- -------------------两列------------------------------ -->
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
      <!-- ---------------------三列----------------------------- -->
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <!-- -----------------------四列---------------------------- -->
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
      <!-- ---------------------六列------------------------------- -->
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 多列间的分栏间隔   Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。-->
    <h3>多列间的分栏间隔</h3>
    <div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 混合布局   通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。-->
    <h3>混合布局</h3>
    <div>
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <!-- ------------------- -->
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <!-- ------------------- -->
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 分栏偏移   支持偏移指定的栏数-->
    <h3>分栏偏移</h3>
    <div>
      <el-row :gutter="20">
        <el-col :span="11">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="11" :offset="2">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <!-- ----------------------- -->
      <el-row :gutter="20">
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <!-- ----------------------- -->
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 对齐方式   通过 flex 布局来对分栏进行灵活的对齐-------------- -->
    <h3>对齐方式</h3>
    <div>
      <!--  -->
      <el-row type="flex" class="row-bg">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <!--  -->
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <!--  -->
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 响应式布局   预设了五个响应尺寸：xs、sm、md、lg 和 xl。 -->
    <h3>响应式布局</h3>
    <div>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  /* 
  
    Row Attributes
    参数	  说明	                                类型	可选值	默认值
    gutter	栅格间隔	                            number	—	0
    type	  布局模式，可选 flex，现代浏览器下有效	  string	—	—
    justify	flex 布局下的水平排列方式	             string	start/end/center/space-around/space-between	start
    align	  flex 布局下的垂直排列方式	             string	top/middle/bottom	top
    tag	    自定义元素标签	                      string	*	div


    Col Attributes
    参数	  说明	                                类型	可选值	默认值
    span	  栅格占据的列数	                       number	—	24
    offset	栅格左侧的间隔格数	                    number	—	0
    push	  栅格向右移动格数	                      number	—	0
    pull	  栅格向左移动格数	                      number	—	0
    xs	    <768px 响应式栅格数或者栅格属性对象	      number/object (例如： {span: 4, offset: 4})	—	—
    sm	    ≥768px 响应式栅格数或者栅格属性对象	      number/object (例如： {span: 4, offset: 4})	—	—
    md	    ≥992px 响应式栅格数或者栅格属性对象	      number/object (例如： {span: 4, offset: 4})	—	—
    lg	    ≥1200px 响应式栅格数或者栅格属性对象	    number/object (例如： {span: 4, offset: 4})	—	—
    xl	    ≥1920px 响应式栅格数或者栅格属性对象	    number/object (例如： {span: 4, offset: 4})	—	—
    tag	    自定义元素标签	                         string	*	div
  */
};
</script>
<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>