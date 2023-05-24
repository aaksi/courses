<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Это заголовок модалки</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
      officiis. Sequi harum ad magnam deserunt quas incidunt excepturi vitae
      voluptas?
    </p>
  </div>
</template>

<script>
export default {
  emits: ['close']
}
</script>

<style lang="scss" scoped></style>
