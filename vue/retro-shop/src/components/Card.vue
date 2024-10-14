<script setup>
const props = defineProps(['card'])

</script>

<template>
  <div class="c-card">
    <div class="c-card__inner">
      <a class="c-card__link" href="card.link"></a>
      <div class="c-card__promo" v-if="card.promo">
        {{ card.promo }}
      </div>
      <div class="c-card__img">
        <img :src="`../../public/products/${card.type}/${card.img}.png`" :alt="card.name" />
        <div class="c-card__btn" @click='$emit("addToCart", card)'>add to cart</div>
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
  border: 5px solid transparent;
  transition: all 0.3s ease-in-out;

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
.c-card__btn {
  padding: 24px 40px;
  border-radius: 500px;
  background-color: var(--c-text);
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  z-index: 10;
  cursor: pointer;
  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
  .c-card:hover & {
    opacity: 1;
  }
}
.c-card__promo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--c-text);
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  top: 20px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
}
</style>
