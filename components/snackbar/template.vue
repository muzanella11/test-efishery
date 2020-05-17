<template>
  <v-snackbar
    :value="isShown"
    :right="true"
    :timeout="timeout"
    :top="true"
    :color="snackbarType"
  >
    {{ messages }}
    <v-btn
      dark
      text
      @click="closeSnackbar"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
