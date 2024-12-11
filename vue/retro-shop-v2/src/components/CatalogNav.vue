<script setup>
import { ref, onMounted, computed } from 'vue'
import { CommonService } from '@/service'
import { useCatalogStore } from '@/stores/root'

const categories = ref()
const catalogStore = useCatalogStore()
const activeCategoryStore = computed(() => catalogStore.activeCategory)
const setActiveCategoryStore = catalogStore.setActiveCategory

function setDefaultCategoriesActive(categories) {
  categories.forEach((el) => {
    el.active = false
    if (el.name.toLowerCase() === 'all') el.active = true
  })
  return categories
}
function setCategoryActive(id) {
  setActiveCategoryStore(id)
  categories.value.forEach((el) => {
    el.active = false
    if (el.id === id) el.active = true
  })
}

onMounted(async () => {
  categories.value = await CommonService.getCategories()
  categories.value = setDefaultCategoriesActive(categories.value)
})
</script>

<template>
  <div class="c-catalog-nav">
    {{ activeCategoryStore }}
    <ul class="c-catalog-nav__list">
      <template v-for="category in categories" :key="category.id">
        <li class="c-catalog-nav__item">
          <a
            href="#"
            class="c-catalog-nav__link"
            :class="category.active ? 'is-active' : ''"
            @click.prevent="setCategoryActive(category.id)"
            >{{ category.name }}</a
          >
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
.c-catalog-nav__link {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--c-text);
    transition: var(--trns);
    opacity: 0;
  }
  &.is-active {
    &::before {
      opacity: 1;
    }
  }
}
</style>
