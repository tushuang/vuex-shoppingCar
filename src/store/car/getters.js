// 需要从 store 中的 state 中派生出一些状态，例如对列表进行求和计数

import _ from 'lodash' 

const getters = {
    allInfo (state){
        let allNumber = 0
        let allPrice = 0
        if ( state.goods.length ) {
            state.goods.forEach((item)=>{
                allNumber += item.num
                allPrice += ~~item.price
            })
        }
        return {allNumber,allPrice}
    }
}

export default getters