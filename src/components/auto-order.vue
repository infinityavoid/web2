<template>
    <div v-for="order in result" :key="order.OrderId" class="orderbox">
        <div class="orderinfo">
            <h3>Номер заказа:{{order.OrderId}}</h3>
            <h3 class="orderproducts">Товары:{{order.Products}}</h3>
        </div>
        <div class="orderinfo">
            <h3>Дата:{{shortdate(order.Date)}}</h3>
            <h3>Стоимость:{{order.Cost}}</h3>
        </div>
    </div>
</template>

<script>
export default
{
    name:'auto-order',
    data(){//персональные данные
        return {
        
        } 
    },
    props:{result:Object},
    methods:
    {
        shortdate(Date)
        {
            var newDate = Date.slice(0,10)
            return newDate
        }
    }
}
</script>

<style>
.orderproducts
{
    flex: 1 1 auto;
}

.orderbox
{
    overflow: auto;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-shadow: 0 0 8px 0 #e0e0e0;
    margin-left: 13.5%;
    width: calc(100% - 460px);
    justify-content: space-between;
}
.orderinfo
{
    justify-content: space-between;
}

</style>