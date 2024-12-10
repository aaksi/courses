<script setup></script>
<template>
  <div class="g-footer">
    <div class="container">
      <div class="g-footer__inner">
        <div class="g-footer__logo">
          <img src="../../public/img/logo.png" alt="Логотип" />
        </div>
        <div class="g-footer__copyright">© 2023 All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.g-footer {
  margin-top: 100px;
  padding-top: 100px;
  border-top: 1px solid var(--c-border);
  padding-bottom: 40px;
}
.g-footer__inner{
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}
</style>
