<template>

    <div class="cartItem">
        <img src="" alt = "CartPic" width="80" height="80"/>
        <div class="cartInfo">
            <p>{{result.SpareName}}</p>
            <b>{{result.Cost}}р </b> 
            Кол-во:
            <span class="incdec" @click="dec(result)">-</span>
            {{result.Quantity}}
            <span class="incdec" @click="inc(result)">+</span> 
        </div>
        <img class="removeCart" @click="delFunc(index)" src="../Img/211652_close_icon.svg" alt = "close" width="25" height="25"/>
    </div>
</template>

<script>
export default
{
    props:{result:Object,index:Number},
    data(){
        return{

        }
    },
    methods:
    {
        delFunc(i)
        {
            this.$emit('delete',i)
        },
        inc(result)
        {
            result = result.Quantity++;
            return result
        },
        dec(result)
        {
            if(result.Quantity != 1)
            {
                result = result.Quantity--;
                return result
            }
        },

    }, 
    computed:
    {
    },
}
</script>

<style>
.incdec
{
    cursor: pointer;
}
</style>