<template>
  <div class="common-buttons">
    <span>{{ dat }}</span>&nbsp; 
    <span>{{ tim }}</span> &nbsp; 
    <span><select v-model="weather" name = "wearther">
      <option value="Sunny">Sunny</option>
      <option value="Snowy">Snowy</option>
      <option value="Rainy">Rainy</option>
      <option value="Cloudy">Cloudy</option>
      <option value="Hail">Hail</option>
      </select></span>&nbsp;
    <span><button @click="fnSave">POST</button></span>&nbsp;
    <span><button @click="fnList">목록으로 돌아가기</button></span>
  </div>
  <div class="board-contents">
    <input type="text" v-model="title" placeholder="제목" />
  </div>
  <div class="borad-contents">
    <textarea cols="30" rows="10" v-model="context" placeholder="내용을 입력하세요"></textarea>
  </div>
</template>

<script>
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();

export default {
  data() {
    return {
      requestBody: this.$route.query,
      idx: this.$route.query.idx,

      title: '',
      weather: '',
      condition: '',
      context: '',
      dat: `${year}-${month}-${day}`,
      tim: hour > 12 ? 'PM' : 'AM',
    }; //우선 현재기준,시간으로 설정해놓고 기존 설정이 있으면 그걸로 정의
  },
  mounted() {
    this.fnGetView();
  },
  methods: {
    fnGetView() {
      if (this.idx !== undefined) {
        this.$axios
          .get(this.$serverUrl + "/board/" + this.idx, {
            params: this.requestBody,
          })
          .then((res) => {
            this.title = res.data.title;
            this.dat = res.data.dat;
            this.tim = res.data.tim;
            this.weather = res.data.weather;
            this.condition = res.data.condition;
            this.context = res.data.context;
          })
          .catch((err) => {
            console.log(err);
          })
      }
    },
    fnList() {
      delete this.requstBody.idx;
      this.$router.push({
        path: "./list",
        query: this.requestBody,
      });
    },
    fnView(idx) {
      this.requestBody.idx = idx;
      this.$router.push({
        path: "./detail",
        query: this.requestBody,
      });
    },
    fnSave() {
      let apiUrl = this.$serverUrl + '/board';
      this.form = {
        "idx": this.idx,
        "title": this.title,
        "weather": this.weather,
        "condition": this.condition,
        "dat": this.dat,
        "tim":this.tim,
        "context":this.context
      }
      if(this.idx === undefined){ //idx가 정의되어있지 않을때 post방식으로 전송 ISERT
        this.$axios.post(apiUrl, this.form) 
        .then((res)=>{
          alert('글이 저장되었습니다.')
          this.fnView(res.data.idx)
        }).catch((err)=>{
          if(err.message.indexOf('Network Error') > -1){
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      }else{
        this.$axios.patch(apiUrl, this.form)
        .then((res)=>{
          alert('글이 저장되었습니다.')
          this.fnView(res.data.idx)
        }).catch((err)=>{
          if(err.message.indexOf('Network Error') > -1){
            alert('네트워크가 원할하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      }
    }
  }
};
</script>

<style></style>