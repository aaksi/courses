<script setup></script>
<template>
  <div class="c-billboard">
    <div class="c-billboard__wrap">
      <div class="c-billboard__title">SOLVE</div>
      <div
        class="c-billboard__bg"
        style="background-image: url('../../public/img/billboard/billboard-bg.jpg')"
      ></div>
      <template v-for="(i, idx) in 6" :key="idx">
        <div
          class="c-billboard__img"
          :class="`c-billboard__img--${idx + 1}`"
          :style="{ backgroundImage: `url('../../public/img/billboard/billboard-${idx + 1}.jpg')` }"
        ></div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-billboard__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
}
.c-billboard__title {
  z-index: 10;
  font-size: 15vw;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--c-white);
  position: relative;
}
.c-billboard__wrap {
  position: relative;
  min-height: max(100vh, 900px);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.c-billboard__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.c-billboard__img {
  width: 16vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  z-index: 1;

  &:nth-child(1) {
    top: 15%;
    right: 16%;
  }
  &--1 {
    top: 15%;
    right: 16%;
  }
  &--2 {
    bottom: 20%;
    right: 0;
  }
  &--3 {
    bottom: 0;
    left: 16%;
    transform: translateY(50%);
  }
  &--4 {
    bottom: 10%;
    left: 0;
  }
  &--5 {
    top: 10%;
    left: 17%;
  }
  &--6 {
    top: 0;
    left: 33%;
    transform: translateY(-40%);
  }
}
</style>
