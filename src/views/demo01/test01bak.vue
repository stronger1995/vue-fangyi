<template>
  <div class="home">
  <!--创建地图容器-->
    <div id="container" class="allmap"></div>
  </div>
</template>
 
<script>
import { BMPGL, BMapGLLib } from "@/bmpgl.js"
export default {
  name: "home",
  data() {
    return {
      ak: "ZNzXLY5wzIaeGuRv7oPHnRf2Ayuk04TX", // 百度的地图密钥
      myMap: null
    };
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      // 传入密钥获取地图回调。
      BMPGL(this.ak).then((BMapGL) => {
        // GL版命名空间为BMapGL
        // 按住鼠标右键，修改倾斜角和角度
        let bmap = new BMapGL.Map("container");    // 创建Map实例
        bmap.centerAndZoom(new BMapGL.Point(116.297611, 40.047363), 17);  // 初始化地图,设置中心点坐标和地图级别
        bmap.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放


        var path = [{
            'lng': 116.297611,
            'lat': 40.047363
        }, {
            'lng': 116.302839,
            'lat': 40.048219
        }, {
            'lng': 116.308301,
            'lat': 40.050566
        }, {
            'lng': 116.305732,
            'lat': 40.054957
        }, {
            'lng': 116.304754,
            'lat': 40.057953
        }, {
            'lng': 116.306487,
            'lat': 40.058312
        }, {
            'lng': 116.307223,
            'lat': 40.056379
        }];
        var point = [];
        for (var i = 0; i < path.length; i++) {
            point.push(new BMapGL.Point(path[i].lng, path[i].lat));
        }
        var pl = new BMapGL.Polyline(point);
        setTimeout(function () {
            trackAni = new BMapGLLib.TrackAnimation(bmap, pl, {
            overallView: true,
            tilt: 30,
            duration: 20000,
            delay: 300
        });
        trackAni.start();
        },500);
        
      })
      .catch((err)=>{
        console.log(err)
      })
    },
  }
};
</script>
<style lang="scss" scoped>
.allmap {
  width: 100%;
  height: 90vh;
  position: relative;
  z-index: 1;
}
</style>
 