<template>
  <div>
    <van-nav-bar :title="title" fixed>
      <template v-if="currentEnv === 'development'" #left> <van-icon name="wap-home-o" @click="toHome" /></template
    >
      <template #right> <van-icon name="replay" @click="refresh" /></template
    ></van-nav-bar>
    
    <sdc-gap>
     
     <van-field
        v-model="sms"
        center
        clearable
        placeholder="请输入关键字"
        class="business-tabs"
      >
        <template #button>
          <van-button size="small" type="primary">搜索</van-button>
        </template>
      </van-field>

      <sdc-gap>
        <van-empty v-if="!loading && !list.length" description="暂无业务" />
        <van-list
          v-else
          class="business-list"
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="business-list-item"
            v-for="(item, index) in list"
            :key="'business' + index"
            @click="handleBusiness(item)"
          >
            <div class="business-list-item__name">项目编号:{{ item.serialNumber }}</div>
            <van-cell-group>
              <van-cell title="请假标题" :value="item.title" />
              <van-cell title="请假类型" :value="item.type" />
              <van-cell title="天数" :value="item.day" />
               <van-cell
                title="请假起止时间"
                :value="item.startTime ? item.endTime : '-'"
              />
               <van-cell title="状态" :value="item.state" />
              <van-cell title="流程名称" :value="item.processName" />
              <van-cell title="当前活动" :value="item.current">
                <template #default>
                    <van-tag type="warning">{{item.current}}</van-tag>
                  </template>
              </van-cell>
            </van-cell-group>
           
          </div>
        </van-list>

        <back-top :visible="backTopVisible" />
      </sdc-gap>
    </sdc-gap>
    <business-flow-popup
      v-model:visible="flowPopup.visible"
      v-model:data="flowPopup.data"
      @close="closeFlowPopup"
    />
  </div>
</template>

<script>
import { watch, onMounted, ref, reactive, onUnmounted, computed } from "vue";
import { scrollTo } from "@/utils/scroll-to.js";
import common from "@/common";
// import BackTop from "@/components/common/BackTop";
// import BusinessFlowPopup from "./flow-popup";

export default {
  name: "LeaveList",

  components: {
    // BackTop,
    // BusinessFlowPopup,
  },

  setup() {
    const { goBack, route, router, store } = common();

    const currentEnv = computed(() => store.getters.currentEnv);

    const title = ref(route.meta.title);

    // 初始化标题
    const initTitle = (paramsClass) => {
      switch (paramsClass) {
        case "pre-survey":
          title.value = "请假管理";
          break;
        case "actual-survey":
          title.value = "党组会议系统";
          break;
        default:
          break;
      }
    };

    watch(
      () => route,
      ({ params }) => {
        console.log(params);
        initTitle(params.class);
      }
    );

    const loading = ref(false);

    const finished = ref(false);

    const demoList = [
      {
        id: 1,
        title: "政策法规科",
        type: "事假",
        day: "1",
        startTime: "2021-03-12",
        endTime: "2021-03-12",
        state: "待办",
        processName: "二层处级、机关科室、分局、直隶事业单位主要负责人请假",
        current:"休假"
      },
     
    ];

    const list = ref([...demoList]);

    // 加载列表
    const onLoad = () => {
      loading.value = true;
      finished.value = false;
      /* DEMO-strat */
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          list.value.push(demoList[0]);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 20) {
          finished.value = true;
        }
      }, 500);
      /* DEMO-end */
    };

    const queryType = route.query.type;

    // 解决onMounted无法修改activeTab的值问题
    const activeTab = ref(
      queryType && queryType === "done" ? "done" : "progress"
    );
    let tabs = ref([
      {
        name: "progress",
        title: "在办业务",
      },
      {
        name: "done",
        title: "已办业务",
      },
    ]);

    // 切换tab
    const onClickTab = name => {
      console.log(name);

      list.value = [];
      onLoad();
    };

    // 处理业务
    // const handleBusiness = ({ id }) => {
      
    //   router.push({
    //     name: "LeaveDetail",
    //     query: { type: activeTab.value, id },
    //   });
    // };

      const handleBusiness = () => {
      
      router.push({
        name: "LeaveDetail",
        // query: { id },
      });
    };

    // 刷新
    const refresh = () => {
      console.log("刷新列表");
      scrollTo(0);
      // if(activeTab.value === 'progress'){

      // }
      // else{

      // }
    };

    const flowPopup = reactive({
      visible: false,
      data: {},
    });

    // 查看流程
    const handleViewFlow = (data) => {
      flowPopup.visible = true;
      flowPopup.data = data;
    };

    // 关闭查看流程弹窗
    const closeFlowPopup = () => {
      flowPopup.visible = false;
    };

    // 返回首页
    const toHome = () => {
      router.push({ name: "Home" });
    }


    const backTopVisible = ref(false);

    const scrollHandler = () => {
      const { documentElement, body } = document;
      let scrollTop = documentElement.scrollTop || body.scrollTop;
      backTopVisible.value = scrollTop > 94 ? true : false;
    };

    onMounted(() => {
      window.addEventListener("scroll", scrollHandler);

      const paramsClass = route.params.class;

      initTitle(paramsClass);

      list.value.forEach((e) => {
        e.businessType = title.value;
        e.className = paramsClass;
      });
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", scrollHandler);
    });

    return {
      currentEnv,
      title,
      goBack,
      activeTab,
      tabs,
      onClickTab,
      loading,
      finished,
      list,
      onLoad,
      handleBusiness,
      refresh,
      // backTopVisible,
      flowPopup,
      handleViewFlow,
      closeFlowPopup,
      toHome
    };
  },
};
</script>

<style lang="less" scoped>
.business {
  &-tabs {
    position: fixed;
    width: 100%;
    z-index: 99;
  }
  &-list {
    padding: 10px 15px;
    &-item {
      background: #fff;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 10px;

      &__name {
        font-weight: bold;
        font-size: 16px;
        color: @primary-color;
        padding: 10px 16px;
      }
    }
  }
}

.btn {
  &-item {
    width: 50%;
    color: #fff;
    padding: 12px 16px;
    align-items: center;
    justify-content: center;

    &.detail {
      background: @primary-color;
    }

    &.flow {
      background: #3ccaf5;
    }

    /deep/ .van-button {
      border-radius: 0;
    }
  }
}

.business-list-item__name {
  // background-color:#5f89b1;
  background-color:#5589c4;
  color:#fff;
}
.business-tabs {
  padding-top:6px;
  padding-bottom:6px;
}
.business-list .van-cell{
   padding-top:5px;
   padding-bottom:5px;
}

/deep/ .van-hairline--top-bottom::after, /deep/ .van-hairline-unset--top-bottom::after {
  border-width:0;
}
</style>
