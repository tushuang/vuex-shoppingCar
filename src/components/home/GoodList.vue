<template>
    <div class="app-home-good-list">
        <el-container>
            <el-header>
                <h1>推荐商品</h1>
            </el-header>
            <el-main>
                <el-row v-if="lists">
                    <el-col v-for="item in lists[0]" :key="item.goodsId">
                        <good-item :info = item ></good-item>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import GoodItem from './GoodItem'
export default {
    components:{
        GoodItem
    },
    data(){
        return {
             lists:null
        }
       
    },
    async created(){
        let data = await this.$jsonp({
            url:'http://my.xiu.com/v3/activityExt/goodsList?sns=10534946%2C10510791%2C10510792%2C10425924%2C10425219%2C10508332%2C10506005%2C10506006%2C10402896%2C10385926%2C10534947%2C10512203%2C10402897%2C10385927%2C10425217%2C10385914%2C10385915%2C10385929%2C10385930%2C10373765%2C10385906%2C10385907%2C10385908%2C10385909%2C10385910%2C10385911%2C10385912%2C10385913%2C10385916%2C10385917&_=1542341995378'
        })
        this.lists = data
    }
}
</script>

<style lang="scss">

</style>
