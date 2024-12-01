import { ref } from "vue";
import { defineStore } from "pinia";
import { data } from "./data";
import type { Fighter } from "./interfaces";

export const useInitiativeStore = defineStore("initiative", () => {
  const fighters = ref<Fighter[]>([]);
  const activeItem = ref<Fighter | null>(null);

  const saveState = () => {
    const storeFighters = localStorage.getItem("fighters");

    if (JSON.stringify(fighters.value) !== storeFighters) {
      localStorage.setItem("fighters", JSON.stringify(fighters.value));
    }
  };

  const getState = () => {
    const storeFighters = JSON.parse(
      localStorage.getItem("fighters") || "null"
    );

    if (storeFighters) {
      fighters.value = storeFighters;
    } else {
      setFighters();
    }
  };

  const setFighters = () => {
    const values: Fighter[] = [];

    data.forEach((el, index) => {
      const item = {
        ...el,
        initiative: 1,
        currentHp: el.hp.average || el.hp,
        id: index,
        note: el.note || "",
        hp: el.hp.average || el.hp,
        tempHp: 0,
      };

      values.push(item);
    });

    fighters.value = values;
  };

  return { fighters, activeItem, saveState, getState, setFighters };
});
