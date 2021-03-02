<template>
  <a class="back-top-btn" :class="{ visible: visible }" @click="scrollTo(0)">
    <van-icon name="arrow-up" size="20" />
  </a>
</template>

<script>
import { scrollTo } from "@/utils/scroll-to.js";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    return {
      scrollTo
    };
  }
};
</script>

<style lang="less" scoped>
.back-top-btn {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(0);
  background-color: @primary-color;
  color: #fff;
  border-radius: 4px;
  width: 46px;
  height: 46px;
  right: 10px;
  bottom: -50px;
  transition: all 0.2s;
  z-index: 99;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);

  &.visible{
    bottom: 10px;
  }
}
</style>
