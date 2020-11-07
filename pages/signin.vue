<template>
  <v-container fluid fill-height>
    <v-layout
      flex
      align-center
      justify-center
      class="py-sm-2 py-md-5 px-sm-5 px-md-10"
    >
      <v-flex xs12 sm8 elevation-6>
        <v-card>
          <v-card-title> Login to your account </v-card-title>
          <v-card-text>
            <div>
              <v-form v-model="valid" ref="form">
                <v-text-field
                  label="Enter your e-mail address"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="Enter your password"
                  :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="visible ? 'text' : 'password'"
                  @click:append="visible = !visible"
                  v-model="password"
                  min="8"
                  :rules="passwordRules"
                  counter
                  required
                ></v-text-field>
                <v-layout justify-space-between class="py-5">
                  <v-btn
                    @click="submit"
                    :class="{
                      'blue darken-4 white--text': valid,
                      disabled: !valid
                    }"
                    >Login</v-btn
                  >
                  <v-btn to="/signup" outlined color="blue"> Sign Up </v-btn>
                </v-layout>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    // If the user is authenticated
    // if (store.getters.isAuthenticated) {
    //   return redirect("/dashboard");
    // }
  },
  data() {
    return {
      valid: false,
      visible: false,
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ]
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        // this.$refs.form.$el.submit();
        // request to API here
        // & redirect to dashboard
        // this.$router.push("/dashboard");
        try {
          let response = await this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password
            }
          });
          console.log(response);
          this.$router.push("/dashboard");
        } catch (e) {
          // this.error = e.response.data.message;
          console.log(e);
        }
      }
    }
  }
};
</script>

<style></style>
