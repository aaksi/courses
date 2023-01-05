<template>
  <div class="board-wrap">
    <div class="board">
      <Board-item
        v-for="field in fields"
        :key="'item-' + field.id"
        :field="field"
        :game-status="gameStatus"
        @selectField="selectField($event)"
      ></Board-item>
    </div>

    <p class="difficult">
      Сложность: <b>{{ difficult }}</b>
    </p>
    <p class="win" v-if="isWin">Поздравляем! Продолжаем играть!</p>
    <p class="fail" v-if="isFail">Вы проиграли. Попробуйте еще раз!</p>
    <button class="btn" @click="start" :disabled="!canStartGame">Старт</button>
  </div>
</template>

<script>
import BoardItem from "@/components/BoardItem.vue"
import useGameInit from "@/components/composables/useGameInit"
import useGameStart from "@/components/composables/useGameStart"
import useGameProcess from "@/components/composables/useGameProcess"
import { GAME_STATUS } from "@/constants"
import { ref } from "vue"

export default {
  name: "BoardGame",
  props: {},
  components: {
    BoardItem,
  },
  setup() {
    const number = 25
    const gameStatus = ref(GAME_STATUS.NONE)

    const { difficult, fields, init } = useGameInit(number)

    const { start, canStartGame } = useGameStart(
      init,
      fields,
      difficult,
      number,
      gameStatus
    )

    const { selectField, isFail, isWin } = useGameProcess(fields, gameStatus, difficult, start)

    return {
      difficult,
      fields,
      init,
      number,
      start,
      gameStatus,
      canStartGame,
      selectField,
      isFail,
      isWin
    }
  },

  methods: {},
}
</script>

<style scoped>
.board-wrap {
  margin-bottom: 100px;
}
.board {
  width: 300px;
  background-color: #eee;

  margin: 0 auto;
}
.btn {
  background-color: #42b983cc;
  color: #fff;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  margin: 10px 0;
  outline: none;
  transition: all 0.35s ease-in-out;
}

.btn:hover {
  transform: scale(1.1);
  transition: all 0.15s ease-in-out;
}
.btn:active {
  transform: scale(1);
}
.btn:disabled {
  opacity: 0.5;
}
.win {
  color: #42b983;
  font-weight: 700;
}
.fail {
  color: #ff000055;
  font-weight: 700;
}
</style>
