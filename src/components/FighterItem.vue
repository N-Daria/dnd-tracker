<template>
  <li class="item" @click="setActiveItem">
    <input type="number" class="input" v-model="props.fighter.initiative" />

    <p class="fighter__name">{{ props.fighter?.name }}</p>

    <div class="fighter__info">
      <p>
        {{ props.fighter?.currentHp }}
        /
        {{
          isFinite(props.fighter?.hp)
            ? props.fighter?.hp
            : props.fighter?.hp.average
        }}
      </p>
    </div>
  </li>
</template>

<script setup lang="ts">
import { useInitiativeStore } from "../stores/initiative";

const store = useInitiativeStore();

const props = defineProps(["fighter"]);

const setActiveItem = () => {
  store.activeItem = props.fighter;
};

// const updateInitiative = (value) => {
//   console.log(store.fighters);

//   debugger;

//   store.fighter.initiative = Number(value);
// };
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

.input {
  @include input;

  max-width: 30px;
  text-align: center;
}

.fighter__name {
  width: 100%;
  max-width: 25%;
}

.fighter__info {
  width: 100%;
}
</style>
