<template>
    <header class="Header">
        <section class="Section-top">
            <div class="info">
                <div class="location">
                    Ханты-Мансийск | ул.Студенческая 7
                </div>
                <div class="Phone">
                    +7 (800) 555-35-35
                </div>
            </div>
            <div class="auth">
                <div class="Register">
                    <a class="RegisterButton" @click="PopUp()"> Регистрация </a>  
                </div>
                <div class="Login">
                    <a class="LoginButton" @click="PopUp2()"> Войти </a>
                </div>
            </div>
        </section>
        <section class="SelectionMiddle">
            <div class="logo" @click = "$router.push('/')">
                <img class="LogoImg" src="../Img/Logo.svg" alt="Автозапчасти">
            </div>
            <form action="" class="form">
                <div class="Search">
                    <input type="search" class="Input" placeholder="Поиск по сайту" autocomplete="off" >
                    <input type="submit" class="CompleteButton" value="🔍" style="width: 75px"/>
                </div> 
            </form>
            <button class="basket"  @click="BasketPopUp()"></button>
            <button class="Orders" @click = "$router.push('/Orders')"></button>
        </section>
    </header>
</template>
<script>
export default
{
    name:'auto-header',
    data(){//персональные данные
        return {

        } 
    },
    methods:
    {
        BasketPopUp()
        {
            this.$emit('basket')
        },
        PopUp()
        {
            this.$emit('reg')
        },
        PopUp2()
        {
            this.$emit('log')
        },
        Toggle()
        {
            this.$emit('toggle')
        }
    }
}
</script>

<style>
</style>