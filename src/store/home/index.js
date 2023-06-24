import {reqCategoryList} from '@/api';
//home模块的小仓库
const state = {
    //state中数据默认初始值别瞎写，服务器返回对象,则写成对象，服务器返回数组，则写成数组。
    categoryList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList;
    }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
   async categoryList(context){
        let result = await reqCategoryList();
          if(result.data.code==200){
            context.commit("CATEGORYLIST",result.data)
          }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}