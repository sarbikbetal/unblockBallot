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
          v-for="(item, i) in filteredItems"
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
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="toggleTheme()">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-btn icon to="/profile">
        <v-icon>mdi-account-box-outline</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
          public: true,
          adminOnly: false,
        },
        {
          icon: "mdi-spa",
          title: "Dashboard",
          to: "/dashboard",
          public: false,
          adminOnly: false,
        },
        {
          icon: "mdi-key-outline",
          title: "Admin",
          to: "/admin",
          public: false,
          adminOnly: true,
        },
        {
          icon: "mdi-account",
          title: "Sign Up",
          to: "/signup",
          public: true,
          adminOnly: false,
        },
        {
          icon: "mdi-account-circle",
          title: "Sign In",
          to: "/signin",
          public: true,
          adminOnly: false,
        },
      ],
      miniVariant: false,
      right: true,
      title: "unBlocked Dashboard",
    };
  },
  computed: {
    isAdmin: function () {
      return this.$store.getters.isAdmin;
    },
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
    filteredItems: function () {
      return this.items.filter(
        (item) =>
          this.isAdmin || (this.isLoggedIn && !item.adminOnly) || item.public
      );
    },
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
