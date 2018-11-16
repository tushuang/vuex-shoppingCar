import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 专门处理购物车逻辑的模块
import car from './car'

const store = new Vuex.Store({
    modules: {
        car 
    }
}) 

export default store