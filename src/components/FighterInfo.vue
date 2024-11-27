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
  background-color: #fff;
  border-radius: 0.375rem;
  padding: 0.44rem;
  box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
  z-index: 1;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  transform: translate(23px, -25px);
  width: 40px;
  height: 40px;
  background-image: url(./src/assets/images/closeIcon.svg);
  background-position: center;
  background-repeat: no-repeat;
}

.close:hover {
  transform: translate(20px, -20px);
}

.input {
  @include input;
  height: 100%;
}
</style>
