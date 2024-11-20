<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  bg: String
})
console.log(props.bg);

</script>

<template>
  <div class="c-hero-section">
    <div class="c-hero-section__wrap">
      <div class="c-hero__bg" :style="`background-image: url(${props.bg})`"></div>
      <div class="container">
        <div class="c-hero-section__inner">
          <h1 class="c-hero-section__title">
            <slot name='title'></slot>
          </h1>
          <!-- <router-link class="c-hero-section__btn e-btn" :to="'/catalog'">Shop now</router-link>-->
          <slot name='btn'></slot> 
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-hero-section__wrap{
  position: relative;
}
.c-hero__bg{
  position: absolute;
  inset: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
  filter: brightness(0.5);
}
.c-hero-section__inner{
  height: 100vh;

}
</style>
