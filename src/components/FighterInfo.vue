<template>
  <section class="info" v-if="currentActive">
    <button class="close" @click="closeSection"></button>

    <textarea
      class="input input_textarea"
      v-model="currentActive.note"
    ></textarea>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useInitiativeStore } from "../stores/initiative";
const store = useInitiativeStore();

const currentActive = computed(() => store.activeItem);

const closeSection = () => {
  store.activeItem = null;
};
</script>

<style scoped lang="scss">
.info {
  @include box;
  @include mainText;
  position: relative;

  min-width: 590px;
}

.close {
  @include closeButton;
}

.input {
  @include input;
  height: 100%;
}

.input_textarea {
  min-height: 100px;
}
</style>
