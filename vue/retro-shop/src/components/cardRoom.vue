<script setup>
import { defineProps, inject } from 'vue'
const props = defineProps({
  card: {
    type: Object,
    required: true
  }
})

const cardLink = inject('cardLink')
</script>
<template>
  <div class="c-card-room">
    <div class="c-card-room__inner">
      <router-link class="c-card-room__link" c :to="'/rooms/' + cardLink(card.name)"></router-link>
      <div class="c-card-room__img">
        <img :src="`/img/rooms/${card.img}.jpg`" :alt="card.name" />
      </div>
      <div class="c-card-room__cnt">
        <div class="c-card-room__name">
          {{ card.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-card-room__inner {
  aspect-ratio: 1/1;
  max-width: 500px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.c-card-room__link {
  position: absolute;
  inset: 0;
  display: block;
  z-index: 10;
}
.c-card-room__img {
  position: absolute;
  inset: 0;
  filter: brightness(0.6);
  transition: all 0.5s ease-in-out;
  transform: scale(1.1);
  img {
    width: 100%;
    height: 100%;
  }

  .c-card-room__inner:hover & {
    transform: scale(1);
    filter: brightness(0.7);
  }
}
.c-card-room__cnt {
  position: relative;
}
.c-card-room__name {
  font-size: 62px;
  color: var(--c-white);
}
</style>
