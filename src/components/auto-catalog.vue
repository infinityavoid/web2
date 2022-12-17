<template>
    <div class="table">
        <div class="autoCatalog">
            <h1 class="h1">Каталог</h1>
            <img class="addcatitem" src="../Img/plus-square-line-icon.svg" alt = "Add" width="25" height="25" @click="Closenewspare()"/>
            <div class="CatalogList">
                <item v-for="part in result"
                :Spare_data = "part"
                :key="part.SparePartId"
                @open = "UpdateSparePop"
                @Get = "GetSpare"
                @add = "AddToBasket"
                />
            </div>
        </div>
    </div>
</template>

<script>
import item from './CItem.vue' 
import axios from 'axios';
export default
{
    name:'autoCatalog',
    data(){
        return{
            result:'',
        }
    },
    computed:{},
    components:{item},
    methods:
    {
        async GetSpare()
        {
           await axios({method:"GET",url:"http://localhost:29410/api/SpareParts"})
            .then(response => {this.result = response.data
            /*console.log(response)*/}
            )
            .catch(e =>{this.error = e})
            //console.log(this.result)
        },
        Closenewspare()
        {
            this.$emit('close')
        },
        UpdateSparePop(id)
        {
            this.$emit('open',id)
        },
        AddToBasket(id)
        {
            this.$emit('add',id)
        }
    },
    mounted()
    {
        this.GetSpare()
    }

}
</script>

<style>
.addcatitem
{
    float: left;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left:5px;
}
.h1
{
    float: left;
}
.CatalogList
{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: auto;
}
.autoCatalog
{
    width: 100%;
}

</style>