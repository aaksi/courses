<template>
  <div class="app">
    
    <img alt="Vue logo" class="logo" src="./assets/logo.png" />
    <h1 class="h1">Remember Me</h1>
    <p>Запомни и открой все зеленые клетки</p>

    <Board-game></Board-game>

  </div>
</template>

<script>
import BoardGame from '@/components/BoardGame.vue'
export default {
  name: "App",
  components: {
    BoardGame,
  },
}
</script>

<style scoped>
.app{
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 40px;
}
.logo {
  width: 100px;
}
</style>
