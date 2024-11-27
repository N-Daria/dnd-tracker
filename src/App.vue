<script setup lang="ts">
import FighterItem from "./components/FighterItem.vue";
import Info from "./components/FighterInfo.vue";
import { computed, onMounted } from "vue";

import { useInitiativeStore } from "./stores/initiative";
const store = useInitiativeStore();
const fighters = computed(() => store.fighters);

function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateModifier(stat: number): number {
  return Math.floor((stat - 10) / 2);
}

const sortFighters = () => {
  fighters.value.sort((a, b) => {
    if (a.initiative !== b.initiative) {
      return b.initiative - a.initiative;
    } else {
      return b.dex - a.dex;
    }
  });
};

const calculateInitiative = () => {
  for (let i = 0; i < fighters.value.length; i++) {
    fighters.value[i].initiative =
      getRandomInteger(1, 20) + calculateModifier(fighters.value[i]?.dex);
  }
};

onMounted(() => {
  store.getState();

  setInterval(() => {
    store.saveState();
  }, 3000);
});
</script>

<template>
  <main class="main">
    <section class="order">
      <ul>
        <FighterItem
          v-for="(fighter, index) in fighters"
          :fighter
          :key="index"
        />
      </ul>

      <div class="button__container">
        <button class="button" @click="calculateInitiative">
          Roll initiative
        </button>

        <button class="button" @click="sortFighters">Sort</button>
      </div>
    </section>

    <Info v-show="store.activeItem" />
  </main>
</template>

<style scoped lang="scss">
.main {
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  gap: 20px;
}

.order {
  @include box;
  @include mainText;
}

.button__container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.button {
  @include mainButton;
  margin: 20px 0 0;
  max-width: 200px;
}
</style>
