<template>
  <div class="gameArea">
    <app-cell v-for="cell in cells" :cell="cell" :key="cell.id" />
  </div>
</template>

<script>
import Cell from "@/components/Cell";

export default {
  components: {
    appCell: Cell
  },
  computed: {
    cells() {
      return this.$store.getters.getCells;
    }
  }
};
</script>

<style lang="scss" scoped>
.gameArea {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  width: 600px;
  height: 600px;
}
</style>
