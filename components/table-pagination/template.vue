<template>
  <div class="v-data-footer">
    <div class="v-data-footer__select">
      Rows per page:
      <v-select
        v-model="entry.limit"
        single-line
        :disabled="selectDisabled"
        :items="options.rowsPerPage"
      />
    </div>
    <div class="v-data-footer__pagination">{{ startData }}-{{ endData }} of {{ entry.limit }}</div>
    <div class="v-data-footer__icons-before">
      <v-btn
        icon
        :disabled="prevDisabled"
        @click="prevAction"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </div>
    <div class="v-data-footer__icons-after">
      <v-btn
        icon
        :disabled="nextDisabled"
        @click="nextAction"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
