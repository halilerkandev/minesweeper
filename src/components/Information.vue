<template>
  <div class="information">
    <div class="name">
      <div>Name</div>
      <div
        v-if="isInputOpen"
        class="bold pointer"
        @click="isInputOpen = !isInputOpen"
      >
        {{ player || "İsim girmek için tıklayın" }}
      </div>
      <div v-else class="inputArea">
        <input type="text" v-model="newPlayer" @keydown.enter="setPlayer" />
        <div class="button" @click="setPlayer">Set Name</div>
      </div>
    </div>
    <div class="gridNumbers">
      <div class="gridNumber" @click="$store.dispatch('toggleDropdown')">
        {{ mineNumber }}x{{ mineNumber }} Grid
        <font-awesome-icon :icon="isDropdownOpen ? 'angle-up' : 'angle-down'" />
      </div>
      <div v-if="isDropdownOpen">
        <div class="gridNumber" @click="setMineNumber(5)">
          5x5 Grid
        </div>
        <div class="gridNumber" @click="setMineNumber(6)">
          6x6 Grid
        </div>
        <div class="gridNumber" @click="setMineNumber(7)">
          7x7 Grid
        </div>
        <div class="gridNumber" @click="setMineNumber(8)">
          8x8 Grid
        </div>
      </div>
    </div>
    <div class="start" :class="{ disabled: !!player }" @click="setCells">
      Start
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isInputOpen: true,
      newPlayer: ""
    };
  },
  computed: {
    player() {
      return this.$store.getters.getPlayer;
    },
    mineNumber() {
      return this.$store.getters.getMineNumber;
    },
    isDropdownOpen() {
      return this.$store.getters.getIsDropdownOpen;
    }
  },
  methods: {
    setMineNumber(mineNumber) {
      this.$store.dispatch("setMineNumber", mineNumber);
      this.$store.dispatch("toggleDropdown");
    },
    setPlayer() {
      this.$store.dispatch("setPlayer", this.newPlayer);
      this.isInputOpen = !this.isInputOpen;
    },
    setCells() {
      if (this.player) {
        this.$store.dispatch(
          "setEdge",
          Math.floor(600 / this.mineNumber).toString() + "px"
        );
        this.$store.dispatch("setCells");
        this.$store.dispatch("clearScore");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.information {
  position: fixed;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  font-size: 22px;
  top: 120px;
  z-index: 1000;
}

.pointer {
  cursor: pointer;
}

.disabled {
  background-color: gainsboro;
}

.bold {
  font-weight: bold;
}

input {
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 18px;
}

.button {
  padding: 5px 12px;
  font-size: 18px;
  background-color: green;
  margin-left: 10px;
  border-radius: 10px;
  font-weight: bold;
  color: white;
}

.name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #e5e5e5;
  border-radius: 10px;
  height: 60px;
  flex: 2;
  margin-right: 10px;
}

.gridNumbers {
  display: flex;
  flex: 2;
  flex-direction: column;
  background-color: #e5e5e5;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
}

.gridNumber {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #e5e5e5;
  border-radius: 10px;
  min-height: 60px;
  flex: 1;
  margin-right: 10px;
}

.start {
  background-color: #ff8a00;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 10px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
}

.inputArea {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
