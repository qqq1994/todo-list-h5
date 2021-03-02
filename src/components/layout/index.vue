<template>
  <div class="layout">
    <app-main />
    <!-- <app-tabbar v-if="$route.meta.showTabbar" /> -->
  </div>
</template>

<script>
import AppMain from "./AppMain";
// import AppTabbar from "./AppTabbar";

export default {
  name: "Layout",

  components: {
    AppMain,
    // AppTabbar
  }
};
</script>

<style lang="less" scoped>
.layout {
  position: relative;
  height: 100%;
  font-size: 14px;
}
</style>
