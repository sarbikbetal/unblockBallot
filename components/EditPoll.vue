<template>
  <v-card outlined>
    <v-card-title>
      <h1>{{ title }}</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-container>
          <!-- Title/Question -->
          <v-row>
            <v-text-field
              @keydown.enter="focusAddOptions"
              v-model="question"
              label="Title/Question"
              outlined
            ></v-text-field>
          </v-row>
          <!-- Created options -->
          <v-row v-for="(opt, i) in options" :key="i">
            <v-text-field
              v-model="options[i]"
              :label="'Option ' + (i + 1)"
              append-outer-icon="mdi-close"
              @click:append-outer="removeOption(i)"
              outlined
            ></v-text-field>
          </v-row>
          <v-row>
            <!-- Create new option -->
            <v-text-field
              ref="addOptionTextField"
              v-model="tempOpt"
              outlined
              clearable
              label="Add option"
              :append-outer-icon="'mdi-plus-thick'"
              :clear-icon="'mdi-close-circle'"
              @click:append-outer="addOption"
              @keydown.enter="addOption"
              @click:clear="clearTemp"
            ></v-text-field>
          </v-row>
          <v-row>
            <!-- Time picker -->
            <v-col cols="11" sm="5">
              <v-dialog
                ref="timeDialog"
                v-model="timePicker"
                :return-value.sync="time"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time"
                    label="Select time"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  ampm-in-title
                  v-if="timePicker"
                  v-model="time"
                  full-width
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="timePicker = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.timeDialog.save(time)"
                  >
                    OK
                  </v-btn>
                </v-time-picker>
              </v-dialog>
            </v-col>
            <v-spacer />
            <!-- Date picker -->
            <v-col cols="11" sm="5">
              <v-dialog
                ref="dateDialog"
                v-model="datePicker"
                :return-value.sync="date"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Select Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  :min="new Date().toISOString().substr(0, 10)"
                  v-model="date"
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="datePicker = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dateDialog.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions class="pa-4">
      <v-btn @click.stop="popRouter" outlined color="error"> Cancel </v-btn>
      <v-spacer />
      <v-btn outlined color="success"> Save </v-btn>
    </v-card-actions>

    <v-snackbar timeout="3000" v-model="snackbar">
      Please type in something.
      <template v-slot:action="{ attrs }">
        <v-btn color="warning" text v-bind="attrs" @click="snackbar = false">
          Got it
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  props: {
    pollDetails: Object,
    title: String,
  },
  data() {
    return {
      question: "",
      options: [],
      tempOpt: "",
      snackbar: false,
      time: null,
      timePicker: false,
      date: new Date().toISOString().substr(0, 10),
      datePicker: false,
    };
  },
  methods: {
    clearTemp() {
      this.tempOpt = "";
    },
    addOption(e) {
      if (this.tempOpt) {
        this.options.push(this.tempOpt);
        this.clearTemp();
      } else {
        this.snackbar = true;
      }
    },
    removeOption(idx) {
      this.options.splice(idx, 1);
    },
    focusAddOptions() {
      this.$refs.addOptionTextField.focus();
    },
    popRouter() {
      this.$router.go(-1);
    },
  },
  beforeMount() {
    if (this.pollDetails) {
      this.question = this.pollDetails.question;
      this.options = this.pollDetails.options;
      this.time = this.pollDetails.time;
      this.date = this.pollDetails.date;
    }
  },
};
</script>

<style></style>
