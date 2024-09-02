import { ref } from "vue";
import { defineStore } from "pinia";

export const useInitiativeStore = defineStore("initiative", () => {
  const fighters = ref([
    { id: 1, name: "fighter", label: "hero" },
    { id: 1, name: "fighter", label: "monster" },
  ]);

  return { fighters };
});
