<template>
  <v-card
    hover
    :width="$vuetify.breakpoint.lgAndUp ? 640 : 400"
    class="mx-auto my-2"
    max-width="700"
  >
    <v-card-title class="headline" v-text="idx + ' ' + poll.id"></v-card-title>

    <v-card-subtitle v-text="poll.question"></v-card-subtitle>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
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
    idx: Number,
  },
};
</script>

<style>
</style>