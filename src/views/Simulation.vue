<template>
  <div class="main-container">
    <div class="panel">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="环境部件" name="1">
          <div>
            <!-- <el-image
                    style="width: 50px; height: 50px"
                    :src="require('@/assets/temp.png')"
                  ></el-image> -->
            一个图标 图标下面加一行字，鼠标放在上面显示
          </div>
        </el-collapse-item>
        <el-collapse-item title="容器部件" name="2">
          <div>路灯，建筑，正方体，长方体，圆柱，圆锥，球</div>
        </el-collapse-item>
        <el-collapse-item title="传感器部件" name="3">
          <el-image
            style="width: 50px; height: 50px"
            :src="require('@/assets/temp.png')"
          ></el-image>
          <div>
            温度，光照，速度，湿度，红外，距离，烟雾，天气（？），电流电压
          </div>
        </el-collapse-item>
        <el-collapse-item title="其他部件" name="4">
          <div>红绿灯，人，车辆，道路，灯泡</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div style="float: left; margin-left: 20px">
      <canvas
        id="canvas"
        width="600"
        height="600"
        ref="canvas"
        style="border: 1px solid #ccc"
      ></canvas>
    </div>
  </div>
</template>
<script>
export default {
  name: "Simulation",
  data() {
    return {
      mapWidth: "600",
      mapHeight: "600",
      gridWidth: "20",
      gridHeight: "20",
      // canvas: "",
      ctx: {},
    };
  },
  mounted() {
    this.initGrid();
  },
  methods: {
    initGrid() {
      var canvas = this.$refs.canvas;
      this.ctx = canvas.getContext("2d");
      for (let i = 0; i < this.mapHeight / this.gridHeight; i++) {
        for (let j = 0; j < this.mapWidth / this.gridWidth; j++) {
          this.ctx.strokeStyle = "#E0E0E0";
          this.ctx.strokeRect(
            j * this.gridWidth,
            i * this.gridHeight,
            this.gridWidth,
            this.gridHeight
          );
        }
      }
      // ctx.beginPath();
      // ctx.fillStyle = "red";
      // ctx.arc(a, b, r, 0, Math.PI * 2);
      // ctx.fill();
    }
  }
};
</script>

<style scoped>
.main-container{
  width: 100%;
  height: 100%
}
.panel{
  width: 200px;
  border: 1px solid #ccc;
  float: left;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
