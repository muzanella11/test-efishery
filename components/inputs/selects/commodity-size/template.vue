<template>
  <div class="c-provinces">
    <v-select
      v-model="selected"
      :items="entries"
      :loading="isLoading"
      :disabled="disabled"
      item-text="size"
      item-value="size"
      label="Ukuran"
    />
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
