<template>
  <v-container>
    <v-layout align-center>
      <v-flex xs12 pa-2>
        <v-card tile flat class="elevation-6">
          <v-layout column align-center>
            <v-avatar size="144" class="my-5">
              <img
                src="https://utulsa.edu/wp-content/uploads/2018/08/generic-avatar.jpg"
              />
            </v-avatar>
            <v-card-text class="text-h2 text-md-center py-5"
              >{{ firstname }} {{ lastname }}</v-card-text
            >
            <v-card-text class="text-h5 text-md-center pt-5 pb-15">{{
              email
            }}</v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if (!store.getters["isLoggedIn"]) {
      return redirect("/dashboard");
    }
  },
  data() {
    return {
      firstname: "Generic",
      lastname: "Name",
      email: "nah@test.com"
    };
  }
};
</script>

<style></style>
