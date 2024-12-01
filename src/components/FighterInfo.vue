<template>
  <section class="info" v-if="currentActive">
    <button class="close" @click="closeSection"></button>

    <textarea class="input" v-model="currentActive.note"></textarea>
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
}

.close {
  @include closeButton;
}

.input {
  @include input;
  height: 100%;
}
</style>
