<template>
  <div class="gameOver">
    <div class="model">
      <div class="head">
        GAME OVER
      </div>
      <div class="info">
        <div class="score">
          <span>Your Score</span>
          <span>{{ $store.getters.getScore }}</span>
        </div>
        <div class="buttons">
          <div class="tryAgain" @click="setCells">Try Again</div>
          <div class="newGame" @click="$store.dispatch('setGameOver', false)">
            New Game
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    player() {
      return this.$store.getters.getPlayer;
    }
  },
  methods: {
    setCells() {
      if (this.player) {
        this.$store.dispatch(
          "setEdge",
          Math.floor(600 / this.mineNumber).toString() + "px"
        );
        this.$store.dispatch("setCells");
        this.$store.dispatch("clearScore");
        this.$store.dispatch("setGameOver", false);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.gameOver {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1500;
  display: flex;
  align-items: center;
  justify-content: center;
}

.model {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  font-weight: bold;
}

.head {
  display: flex;
  height: 80px;
  font-size: 28px;
  font-weight: bold;
  color: white;
  background-color: #00bce5;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
  padding: 0 30px;
  font-size: 22px;
}

.score {
  display: flex;
  justify-content: space-between;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}

.newGame {
  background-color: #25a35c;
  color: white;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
}

.tryAgain {
  background-color: #ff8a00;
  color: white;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
