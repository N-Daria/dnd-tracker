<template>
  <section class="popup">
    <div class="popup__layout" @click="closePopup"></div>

    <div class="popup__content">
      <button class="button popup__button" @click="closePopup"></button>
      <div class="popup__inner">content</div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps(["togglePopup"]);

const closePopup = () => {
  props.togglePopup();
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
  z-index: 100;
}

.popup__content {
  position: fixed;
  top: 1.75rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 105;
  width: 100%;
  max-width: 35rem;
  background-color: #fff;
  border-radius: 0.375rem;
  color: #5d596c;
  line-height: 1.47;
  padding: 1.5rem;
}

.popup__button {
  @include closeButton;
}

.popup__inner {
  max-height: 70vh;
  padding: 2px 5px 2px 2px;
}
</style>
