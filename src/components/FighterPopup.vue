<template>
  <section class="popup">
    <div class="popup__layout" @click="closePopup"></div>

    <div class="popup__content">
      <button class="button popup__button" @click="closePopup"></button>
      <div class="popup__inner">
        <h2 class="header">Add fighter</h2>

        <form>
          <ul>
            <li v-for="(value, index) in formValue" :key="index">
              <FormInput :item="value" />
            </li>
          </ul>

          <!-- <label class="label">
            Incert json from 5e.tools
            <input
              @change="handleUpload"
              type="file"
              accept="application/json"
            />
          </label> -->

          <button type="submit" @click.prevent="handleSubmit" class="button">
            Add fighter
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FormInput from "./FormInput.vue";
const props = defineProps(["togglePopup"]);

import { useInitiativeStore } from "../stores/initiative";
const store = useInitiativeStore();

const closePopup = () => {
  props.togglePopup();
};

const formValue = ref({
  name: { value: "", label: "Name", type: "input" },
  // ac: { value: 10, label: "Armour class", type: "input" },
  hp: { value: 10, label: "Hit points", type: "input" },
  dex: { value: 10, label: "Dexterity", type: "input" },
  note: { value: "", label: "Note", type: "input" },
});

// const handleUpload = (event: Event) => {
//   const target = event.target as HTMLInputElement;
//   const file = target.files?.[0];
//   //
//   debugger;
//   if (file) {
//   }
// };

const handleSubmit = () => {
  const element = [
    {
      name: formValue.value.name.value,
      ac: [formValue.value.ac.value],
      dex: formValue.value.dex.value,
      note: formValue.value.note.value,
      hp: formValue.value.hp.value,
    },
  ];

  store.setFighters(element);
  store.saveState();

  closePopup();
};
</script>

<style scoped lang="scss">
.popup__layout {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #4b465c;
  opacity: 0.5;
  overflow: hidden;
  z-index: 10;
}

.popup__content {
  position: fixed;
  top: 1.75rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 100;
  width: 100%;
  max-width: 35rem;
  background-color: #fff;
  border-radius: 0.375rem;
  color: #5d596c;
  line-height: 1.47;
  padding: 1.5rem;
}

.button {
  @include mainButton;
  max-width: 200px;
}

.popup__button {
  @include closeButton;
}

.popup__inner {
  max-height: 70vh;
  padding: 2px 5px 2px 2px;
}

.header {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.47;
  margin-bottom: 1.4rem;
  color: #5d596c;
}

.label {
  @include label;
}
</style>
