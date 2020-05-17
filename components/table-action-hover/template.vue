<template>
  <div class="c-table-action-hover table__action-hover">
    <ul class="action-hover">
      <li>
        <a
          href="javascript:;"
          @click="goToDetail(entry)"
        >
          <v-icon>
            mdi-eye-outline
          </v-icon>
        </a>
      </li>
      <li>
        <a
          href="javascript:;"
          @click="goToUpdate(entry)"
        >
          <v-icon>
            mdi-square-edit-outline
          </v-icon>
        </a>
      </li>
      <li>
        <a
          href="javascript:;"
          @click="goToDelete(entry)"
        >
          <v-icon>
            mdi-trash-can-outline
          </v-icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
