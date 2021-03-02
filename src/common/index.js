import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default function() {
  const route = useRoute();
  const router = useRouter();
  const store = useStore();

  function goBack() {
    router.go(-1);
  }

  function toPage(path) {
    router.push({ path });
  }

  return {
    route,
    router,
    store,
    goBack,
    toPage
  };
}
