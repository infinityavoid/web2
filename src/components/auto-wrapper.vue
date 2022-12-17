<template>
    <Myheader
    @basket = "BasketPopUp"
    @reg = "PopUp"
    @log = "PopUp2"
    @toggle = "Toggle"
    />
    <div class="Content">
        <catalog ref="child2" 
        @close ="newSparePop"
        @open = "updateSparePop"
        @add = "AddToBasket"
        />
        <brands ref="child" @close="newBrandPop"/>
    </div>
    <updateSpare v-if="updateSpareVisible === true"
    @close ="updateSparePop"
    @Get = "GetSpareF"
    :SpareId = "SpareId"
    />
    <newSpare v-if="IsnewSpareVisible === true"
    @close = "newSparePop"
    @Get = "GetSpareF"
    />
    <newBrand v-if="IsNewBrandVisible === true"
    @close = "newBrandPop"
    @Get = "GetBrandsF"
    />
    <reglog v-if="IsReglogVisible === true"
    @close = "PopUp"
    @toggle = "Toggle"
    />
    <log v-if="IslogVisible === true"
    @close2 = "PopUp2"
    @toggle = "Toggle"
    />
    <basket ref="child3" v-show = "BasketVisible"
    @close = "BasketPopUp"
    />
</template>

<script>
import catalog from './auto-catalog.vue'
import log from './log.vue'
import reglog from './auto-reglog.vue'
import brands from './auto-brands.vue'
import newBrand from '../components/auto-newBrand.vue'
import newSpare from '../components/auto-newCart.vue'
import updateSpare from '../components/auto-updateSpare.vue'
import Myheader from '../components/auto-header.vue'
import basket from '../components/auto-basket.vue'
export default
{
    name:'auto-wrapper',
    data(){//персональные данные
        return {
            IsReglogVisible: false,
            IslogVisible: false,
            BasketVisible:false,
            IsNewBrandVisible:false,
            IsnewSpareVisible:false,
            updateSpareVisible:false,
            SpareId:'',
            AddSpareId:'',
            Total:''
        } 
    },
    methods:
    {
        TotalCost(Cost)
        {
            this.Total = Cost
        },
        AddToBasket(id)
        {
            this.$refs.child3.AddCart(id)
            this.$refs.child3.TotalCost
        },
        updateSparePop(id)
        {
            this.SpareId = id
            this.updateSpareVisible = !this.updateSpareVisible
        },
        newSparePop()
        {
            this.IsnewSpareVisible = !this.IsnewSpareVisible;
        },
        GetBrandsF()
        {
            this.$refs.child.GetBrands()
        },
        GetSpareF()
        {
            this.$refs.child2.GetSpare()
        },
        newBrandPop()
        {
            this.IsNewBrandVisible = !this.IsNewBrandVisible;
        },
        BasketPopUp()
        {
            this.BasketVisible = !this.BasketVisible;
        },
        PopUp()
        {
            this.IsReglogVisible = !this.IsReglogVisible;
        },
        PopUp2()
        {
            this.IslogVisible = !this.IslogVisible;
        },
        Toggle()
        {
            this.IsReglogVisible = !this.IsReglogVisible;
            this.IslogVisible = !this.IslogVisible;
        }
    },
    components:{catalog,brands,reglog,log,newBrand,newSpare,updateSpare,Myheader,basket}, //данный враппер является родителем для каталога и корзины
    props:{} //данные из родителя
}

</script>


<style >
.basketempty
{
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex: 1;
}
.orderbtn:hover
{
    background: lighten(#b4c5c5,10%);
}
.orderbtn
{
    background-color: #b4c5c5;
    margin-bottom: 30px;
    height: 60px;
    border: 1px solid #222121;
    border-radius: 18px;
    cursor: pointer;
}
.allCarts
{
    overflow: auto;
    flex: 1;
}
.dottedline
{
    border-bottom: 1px dotted rgba(32, 32, 32, 0.514);
    flex: auto;
}
.Total
{
    text-align: start;
    padding-left: 0;
    margin-bottom: 30px;
}
.TotalString
{
    display: flex;
}
.removeCart
{
    opacity: 0.5;
    cursor: pointer;
    float: right;
}
.removeCart:hover
{
    opacity: 1;
}
.cartInfo
{
    text-align: left;
    margin-bottom: 5px;
    flex: auto;
}
.cartItem
{
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    border: 1px solid #f3f3f3;
    border-radius: 20px;
    overflow: hidden;
}
.overlay
{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
    height: 100%;
}
.drawer
{
    position: absolute;
    right: 0;
    width: 400px;
    background-color: #fff;
    height: 100%;
    box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);
    padding: 30px 30px 0 30px;
    flex-direction: column;
    display: flex;
    bottom: 0px;
}
.Orders
{
    margin-top: 21px;
    position: relative;
    float: left;
    margin-left: 1%;
    width: calc(100% - 1100px);
    height: 47px;
    background-image:url("../Img/pngtree-vector-list-icon-png-image_322087.svg") ;
    background-size: 53px;
    background-position: center;
    background-repeat: no-repeat;
    
}
.BrandsTable
{
    background: #fff;
    margin-bottom: 25px;
    margin-left: 2px;
    width: 24%;
    flex-direction: column;
}
.basket
{
    background-image:url("../Img/kisspng-computer-icons-shopping-cart-retail-clip-art-shopping-cart-5abdaab0711a27.svg") ;
    background-size: 45px;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 21px;
    position: relative;
    float: left;
    margin-left: 1%;
    width: calc(100% - 1100px);
    height: 47px;
}
.table
{
    background: #fff;
    padding-top: 10px;
    margin-bottom: 25px;
    width: 76%;
}
.Content
{
    position: relative;
    clear: both;
    width: 100%;
    max-width: 1200px;
    margin-left: 15%;
    margin-right: 15%;
    display: flex;
}
.CompleteButton
{

    width: 40px !important;
    height: 40px !important;
    margin-left: -55px;
    float: left;
    border: 0px;
    margin-top: 3px;
    background: #f5f5f5;
}
.form
{
    margin: 0;
    padding: 0;
}
.Input
{
    float: left;
    height: 47px;
    border: 1px solid #b4c5c5;
    border-radius: 3px;
    min-width: 100%;
    font-size: 15px;
    padding: 0 55px 0 20px;
    background: #f5f5f5;
    transition: min-width 0.3s ease, border-color 0.3s ease;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 16px;
}
.Search
{
    margin-top: 21px;
    position: relative;
    width: calc(100% - 460px);
    float: left;
}
.SelectionMiddle
{
    position: relative;
    clear: both;
    width: 100%;
    max-width: 1200px;
    margin-left: 15%;
}
.LogoImg
{
    width: 100px;
    margin-right: 60px;
    cursor: pointer;
}
.logo
{
    position: relative;
    float: left;
}
.Login
{
    float: left;
}
.LoginButton
{
    display: inline-block;
    padding: 0 15px;
    height: 35px;
    line-height: 32px;
}
.LoginButton:hover
{
    display: inline-block;
    padding: 0 15px;
    height: 35px;
    line-height: 32px;
    text-decoration: none; /* Убираем подчеркивание */
    color: rgb(115, 157, 248); /* Цвет ссылки при наведении на нее курсора мыши */ 
}
.RegisterButton
{
    display: inline-block;
    padding: 0 15px;
    height: 35px;
    line-height: 32px;
}
.RegisterButton:hover
{
    text-decoration: none; /* Убираем подчеркивание */
    color: rgb(115, 157, 248); /* Цвет ссылки при наведении на нее курсора мыши */  
    display: inline-block;
    padding: 0 15px;
    height: 35px;
    line-height: 32px;
}
.Register{
    float: left;
}
.auth
{
    float: right;
}
.info
{
    float: left;
    position: relative;
    margin: 0;
    padding-left: 15%;
}
.location
{
    padding: 0;
    margin: 0;
    float: left;
    height: 35px;

}
.Section-top
{
    width: 100%;
    height: 40px;
    position: relative;
    margin: 0;
    padding: 0;
    font-size: 13px;
    margin-bottom: 20px;
}
.auto-wrapper
{
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
}
.Header
{
    margin-bottom: 20px;
    padding: 0;
}
.Phone
{
    float: left;
    position: relative;
    margin: 0;
    padding-left: 30px;
    height: 35px;
}
</style>