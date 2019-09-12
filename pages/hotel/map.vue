<template>
  <div id="container"></div>
</template>
<script>
export default {
  mounted() {
    window.onLoad = function() {
      var map = new AMap.Map("container",{
          zoom:12,  //级别
      });
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=755b4904fce5eb0685ad15e0c3b37d9f&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>
<style scoped>
    #container{
        width: 100%;
        height: 700px;
    }
</style>