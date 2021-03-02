<template>
  <div class="page404-container">
    <van-nav-bar title="该页面不存在" left-arrow @click-left="goBack" fixed />
    <sdc-gap style="text-align: center">
       <van-empty image="error" description="暂无内容" />
       <van-button icon="wap-home-o" type="primary" size="small" @click="toHome">返回首页</van-button>
    </sdc-gap>   
  </div>
</template>

<script>
import common from "@/common";

export default {
  name: 'Page404',

  setup() {
    const { goBack, router } = common();

    const toHome = () => {
      router.push({ name: "Home" });
    }
    
    return {
      goBack,
      toHome
    }
  }
}
</script>

<style lang="less" scoped>
.page404-container{
  background: #fff;
  min-height: 100vh;
}
</style>
