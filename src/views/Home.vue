<template>
  <div class="home">
    <app-header />
    <app-information />
    <app-game-row />
    <app-game-over v-if="isGameOver" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Information from "@/components/Information";
import GameRow from "@/components/GameRow";
import GameOver from "@/components/GameOver";

import { generateCells } from "@/helpers";

export default {
  name: "Home",
  components: {
    appHeader: Header,
    appInformation: Information,
    appGameRow: GameRow,
    appGameOver: GameOver
  },
  computed: {
    isGameOver() {
      return this.$store.getters.getIsGameOver;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>
