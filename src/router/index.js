import Layout from "@/components/layout";

import { createRouter, createWebHashHistory } from "vue-router";

const constantRoutes = [{
    path: "/404",
    component: () =>
        import("@/views/error-page/404"),
    hidden: true,
},
{
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [{
        path: "home",
        name: "Home",
        component: () =>
            import("@/views/home/index"),
        meta: {
            title: "待办事项",
            showTabbar: true
        }
    },
    {
        path: "business/bulid",
        name: "BulidList",
        component: () =>
            import("@/views/business/bulid"),
        meta: {
            title: "党组会议管理"
        }
    },
    {
        path: "business/leave",
        name: "LeaveList",
        component: () =>
            import("@/views/business/leave"),
        meta: {
            title: "请假管理"
        }
    },
    {
        path: "business/leave/detail",
        name: "LeaveDetail",
        component: () =>
            import("@/views/business/leave/detail"),
        meta: {
            title: "请假-业务详情"
        }
    }, {
        path: "business/bulid/detail",
        name: "BulidDetail",
        component: () =>
            import("@/views/business/bulid/detail"),
        meta: {
            title: "党建-业务详情"
        }
    },
    ]
},
{ path: "/:catchAll(.*)", redirect: "/404", hidden: true }
];

/**
 * 初始化路由
 */
export const initRouter = () =>
    createRouter({
        history: createWebHashHistory(),
        scrollBehavior: () => ({ y: 0 }),
        routes: [...constantRoutes]
    });

/**
 * 重置路由
 * Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
 */
export function resetRouter() {
    router = initRouter();
}

let router = initRouter();

export default router;