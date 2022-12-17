<template>
    <div class="BrandsTable">
        <div class="table-info">
            <h1 class="brands">Бренды</h1>
            <img class="addcatitem" src="../Img/plus-square-line-icon.svg" alt = "close" width="25" height="25" @click="Closenewbrand()"/>
        </div>
        <div class="table1">
            <div class="branditem" style="margin-top:20px">
                <a>Все</a>
            </div>
            <div class="branditem" v-for=" brand in result" :key="brand.BrandId">
                <a >{{brand.BrandName}} </a>
                <img class="removeCart" src="../Img/211652_close_icon.svg" alt = "close" width="15" height="15" @click="DeleteBrands(brand.BrandId)"/>
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
            result:'',
        }
    },
    props:{
    },
    components:
    {
    },

    methods:
    {
        async GetBrands()
        {
           await axios({method:"GET",url:"http://localhost:29410/api/Brands"})
            .then(response => {this.result = response.data}
            )
            .catch(e =>{this.error = e})
        },
        Closenewbrand()
        {
            this.$emit('close')
        },
        async DeleteBrands(key)
        {
            console.log(key)
           await axios({method:"Delete",url:"http://localhost:29410/api/Brands/" + key})
            .then(response => {this.result = response.data}
            )
            .catch(e =>{this.error = e})
            this.GetBrands()
        },
    },
    mounted()
    {
        this.GetBrands()
    }

}
</script>

<style>
.branditem
{
    padding-top: 8px;
    padding-bottom: 8px;
}
.table-info
{
    padding-top: 10px;
    height: 70px;
}
.brands
{
    float: left;
}
.table1
{
    flex-direction: column;
    text-align: left;

}

</style>