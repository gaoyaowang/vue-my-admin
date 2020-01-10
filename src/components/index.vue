<template>
  <div class="wrapper">
    <!-- 头部 -->
    <div id="head">
      <div class="logo"></div>
      <div>
        <div class="head-right">
          <el-tooltip
            class="item"
            effect="dark"
            :content="isFullscreen ? `取消全屏`:`全屏`"
            placement="bottom"
          >
            <i ref="fullScreen" class="el-icon-rank" @click="buttoncli"></i>
          </el-tooltip>
          <el-avatar>
            <img src="../assets/images/head_portrait.jpg" />
          </el-avatar>
        </div>
      </div>
    </div>
    <!-- 菜单栏 -->
    <Sidebar :menuList="menuList" />
  </div>
</template>

<script>
import screenfull from "screenfull";
import Sidebar from "./menus/SideBar/SideBar";
export default {
  components: { Sidebar },
  data() {
    return {
      isFullscreen: false,
      menuList: [
        {
          path: "/func1", //菜单项所对应的路由路径
          title: "功能1", //菜单项名称
          children: [] //是否有子菜单，若没有，则为[]
        },
        {
          path: "/func2",
          title: "功能2",
          children: []
        },
        {
          path: "/func3",
          title: "功能3",
          children: [
            {
              path: "/func4",
              title: "功能4",
              children: []
            },
            {
              path: "/func5",
              title: "功能5",
              children: [
                {
                  path: "/func6",
                  title: "功能6",
                  children: []
                }
              ]
            }
          ]
        }
      ]
    };
  },

  methods: {
    buttoncli() {
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
      this.$refs.fullScreen.blur();
    }
  }
};
</script>

<style scoped lang="less">
</style>
