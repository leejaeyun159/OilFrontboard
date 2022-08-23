<template>
  <div class="board-list">
    <div class="common-button">
      <button
        type="button"
        v-on:click="fnPost">
        새로운 포스트를 작성해보세요
      </button>
    </div>
    <ul v-for="(row, idx) in list" v-bind:key="idx">
      <li>
        <span>{{ row.idx }}</span>
        <a v-on:click="fnView(`${row.idx}`)">{{ row.title }}</a>
        <span>{{ row.dat }}</span>
        <span>{{ row.tim }}</span>
        <span>{{ row.weather }}</span>
        <span>{{ row.condition }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requestBody: {}, //list page 데이터 전송
      list: {},
    };
  },
  mounted() {
    this.fnGetList();
  },
  methods: {
    fnGetList() {
      this.$axios.get(this.$serverUrl + "/board/list",{
        params: this.requestBody,
        headers:{}
      }).then((res)=>{
        this.list = res.data
      }).catch((err)=>{
        if(err.message.indexOf('Network Error')>-1){
         alert('네트워크가 원할하지 않습니다.\n 잠시 후 다시 시도 해주세요') 
        }
      })
    },
    fnView(idx){
      this.requestBody.idx  = idx
      this.$router.push({
        path:'./detail',
        query:this.requestBody
      }) //프로그래밍 방식 네비게이션
    },
    fnWrite(){
      this.$router.push({
        path:'./write'
      })
    }
  },
};
</script>

<style></style>