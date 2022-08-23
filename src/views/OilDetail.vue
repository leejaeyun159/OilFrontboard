<template>
  <div class="board-detail">
    <div class="commons-buttons">
      <button type="button" @click="fnUpdate">수정</button>&nbsp;
      <button type="button" @click="fnDelete">삭제</button>&nbsp;
      <button type="button" @click="fnList">목록</button>
    </div>
    <div class="board-contents">
        <strong>{{ title }}</strong>
        <span>{{ dat }}</span>
        <span>{{weather}}</span>
        <span>{{condition}}</span>
        <p>{{ context }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requestBody: this.$route.query,
      idx: this.$route.query.idx,
      title: '',
      dat: '',
      weather:'',
      condition: '',
      context: '',
    }
  },
  mounted() {
    this.fnGetView();
  },
  methods: {
    fnGetView() {
      this.$axios
        .get(this.$serverUrl + "/board/" + this.idx, { params: this.requestBody})
        .then((res) => {
          this.title = res.data.title;
          this.dat = res.data.dat;
          this.weather = res.data.weather;
          this.condition = res.data.condition;
          this.context = res.data.context;
        })
        .catch((err) => {
          if (err.message.indexOf("Network Error") > -1) {
            alert("네트워크가 원할하지 않습니다.\n 잠시 후 다시 시도 해주세요");
          }});
    },
    fnList(){
            delete this.requestBody.idx
            this.$router.push({
                path: './list',
                query: this.requestBody
            })
    },
    fnUpdate(){
            this.$router.push({
                path: './write',
                query: this.requestBody
            })
    },
    fnDelete(){
            if(!confirm("삭제하시겠습니까?")) return
            this.$axios.delete(this.$serverUrl + '/board/' + this.idx)
                .then(()=>{
                    alert('삭제되었습니다.')
                    this.fnList();
                }).catch((err)=>{
                console.log(err);
            })
        }
    }
};
</script>

<style></style>