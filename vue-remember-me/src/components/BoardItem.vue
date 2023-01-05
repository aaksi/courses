<template>
  <span :class="getBoardItemClasses" @click="select(field.id)"></span>
</template>

<script>
import { GAME_STATUS } from "@/constants"
import { computed } from "@vue/runtime-core"
import { FIELD } from "@/constants"

export default {
  name: "BoardItem",
  props: {
    field: {
      type: Object,
      required: true,
    },
    gameStatus: {
      type: Number,
      required: false,
      default: GAME_STATUS.NONE,
    },
  },
  setup(props) {
    const getBoardItemClasses = computed(() => {
      let classes = "item "

      if (
        (props.field.value === FIELD.FILLED &&
          props.gameStatus === GAME_STATUS.PREVIEW) ||
        (props.field.clicked && props.field.value === FIELD.FILLED)
      ) {
        classes += "active"
      }

      if (
        props.field.clicked && props.field.value === FIELD.EMPTY
      ){
        classes += ' error'
      }
        return classes
    })

    return {
      getBoardItemClasses,
    }
  },

  methods: {
    select(id) {
      if (this.gameStatus === GAME_STATUS.STARTED) {
        this.$emit("selectField", id)
      }
    },
  },
}
</script>

<style scoped>
.item {
  position: relative;
  width: 50px;
  height: 50px;
  background: #ccc;
  display: inline-block;
  margin: 5px;
  cursor: pointer;

  transition: all 0.35s ease-in-out;
  transform-style: preserve-3d;
}
.item.active {
  background-color: #42b983cc;
  transform: rotateX(180deg);
}
.item.error{
  background-color: #ff000055;
  transform: rotateX(180deg);
}
</style>
