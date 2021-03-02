<template>
  <!-- <div class="app-main" :style="$route.meta.showTabbar? style : {}"> -->
    <div class="app-main">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AppMain',
  setup() {
    const style = ref({ paddingBottom: '50px' });
    return {
      style
    }
  }
}
</script>

<style lang="less" scoped>
.app-main {
  height: 100%;
  // padding-top: 46px;
}
</style>
