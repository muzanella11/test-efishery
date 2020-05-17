<template>
  <div class="c-provinces">
    <v-select
      v-model="selected"
      :items="entries"
      :loading="isLoading"
      :disabled="disabled"
      item-text="province"
      return-object
      label="Provinsi"
    />
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
