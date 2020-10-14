<template>
  <div class="app-wrapper">
    <el-container class="container">
      <el-header class="header">
        <div class="title">物联网仿真平台</div>
      </el-header>
      <el-container>
        <el-aside style="width:200px;height:100%;">
          <el-menu
            default-active="2"
            style="height:100%"
            @open="handleOpen"
            @close="handleClose"
            background-color="#304156"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="0">
                <template slot="title">
                  <i class="el-icon-view"></i>
                  <span>首页</span>
                </template>
              </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>用户管理</span>
              </template>
              <el-submenu index="1-1">
                <template slot="title">选项1</template>
                <el-menu-item index="1-1-1">选项1</el-menu-item>
                <el-menu-item index="1-1-2">选项2</el-menu-item>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">选项2</template>
                <el-menu-item index="1-2-1">选项1</el-menu-item>
              </el-submenu>
              <el-submenu index="1-3">
                <template slot="title">选项3</template>
                <el-menu-item index="1-3-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">仿真</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">系统设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="el-main">
          <simulation></simulation>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Simulation from './simulation/Simulation.vue';

export default {
  name: "Home",
  components:{
    Simulation
  },
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style scoped>

.app-wrapper{
  position: relative;
  height: 100%;
  width: 100%;
}
.app-wrapper .container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
.header {
  background-color:#3c8dbc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.header .title {
  font-size: 20px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: white;
}
.el-main{
  padding-left:10px;
  padding-top:10px;
  padding-bottom: 0px;
  width: 100%;
  height:100%;
}
</style>
