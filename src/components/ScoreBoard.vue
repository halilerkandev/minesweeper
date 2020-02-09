<template>
  <div class="scoreBoard">
    <div class="head">Top 10 Score</div>
    <div class="list">
      <div class="listRow bold" v-for="(topScore, i) in topScores" :key="i">
        <div>{{ i + 1 }}.</div>
        <div class="score">
          <div class="bold">{{ topScore.player }}</div>
          <div class="bold">
            {{ topScore.score }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    topScores() {
      return this.$store.getters.getTopScores;
    }
  }
};
</script>

<style lang="scss" scoped>
.scoreBoard {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 20px;
}

.bold {
  font-weight: bold;
}

.head {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 66px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  background-color: #00bce5;
  border-radius: 10px 10px 0 0;
}

.list {
  display: flex;
  flex-direction: column;
  height: 360px;
  background-color: #e5e5e5;
  border-radius: 0 0 10px 10px;
  padding: 20px;
}

.listRow {
  display: flex;
  margin-bottom: 10px;
}

.score {
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding-left: 10px;
}
</style>
