<template>
    <Myheader/>
    <div class="ordertable">
        <order
        :result = "result"
        />
        <label
        />
    </div>


</template>
<script>
import Myheader from '../components/auto-header.vue'
import order from '../components/auto-order.vue'
import axios from 'axios';
export default
{
    name:'auto-orders',
    data(){//персональные данные
        return {
            result:'',
        } 
    },
    methods:
    {
        async GetOrders()
        {
           await axios({method:"GET",url:"http://localhost:29410/api/Orders"})
            .then(response => {this.result = response.data
            /*console.log(response)*/}
            )
            .catch(e =>{this.error = e})
            //console.log(this.result)
        },
    },
    mounted()//условие, если пользователь будет админом или обычным
    {
        this.GetOrders()
    },
    components:{Myheader,order},
}
</script>
<style>
.ordertable
{
    position: relative;
    clear: both;
    width: 100%;
    max-width: 1200px;
    margin-left: 15%;
    margin-right: 15%;
    display: flex;
    flex-direction: column;
}
</style>