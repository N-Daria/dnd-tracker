<template>
  <li
    :class="{
      item: true,
      _active: props.fighter.id === store.activeItem?.id,
    }"
    @click="setActiveItem"
  >
    <input
      type="number"
      class="input"
      min="1"
      max="50"
      :value="props.fighter.initiative"
      @change.stop="changeInitiavive"
    />

    <p class="fighter__name">{{ props.fighter.name }}</p>

    <div class="fighter__info">
      <p class="fighter__hp">
        {{ props.fighter.currentHp }}
        /
        {{ props.fighter.hp }}

        <span v-show="props.fighter.tempHp"> + {{ props.fighter.tempHp }}</span>
      </p>

      <input
        class="input fighter__damage"
        type="number"
        v-model="phChanging"
        min="1"
        max="1000"
      />

      <button
        @click.stop="getDamage"
        class="button__hp button__hp_damage"
      ></button>
      <button
        @click.stop="getHalfDamage"
        class="button__hp button__hp_half"
      ></button>
      <button @click.stop="getHeal" class="button__hp button__hp_heal"></button>
      <button
        @click.stop="getTempHp"
        class="button__hp button__hp_temp"
      ></button>
    </div>

    <button
      class="button button__hp button_delete"
      @click.stop="deleteFighter"
    ></button>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useInitiativeStore } from "../stores/initiative";
const store = useInitiativeStore();
const props = defineProps(["fighter"]);

const phChanging = ref();

const setActiveItem = () => {
  store.activeItem = props.fighter;
};

const changeInitiavive = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (store.activeItem) {
    store.activeItem.initiative = Number(target.value);
  }
};

const calculateDamage = (damage: number) => {
  const activeFighter = store.activeItem;

  if (activeFighter) {
    if (activeFighter.tempHp && activeFighter.tempHp > damage) {
      activeFighter.tempHp -= damage;

      return;
    } else if (activeFighter.tempHp) {
      activeFighter.currentHp =
        activeFighter.currentHp - damage + activeFighter.tempHp;

      activeFighter.tempHp = 0;

      return;
    } else if (activeFighter.currentHp < damage) {
      activeFighter.currentHp = 0;

      return;
    }

    activeFighter.currentHp -= damage;
  }
};

const getDamage = () => {
  const damage = Number(phChanging.value);
  calculateDamage(damage);
  phChanging.value = 0;
};

const getHalfDamage = () => {
  const damage = Math.floor(Number(phChanging.value) / 2);
  calculateDamage(damage);
  phChanging.value = 0;
};

const getHeal = () => {
  if (store.activeItem) {
    store.activeItem.currentHp += Number(phChanging.value);

    if (store.activeItem.currentHp > store.activeItem.hp) {
      store.activeItem.currentHp = store.activeItem.hp;
    }
  }

  phChanging.value = 0;
};

const getTempHp = () => {
  if (store.activeItem) {
    if (store.activeItem.tempHp > Number(phChanging.value)) {
      return;
    }

    store.activeItem.tempHp = Number(phChanging.value);
  }

  phChanging.value = 0;
};

const deleteFighter = () => {
  store.deleteFighter(props.fighter.id);
};
</script>

<style scoped lang="scss">
.item {
  display: flex;
  gap: 10px;
  margin: 10px 0;
  align-items: center;
  border-radius: 0.375rem;
}

.item:hover {
  cursor: pointer;
  background-color: #7367f014;
}

.item._active {
  outline: 1px solid #7367f0;
}

.input {
  @include input;
  width: 30px;
  text-align: center;
}

.fighter__name {
  width: 100%;
  max-width: 25%;
  font-weight: bold;
}

.fighter__info {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}

.fighter__hp {
  width: 100%;
  max-width: 15%;
  min-width: 70px;
}

.button__hp {
  @include mainButton;

  max-width: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 22px;
  height: 30px;
}

.button__hp_damage {
  background-image: url("../assets/images/crossedSwords.svg");
  background-color: red;
}

.button__hp_heal {
  background-image: url("../assets/images/health-potion.svg");
  background-color: forestgreen;
}

.button__hp_half {
  background-image: url("../assets/images/cracked-shield.svg");
}

.button__hp_temp {
  background-image: url("../assets/images/eternal-love.svg");
  background-color: dodgerblue;
}

.button_delete {
  background-image: url("../assets/images/delete.svg");
  background-color: black;
}
</style>
