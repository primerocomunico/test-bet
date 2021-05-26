<template>
  <v-app>
    <!-- Header -->
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <p class="mr-2 mt-4">Frontend technical test</p>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.sergioescobar.online"
        target="_blank"
        text
      >
        <span class="mr-2">Sergio Escobar - web developer</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <!-- Footer -->
    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      class="primary white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Desarrollo ejecutado con vue2 y vuetify
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text text-right">
        <strong>Sergio Escobar</strong> — {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
};
</script>
