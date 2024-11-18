<script setup>
import ProductsPreview from '../components/ProductsPreview.vue'
</script>
<template>
  <section class="c-hero-section section section--hero">
    <div class="c-hero-section__wrap">
      <div class="c-hero__bg" style="background-image: url('../../public/hero-bg.jpg')"></div>
      <div class="container">
        <div class="c-hero-section__inner">
          <h1 class="c-hero-section__title">Design Furniture</h1>
          <router-link class="c-hero-section__btn e-btn" :to="'/catalog'">Shop now</router-link>
        </div>
      </div>
    </div>
  </section>

  <ProductsPreview :previewName="'Featured'"></ProductsPreview>
  <div class="section">
    <div class="c-info">
      <div class="container">
        <div class="c-info__inner">
          <div class="c-info__box">
            <div class="c-info__title e-title">Lorem ipsum</div>
            <div class="c-info__cnt">
              <div class="c-info__descr">
                <p>
                  Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et
                  malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem
                  viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam.
                  Velit egestas dui id ornare arcu odio ut. Felis donec et odio pellentesque diam
                  volutpat commodo sed egestas. Auctor eu augue ut lectus arcu bibendum at varius.
                  Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.
                </p>
                <p>
                  Aenean euismod elementum nisi quis eleifend. Vitae purus faucibus ornare
                  suspendisse sed nisi lacus. Mattis enim ut tellus elementum sagittis. Lectus quam
                  id leo in vitae turpis. Lobortis scelerisque fermentum dui faucibus in ornare
                  quam.
                </p>
                <p>
                  Proin fermentum leo vel orci porta non pulvinar. Diam phasellus vestibulum lorem
                  sed risus ultricies. Quisque egestas diam in arcu cursus. Morbi tincidunt ornare
                  massa eget egestas. Scelerisque eu ultrices vitae auctor eu.
                </p>
              </div>
              <router-link :to="'/catalog'" class="e-btn">Shop now</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
