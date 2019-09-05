// state 是仓库的数据
// mutations 同步修改state的数据
// actions 异步修改state的数据

// 用户管理
export const state = () => ({
    // 采用接口返回的数据结构
    userInfo: {
        token: "",
        user: {},
    },
}) 

export const mutations = {
    // 保存用户信息到state
    setUserInfo(state, data){
        state.userInfo = data;
    },
    // 清除用户数据
    clearUserInfo(state){
        state.userInfo = {}
    }
};

export const actions = {
    // 登录
    // login({commit}, data){
    //     return this.$axios({
    //         url: "/accounts/login",
    //         method: "POST",
    //         data: data
    //     }).then(res => {
    //         const data = res.data;
    //         // 保存到state
    //         commit("setUserInfo", data);
    //         return data;
    //     })
    // }
};
