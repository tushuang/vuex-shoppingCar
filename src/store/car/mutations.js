import _ from 'lodash'
import {UPDATE_CAR_GOODS} from './mutation-types'

const mutations = {
    [UPDATE_CAR_GOODS](state,payload){
        state.goods = _.cloneDeep(payload.goods) 
        console.log(state.goods,'ojbk')
    }
}

export default mutations