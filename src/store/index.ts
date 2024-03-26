import { defineStore, createPinia } from "pinia";

export default createPinia();

interface State {}

export const useStore = defineStore("store", {
  state: () => {
    const state: State = {};
    return state;
  },
});
