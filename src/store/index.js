import Vue from "vue";
import Vuex from "vuex";

import { generateCells } from "../helpers";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cells: [],
    mineNumber: 5,
    player: "",
    score: 0,
    isDropdownOpen: false,
    topScores: [],
    edge: "",
    isGameOver: false
  },
  mutations: {
    setCells(state, generatedCells) {
      state.cells = generatedCells;
    },
    setMineNumber(state, mineNumber) {
      state.mineNumber = mineNumber;
    },
    setPlayer(state, player) {
      state.player = player;
    },
    setScore(state, point) {
      state.score += point;
    },
    setTopScores(state, topScores) {
      state.topScores = topScores;
    },
    toggleDropdown(state, isDropdownOpen) {
      state.isDropdownOpen = isDropdownOpen;
    },
    clearScore(state) {
      state.score = 0;
    },
    setEdge(state, edge) {
      state.edge = edge;
    },
    setGameOver(state, value) {
      state.isGameOver = value;
    }
  },
  getters: {
    getCells(state) {
      return state.cells;
    },
    getMineNumber(state) {
      return state.mineNumber;
    },
    getPlayer(state) {
      return state.player;
    },
    getScore(state) {
      return state.score;
    },
    getTopScores(state) {
      return state.topScores;
    },
    getIsDropdownOpen(state) {
      return state.isDropdownOpen;
    },
    getEdge(state) {
      return state.edge;
    },
    getIsGameOver(state) {
      return state.isGameOver;
    }
  },
  actions: {
    setCells({ state, commit }) {
      commit("setCells", generateCells(state.mineNumber));
    },
    setMineNumber({ commit }, mineNumber) {
      commit("setMineNumber", mineNumber);
    },
    setPlayer({ commit }, player) {
      commit("setPlayer", player);
    },
    setScore({ commit }, point) {
      commit("setScore", point);
    },
    setTopScores({ state, commit }) {
      if (state.score > 0) {
        const topScores = state.topScores;
        topScores.push({
          player: state.player,
          score: state.score
        });

        topScores.sort((a, b) => b.score - a.score);
        commit("setTopScores", topScores.slice(0, 10));
      }
    },
    toggleDropdown({ state, commit }) {
      commit("toggleDropdown", !state.isDropdownOpen);
    },
    openAllCells({ state, commit }) {
      const openedCells = state.cells.map(cell => ({
        ...cell,
        isOpened: true
      }));
      commit("setCells", openedCells);
    },
    clearScore({ commit }) {
      commit("clearScore");
    },
    setEdge({ commit }, edge) {
      commit("setEdge", edge);
    },
    setGameOver({ commit }, value) {
      commit("setGameOver", value);
    }
  },
  modules: {}
});
