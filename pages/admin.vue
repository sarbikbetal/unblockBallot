<template>
  <v-row>
    <v-col cols="12" justify="center">
      <CreatePoll />
    </v-col>
    <v-col cols="12" md="8">
      <v-row v-for="(poll, i) in polls" :key="poll.id">
        <PollCard :poll="poll" :idx="i" :to="'polls/edit/' + poll.id" />
      </v-row>
    </v-col>
    <v-col cols="12" md="4" class="d-none d-md-block">
      <ProfileCard />
    </v-col>
  </v-row>
</template>

<script>
import CreatePoll from "~/components/CreatePoll";
import PollCard from "~/components/PollCard";
import ProfileCard from "~/components/ProfileCard";
export default {
  middleware({ store, redirect }) {
    if (!store.getters["isLoggedIn"] || !store.getters["isAdmin"]) {
      return redirect("/signin");
    }
  },
  components: { CreatePoll, PollCard, ProfileCard },
  data() {
    return {
      polls: [
        {
          question: "Which character do you want to choose?",
          options: ["Rick", "Morty", "Summer", "Jerry", "Beth"],
          id: "1adf34wf90nd140ud412",
          due: new Date(2020, 11, 10),
          orgName: "CodeIIEST",
          orgImg: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
        },
        {
          question: "Which character do you want to choose?",
          options: ["Rick", "Morty", "Summer", "Jerry", "Beth"],
          id: "1adf34qf9wnde40ud417",
          due: new Date(2020, 11, 10),
          orgName: "CodeIIEST",
          orgImg: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
        },
        {
          question: "Which character do you want to choose?",
          options: ["Rick", "Morty", "Summer", "Jerry", "Beth"],
          id: "1adf31wf90nd240udfs5",
          due: new Date(2020, 11, 10),
          orgName: "CodeIIEST",
          orgImg: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
        },
        {
          question: "Which character do you want to choose?",
          options: ["Rick", "Morty", "Summer", "Jerry", "Beth"],
          id: "3df34wfnjeiodt0ud412",
          due: new Date(2020, 11, 10),
          orgName: "CodeIIEST",
          orgImg: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
        }
      ]
    };
  }
};
</script>

<style></style>
