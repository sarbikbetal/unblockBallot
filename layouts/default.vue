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
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              UnblockBallot
            </v-list-item-title>
            <v-list-item-subtitle>
              Secure Voting
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <!--  -->
        <v-list-item router exact to="/profile" v-if="isLoggedIn">
          <v-list-item-action>
            <v-icon>
              mdi-account-box-outline
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Profile'" />
          </v-list-item-content>
        </v-list-item>
        <!--  -->
        <v-list-item router exact to="/dashboard" v-if="isLoggedIn">
          <v-list-item-action>
            <v-icon>
              mdi-spa
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Dashboard'" />
          </v-list-item-content>
        </v-list-item>
        <!--  -->
        <v-list-item router exact to="/signin" v-if="!isLoggedIn">
          <v-list-item-action>
            <v-icon>
              mdi-account-circle
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Sign In'" />
          </v-list-item-content>
        </v-list-item>
        <!--  -->
        <v-list-item router exact to="/signup" v-if="!isLoggedIn">
          <v-list-item-action>
            <v-icon>
              mdi-account
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Sign Up'" />
          </v-list-item-content>
        </v-list-item>
        <!--  -->
        <v-list-item router exact to="/admin" v-if="isLoggedIn && isAdmin">
          <v-list-item-action>
            <v-icon>
              mdi-key-outline
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Admin'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="toggleTheme()">
        <v-icon>{{
          this.$vuetify.theme.dark ? "mdi-weather-sunny" : "mdi-weather-night"
        }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <span>&nbsp; by d4rks0c1ety</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      miniVariant: false,
      right: true,
      title: "Dashboard"
    };
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
      isAdmin: "isAdmin"
    })
  },
  methods: {
    toggleTheme() {
      console.log(this.$store);
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
