<template>
<div>
    <div>
        <span 
        v-for="(item,index) in ['one','two','three']"
        :key='index'
        @click="handleClick(index)"
        :class="{active:current===index}">
            {{item}}
        </span>
        
    </div>
    <div v-show='current===0'>
        <p>第一页</p>
    </div>
    <div v-show='current===1'>
        <p>第二页</p>
    </div>
    <div v-show='current===2'>
        <p>第三页</p>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            current:0
        }
    },
    methods:{
        handleClick(index){
            this.current = index
        }
    }
}       
</script>
<style lang="css">  
    span{
        cursor: pointer;
    }
    .active{
        color:red;
    }
</style>