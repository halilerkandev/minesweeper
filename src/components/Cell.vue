<template>
  <div class="outer" :style="{ width: edge, height: edge }">
    <div
      class="cell"
      :class="[
        {
          normal: !cell.isOpened,
          success: cell.isOpened && !cell.isMined,
          failed: cell.isOpened && cell.isMined
        }
      ]"
      @click="open"
    />
  </div>
</template>

<script>
export default {
  props: ["cell"],
  computed: {
    edge() {
      return this.$store.getters.getEdge;
    }
  },
  methods: {
    open() {
      if (this.cell.isMined && !this.cell.isOpened) {
        this.$store.dispatch("openAllCells");
        this.$store.dispatch("setTopScores");
        this.$store.dispatch("setGameOver", true);
      } else {
        if (!this.cell.isOpened) {
          this.$store.dispatch("setScore", 5);
          this.cell = {
            ...this.cell,
            isOpened: true
          };
        }
      }
    }
  }
};
</script>

<style scoped>
.outer {
  padding: 5px;
}

.cell {
  display: flex;
  border-radius: 4px;
  height: 100%;
  width: 100%;
}

.normal {
  background-color: #5d6980;
}

.success {
  background-color: #25a35c;
}

.failed {
  background-color: #fa3a3a;
}
</style>
