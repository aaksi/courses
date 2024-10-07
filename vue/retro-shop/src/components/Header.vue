<script setup></script>

<template>
  <div class="g-header">
    <div class="container">
      <div class="g-header__inner">
        <div class="g-header__logo">
          <img src="../../public/logo.png" alt="Логотип" />
        </div>
        <ul class="g-header__links">
          <li class="g-header__item">
            <a href="#" class="g-header__link">Каталог</a>
          </li>
          <li class="g-header__item">
            <a href="#" class="g-header__link"
              >Корзина <span class="g-header__link-count">0</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.g-header {
  padding-top: 60px;
}

.g-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.g-header__logo {
}
.g-header__links {
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 40px;
}
.g-header__link {
  &:has(.g-header__link-count) {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
.g-header__link-count {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: var(--c-text);
  color: var(--c-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.g-header__logo {
  width: 97px;
  height: 35px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
