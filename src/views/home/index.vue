<template>
  <div>
    <van-nav-bar :title="$route.meta.title" fixed />
    <sdc-gap>
      <div class="home-contaienr">
        <van-grid :column-num="2">
          <van-grid-item
            v-for="(item, index) in list"
            :key="'list' + index"
            icon="photo-o"
            v-model:text="item.name"
            @click="toPage(item)"
          >
            <template #icon>
              <i class="grid-icon" :class="item.icon"></i>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </sdc-gap>
  </div>
</template>

<script>
import { reactive } from "vue";
import common from "@/common";

export default {
  name: "Home",
  
  setup() {
    const { router } = common();

    const list = reactive([
      {
        name: "请假管理",
        icon: "iconfont icon-ditu",
        className: "LeaveList"
      },
      {
        name: "党组会议系统",
        icon: "iconfont icon-shenhexiangmu",
        className: "BulidList"
      }
    ]);

    const toPage = ({ className }) => {
      router.push({ name: className  })
    }

    return {
      list,
      toPage
    };
  }
};
</script>

<style lang="less" scoped>
.grid-icon {
  font-size: 26px;
  color: @primary-color;
}

/deep/ .van-badge__wrapper {
  margin-bottom: 10px;
}
.business-tabs {}
</style>
