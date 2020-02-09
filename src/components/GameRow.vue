<template>
  <div class="gameRow">
    <app-game-area />
    <app-score-board />
  </div>
</template>

<script>
import ScoreBoard from "@/components/ScoreBoard.vue";
import GameArea from "@/components/GameArea.vue";

export default {
  components: {
    appScoreBoard: ScoreBoard,
    appGameArea: GameArea
  }
};
</script>

<style lang="scss" scoped>
.gameRow {
  margin-top: 250px;
  width: 100%;
  padding: 0 20px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
}
</style>
