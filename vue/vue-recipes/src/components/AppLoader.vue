<template>
  <transition appear>
    <div class="root">
      <div class="heading">Loading...</div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/index.scss';

.root {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($white, 0.8);
  z-index: 100;
}
.heading {
  // color: $violet;
  font-size: 28px;
  font-weight: 700;
}
</style>
