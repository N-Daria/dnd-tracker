<script setup lang="ts">
import { useInitiativeStore } from "./stores/initiative";
const store = useInitiativeStore();
</script>

<template>
  <main class="main">
    <section class="order">
      <ul>
        <li v-for="fighter in store.fighters">{{ fighter }}</li>
      </ul>
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
</style>
