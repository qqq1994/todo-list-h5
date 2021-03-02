<template>
  <van-tabbar v-model="active" fixed>
    <van-tabbar-item
      v-for="(tab, index) in tabbar"
      :key="index"
      :to="tab.to"
      :icon="tab.icon"
      >{{ tab.name }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
import { ref, watch, reactive } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "AppTabbar",
  setup() {
    const active = ref(0);

    const tabbar = reactive([
      {
        to: "/home",
        icon: "wap-home-o",
        name: "首页"
      },
      {
        to: '/user',
        icon: 'user-o',
        name: '我的'
      }
    ]);

    const route = useRoute();

    const changeActive = path => {
      active.value = tabbar.findIndex(
        tab => tab.to !== "" && path.includes(tab.to)
      );
    };

    watch(
      () => route,
      ({ path }) => {
        changeActive(path);
      }
    );
    return {
      active,
      tabbar
    };
  }
};
</script>
