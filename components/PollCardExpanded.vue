<template>
  <v-card hover class="mx-auto my-2 w-100">
    <v-card-title class="headline" v-text="poll.id"></v-card-title>

    <v-card-subtitle v-text="poll.question"></v-card-subtitle>

    <v-card-text>
      <v-radio-group v-model="radioGroup" row>
        <v-radio
          v-for="(option, i) in poll.options"
          :key="i"
          :label="option"
          :value="option"
        ></v-radio>
      </v-radio-group>
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt="org avatar"
            :src="poll.orgImg"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="poll.orgName"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    poll: Object,
  },
};
</script>

<style>
</style>