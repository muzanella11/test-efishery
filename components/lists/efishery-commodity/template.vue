<template>
  <v-data-table
    v-resize="onResize"
    :headers="headers"
    :items="entries"
    :loading="isLoading"
    :loading-text="loadingText"
    :items-per-page="filters.limit"
    hide-default-footer
    class="c-table elevation-1"
    :class="[isMobile ? 'mobile' : '']"
  >
    <template v-if="isLoading" v-slot:progress>
      <v-progress-linear
        :height="2"
        indeterminate
      />
    </template>

    <template
      v-if="!isLoading && entries.length > 0"
      v-slot:body="{ items }"
    >
      <tbody
        v-if="!isMobile"
      >
        <tr
          v-for="(item, index) in items"
          :key="index"
        >
          <td>
            <a
              href="javascript:;"
              @click="goToDetail(item)"
            >
              {{ item.uuid || 'null' }}
            </a>
          </td>
          <td>{{ item.komoditas || 'null' }}</td>
          <td>{{ item.area_provinsi || 'null' }}</td>
          <td>{{ item.area_kota || 'null' }}</td>
          <td>{{ item.size || 'null' }}</td>
          <td>{{ item.price || 'null' }}</td>
          <td>{{ formattingDate(item.tgl_parsed) }}</td>

          <efishery-table-action-hover
            :entry="item"
          />
        </tr>
      </tbody>

      <tbody
        v-else
      >
        <tr
          v-for="(item, index) in items"
          :key="index"
        >
          <td>
            <ul class="flex-content">
              <li
                v-for="(itemHeaderMobile, indexHeaderMobile) in headers"
                :key="indexHeaderMobile"
                class="flex-item"
                :data-label="itemHeaderMobile.text"
                @click="goToDetail(item)"
              >
                {{ itemHeaderMobile.value === 'tgl_parsed' ? formattingDate(item[itemHeaderMobile.value]) : item[itemHeaderMobile.value] || 'null' }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </template>

    <template v-slot:footer>
      <efishery-table-pagination
        :value="pagination"
        :total-data="entries.length"
        :is-loading="isLoading"
        @input="onPagination"
      />

      <efishery-dialog-delete
        ref="dialog-commodity"
      />
    </template>
  </v-data-table>
</template>

<style lang="scss" scoped src="./style.scss"></style>

<script lang="js" src="./script.js"></script>
