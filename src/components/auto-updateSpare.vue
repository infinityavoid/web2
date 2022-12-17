<template>
    <div class="addbrandpop">
        <div class="popup-inner3">
            <p>Изменить данные о запчасти</p>
            <input class="email" v-model = "name" type="text" placeholder="Введите название запчасти...">
            <input class="email" v-model = "cost" type="text" placeholder="Введите стоимость запчасти...">
            <input class="email" v-model = "amount" type="text" placeholder="Введите кол-во запчастей...">
            <div>
                <button class="Log" @click="updateSpare()">Добавить</button>
                <button class="CloseLog" @click="Closenewspare()">Отмена</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default
{
    data(){
        return{
            name:'',
            result:'',
            cost:'',
            amount:'',
        }
    },
    props:{SpareId:Number},

    methods:
    {
        async updateSpare()
        {
            console.log(this.SpareId)
           await axios({method:"PUT",url:"http://localhost:29410/api/SpareParts/" + this.SpareId,data:
           {
            SparePartId: this.SpareId,
            SpareName: this.name,
            Cost: this.cost,
            Amount: this.amount,
            SparePhoto: "string",
            Quantity: 0
            }})
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
        Closenewspare()
        {
            this.$emit('close')
        }
    },
}
</script>
<style>
.haveacc
{
    height: 10%;
    padding: 0;
    margin: 0;
    width: 20%;
}
.CloseLog
{
    padding: 0;
    margin: 0;
    margin-bottom: 5%;
    float: left;
    margin-left: 10%;
    background-color: #fff;
    border: 1px solid #000000;
    width: 20%;
    height: 30px;
}
.Log
{
    padding: 0;
    margin: 0;
    margin-bottom: 5%;
    background-color: cornflowerblue;
    float: right;
    margin-right: 10%;
    color: #fff;
    border: 1px solid #000000;
    height: 30px;
    width: 20%;
}
.addbrandpop
{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1999999;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.popup-inner3
{
    flex-direction: column;
    height: 40%;
    background-color: #fff;
    padding: auto;
    flex-wrap: wrap;
    border-radius: 15%;
    margin-bottom: 5%;
    width: 30%;
}
</style>