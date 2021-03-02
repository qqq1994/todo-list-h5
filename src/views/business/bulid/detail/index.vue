<template>
  <div style="width:100%;height:100%;display:flex;flex-direction: column;">
    <van-nav-bar :title="title" left-arrow @click-left="goBack">
      <template #right> <van-icon name="replay" @click="refresh" /></template
    ></van-nav-bar>
    <div class="main">
      <van-collapse v-model="activeNames" >
        <van-collapse-item name="1" class="base-info">
         <template #title>
          <div class="type-name">基本信息</div>
        </template>
           <van-cell-group>
            <van-cell title="议题名称" :value="demoList.title" />
            <van-cell title="状态" :value="demoList.state" />
            <van-cell title="流程名称" :value="demoList.day" />
              <van-cell
              title="活动起止时间"
              :value="demoList.startTime ? demoList.endTime : '-'"
            />
              <van-cell title="当前用户" :value="demoList.currentUser" />
            <van-cell title="当前活动" :value="demoList.current" />
            
          </van-cell-group>        
        </van-collapse-item>
        <van-collapse-item name="2">
           <template #title>
            <div class="type-name">附件</div>
          </template>
          <div class="attachment" v-for="(item, index) in attachmentList"
            @click="previewPdf(item)"  :key="'pdf' + index">
            <div class="attachment-item">{{item.name}}</div>
          </div>
        </van-collapse-item>
        <van-collapse-item title="科室（部门）负责人审核意见" name="3">
         <template #title>
            <div class="type-name">科室（部门）负责人审核意见</div>
          </template>
        拟同意，呈批
        </van-collapse-item>
        <van-collapse-item name="4" class="opinion">
           <template #title>
            <div class="type-name">局领导审批意见</div>
          </template>
          <van-field
            v-model="message"
            rows="2"
            autosize
            type="textarea"
            placeholder="请输入审批意见"
          />
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="footer">
      <div class="footer-l">
          <van-button type="default" size="small" icon="arrow-left">返回列表</van-button>
      </div>
      <div class="footer-r">
        <van-button type="default" size="small" icon="cross">退回</van-button>
        <van-button type="default" size="small" icon="share" class="submit">保存并提交</van-button>
      </div>
      
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import common from "@/common";
import { Toast } from "vant";
import { setLocalS } from '@/utils'
export default {
  name: "BulidDetail",

  components: {

  },

  setup() {
    const { route, router } = common();
    const activeNames = ref(['1']);
    // 刷新
    const refresh = () => {
      console.log("刷新列表");
    };
    const attachmentList = [
      {src:"http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",name:"我是附件1"},
      {src:"pdf.pdf",name:"我是附件2"}
    ];

    //附件预览
    const previewPdf=(item)=>{
      window.location.href="/pdfjs/web/viewer.html?pdfUrl=" + item.src;
    };


    const showSubmitDialog = ref(false);

    // 点击提交
    const onClickSubmit = () => {
      showSubmitDialog.value = true;
      submitReason.value = "";
    };

    const submitReason = ref("");

    // 关闭提交弹窗
    const closeSubmit = () => {
      showSubmitDialog.value = false;
      submitReason.value = "";
    };

    // 确认提交
    const confirmBack = () => {
      console.log("提交核查");
      Toast("提交成功");

      const paramsClass = route.params.class;
      router.push({
        name: "BusinessList",
        params: { class: paramsClass },
        query: { type: "done" },
      });
    };

    const title = ref("业务详情");

    const showTabbar = ref(false);
    const demoList = 
      {
        id: 1,
        title: "我是议题名称",
        type: "事假",
        day: "1",
        startTime: "2021-03-12",
        endTime: "2021-03-12",
        state: "待办",
        processName: "二层处级、机关科室、分局、直隶事业单位主要负责人请假",
        current:"休假",
        serialNumber:"45215454555",
        currentUser:"青运如"
      };

    const goBack = () => {
      router.push({
        name: "BulidList",
      });
    };
    return {
      goBack,
      refresh,
      title,
      showTabbar,
      onClickSubmit,
      showSubmitDialog,
      closeSubmit,
      submitReason,
      confirmBack,
      demoList,
      activeNames,
      attachmentList,
      previewPdf,
      setLocalS
    };
  },
};
</script>

<style lang="less" scoped>
.main{
  flex:1;
  overflow-y:auto;
}
.footer {
  display:flex;
  justify-content: space-between;
  padding: 10px 12px;
  background-color:#e0e0e0;
}
.van-field{
  border:0.02667rem solid #ebedf0;
  border-radius:4px;
}
// .border {
//   border: 1px solid #999
// }

// @media screen and (-webkit-min-device-pixel-ratio: 2) {
//   .van-field {
//     border: 0.5px solid #ebedf0
//   }
// }

// @media screen and (-webkit-min-device-pixel-ratio: 3) {
//   .van-field {
//     border: 0.333333px solid #ebedf0
//   }
// }
/deep/ .base-info .van-collapse-item__wrapper .van-collapse-item__content {
  padding-left:0;
  padding-right:0;
}
.type-name {
  color:#66b2ec;
}
.attachment-item {
  color:@primary-color;
  text-decoration: underline;
  padding-bottom:4px;
}
.attachment-item:last-child {
  padding-bottom:0;
}
</style>
