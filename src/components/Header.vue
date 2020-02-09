<template>
  <div class="header">
    <div class="brand">Minesweeper</div>
    <div class="score">
      <span>Score</span>
      <span class="bold">{{ score }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    score() {
      return this.$store.getters.getScore;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bold {
  font-weight: bold;
}

.score {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #e5e5e5;
  border-radius: 10px;
  width: 250px;
  height: 60px;
  font-size: 22px;
}

.brand {
  color: coral;
  font-size: 32px;
  font-weight: bold;
}
</style>
