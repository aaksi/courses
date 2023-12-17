<script setup>
import axios from 'axios'
import { ref, provide, watch, computed, inject } from 'vue'
import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
import InfoBlock from './InfoBlock.vue'

const isCreating = ref(false)
const orderId = ref(null)

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number
})

const { cart, closeDrawer } = inject('cart')

const createOrder = async () => {
  try {
    isCreating.value = true
    const { data } = await axios.post('https://c969c0d4a1032ddb.mokky.dev/orders', {
      items: cart.value,
      totalPrice: props.totalPrice
    })
    cart.value = []

    orderId.value = data.id
  } catch (err) {
    console.log(err)
  } finally {
    isCreating.value = false
  }
}

const cartIsEmpty = computed(() => cart.value.length === 0)
const disabledButton = computed(() => isCreating.value || cartIsEmpty.value)
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
  <div class="flex flex-col bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead />

    <div v-if="!totalPrice || orderId" class="flex h-full items-center">
      <InfoBlock
        v-if="!totalPrice && !orderId"
        title="Пустая корзина"
        descr="Добавьте хотя бы одну пару кроссовок, чтобы  сделать заказ."
        image-url="package-icon.png"
      />
      <InfoBlock
        v-if="orderId"
        title="Заказа оформлен"
        :descr="`Ваш заказ #${orderId} скоро будет передан курьерской доставке`"
        image-url="order-success-icon.png"
      />
    </div>
    <div v-else>
      <CartItemList />

      <div class="flex flex-col gap-4 my-7">
        <div class="flex justify-between gap-2">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ totalPrice }} р</b>
        </div>

        <div class="flex justify-between gap-2">
          <span>Налог 5%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ vatPrice }} р</b>
        </div>
        <button
          @click="createOrder"
          :disabled="disabledButton"
          class="bg-lime-500 w-full rounded-xl text-white py-3 cursor-pointer transition disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>
