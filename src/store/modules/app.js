
const state = {
  // 当前环境
  currentEnv: process.env.VUE_APP_ENV
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
