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
          <v-card-title> Create your unblockBallot account </v-card-title>
          <v-card-text class="px-4">
            <div>
              <v-form v-model="valid" ref="form">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="15"
                      label="First name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="15"
                      label="Last name"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
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
                    >Sign Up</v-btn
                  >
                  <v-btn to="/signin" outlined color="blue"> Login </v-btn>
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
    if (store.getters["authentication/isLoggedIn"]) {
      return redirect("/dashboard");
    }
  },
  data() {
    return {
      valid: false,
      visible: false,
      password: "",
      firstname: "",
      lastname: "",
      passwordRules: [v => !!v || "Password is required"],
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 15 || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      signuperror:
        "Some error occurred while signing up. Please refresh the page!"
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        // request to signup API here
        // email, firstname, lastname, password
        const data = JSON.stringify({
          email: this.email,
          firstname: this.firstname,
          lastname: this.lastname,
          password: this.password
        });
        const headers = {
          "Content-Type": "application/json"
        };
        let resp;
        const url = "http://localhost:3001/user/register";
        this.$axios
          .$post(url, data, {
            headers: headers
          })
          .then(response => {
            // console.log(response);
            if (response === "OK") {
              this.$router.push("signin");
            } else {
              // handle error
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style></style>
