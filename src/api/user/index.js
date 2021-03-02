import request from "@/utils/request";
import qs from "qs";

const VUE_APP_SERVER_API = process.env.VUE_APP_SERVER_API;
const VUE_APP_BDC_API = process.env.VUE_APP_BDC_API;
const VUE_APP_TEST_AUTH_API = process.env.VUE_APP_TEST_AUTH_API;

export default {
    /**
     * 自然资源app登录
     *
     * @param {*} data { 用户名：username，密码：password, 标记： grant_type // token专用 }
     */
    Login: (data) => {
        return request({
            url: process.env.VUE_APP_ENV === 'development' || process.env.VUE_APP_ENV === 'test' ? `${VUE_APP_TEST_AUTH_API}/token` : `${VUE_APP_SERVER_API}/mso/ExternalLogin`,
            method: "post",
            // json转formData格式
            data: qs.stringify(data),
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
        });
    },
    /**
     * 获取当前用户信息
     */
    GetUserInfo: () => {
        return request({
            url: `${VUE_APP_SERVER_API}/mso/GetMethodSH`,
            method: "post",
            data: {
                MethodName: "GetUserInfo",
                ParamValue: "",
            },
        });
    },

};