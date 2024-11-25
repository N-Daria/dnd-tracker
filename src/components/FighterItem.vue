<template>
  <li class="item">
    <input
      :value="props.fighter.initiative"
      @input="(event) => emit('update-initiative', (event.target as HTMLInputElement).value)"
      type="number"
      class="input"
    />

    <p>{{ props.fighter?.name }}</p>

    <section class="info"></section>
  </li>
</template>

<script setup lang="ts">
const props = defineProps(["fighter"]);
const emit = defineEmits(["update-initiative"]);
</script>

<style scoped lang="scss">
.item {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

.input {
  @include input;

  max-width: 30px;
  text-align: center;
}
</style>
