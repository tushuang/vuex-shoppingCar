// 模拟后端， localStorage模拟数据库
import _ from 'lodash'

const api ={
    addGoods({id, name, price, num = 1, imgUrl}){
        return new Promise((resolve)=>{
            setTimeout( async ()=>{
                // 先判断后端有没有存这个数据 即查看有没有这个id
                let { goods } = await this.getAll()
                let isHas = _.find(goods,(item)=>{
                    return item.id == id
                })
                if ( isHas ) {
                    isHas.num += num
                } else {
                    // 如果是新商品
                    goods.push({
                        id, name, price, imgUrl, num
                    })
                } 
                
                this.changeCarGoods(goods)
                resolve({status: 200, goods}) // 返回所有数据
            },0)   
        })
    },
    getAll(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({
                    status: 200,
                    goods: localStorage.goods ? JSON.parse(localStorage.goods) : []
                })
            },0)
           
        })
    },
    changeCarGoods(goods){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                localStorage.goods = JSON.stringify(goods)
            },0)
        })
    },
    controlGoodNumber(id,type){
        return new Promise((resolve)=>{
            setTimeout( async ()=>{
                let { goods } = await this.getAll()
                let isHas = _.find(goods,(item)=>{
                    return item.id === id
                })
                if(type=='+'){
                    isHas.num++
                }else{
                    if(isHas.num <= 1){
                        _.remove(goods, item => item.id === id)
                    }else{
                        isHas.num--
                    }
                }
                this.changeCarGoods(goods)
                resolve(goods)
            },0)
        })
    }
}

export default api