<template>
  <v-dialog :value="dialogDelete" persistent max-width="450">
    <v-card>
      <v-card-title class="headline">
        Apakah anda yakin ingin menghapus data ini ?
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          >
            <strong>
              ID
            </strong>
          </v-col>

          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          >
            {{ dataDialog.uuid }}
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          >
            <strong>
              Komoditas
            </strong>
          </v-col>

          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          >
            {{ dataDialog.komoditas }}
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          >
            <strong>
              Provinsi
            </strong>
          </v-col>

          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          >
            {{ dataDialog.area_provinsi }}
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          >
            <strong>
              Kota
            </strong>
          </v-col>

          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          >
            {{ dataDialog.area_kota }}
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          >
            <strong>
              Harga
            </strong>
          </v-col>

          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          >
            {{ dataDialog.price }}
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          >
            <strong>
              Ukuran
            </strong>
          </v-col>

          <v-col
            cols="12"
            lg="6"
            sm="12"
            xs="12"
          >
            {{ dataDialog.size }}
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          :disabled="isLoading"
          @click="close"
        >
          Batal
        </v-btn>
        <v-btn
          color="error"
          :loading="isLoading"
          :disabled="isLoading"
          @click="actionDelete"
        >
          Hapus
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
