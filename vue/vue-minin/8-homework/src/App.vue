<template>
  <div class="container column">
    <app-form-control @block-added="addBlock"></app-form-control>
    <app-cnt :blocks="blocks"></app-cnt>
  </div>
  <div class="container">
    <app-comments></app-comments>
    <app-loader></app-loader>
  </div>
</template>

<script>
import AppCnt from "./components/AppCnt.vue"
import AppComments from "./components/AppComments.vue"
import AppFormControl from "./components/AppFormControl.vue"
import AppLoader from "./components/AppLoader.vue"

export default {
  data() {
    return {
      blocks: [],
    }
  },
  methods: {
    addBlock(block) {
      this.blocks.push(block)
      console.log(block)
    },
  },
  components: {
    AppFormControl,
    AppCnt,
    AppComments,
    AppLoader,
  },
}
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
