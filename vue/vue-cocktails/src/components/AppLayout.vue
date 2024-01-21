<script setup>
import { computed } from "vue"
import { useRouter, useRoute } from "vue-router"
import { Back } from "@element-plus/icons-vue"
import { ROUTES_PATH } from "@/constants/router"
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFunc: {
    type: Function,
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true,
  },
})
const route = useRoute()
const router = useRouter()

const routerName = computed(() => route.name)

function goForCocktailRandom(){
  router.push(ROUTES_PATH.RANDOM)

  if(routerName.value === ROUTES_PATH.RANDOM){
    router.go(0)
  }
}

function goBack(){
  props.backFunc ? props.backFunc() : router.go(-1)
}
</script>
<template>
  <div class="root">
    <div :style="`background-image: url(${props.imgUrl})`" class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button
          v-if="props.isBackButtonVisible"
          @click="goBack"
          class="back"
          type="primary"
          :icon="Back"
          circle
        />
        <el-button @click="goForCocktailRandom" class="btn">Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.root {
  display: flex;
  background-color: $bg;
  min-height: 100dvh;
}

.img {
  width: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
.main {
  width: 50%;
  padding: 30px 40px;
  position: relative;
}
.btn {
  position: absolute;
  top: 30px;
  right: 40px;
  background-color: $accent;
  border-color: $accent;
  color: $text;
  font-size: 16px;
  font-family: $ff;
  &:hover,
  &:active {
    background-color: darken($accent, 10%);
    border-color: darken($accent, 10%);
  }
}
.btns {
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.back {
  background-color: transparent;
  border-color: $text;
  &:hover {
    border-color: $accent;
  }
}
</style>
