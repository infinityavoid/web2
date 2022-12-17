<template>
    <div class="addbrandpop">
        <div class="popup-inner3">
            <p>Добавить бренд</p>
            <input class="email" v-model = "name" type="text" placeholder="Введите имя бренда...">
            <div>
                <button class="Log" @click="addNewbrand()">Добавить</button>
                <button class="CloseLog" @click="Closenewbrand()">Отмена</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default
{
    props:{},
    data(){
        return{
            name:'',
            result:''
        }
    },
    methods:
    {
        async addNewbrand()
        {
           await axios({method:"POST",url:"http://localhost:29410/api/Brands",data:
                {
                    BrandName:  this.name,
                }})
            .then(response => {this.result = response.status}
            )
            .catch(e =>{this.error = e})
            if(this.result == 200)
            {
                //закрыть попап
                this.$emit('Get')
            }
        },
        Closenewbrand()
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