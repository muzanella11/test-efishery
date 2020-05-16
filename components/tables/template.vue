<template>
  <v-data-table
    :headers="headers"
    :items="entries"
    :items-per-page="limit"
    class="elevation-1"
  />
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
