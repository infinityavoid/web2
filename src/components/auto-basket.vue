<template>
    <div class="overlay">
        <div class="drawer">
            <h2>
                Корзина
                <img class="removeCart" src="../Img/211652_close_icon.svg" alt = "close" width="25" height="25" @click="$emit('close')"/>
            </h2>
            <div class="allCarts" >
                <div v-if="result.length === 0" class="basketempty">
                    <label>Корзинка пустая (: </label>
                </div>
                <basketItem v-else v-for = "basketCart,index in result"
                :result = "basketCart"
                :key="index" 
                :index = "index"
                @delete = "deleteCart"
                />
            </div>
            <ul class="Total">
                <li class="TotalString">
                    <span>Итого</span>
                    <div class="dottedline"></div>
                    <b>{{TotalCost}}Р</b>
                </li>
            </ul>
            <button class="orderbtn">Оформить заказ</button>
        </div>
    </div>
</template>

<script>
import basketItem from '../components/auto-basketItem.vue'
import axios from 'axios';
export default
{
    name:'auto-basket',
    data(){//персональные данные
        return {
            result:[],
            IsCartExist:false
        } 
    },
    methods:
    {
        async AddCart(id) //условие на проверку, есть ли такой предмет в корзине
        {
            await axios({method:"GET",url:"http://localhost:29410/api/SpareParts/" + id})
            .then(response => 
            {   
                this.IsCartExist = false;
                response.data.Quantity++;
                for(let i = 0; i <this.result.length;i++)
                {
                    if (response.data.SparePartId === this.result[i].SparePartId)
                    {
                        this.result[i].Quantity++
                        this.IsCartExist = true
                        break;
                    }
                }
                if(this.IsCartExist === false)
                {
                    this.result.push(response.data)  
                }
            }
            )
            .catch(e =>{this.error = e})
        },
        deleteCart(i)
        {
            this.result.splice(i,1)
        },
        GotoOrder()
        {
            
        }
    },
    computed:
    {
        TotalCost()
        {
            let res = []
            if(this.result.length)
            {
                for(let item of this.result)
                {
                    res.push(item.Cost * item.Quantity)
                }
                res = res.reduce(function(sum,el)
                {
                    return sum + el;
                })   
                return res
            }
            else
            {return 0}
        }
    },
    components:{basketItem}
}
</script>
<style>
</style>