import {UPDATE_CAR_GOODS} from './mutation-types'
import api from '@/utils/api'


const actions = { //先发送异步请求存数据 再提交commit state里存的是一个和后台同步的数据
    async addGood (context,payLoad) {
        console.log(payLoad,111)
        let allGoods = await api.addGoods(payLoad)
        context.commit({
            type:UPDATE_CAR_GOODS,
            goods:allGoods.goods
        })
    },
    async initialCarGoods (context) { // 初始化数据
        let result = await api.getAll()
        if ( result.status === 200 ) {
            // 提交 mutations
            context.commit({
                type: UPDATE_CAR_GOODS,
                goods: result.goods
            })
        }
    },
    async controlGoodNumber(context,payLoad){  // id +-
        let goods = await api.controlGoodNumber(payLoad.id,payLoad.control_type) // 得到了所有的数据再提交一次mutation
        context.commit({
            type:UPDATE_CAR_GOODS,
            goods:goods
        })
    }
}

export default actions