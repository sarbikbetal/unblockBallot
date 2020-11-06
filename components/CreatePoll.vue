<template>
  <v-expansion-panels popout>
    <v-expansion-panel>
      <v-expansion-panel-header expand-icon="mdi-close"
        ><h1>Create a poll</h1></v-expansion-panel-header
      >
      <v-expansion-panel-content>
        <v-form>
          <v-container>
            <v-row>
              <v-text-field
                @keydown.enter="focusAddOptions"
                label="Title/Question"
                outlined
              ></v-text-field>
            </v-row>
            <v-row v-for="(opt, i) in options" :key="i">
              <v-text-field
                v-model="options[i].text"
                :label="'Option ' + (i + 1)"
                append-outer-icon="mdi-close"
                @click:append-outer="removeOption(i)"
                outlined
              ></v-text-field>
            </v-row>
            <v-row>
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
          </v-container>
        </v-form>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-snackbar timeout="3000" v-model="snackbar">
      Please type in something.

      <template v-slot:action="{ attrs }">
        <v-btn color="warning" text v-bind="attrs" @click="snackbar = false">
          Got it
        </v-btn>
      </template>
    </v-snackbar>
  </v-expansion-panels>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      options: [],
      tempOpt: "",
      closesAt: Date.now() + 3600000,
      snackbar: false,
    };
  },
  methods: {
    clearTemp() {
      this.tempOpt = "";
    },
    addOption(e) {
      if (this.tempOpt) {
        this.options.push({ text: this.tempOpt, idx: this.options.length });
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
  },
};
</script>

<style>
</style>