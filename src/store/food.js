import { getPizzaList, getSizes, getToppingList } from "../services/foods";

export default {
  namespaced: true,
  state() {
    return {
      pizzaList: getPizzaList() || [],
      sizeList: getSizes() || [],
      toppingList: getToppingList() || [],
      selectedPizza: null,
    };
  },
  getters: {
    getSelectedPizza(state) {
      return state.selectedPizza;
    },
  },
  mutations: {
    setSelectedPizza(state, payload) {
      state.selectedPizza = payload;
    },
    setSelectedSize(state, { size }) {
      if (state.selectedPizza) {
        state.selectedPizza = { ...state.selectedPizza, size };
      }
    },
    setSelectedToppings(state, { new_toppings }) {
      if (state.selectedPizza) {
        state.selectedPizza = { ...state.selectedPizza, new_toppings };
      }
    },
    setResetSelectedPizza(state) {
      state.selectedPizza = null;
    },
  },
  actions: {
    updateSelectedPizza({ commit }, payload) {
      commit("setSelectedPizza", payload);
    },
    updateSelectedSize({ commit }, payload) {
      commit("setSelectedSize", payload);
    },
    updateSelectedToppings({ commit }, payload) {
      commit("setSelectedToppings", payload);
    },
    resetSelectedPizza({ commit }) {
      commit("setResetSelectedPizza");
    },
  },
};
