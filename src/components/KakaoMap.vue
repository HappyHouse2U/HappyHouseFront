<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };
      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=dfb1c7e52045cc96ee393533b2155f3f";
      document.head.appendChild(script);
      console.log(document);
    }
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 800px;
}
</style>
