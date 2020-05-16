<template>
  <div class="l-list">
    <v-card>
      <v-card-text>
        <v-row
          no-gutters
          class="list__head"
        >
          <v-col
            cols="12"
            lg="3"
            sm="12"
            xs="12"
          >
            <v-text-field
              solo
              label="Search by ID or Commodity"
              prepend-inner-icon="mdi-magnify"
            />
          </v-col>

          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          />

          <v-col
            cols="12"
            lg="3"
            sm="12"
            xs="12"
            class="text-lg-right"
          >
            <v-btn
              color="primary"
            >
              + Tambah
            </v-btn>
          </v-col>
        </v-row>

        <v-row
          no-gutters
        >
          <v-col
            cols="12"
          >
            <efishery-commodity />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
