<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      color="#28b796f2"
      app
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row>
          <v-col
            cols="12"
          >
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <efishery-snackbar />
  </v-app>
</template>

<script>
import EfisherySnackbar from '~/components/snackbar/template'

export default {
  components: {
    EfisherySnackbar
  },

  data () {
    return {
      name: 'Default',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-poll-box-outline',
          title: 'Commodity',
          to: '/commodity'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Brand Name'
    }
  }
}
</script>
