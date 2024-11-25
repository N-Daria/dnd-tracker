<template>
  <li>
    <p>{{ props.fighter?.initiative }}</p>

    <p>{{ props.fighter?.name }}</p>

    <section class="info"></section>
  </li>
</template>

<script setup lang="ts">
const props = defineProps(["fighter"]);
</script>

<style scoped></style>
