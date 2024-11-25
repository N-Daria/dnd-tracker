<script setup lang="ts">
import FighterItem from "./components/FighterItem.vue";
import { useInitiativeStore } from "./stores/initiative";
const store = useInitiativeStore();
const fighters = store.fighters;

function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getModificator = (value: number) => {
  return;
};

const calculateInitiative = () => {
  console.log(fighters);
  debugger;

  for (let i = 0; i < fighters.length; i++) {
    fighters[i].initiative =
      getRandomInteger(1, 20) + getModificator(fighters?.[i]?.dex);
  }
};
</script>

<template>
  <main class="main">
    <section class="order">
      <ul>
        <FighterItem v-for="(fighter, index) in fighters" :fighter :key="index">
        </FighterItem>
      </ul>

      <button class="button" @click="calculateInitiative">
        Roll initiative
      </button>
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
