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
        <span>{{ row.date }}</span>
        <span>{{ row.time }}</span>
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
      this.list = [
        {
          idx: 1,
          title: "몰랐던 좋은 박효신 노래를 발견했다",
          date: "20220519",
          time: "AM",
          weather: "Cloudy weather",
          condition: "Happy",
        },
        {
          idx: 2,
          title: "곧 있으면 시험이 다가온다",
          date: "20220419",
          time: "AM",
          weather: "Sunny weather",
          condition: "Angry",
        },
        //예시 데이터
      ];
    },
  },
};
</script>

<style></style>