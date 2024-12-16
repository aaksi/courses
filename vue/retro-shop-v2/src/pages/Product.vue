<script setup>
import { ref, onMounted, computed } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import AppBtn from '@/components/AppBtn.vue'
import AppSeparator from '@/components/AppSeparator.vue'
import Cards from '@/components/ProductsPreview.vue'
import { useRoute } from 'vue-router'
import { CommonService } from '@/service'
import { useCartStore } from '@/stores/root'

const product = ref(null)
const route = useRoute()

const cartStore = useCartStore()
const cartItems = computed(() => cartStore.cartItems)
const isItemInCart = computed(() =>
  cartItems.value.some((el) => el.id === product.value.id)
)

async function fetchProduct() {
  try {
    product.value = await CommonService.getProduct(route.params.id)
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  await fetchProduct()
  console.log(product.value)
})
</script>
<template>
  <AppLayout :header-absolute="true">
    <template #g-main>
      <div class="c-product" v-if="product">
        <div class="c-product__wrap">
          <div class="container">
            <div class="c-product__inner">
              <div class="c-product__box c-product__box--top">
                <div class="c-product__img">
                  <img
                    :src="`../../public/img/products/${product.type}/${product.img}.png`"
                    :alt="product.name"
                  />
                </div>
                <div class="c-product__cnt">
                  <div class="c-product__name">{{ product.name }}</div>
                  <div class="c-product__cnt-box">
                    <div class="c-product__price">{{ product.price }} USD</div>
                    <div class="c-product__descr">
                      {{ product.description }}
                    </div>
                  </div>
                  <div
                    class="c-product__btn"
                    @click="cartStore.addToCart(product)"
                  >
                    <AppBtn :class="isItemInCart ? 'is-disabled' : ''">
                      {{ isItemInCart ? 'ADDED' : 'ADD' }} TO CART
                    </AppBtn>
                  </div>
                </div>
              </div>
              <div class="c-product__box">
                <div class="c-product__info-title">Description</div>
                <div class="c-product__info-descr">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam consectetur sapiente sequi laborum sunt optio facere
                    voluptatum esse necessitatibus. Ad velit facilis neque
                    aliquam cum exercitationem quis sunt nostrum nobis?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam consectetur sapiente sequi laborum sunt optio facere
                    voluptatum esse necessitatibus. Ad velit facilis neque
                    aliquam cum exercitationem quis sunt nostrum nobis?
                  </p>
                  <ul class="ul">
                    <li>Proin fermentum leo vel orci porta non pulvinar</li>
                    <li>Diam phasellus vestibulum</li>
                    <li>Quisque egestas diam in arcu cursus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppSeparator />
      <Cards>
        <template #title>Related</template>
      </Cards>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped>
.c-product__box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  &--top {
    min-height: 100vh;
    align-items: center;
  }

  & + & {
    margin-top: 120px;
  }
}
.c-product__img {
  min-height: 100vh;
  height: 100%;
  position: relative;
  margin-left: calc((100vw - var(--cntnr-width)) / 2 * -1);
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
}
.c-product__cnt {
  max-width: 80%;
  margin: 0 auto;
  padding: 100px 0;
}
.c-product__name {
  font-size: 128px;
  line-height: 1;
  & + * {
    margin-top: 32px;
  }
}
.c-product__price {
  font-family: var(--f-text);
  & + * {
    margin-top: 16px;
  }
}
.c-product__cnt-box {
  font-family: var(--f-text);
  & + * {
    margin-top: 48px;
  }
}
.c-product__info-title {
  text-transform: uppercase;
  font-size: 32px;
}
.c-product__info-descr {
  font-size: 24px;
  font-family: var(--f-text);
  p + p {
    margin-top: 10px;
  }
  p + ul {
    margin-top: 25px;
  }
}
</style>
