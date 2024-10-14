<script setup>
import { inject } from 'vue'

const catalogCategories = inject('catalogCategories')
const categoryActivated = inject('categoryActivated')
</script>

<template>
  <div class="c-catalog-nav">
    <ul class="c-catalog-nav__list">
      <template v-for="category in catalogCategories" :key="category.id">
        <li class="c-catalog-nav__item" v-if="!category.active">
          <a href="#" class="c-catalog-nav__link" @click.prevent="categoryActivated(category.id)">{{
            category.name
          }}</a>
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.c-catalog-nav {
}
.c-catalog-nav__list {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  gap: 30px;
}
.c-catalog-nav {
  margin-bottom: 50px;
  font-size: 20px;
  padding: 30px 0;
  position: relative;
  // border-top: 1px solid var(--c-border);
  // border-bottom: 1px solid var(--c-border);
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    background-color: var(--c-border);
    left: calc(((100vw - var(--cntnr-width)) / 2) * -1);
    width: 100vw;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
}
</style>
