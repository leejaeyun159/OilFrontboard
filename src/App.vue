<template>
  <div>
    <oil-header/>
    <router-view/>
    <oil-footer/>
  </div>
</template>

<script>
import OilHeader from '@/components/OilHeader.vue' 
import OilFooter from '@/components/OilFooter.vue'
export default {
  name:'App',
  components:{
    OilHeader,
    OilFooter
  }
}
</script>

<style>
  html,body{
    margin:0;
    background-color:var(--backBlue);
  }
  #app{
    /* font-family: */
    text-align: center;
  }
  #nav{
    padding:30px;
  }
  #nav a{
    color: red;
  }
  #nav a.router-link-exact-active{
    color: blue;
  }
</style>