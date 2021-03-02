import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";

import "vant/lib/index.less";
import "./styles/index.less";
import "./assets/font/iconfont.css";

import "amfe-flexible";
import "./permission.js";

import {
    NavBar,
    Tabbar,
    TabbarItem,
    Grid,
    GridItem,
    Tab,
    Tabs,
    Cell,
    CellGroup,
    PullRefresh,
    List,
    Field,
    Icon,
    Empty,
    Popup,
    Tag,
    Col,
    Row,
    Button,
    Toast,
    Notify,
    Dialog,
    Lazyload,
    Collapse,
    CollapseItem,
} from "vant";
import Gap from "@/components/common/Gap";

Toast.setDefaultOptions({
    duration: 800,
});

Notify.setDefaultOptions({
    background: "#1989fa",
});

const app = createApp(App);
app.config.productionTip = false;

app
    .use(store)
    .use(router)
    .use(NavBar)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Grid)
    .use(GridItem)
    .use(Tab)
    .use(Tabs)
    .use(Cell)
    .use(CellGroup)
    .use(PullRefresh)
    .use(List)
    .use(Field)
    .use(Icon)
    .use(Empty)
    .use(Popup)
    .use(Tag)
    .use(Col)
    .use(Row)
    .use(Button)
    .use(Toast)
    .use(Notify)
    .use(Dialog)
    .use(Lazyload)
    .use(Collapse)
    .use(CollapseItem);

app.component(Gap.name, Gap);

app.mount("#app");