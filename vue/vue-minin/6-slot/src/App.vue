<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-list>
      <template #default="slotProps">
        <span style="color: green">
          Item: {{ slotProps.iter }}
          <strong>{{ slotProps.idx + 1 }}</strong>
        </span>
      </template>

      <!-- <template #default="{idx,item}">
        <span style="color: green">
          Item: {{ iter }}
          <strong>{{ idx + 1 }}</strong>
        </span>
      </template> -->

    </app-list>

    <app-block>
      <p>Это самый важный текст для нового блока</p>

      <template #header>
        <h3>Это заголовок!</h3>
      </template>

      <template v-slot:footer>
        <hr />
        <small>Это футер</small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from "./AppBlock.vue";
import AppList from "./AppList.vue";

export default {
  components: {
    AppBlock,
    AppList,
  },
};
</script>

<style></style>
