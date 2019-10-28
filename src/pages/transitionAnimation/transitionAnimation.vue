<template>
  <div>
    <div id="fade">
      <h3>fade 淡入淡出</h3>
      <el-button @click="show = !show">点击</el-button>

      <div style="display:flex; margin-top:20px; height:100px;">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">.el-fade-in-linear</div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="show" class="transition-box">.el-fade-in</div>
        </transition>
      </div>
      <hr />
    </div>

    <!-- ---------------------------------------- -->
    <div id="zoom">
      <h3>zoom 缩放</h3>
      <el-button @click="show2 = !show2">点击</el-button>

      <div style="display: flex; margin-top: 20px; height: 100px;">
        <transition name="el-zoom-in-enter">
          <div v-show="show2" class="transition-box">.el-zoom-in-enter</div>
        </transition>
        <transition name="el-zoom-in-top">
          <div v-show="show2" class="transition-box">.el-zoom-in-enter</div>
        </transition>
        <transition name="el-zoom-in-bottom">
          <div v-show="show2" class="transition-box">.el-zoom-in-enter</div>
        </transition>
      </div>

      <hr />
    </div>

    <!-- ---------------------------------------- -->
    <div id="collapse">
      <h3>collapse 展开折叠</h3>
      <el-button @click="show3=!show3">点击</el-button>

      <div style="margin-top: 20px; height: 100px;">
        <el-collapse-transition>
          <div v-show="show3" style="display: flex; ">
            <div class="transition-box">el-collapse-transition</div>
          </div>
        </el-collapse-transition>
      </div>

      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: true,
    show2: true,
    show3: true
  })
};
</script>
<style scoped>
.transition-box {
  width: 200px;
  height: 100px;
  background-color: #409eff;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>