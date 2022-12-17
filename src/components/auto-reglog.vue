<template>
    <div class="reglogpop">
        <div class="popup-inner">
            <p>Регистрация</p>
            <input class="email" v-model = "username" type="text" placeholder="Введите имя...">
            <input class="email" v-model = "email" type="text" placeholder="Введите email...">
            <input class="pass" v-model = "pass" type="text" placeholder="Пароль">
            <div class="popUpbnts">
                <button class="Reg" @click="auth()">Зарегистрироваться</button>
                <button class="haveacc" @click="toggle()"> Уже есть аккаунт? </button>
                <button class="CloseReg" @click="ClosePopUp()">Отмена</button>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default
{
    name:'reg_log',
    props:{},
    data(){
        return{
            email:'',
            pass:'',
            username:'',
            error:'',
            result:''
        }
    },
    methods:
    {
        ClosePopUp()
        {
            this.$emit('close')
        },
        toggle()
        {
            this.$emit('toggle')
        },
        //метод отправки данных на сервер и получение результата (зарегался или нет)
        async auth()
        {
           await axios({method:"POST",url:"http://localhost:29410/api/Authenticate/register",data:
                {
                    username:  this.username,
                    password: this.pass,
                    email: this.email,
                }})
            .then(response => {this.result = response.data
            console.log(response)}
            )
            .catch(e =>{this.error = e})
            
            console.log(this.result.Status)
            if(this.result.Status === "Success")
            {
                this.toggle()
                this.username = ''
                this.pass = ''
                this.email = ''
            }
        }
    },
    computed:{}


}

</script>
<style>
.popUpbnts
{
    justify-content: space-between;
    height: 100%;
}
.haveacc
{
    height: 10%;
    padding: 0;
    margin: 0;
    width: 20%;
}
.CloseReg
{
    padding: 0;
    margin: 0;
    margin-bottom: 5%;
    float: left;
    margin-left: 10%;
    height: 10%;
    background-color: #fff;
    border: 1px solid #000000;
}
.Reg
{
    padding: 0;
    margin: 0;
    margin-bottom: 5%;
    background-color: cornflowerblue;
    float: right;
    margin-right: 10%;
    color: #fff;
    border: 1px solid #000000;
    height: 10%;
}
.reglogpop
{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

}
.popup-inner
{
    flex-direction: column;
    height: 35%;
    background-color: #fff;
    padding: auto;
    flex-wrap: wrap;
    border-radius: 15%;
    margin-bottom: 5%;
}
.email
{
    width: 80%;
    height: 30px;
    margin-bottom: 5%;
}
.pass
{
    width: 80%;
    height: 30px;
    margin-bottom: 5%;
}
</style>