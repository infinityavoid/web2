<template>
    <div class="CItem" @dblclick="UpdateSparePop(Spare_data.SparePartId)">
        <img src="" alt="spareImg">
        <img class="removeCart" src="../Img/211652_close_icon.svg" alt = "close" width="15" height="15" @click ="DeleteSpare(Spare_data.SparePartId)"/>
        <p>{{Spare_data.SpareName}}</p>
        <p>{{Spare_data.Cost}}р</p>
        <p>В наличии: {{Spare_data.Amount}}</p>
        <button @click="AddToBasket(Spare_data.SparePartId)">Add to cart</button>
    </div>
</template>

<script>
import axios from 'axios'; //если запчастей 0, то выводить их не нужно, но если мы зашли с админа, то нужно, т.к. админ может изменить кол-во запчастей, далее событие даблклика
export default
{
    props:{
        Spare_data: Object
    },
    data(){
        return{
            result:''
        }
    },
    computed:{},
    methods:
    {
        async DeleteSpare(id)
        {
           await axios({method:"DELETE",url:"http://localhost:29410/api/SpareParts/" + id}) // в календаре
            .then(response => {this.result = response.status
            console.log(response)}
            )
            .catch(e =>{this.error = e})
            console.log(this.result)
            if(this.result == 200)
            {
                //закрыть попап
                this.$emit('Get')
            }
        },
        UpdateSparePop(id)
        {
            this.$emit('open',id)
        },
        AddToBasket(id)
        {
            this.$emit('add',id)
        }
    }
}
</script>

<style>
.CItem
{
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 8px;
    margin: 15px;
    margin-bottom: 8px;
    width: 100px;
}

</style>