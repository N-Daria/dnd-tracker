<script setup lang="ts">
import FighterItem from "./components/FighterItem.vue";
import Info from "./components/FighterInfo.vue";
import { computed, onMounted, ref } from "vue";

import { useInitiativeStore } from "./stores/initiative";
import FighterPopup from "./components/FighterPopup.vue";

const store = useInitiativeStore();

const fighters = computed(() => store.fighters);
const isPopupOpen = ref(false);

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

const togglePopup = () => {
  isPopupOpen.value = !isPopupOpen.value;
};

function getRandomImage() {
  const images = import.meta.glob(
    "@/assets/images/Карты/Бронза/*.{png,jpg,gif}"
  );

  const keys = Object.keys(images);

  const randomIndex = Math.floor(Math.random() * keys.length);

  console.log(keys[randomIndex]);

  return keys[randomIndex];
}

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
      <div class="fighters">
        <div class="button__container">
          <button class="button" @click="calculateInitiative" type="button">
            Roll initiative
          </button>

          <button class="button" @click="sortFighters" type="button">
            Sort
          </button>

          <!-- <button class="button" @click="getRandomImage" type="button">
          Get inspiration card
        </button> -->
        </div>

        <ul class="fighters__list">
          <FighterItem
            v-for="(fighter, index) in fighters"
            :fighter
            :key="index"
          />
        </ul>

        <div class="button__container">
          <button class="button button_add" @click="togglePopup" type="button">
            Add fighter
          </button>
        </div>
      </div>
    </section>

    <Info v-show="store.activeItem" />

    <FighterPopup v-show="isPopupOpen" :togglePopup />
  </main>
</template>

<style scoped lang="scss">
.main {
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  gap: 20px;

  flex-wrap: wrap;
}

.order {
  @include box;
  @include mainText;

  min-width: 590px;
}

.fighters__list {
  border-top: 1px solid #dbdade;
  border-bottom: 1px solid #dbdade;
}

.button__container {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  gap: 0 20px;
}

.button {
  @include mainButton;
  margin: 20px 0;
  max-width: 200px;
}

.button_add {
  margin: 20px 0;
  max-width: 200px;
}

@media (max-width: 768px) {
  .main {
    max-width: 100%;
    margin: 20px 7px;
  }

  .order {
    padding: 12px;
  }
}
</style>
