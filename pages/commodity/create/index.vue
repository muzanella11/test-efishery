<template>
  <div class="l-form">
    <v-row>
      <v-col
        cols="12"
        lg="9"
        sm="12"
        xs="12"
      >
        <v-card>
          <v-card-title>
            Tambah Komoditas
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                lg="4"
                sm="12"
                xs="12"
              >
                <efishery-select-province
                  :value="entry.administrative"
                  :disabled="disabled"
                  @input="setAdministrative"
                />
              </v-col>

              <v-col
                cols="12"
                lg="4"
                sm="12"
                xs="12"
              >
                <v-text-field
                  v-model="entry.administrative.city"
                  disabled
                  label="Kota"
                />
              </v-col>

              <v-col
                cols="12"
                lg="4"
                sm="12"
                xs="12"
              />
            </v-row>

            <v-row>
              <v-col
                cols="12"
                lg="4"
                sm="12"
                xs="12"
              >
                <v-text-field
                  v-model="entry.komoditas"
                  :disabled="disabled"
                  label="Komoditas"
                />
              </v-col>

              <v-col
                cols="12"
                lg="4"
                sm="12"
                xs="12"
              >
                <efishery-select-commodity-size
                  :value="entry.size"
                  :disabled="disabled"
                  @input="setCommoditySize"
                />
              </v-col>

              <v-col
                cols="12"
                lg="4"
                sm="12"
                xs="12"
              >
                <v-text-field
                  v-model="entry.price"
                  :disabled="disabled"
                  label="Harga"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        lg="3"
        sm="12"
        xs="12"
      >
        <v-card>
          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                lg="4"
                sm="12"
                xs="12"
              >
                <strong>
                  ID
                </strong>
              </v-col>

              <v-col
                cols="12"
                lg="8"
                sm="12"
                xs="12"
              >
                {{ entry.id }}
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider />

          <v-card-actions>
            <v-row>
              <v-col
                cols="12"
                lg="6"
                sm="12"
                xs="12"
                class="text-center"
              >
                <v-btn
                  color="primary"
                  outlined
                  :disabled="disabled"
                  @click="actionCancel"
                >
                  Batal
                </v-btn>
              </v-col>

              <v-col
                cols="12"
                lg="6"
                sm="12"
                xs="12"
                class="text-center"
              >
                <v-btn
                  color="primary"
                  :disabled="disabled"
                  @click="actionSubmit"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
