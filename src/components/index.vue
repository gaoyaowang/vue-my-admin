<template>
  <div class="wrapper">
    <div id="head">
      <div class="logo"></div>
      <div>
        <div class="head-right">
          <el-tooltip class="item" effect="dark" :content="isFullscreen ? `取消全屏`:`全屏`" placement="bottom">
            <i ref="fullScreen" class="el-icon-rank" @click="buttoncli"></i>
          </el-tooltip>
          <el-avatar>
            <img src="../assets/images/head_portrait.jpg" />
          </el-avatar>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  import screenfull from 'screenfull'
  export default {
    data() {
      return {
        isFullscreen: false
      }
    },

    methods: {
      buttoncli() {
        screenfull.toggle();
        this.isFullscreen = !this.isFullscreen;
        this.$refs.fullScreen.blur();
      }

    }
  }

</script>

<style scoped lang="less">
</style>
