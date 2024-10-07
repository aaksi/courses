<script setup>
const props = defineProps(['card'])
</script>

<template>
  <div class="c-card">
    <div class="c-card__inner">
      <a class="c-card__link" href="card.link"></a>
      <div class="c-card__img">
        <img :src="`../../public/products/${card.type}/${card.img}.png`" :alt="card.name" />
        <div class="c-card__btn">add to cart</div>
      </div>
      <div class="c-card__cnt">
        <div class="c-card__name">{{ card.name }}</div>
        <div class="c-card__price">{{ card.price }} USD</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-card__inner {
  position: relative;
  &:hover {
  }
}
.c-card__link {
  position: absolute;
  inset: 0;
  z-index: 10;
}
.c-card__img {
  width: 100%;
  height: 726px;
  position: relative;
  border-radius: 500px;
  margin-bottom: 30px;
  overflow: hidden;
  img {
    min-height: 100%;
    width: 100%;
    // height: 100%;
    // width: 100%;
    // max-width: 100%;
    // max-height: 100%;
    transition: all 0.3s ease-in-out;
    transform: scale(1.2);
    .c-card__inner:hover & {
      transform: scale(1);
    }
  }
}

.c-card__cnt {
  text-align: center;
}
.c-card__name {
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
}
.c-card__price {
  font-weight: 500;
  font-size: 18px;
}
</style>
