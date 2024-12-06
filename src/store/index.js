import { createStore } from "vuex";

import foods from "./food";

export const store = createStore({
  modules: {
    foods,
  },
});
