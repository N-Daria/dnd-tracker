<template>
  <label class="item">
    <p class="label">{{ item.label }}</p>
    <input class="input" type="text" v-model="item.value" />
  </label>
</template>

<script setup lang="ts">
const props = defineProps(["item"]);
</script>

<style scoped lang="scss">
.item {
  display: block;
  height: 100%;
  margin-bottom: 16px;
}

.label {
  @include label;
}

.input {
  @include input;
}
</style>
