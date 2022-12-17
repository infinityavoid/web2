<template>
    <div class="reglogpop">
        <div class="popup-inner2">
            <p>Вход в учетную запись</p>
            <input class="email" v-model = "username" type="text" placeholder="Введите имя...">
            <input class="pass" v-model = "pass" type="text" placeholder="Введите пароль...">
            <div>
                <button class="Log" @click="auth()">Войти</button>
                <button class="haveacc" @click="toggle()"> Создать аккаунт? </button>
                <button class="CloseLog" @click="ClosePopUp()">Отмена</button>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default
{
    name:'log_popup',
    props:{},
    data(){
        return{
            pass:'',
            username:'',
        }
    },
    methods:
    {
        ClosePopUp()
        {
            this.$emit('close2')
        },
        toggle()
        {
            this.$emit('toggle')
        },
        async auth()
        {
           await axios({method:"POST",url:"http://localhost:29410/api/Authenticate/login",data:
                {
                    username:  this.username,
                    password: this.pass,
                }})
            .then(response => {this.result = response.data
            console.log(response)}
            )
            .catch(e =>{this.error = e})
            console.log(this.result.Status)
            if(this.result.token != "Undefined")
            {
                this.ClosePopUp()
                this.username = ''
                this.pass = ''
            }
        }
    },
    computed:{}
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
.popup-inner2
{
    flex-direction: column;
    height: 25%;
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