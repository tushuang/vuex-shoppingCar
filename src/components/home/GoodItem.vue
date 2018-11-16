<template>
    <div v-if="info" class="app-home-good-item">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="info.goodsImg" class="image">
                <div style="padding: 14px;">
                    <span>{{info.goodsName}}</span>
                    <div class="bottom clearfix">
                    <time class="time">￥{{info.xiuPrice}}</time>
                </div>
                <div style="padding: 14px;">
                     <el-input-number v-model="num" size="mini" ></el-input-number>
                     <el-button @click="addCar" style="margin-left: 15px;" type="danger" size = "mini">加入购物车</el-button>
                </div>
                </div>
            </el-card>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['info'], 
    data(){
        return{
            num:1
        }
    },
    methods:{
        // 点击按钮发送ajax请求后台存入一条购买数据 
        // 存入成功后action提交一次mutation来改变状态
        // 由于没有后台 用localStorage来模拟

        ...mapActions({
            add:'car/addGood'
        }),
        addCar(){
            let { goodsId:id, goodsImg: imgUrl, goodsName: name, xiuPrice: price }  = this.info
            this.add({
                id, imgUrl, name, price, num: this.num
            })
            console.log(this.$store)
        }
    }
}
</script>

<style lang="scss">
 .app-home-good-item {
     text-align: left;
     .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
 }
</style>

