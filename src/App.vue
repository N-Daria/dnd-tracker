<script setup lang="ts">
import FighterItem from "./components/FighterItem.vue";

import { useInitiativeStore } from "./stores/initiative";
import type { Fighter } from "./stores/interfaces";
const store = useInitiativeStore();
const fighters = store.fighters;

function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateModifier(stat: number): number {
  return Math.floor((stat - 10) / 2);
}

const sortFighters = () => {
  fighters.sort((a, b) => {
    if (a.initiative !== b.initiative) {
      return b.initiative - a.initiative;
    } else {
      return b.dex - a.dex;
    }
  });
};

const calculateInitiative = () => {
  for (let i = 0; i < fighters.length; i++) {
    fighters[i].initiative =
      getRandomInteger(1, 20) + calculateModifier(fighters?.[i]?.dex);
  }
};

function updateInitiative(fighter: Fighter, newValue: number) {
  fighter.initiative = Number(newValue);
}
</script>

<template>
  <main class="main">
    <section class="order">
      <ul>
        <FighterItem
          v-for="(fighter, index) in fighters"
          :fighter
          :key="index"
          @update-initiative="updateInitiative(fighter, $event)"
        />
      </ul>

      <button class="button" @click="calculateInitiative">
        Roll initiative
      </button>

      <button class="button" @click="sortFighters">Sort</button>
    </section>

    <section class="info">info</section>
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

.order,
.info {
  @include box;
  @include mainText;
}

.button {
  @include mainButton;
  margin: 20px 0 0;
}
</style>
