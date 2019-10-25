<template>
  <div>
    <el-container id="container">
      <keep-alive>
        <div class="routeLink">
          <div v-for="(item, index) in menu" :key="index">
            <router-link
              :to="item.route"
              @mouseenter.native="handleEnter(index)"
              @mouseleave.native="handleLeave"
            >{{ currentIndex === index ? item.en : item.cn }}</router-link>
          </div>
        </div>
      </keep-alive>
      <transition name="slide-fade" mode="out-in">
        <router-view class="routerView"></router-view>
      </transition>
    </el-container>
  </div>
</template>

<script>
const menu = [
  {
    cn: "过渡动画",
    en: "transitionAnimation",
    route: "/transitionAnimation"
  },
  {
    cn: "布局",
    en: "layout",
    route: "/layout"
  },
  {
    cn: "布局容器",
    en: "container",
    route: "/container"
  },
  {
    cn: "图标",
    en: "icon",
    route: "/icon"
  }
];
export default {
  data: () => ({
    currentIndex: -1,
    show: true,
    menu
  }),
  methods: {
    handleEnter(index) {
      this.currentIndex = index;
    },
    handleLeave() {
      this.currentIndex = -1;
    }
  }
};
</script>
<style lang="less" scoped>
#container {
  padding-top: 50px;
}
.show {
  display: block;
}

.routeLink {
  // position: fixed;
  display: block;
  text-align: center;
  background: lightblue;
  min-width: 150px;
  min-height: 600px;
  margin: 0 50px 0 80px;
  padding: 20px 10px;
  a {
    color: #333;
    user-select: none;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    display: block;
    height: 20px;
    padding: 10px 0;
    font-family: "Times New Roman", Times, serif;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.6);
    &:hover {
      color: #fff;
      font-size: 14px;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.6);
    }
  }
}
.routerView {
  width: 100%;
}
@media only screen and(max-width: 768px) {
  .routeLink {
    display: none;
  }
}

.slide-fade-enter-active {
  transition: all 0.2s linear;
}
.slide-fade-leave-active {
  transition: all 0.3s linear;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
</style>