<script setup>
import AppLayout from '@/layouts/AppLayout.vue'
import HeroSection from '../components/HeroSection.vue'
import ProductsPreview from '../components/ProductsPreview.vue'
import Info from '../components/Info.vue'
import Bnr from '../components/Bnr.vue'
// import Rooms from '../components/Rooms.vue'
</script>

<template>
  <AppLayout :headerAbsolute="true" :headerColorInverse="true">
    <template #g-main>
      <section class="section section--top">
        <HeroSection :bg="'../../public/img/hero/bg1.jpg'">
          <template #title>Design Furniture</template>
          <template #btn>
            <router-link
              class="c-hero-section__btn e-btn e-btn--inverse"
              :to="'/catalog'"
              >Shop now</router-link
            >
          </template>
        </HeroSection>
      </section>

      <section class="section">
        <ProductsPreview>
          <template #title>Featured</template>
        </ProductsPreview>
      </section>

      <section class="section">
        <Info>
          <template v-slot:title>Lorem ipsum</template>
          <template v-slot:descr>
            <p>
              Mauris cursus mattis molestie a iaculis at erat pellentesque
              adipiscing. Netus et malesuada fames ac turpis egestas integer
              eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel
              fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas
              dui id ornare arcu odio ut. Felis donec et odio pellentesque diam
              volutpat commodo sed egestas. Auctor eu augue ut lectus arcu
              bibendum at varius. Rhoncus mattis rhoncus urna neque viverra
              justo nec ultrices.
            </p>
            <p>
              Aenean euismod elementum nisi quis eleifend. Vitae purus faucibus
              ornare suspendisse sed nisi lacus. Mattis enim ut tellus elementum
              sagittis. Lectus quam id leo in vitae turpis. Lobortis scelerisque
              fermentum dui faucibus in ornare quam.
            </p>
            <p>
              Proin fermentum leo vel orci porta non pulvinar. Diam phasellus
              vestibulum lorem sed risus ultricies. Quisque egestas diam in arcu
              cursus. Morbi tincidunt ornare massa eget egestas. Scelerisque eu
              ultrices vitae auctor eu.
            </p>
          </template>
        </Info>
      </section>

      <section class="section">
        <Bnr></Bnr>
      </section>
    </template>
  </AppLayout>

  <!--  -->

  <!-- 

  <Rooms></Rooms>  -->
</template>

<style lang="scss" scoped></style>
