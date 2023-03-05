<template>
  <div class="container pt-1">
    <div class="card">
      <async-component></async-component>
      <h2>Динамические и асинхронные компоненты</h2>

      <app-button
        ref="myBtn"
        :color="oneColor"
        @action="active = 'one'"
      >one</app-button>
      <app-button
        :color="twoColor"
        @action="active = 'two'"
        >two</app-button
      >
    </div>

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppAsyncComponent from './AppAsyncComponent.vue';
import AppButton from "./AppButton.vue";
import AppTextOne from './AppTextOne.vue';
import AppTextTwo from './AppTextTwo.vue';


export default {
  data() {
    return {
      active: "one", // two
    };
  },
  mounted(){
    // setTimeout(()=>{
    //   this.componentName = 'new comp name'
    // }, 1500)
    this.$refs.myBtn.bthLog()
  },
  computed:{
    // componentName(){
    //   // if(this.active === 'one'){
    //   //   return 'app-text-one'
    //   // }
    //   // else{
    //   //   return 'app-text-two'
    //   // }
    //   return 'app-text-' + this.active
    // },
    componentName:{
      get(){
        return 'app-text-' + this.active
      },
      set(value){
        console.log('componentName', value)
      }
    },
    oneColor(){
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor(){
      return this.active === 'two' ? 'primary' : ''
    },

  },

  components: {
    AppButton,
    AppTextOne,
    AppTextTwo
  },
};
</script>

<style l,
    AppAsyncComponentang="scss" scoped></style>
