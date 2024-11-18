<script setup></script>

<template>
  <div class="section">
    <div class="c-info">
      <div class="container">
        <div class="c-info__inner">
          <div class="c-info__box">
            <div class="c-info__title e-title">
              <slot name="title"></slot>
            </div>
            <div class="c-info__cnt">
              <div class="c-info__descr">
                <slot name="descr"></slot>
              </div>
              <router-link :to="'/catalog'" class="e-btn">Shop now</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-info__title {
  font-size: 128px;
}
.c-info__descr {
  font-size: 20px;
  font-family: var(--f-text);
}
.c-info__cnt {
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: start;
}
.c-info__box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
}
.c-info__title {
  max-width: 80%;
  line-height: 1.1;
}
</style>
