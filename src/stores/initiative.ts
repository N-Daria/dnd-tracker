import { ref } from "vue";
import { defineStore } from "pinia";
import { data } from "./data";

export const useInitiativeStore = defineStore("initiative", () => {
  const fighters = ref(data);

  return { fighters };
});
