<template>
    <div class="main-container">
        <div class="panel">
            <el-collapse>
                <el-collapse-item title="环境部件" name="1">
                    <!--          <div>一个图标 图标下面加一行字，鼠标放在上面显示</div>-->
                    <el-image
                            id="environment"
                            style="width: 30px; height: 30px;"
                            :src="require('@/assets/logo/environment.svg')"
                            @click="move($event)"
                    ></el-image>
                    <div v-show="moveShow" ref="push" style="position: absolute;">
                        <img src="../../assets/logo/environment.svg" id="img" style="width: 30px; height: 30px">
                    </div>
                </el-collapse-item>
                <el-collapse-item title="容器部件" name="2">
                    <!--          <div>路灯，建筑，正方体，长方体，圆柱，圆锥，球</div>-->
                    <el-image
                            style="width: 30px; height: 30px"
                            :src="require('@/assets/logo/building.svg')"
                    ></el-image>
                    <el-image
                            style="width: 30px; height: 30px"
                            :src="require('@/assets/logo/pole.svg')"
                    ></el-image>
                </el-collapse-item>
                <el-collapse-item title="传感器部件" name="3">
                    <el-image
                            style="width: 30px; height: 30px"
                            :src="require('@/assets/logo/wendu-sensor.svg')"
                    ></el-image>
                    <el-image
                            style="width: 30px; height: 30px"
                            :src="require('@/assets/logo/shidu-sensor.svg')"
                    ></el-image>
                    <el-image
                            style="width: 30px; height: 30px"
                            :src="require('@/assets/logo/juli-sensor.svg')"
                    ></el-image>
                    <el-image
                            style="width: 30px; height: 30px"
                            :src="require('@/assets/logo/liangdu-sensor.svg')"
                    ></el-image>
                    <el-image
                            style="width: 30px; height: 30px"
                            :src="require('@/assets/logo/hongwai-sensor.svg')"
                    ></el-image>
                    <el-image
                            style="width: 30px; height: 30px"
                            :src="require('@/assets/logo/yali-sensor.svg')"
                    ></el-image>
                    <!--          <div>温度，光照，速度，湿度，红外，距离，烟雾，天气（？），电流电压</div>-->
                </el-collapse-item>
                <el-collapse-item title="其他部件" name="4">
                    <!--          <div>红绿灯，人，车辆，道路，灯泡</div>-->
                    <el-image
                            style="width: 30px; height: 30px"
                            :src="require('@/assets/logo/person.svg')"
                    ></el-image>
                    <el-image
                            style="width: 30px; height: 30px"
                            :src="require('@/assets/logo/car.svg')"
                    ></el-image>
                    <el-image
                            style="width: 30px; height: 30px"
                            :src="require('@/assets/logo/road.svg')"
                    ></el-image>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div style="float: left; margin-left: 20px">
            <canvas
                    id="canvas"
                    width="990"
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
                mapWidth: "990",
                mapHeight: "600",
                gridWidth: "30",
                gridHeight: "30",
                canvas: "",
                ctx: {},
                moveShow:false,
                preBuild:false
            };
        },
        mounted() {
            this.initGrid();
            document.onmousedown=(e)=>{
                console.log(e.clientX + ',' + e.clientY);
                if(this.preBuild == true) {
                    console.log('全局松开鼠标')
                    // this.$global.mouseDownStatus=0;
                    // Bus.$emit('mouseUp',e);
                    this.mouseUp(e);
                }
            };
        },
        methods: {
            move(e){
                // document.onmousedown=(e)=>{
                //     this.mouseDown(e);
                // };
                console.log(e);
                this.mouseDown(e);
            },
            mouseDown(e){
                console.log('mouseDown');
                let odiv=e.target;
                //鼠标相对元素的位置
                let disX=e.clientX-odiv.offsetLeft;
                let disY=e.clientY-odiv.offsetTop;
                this.disX=disX;
                this.disY=disY;
                let left=e.clientX-disX;
                let top=e.clientY-disY;
                //移动当前元素
                // this.$refs.push.style.left=left+'px';
                // this.$refs.push.style.top=top+'px';
                console.log(odiv.offsetWidth,odiv.offsetHeight);
                this.$refs.push.style.width=odiv.offsetWidth+'px';
                this.$refs.push.style.height=odiv.offsetHeight+'px';
                this.moveShow=true;
                this.preBuild=true;
                document.onmousemove=(e)=>{//鼠标按下并移动的事件
                    console.log('开始移动');
                    //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                    // left=e.clientX;
                    // top=e.clientY;
                    this.$refs.push.style.left = e.clientX + 'px';
                    this.$refs.push.style.top = e.clientY + 'px';
                };
            },
            mouseUp(e){
                document.onmousemove=null;
                this.moveShow=false;
                var img = document.createElement("img");
                img.src = "../../assets/temp.png";
                this.ctx.drawImage(img,e.clientX-440,e.clientY-70,this.gridWidth,this.gridHeight);
                // var img = document.getElementById("img");
                // this.ctx.drawImage(img,10,10);
                // var img = new Image();
                // img.src = "../../assets/temp.png";
                // if(img.complete){
                //     // this.ctx.drawImage(img,e.clientX-440,e.clientY-70,this.gridWidth,this.gridHeight);
                //     this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
                //     this.ctx.drawImage(img,0,0);
                //
                // } else {
                //     img.onload=function () {
                //         this.ctx.drawImage(img,e.clientX-440,e.clientY-70,this.gridWidth,this.gridHeight);
                //         alert("画图");
                //     };
                //     img.onerror=function () {
                //         console.log(img);
                //         alert("加载失败");
                //     }
                // }
                this.preBuild=false;
            },
            initGrid() {
                this.canvas = document.getElementById("canvas");
                this.ctx = this.canvas.getContext("2d");
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
            }
        }
    };
</script>

<style scoped>
    .main-container {
        width: 100%;
        height: 100%
    }

    .panel {
        width: 200px;
        border: 1px solid #ccc;
        float: left;
        padding-left: 5px;
        padding-right: 5px;
    }
</style>
